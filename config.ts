export enum configKeys{
  PORT='port',
  DB_HOST="DB_HOST",
  DB_USER="DB_USER",
  DB_DATABASE="DB_DATABASE",
  DB_PASSWORD="DB_PASSWORD",
}

const projectConfigs: {[key: string]: any} = {
  port: 8080,
  DB_HOST: '119.91.154.129',
  DB_USER: 'aliProduct',
  DB_PASSWORD: 'M73FZDf6W84kRNwK',
  DB_DATABASE: 'aliproduct',
}

export function getConfig(key: configKeys | string): any {
  return projectConfigs[key];
}

export function setConfig(key: configKeys | string, value: any): any {
  projectConfigs[key] = value;
}

export const session_signed_key = ["some secret hurr"];  // 这个是配合signed属性的签名key
export const session_config = {
    key: 'koa:sess', /**  cookie的key。 (默认是 koa:sess) */
    maxAge: 10000,   /**  session 过期时间，以毫秒ms为单位计算 。*/
    autoCommit: true, /** 自动提交到响应头。(默认是 true) */
    overwrite: true, /** 是否允许重写 。(默认是 true) */
    httpOnly: true, /** 是否设置HttpOnly，如果在Cookie中设置了"HttpOnly"属性，那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击。  (默认 true) */
    signed: true, /** 是否签名。(默认是 true) */
    rolling: true, /** 是否每次响应时刷新Session的有效期。(默认是 false) */
    renew: false, /** 是否在Session快过期时刷新Session的有效期。(默认是 false) */
};

