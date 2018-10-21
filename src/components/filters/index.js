import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import { connect } from 'react-redux'

class Filters extends Component {
  render() {
    return (
      <div>
        <SelectFilter
          articles={this.props.articles}
          selected={this.props.filters.entities}
        />
        <DateRange />
      </div>
    )
  }
}

export default connect((state) => ({
  articles: state.articles,
  filters: state.filters
}))(Filters)
