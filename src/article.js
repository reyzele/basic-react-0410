import React, { Component } from 'react'

class Article extends Component {
  render() {
    const { article, isOpen, toggleOpen } = this.props
    const text = isOpen ? 'close' : 'open'
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>{text}</button>
        {this.body}
      </div>
    )
  }

  get body() {
    const { isOpen, article } = this.props
    if (!isOpen) return null
    return <section>{article.text}</section>
  }
}

export default Article
