/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-05 17:10:39
 * @FilePath: \08-外联样式（降为 React17, node16.13.0）\src\App.js
 */
/**
 * 外联样式
 *  01 全局外联样式
 *   所有组件当中都可以直接使用
 * 
 *  02 组件级别的外联样式
 *   只有某一个组件可以使用
 *   组件名.module.css，不能直接引入该文件，必须要有变量名媒介
 * 
 *  注意：styled-components 包可以实现 CSS-IN-JS
 */


function App() {
  return(
    <div className={'box'}>外联样式</div>
  )
}

export default App
