/*
 * @Description: 常见错误处理
 * @Autor: chenyilong369
 * @Date: 2021-09-20 15:55:45
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-21 16:47:35
 */

/**
 * @description: 参数异常
 * @param {*}
 * @return {*}
 * @author: chenyilong369
 */
export class ParamsError extends Error {
	constructor(message?: string) {
		super();
		this.name = 'ParamsError';
		this.message = message || '参数异常';
	}
}

/**
 * @description: 数据库异常
 * @param {*}
 * @return {*}
 * @author: chenyilong369
 */
export class DatabaseError extends Error {
	constructor(message?: string) {
		super();
		this.name = 'DatabaseError';
		this.message = message || '数据库异常';
	}
}

/**
 * @description: 鉴权失败
 * @param {*}
 * @return {*}
 * @author: chenyilong369
 */
export class AuthError extends Error {
	constructor(message?: string) {
		super();
		this.name = 'AuthError';
		this.message = message || '鉴权失败';
	}
}

/**
 * @description: 系统错误
 * @param {*}
 * @return {*}
 * @author: chenyilong369
 */
export class SystemError extends Error {
	constructor(message?: string) {
		super();
		this.name = 'SystemError';
		this.message = message || '系统异常';
	}
}

/**
 * @description: 自定义异常
 * @param {*}
 * @return {*}
 * @author: chenyilong369
 */
export class CustomError extends Error {
	constructor(code: string, message?: string) {
		super();
		this.name = code;
		this.message = message || '';
	}
}
