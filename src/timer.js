import React, { Component } from 'react';

class Timer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hours:0,
      minutes:0,
      seconds:0,
      totalSeconds:0
    }
  }

  componentDidMount() {
    // subtract 1 ever 1 second
    setInterval(()=>{
      if(this.state.totalSeconds > 0){

        this.setState({totalSeconds: this.state.totalSeconds - 1})
        this.timeConvert(this.state.totalSeconds);
      }
    }
    ,1000);
  }

  componentWillReceiveProps(newProps) {
    //only replace total time when needed
    if(newProps.start){
      //set total time from prop
      this.setState({totalSeconds: newProps.time});
    }
  }

// showing two digit like clock
  leadingZero(number) {
    return number < 10 ? '0' + number : number;
  }

//cover total time from total seconds to hours and minutes
  timeConvert(time) {
    if(time >= 0){

      const seconds = this.state.totalSeconds % 60;
      const minutes = Math.floor(this.state.totalSeconds/60 % 60);
      const hours = Math.floor(this.state.totalSeconds/(60*60) % 24);

      this.setState({seconds,minutes,hours});
    }
  }


  render() {
    console.log(this.state);
    return(
      <div class='show'>
        <h1>{this.leadingZero(this.state.hours)}:</h1>
        <h1>{this.leadingZero(this.state.minutes)}:</h1>
        <h1>{this.leadingZero(this.state.seconds)}</h1>
      </div>
    );
  }
}


export default Timer;
