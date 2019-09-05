import React, { Component } from 'react';
import './App.css';
import Timer from './timer.js';


class App extends Component{
  constructor(){
    super();
    this.state = {
      hours:0,
      minutes:0,
      seconds:0,
      totalSeconds:0,
      start: false
    };
  }
  
  startTimer(){
    this.setState({totalSeconds: parseInt(this.state.seconds) + parseInt(this.state.minutes) * 60 + parseInt(this.state.hours) * 60 * 60,
      start: true
    });
    //reset
    this.inputMin.value = "";
    this.inputHour.value = "";
    this.inputSec.value = "";
    this.setState({hours:0,minutes:0,seconds:0});
    //stop triggering recount 
    setTimeout(()=>{this.setState({start:false})},1000);
  }
  
  render(){
    return (
      <div className="App">
        <p>This is a Count Down Timer</p>
        <Timer time ={this.state.totalSeconds} start={this.state.start}/>
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
        <button onClick={()=>this.startTimer()}>Start</button>
      </div>
    );
  }
}

export default App;
