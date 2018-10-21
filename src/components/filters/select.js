import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filterArticle } from '../../ac'

class SelectFilter extends Component {
  handleChange = (selected) => {
    const { filterArticle } = this.props
    const filtersArr = []

    selected.map((item) => {
      return filtersArr.push(item)
    })

    return filterArticle(filtersArr)
  }

  get options() {
    const { articles } = this.props

    return articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.props.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  null,
  { filterArticle }
)(SelectFilter)
