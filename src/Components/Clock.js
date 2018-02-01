import React from 'react';
import Moment from 'moment'

class Clock extends React.Component {
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
        if (this.props.endDate <= Moment()){
            if(this.props.active){
                this.props.onComplete(this.props.id);
                clearInterval(this.timerID);
            }          
        }
        this.setState({});   
    }
  
    render() {
      var copy = this.props.endDate.clone();
      var timeLeft = Moment.duration(copy.diff(Moment()));
      var seconds = timeLeft.seconds() <= 9 ? "0" + timeLeft.seconds().toString() : timeLeft.seconds().toString();
      timeLeft = timeLeft.minutes().toString() + ":" + seconds;
      return (      
        <div>
          {timeLeft}
        </div>
      );
    }
  }

export default Clock