/*
 * @Date: 2024-04-05 13:23:34
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-17 07:19:48
 * @FilePath: \27-React中mock数据\src\App.js
 */
/* 
 * mock数据：此种方式只适用于 get
 */

import React, { Component } from "react";
import axios from "axios";

class App extends Component {

  constructor() {
    super()
    this.state = {
      articles: []
    }
  }

  handler = async () => {
    const articles = await axios.get('/article.json').then(res => res.data)
    this.setState({
      articles
    }, () => {console.log(this.state)})
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handler}>获取文章列表</button>
        <ul>
          {
            this.state.articles.map(article => {
              return (
                <li key={article.id}>{article.title}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }

}

export default App;
