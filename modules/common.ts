/*
 * @Description: 
 * @Autor: chenyilong369
 * @Date: 2021-09-20 16:05:53
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-10-01 11:21:18
 */

/**
 * @description: 请求失败返回格式
 * @param {string} Code
 * @param {string} Message
 * @param {string} RequestId
 * @return {*}
 * @author: chenyilong369
 */
export function errorObj(Code: string, Message: string, RequestId?: string) {
  return {
    Records: {
      Error: { Code, Message, RequestId },
    }
  }
}

/**
 * @description: 请求成功返回格式
 * @param {any} Data
 * @return {*}
 * @author: chenyilong369
 */
export function responseObj(Data: any, TotalCount?: number) {
  return {
    Records: {
      Data,
      TotalCount,
    }
  }
}
