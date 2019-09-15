import React, { Component } from 'react';
import './App.css';
import Timer from './timer.js';


class App extends Component{
  state = {
        hours:0,
        minutes:0,
        seconds:0,
        totalSeconds:0,
        start: false
  };
  
  startTimer = (e) => {
    e.preventDefault();
    this.setState({totalSeconds: parseInt(this.state.seconds) + parseInt(this.state.minutes) * 60 + parseInt(this.state.hours) * 60 * 60,
      start: true
    });
    //reset
    this.inputMin.value = "";
    this.inputHour.value = "";
    this.inputSec.value = "";
    this.setState({hours:0,minutes:0,seconds:0});
    // stop triggering recount 
    setTimeout(()=>{this.setState({start:false})},10);
  }
  
  render(){
    const {start,totalSeconds} = this.state;
    return (
      <div className="App">
        <p>This is a Count Down Timer</p>
        <Timer time ={totalSeconds} start={start}/>
        <form onSubmit={this.startTimer}>
          <input 
            type="number" 
            onChange={event => this.setState({hours:event.target.value})}
            ref={el => this.inputHour = el}
            />
          <p>Hours</p>
          <input 
            type="number" 
            onChange={event => this.setState({minutes:event.target.value})}
            ref={el => this.inputMin = el}
            />
          <p>Minutes</p>
          <input 
            type="number" 
            onChange={event => this.setState({seconds:event.target.value})}
            ref={el => this.inputSec = el}
            />
          <p>Seconds</p>
          <button>Start</button>
        </form>
      </div>
    );
  }
}

export default App;
