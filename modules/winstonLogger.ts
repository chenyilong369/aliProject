/*
 * @Description: 日志文件
 * @Autor: chenyilong369
 * @Date: 2021-09-20 12:07:04
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-25 13:00:28
 */
import { createLogger, format, Logger, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file'

const winstonLogger: Logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({level, message, timestamp}) => `${timestamp} [${level}] ${message}`)
  ),
  transports: [
    new transports.File({filename: './log/runtime_error.log', level: 'error'}),
    new DailyRotateFile({
      filename: './log/runtime_%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: false,
      maxSize: '2g',
      maxFiles: '14d',
    })
  ]
})

if (process.env.NODE_ENV !== 'production') {
  winstonLogger.add(new transports.Console());
}

export default winstonLogger;
