import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
class CalendarView extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <section className="wrapper">
        <div className="block">

          <div>
            <Calendar
              showWeekNumbers
              onChange={this.onChange}
              value={this.state.date}
            />
            {console.log(this.state.date)}
          </div>

        </div>
      </section>
    );
  }
}

export default CalendarView;