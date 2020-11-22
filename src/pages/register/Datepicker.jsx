import React, { Component } from 'react'

import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date'

class Datepicker extends Component {
  constructor(props) {
    super(props)
    this.state = { year: null, month: null, day: null }
  }

  render() {
    return (
      <div className="name" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <YearPicker
          defaultValue={'select year'}
          start={1900} // default is 1900
          end={2020} // default is current year
          reverse // default is ASCENDING
          required={true} // default is false
          disabled={false} // default is false
          value={this.state.year} // mandatory
          onChange={(year) => {
            this.setState({ year })
            console.log(year)
          }}
          id={'year'}
          name={'year'}
          classes={'classes'}
          optionClasses={'option classes'}
        />
        <MonthPicker
          defaultValue={'select month'}
          numeric // to get months as numbers
          short // default is full name
          caps // default is Titlecase
          endYearGiven // mandatory if end={} is given in YearPicker
          year={this.state.year} // mandatory
          required={true} // default is false
          disabled={false} // default is false
          value={this.state.month} // mandatory
          onChange={(month) => {
            // mandatory
            this.setState({ month })
            console.log(month)
          }}
          id={'month'}
          name={'month'}
          classes={'classes'}
          optionClasses={'option classes'}
        />
        <DayPicker
          defaultValue={'select day'}
          year={this.state.year} // mandatory
          month={this.state.month} // mandatory
          endYearGiven // mandatory if end={} is given in YearPicker
          required={true} // default is false
          disabled={false} // default is false
          value={this.state.day} // mandatory
          onChange={(day) => {
            // mandatory
            this.setState({ day })
            console.log(day)
          }}
          id={'day'}
          name={'day'}
          classes={'classes'}
          optionClasses={'option classes'}
        />
      </div>
    )
  }
}

export default Datepicker
