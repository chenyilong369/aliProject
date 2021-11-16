/*
 * @Description:
 * @Autor: chenyilong369
 * @Date: 2021-09-21 10:07:03
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-10-01 15:57:14
 */

import code from './code';

const apis: { [index: string]: any } = {
	'/code': code,
};

function apiRoutes(app: { use: (arg0: any) => void }) {
	Object.keys(apis).forEach((item: string) => {
		apis[item].prefix(item);
		app.use(apis[item].routes());
	});
}

export default apiRoutes;
