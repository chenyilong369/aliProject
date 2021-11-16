import Koa, { Context } from 'koa';
import Logger from './modules/logger';
import bodyParser from 'koa-bodyparser';
import loggerMiddleware from './middleware/logger';
import { errorObj } from './modules/common';
import { configKeys, getConfig, session_config, session_signed_key } from './config';
import apiRoutes from './router/api';
import { initPool } from './sqlBase/dbPromise';
import session from 'koa-session';
import cors from 'koa2-cors';
const PORT = getConfig(configKeys.PORT);

Logger.info('后台服务启动');
initPool();
const app = new Koa();

app.use(
	bodyParser({
		jsonLimit: '25mb',
	})
);

app.use(
	cors({
		origin: function () {
			return '*';
		},
		maxAge: 5, //指定本次预检请求的有效期，单位为秒。
		credentials: true, //是否允许发送Cookie
		allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
		allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
		exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
	})
);

app.keys = session_signed_key;

app.use(session(session_config, app));

app.use(loggerMiddleware);

apiRoutes(app);

// app.use(demoApi.routes())

app.use((ctx: Context) => {
	const req = ctx.request;
	const res = ctx.response;
	Logger.warn(`没有匹配到请求：${req.originalUrl}`);
	res.status = 404;
	res.body = errorObj('PathError', `没有找到对应资源：${req.originalUrl}`);
});

app.on('error', (err, ctx) => {
	const res = ctx.response;
	Logger.error(`服务启动失败：${JSON.stringify(err)}`);
	res.status = err.status || 500;
	res.body = errorObj('NodeSysError', `内部错误：${err}`);
});

app.listen(PORT, () => {
	Logger.info(`服务启动成功：http://localhost:${PORT}`);
});
