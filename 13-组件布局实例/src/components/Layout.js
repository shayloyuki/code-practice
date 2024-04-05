/* 
 * 本质：Home 或 List 组件向 Layout 组件传递 JSX
 * 当前组件的作用：展示 header 和 footer，同时空出 main 的内容
 * 将来传入什么样的 JSX，main 中显示什么样的 DOM
*/

import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout