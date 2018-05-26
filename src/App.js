import React, {
  Component
} from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "App">
      <h1> Countdown Clock</h1>
      <div id = "Presentable Info">
      <div className = "Countdown-desc"> Countdown to August 25th </div>
      <div className = "Countdown-days"> 22 Days </div>
      <div className = "Countdown-hours"> 22 Hours </div>
      <div className = "Countdown-mins"> 17 Minutes </div>
      <div className = "Countdown-secs"> 54 Seconds </div>
      </div>
      <div id = "User Input">
      <input placeholder = " Enter New Date"/>
      <button> Change Date </button>
      </div>
      </div>

    )
  }
}

export default App;
