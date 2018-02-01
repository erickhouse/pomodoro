import React from 'react';
import Clock from './Clock'
import {Button} from 'react-bootstrap'
import './Period.css';

class Period extends React.Component {

    skip(){
      this.props.onComplete(this.props.id);
    }

    render() {
      var display;
      var button;
      var style = "ticker";

      if(this.props.active){
          display = 
          <div>
              <Clock 
                id={this.props.id} 
                onComplete={this.props.onComplete}
                active={this.props.active} 
                endDate={this.props.endDate}/>         
           </div>;
           button = <Button className="next" bsSize="small" onClick={() => this.skip()}>Skip</Button>;
           style = "ticker active"
      }else if(this.props.complete){
        display = "Done";
      }else{
        display = this.props.name;
      }

      return (
        <div className="group">
          <div className={style}>
            {display}    
          </div>
          {button}
        </div>
      );
    }
  }

export default Period