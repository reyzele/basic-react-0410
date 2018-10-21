import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { filterDate } from '../../ac'
import { getDate } from '../../selectors'
import { connect } from 'react-redux'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  handleDayClick = (day) =>
    this.props.filterDate(DateUtils.addDayToRange(day, this.props.date))

  render() {
    const { from, to } = this.props.date

    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`

    return (
      <div className="date-range">
        <DayPicker
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    )
  }
}

export default connect(
  (state) => ({ date: getDate(state) }),
  { filterDate }
)(DateRange)
