import React, { Component } from 'react';

class Timer extends Component{

  state = {
    totalSeconds:this.props.time
  };

  componentDidMount() {
    // subtract 1 every 1 second
    setInterval(()=>{
      if(this.state.totalSeconds > 0){
        this.setState((state) => ({totalSeconds:state.totalSeconds - 1}));
      }
    }
    ,1000);
  }

  static getDerivedStateFromProps(newProps) {
    // only replace total time when needed
    if(newProps.start){
      //set total time from prop
      return {totalSeconds: newProps.time};
    }
    return null;
  }

// showing two digit like clock
  leadingZero(number) {
    return number < 10 ? '0' + number : number;
  }


  render() {
    const seconds = this.state.totalSeconds % 60;
    const minutes = Math.floor(this.state.totalSeconds/60 % 60);
    const hours = Math.floor(this.state.totalSeconds/(60*60) % 24);
    return(
      <div className='show'>
        <h1>{this.leadingZero(hours)}:</h1>
        <h1>{this.leadingZero(minutes)}:</h1>
        <h1>{this.leadingZero(seconds)}</h1>
      </div>
    );
  }
}


export default Timer;
