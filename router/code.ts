import RouterSample from '../modules/routerSample';
import CodeTestBase from '../sqlBase/codeTestList';

const documentRouter = new RouterSample();
const codeTest = new CodeTestBase();

documentRouter.post('/GetTestList', async (ctx) => {
	const { request } = ctx;
	const { PageSize = 10, PageNum = 0 } = request.body;
	const res = await codeTest.select({}, { limit: PageSize, offset: PageNum * PageSize });
	const total = await codeTest.selectCount();
	return { Data: res, TotalCount: total };
});

documentRouter.post('/CreateTest', async (ctx) => {
	const { request } = ctx;
	const { Name, Description } = request.body;
	const res = await codeTest.createTest({ Name, Description });
	return { Data: res };
});

documentRouter.post('/DeleteTest', async (ctx) => {
	const { request } = ctx;
	const { Id } = request.body;
	await codeTest.deleteById(Id);
	return { Data: {} };
});

documentRouter.post('/UpdateTest', async (ctx) => {
	const { request } = ctx;
	const { Id, Name, Description } = request.body;
	await codeTest.updateTestById(Id, { Name, Description });
	return { Data: {} };
});

export default documentRouter.Router;
