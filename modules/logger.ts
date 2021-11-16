/*
 * @Description: 打印日志
 * @Autor: chenyilong369
 * @Date: 2021-09-20 15:16:33
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-25 12:46:28
 */
import wistonLogger from './winstonLogger';

const LEVEL = {
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
}

const Logger = {
  LEVEL,
  runtimeLog(level: string, message: string) {
    wistonLogger.log(level, message);
  },
  info(message: string) {
    this.runtimeLog('info', message);
  },
  warn(message: string) {
    this.runtimeLog('warn', message);
  },
  error(message: string) {
    this.runtimeLog('error', message);
  },
  sql(sql: any, params: any) {
    const message = `执行sql:${sql} | 参数：${JSON.stringify(params)}`;
    this.runtimeLog('info', message);
  }
}

export default Logger;
