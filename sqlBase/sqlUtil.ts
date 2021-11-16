import moment from 'moment';
import { LimitSql } from './sqlBase';

/**
 * @description: 拼接 where 子句
 * @param {object} params
 * @return {*}
 * @author: chenyilong369
 */
export function connectWhere(params?: { [index: string]: any }) {
	if (!params) return '';
	let message = Object.keys(params).length ? ' where' : '';
	Object.keys(params).forEach((key, index) => {
		let tmp = '';
		if (index) {
			tmp = ` and \`${key}\`=?`;
		} else tmp = ` \`${key}\`=?`;
		message += tmp;
	});
	return message;
}

/**
 * @description: 拼接限制语句
 * @param {LimitSql} controlNumber
 * @return {*}
 * @author: chenyilong369
 */
export function limitSub(controlNumber?: LimitSql) {
	if (controlNumber) {
		return ` limit ${controlNumber.offset ? controlNumber.offset : 0}, ${controlNumber.limit}`;
	}
	return '';
}

/**
 * @description: 拼接insert语句
 * @param {object} params
 * @return {*}
 * @author: chenyilong369
 */
export function insertObj(params?: { [index: string]: any }): any {
	let paramKey = '(';
	let value = '(';
	if (params) {
		Object.keys(params).forEach((key, index) => {
			if (index !== 0) {
				paramKey += ',';
				value += ',';
			}
			paramKey += `\`${key}\``;
			value += '?';
		});
	}
	paramKey += ')';
	value += ')';
	const sql = paramKey + ' values' + value;
	return sql;
}

export function connectUpdate(params?: { [index: string]: any }) {
	if (!params) return '';
	let sql = '';
	Object.keys(params).forEach((key, index) => {
		let tmp = ``;
		if (index !== 0) {
			tmp = `, \`${key}\`=?`;
		} else {
			tmp = ` \`${key}\`=?`;
		}
		sql += tmp;
	});
	return sql;
}

export function bighumpToUnderline(str: string) {
	const first = str.substring(0, 1).toLowerCase();
	const after = str.substring(1).replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
	return first + after;
}

export function underlineToBighump(str: string) {
	const strArr = str.split('_');
	let cnt = '';
	for (const s of strArr) {
		const first = s.substring(0, 1).toUpperCase();
		const after = s.substring(1);
		cnt += first + after;
	}
	return cnt;
}

export function translateBighump(objarr: any): any {
	if (!objarr) return;
	if (Array.isArray(objarr)) {
		return objarr.map((obj) => (typeof obj === 'object' ? translateBighump(obj) : obj));
	}
	let newObj: any = {};
	Object.keys(objarr).forEach((key) => {
		if (Array.isArray(objarr[key])) {
			newObj[underlineToBighump(key)] = objarr[key].map((obj: any) =>
				typeof obj === 'object' ? translateBighump(obj) : obj
			);
		} else {
      newObj[underlineToBighump(key)] = objarr[key];
    }
	});
  return newObj;
}

export function translateUnderline(objarr: any): any {
	if (!objarr) return;
	if (Array.isArray(objarr)) {
		return objarr.map((obj) => (typeof obj === 'object' ? translateUnderline(obj) : obj));
	}
	let newObj: any = {};
	Object.keys(objarr).forEach((key) => {
		if (Array.isArray(objarr[key])) {
			newObj[bighumpToUnderline(key)] = objarr[key].map((obj: any) =>
				typeof obj === 'object' ? translateUnderline(obj) : obj
			);
		} else {
      newObj[bighumpToUnderline(key)] = objarr[key];
    }
	});
  return newObj;
}

export function getCurrentTime() {
	return moment().format('YYYY-MM-DD HH:mm:ss');
} 
