import React, { Component } from 'react';
import Clock from './Clock'
import Moment from 'moment'

class Period extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      var display;
      if(this.props.show){
          display = 
          <Clock 
            id={this.props.id} 
            onComplete={this.props.onComplete}
            active={this.props.active} 
            endDate={this.props.endDate}
           />;
      }
      return (
        <div>
          <h3>{this.props.name}</h3>
          {display}
        </div>
      );
    }
  }

export default Period