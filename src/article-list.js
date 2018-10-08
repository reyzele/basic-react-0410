import React, { Component } from 'react'
import Article from './article'

class ArticleList extends Component {
  state = {
    openArticleId: null
  }

  toggleOpenArticle = (openArticleId) => () => this.setState({ openArticleId })

  render() {
    return <ul>{this.items}</ul>
  }

  get items() {
    return this.props.articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={this.state.openArticleId === article.id}
          toggleOpen={this.toggleOpenArticle(article.id)}
        />
      </li>
    ))
  }
}

export default ArticleList
