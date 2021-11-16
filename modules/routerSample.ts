/*
 * @Description: 管理路由
 * @Autor: chenyilong369
 * @Date: 2021-09-20 16:12:34
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-10-01 11:27:34
 */

import Router, { RouterContext } from 'koa-router';
import { errorObj, responseObj } from './common';
import { translateBighump } from '../sqlBase/sqlUtil'

// const initRouter = new Router();

export default class RouterSample {
	Router: Router | any;
	constructor() {
		this.Router = new Router();
	}
	
	base(method: any, path: string, handlerFn: (ctx: RouterContext) => any) {
		this.Router[method](path, async (ctx: RouterContext, next?: any) => {
			try {
				const result = await handlerFn(ctx);
				ctx.body = responseObj(translateBighump(result.Data), result.TotalCount);
			} catch (e: any) {
				ctx.body = errorObj(e.name, e.message);
			}
		});
	}

  get(path: string, handlerFn: (ctx: RouterContext, next?: any) => any) {
    this.base('get', path, handlerFn);
  }

  post(path: string, handlerFn: (ctx: RouterContext, next?: any) => any) {
    this.base('post', path, handlerFn);
  }
}
