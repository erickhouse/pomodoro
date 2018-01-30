import React, { Component } from 'react';
import Moment from 'moment'

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: props.endDate.diff(Moment(), "seconds"), on: props.on}
    }
  
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
            }
            this.setState({
                date: "Complete"
            });
            return;
        }
        var copy = this.props.endDate.clone();
        var display = copy.diff(Moment(), "seconds")
        this.setState({
            date: display
        });
        
    }
  
    render() {
      return (      
        <div>
          <h4>{this.state.date}</h4>
        </div>
      );
    }
  }

export default Clock