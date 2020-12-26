// REACT
import { Component } from 'react';

// NPM PACKAGES
import Calendar from 'react-calendar';

class CalendarView extends Component {
  state = {
    date: new Date(),
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <main>
          <div>
            <Calendar
              showWeekNumbers
              onChange={this.onChange}
              value={this.state.date}
            />
            {console.log(this.state.date)}
          </div>
      </main>
    );
  }
}

export default CalendarView;
