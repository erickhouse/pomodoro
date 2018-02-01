
import React from 'react';
import Period from './Period'
import {Grid, Row, Col, Button, Panel, Alert} from 'react-bootstrap'
import Moment from 'moment'

class Pomodoro extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          on:false,
          active:0,
          done:false
        }
    }

    renderPeriods(){
        if(!this.state.on) return <div></div>

        var type;
        var periods = [];
        var endDate;
        for(var i = 0; i < this.props.pomodoro; i++){
            if((i % 2) === 0){
                type = "Task";
                endDate = Moment().add(this.props.taskTime, "m");
            }else{
                type = "Break"
                endDate = Moment().add(this.props.breakTime, "m");
            }
            periods[i] = 
                <Period 
                    style={{margin:10}} 
                    key={i}
                    id={i}
                    complete={i < this.state.active}
                    name={type}
                    onComplete={this.onComplete.bind(this)}
                    active={this.state.active === i} 
                    endDate={endDate}/>
        }
        return periods;
    }

    onComplete(id){
        var next = id + 1;
        if(next === this.props.pomodoro){
            this.setState({
                done:true
            })
        }else{
            this.setState({
                active:next
            })
        }
    }
  
    reset(){
        this.setState({
            on:false,
            done:false,
            active:0
        })
    }

    renderButton(){
        if (this.state.on){
            return(
                <div>
                    <Button style={{margin:5}} onClick={() => this.reset()}>Restart</Button>
                </div>
            );
        }
        return <Button style={{margin:5}} bsStyle="success" 
            onClick={() => this.setState({on:true})}>Start</Button>
    }
 
    render() {

    var body;
    if (this.state.done){
        body = <Alert bsStyle="success"> 
                You Finished! 
                <Button style={{margin:5}} onClick={() => this.reset()}>Restart</Button>
              </Alert>;
    }else{
        body = 
        <div>
            {this.renderButton()}
            {this.renderPeriods()}
        </div>
    }
      return (
        <Grid>
            <Row>
                <Col md={3}/>
                <Col md={6}>
                    <Panel style={{margin:10}}>
                        <Panel.Heading>
                            <h2>Pomodoro</h2>
                        </Panel.Heading>
                        <Panel.Body>                          
                            {body}                        
                        </Panel.Body>
                    </Panel>
                </Col>
                <Col md={3}/>
            </Row>
        </Grid>
      );
    }
  }

export default Pomodoro
