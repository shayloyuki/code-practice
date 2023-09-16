import React from "react"
import ReactDom from "react-dom"
import Home from "./Home.tsx"

export default function App() {
  return (
    <div>
      <h2>我是react</h2>
      <Home />
    </div>
  )
}

const root = document.getElementById("root")
ReactDom.render(<App />, root)