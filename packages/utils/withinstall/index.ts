/*
 * @Author: C.
 * @Date: 2022-09-23 16:59:11
 */
import type { App, Plugin } from 'vue'
export type SFCWithInstall<T> = T & Plugin
export default <T>(comp: T) => {
  ;(comp as SFCWithInstall<T>).install = (app: App) => {
    //注册组件
    app.component((comp as any).name, comp as SFCWithInstall<T>)
  }
  return comp as SFCWithInstall<T>
}
