import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import ArticleList from './article-list'
import ArticleChart from './articles-chart'
import articles from '../fixtures'

class App extends Component {
  render() {
    return (
      <div>
        <ArticleList articles={articles} ref={this.setArticleListRef} />
        <ArticleChart articles={articles} />
      </div>
    )
  }

  setArticleListRef = (ref) => {
    console.log('---', 'article list ref', ref, findDOMNode(ref))
  }
}

export default App
