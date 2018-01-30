
import React, { Component } from 'react';
import Period from './Period'
import {Grid, Row, Col, Button, Panel, Alert} from 'react-bootstrap'
import Moment from 'moment'

class Pomodoro extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          on:false,
          date: this.generateEndDates(),
          active:0
        }
    }

    generateEndDates(){
        var dates = [];
        var minutes = 0
        for(var i = 0; i < this.props.pomodoro; i++){
            if((i % 2) == 0){
                minutes += 25
                dates[i] = Moment().add(minutes, "s")
            }else{
                minutes += 5
                dates[i] = Moment().add(minutes, "s")
            }
        }
        return dates;
    }

    renderPeriods(){
        if(!this.state.on) return <div></div>

        var periods = [];
        for(var i = 0; i < this.state.date.length; i++){
            if((i % 2) == 0){
                periods[i] = 
                <Period 
                    style={{margin:5}} 
                    key={i}
                    id={i}
                    show={i <= this.state.active}
                    name={"Task"}
                    onComplete={this.onComplete.bind(this)}
                    active={this.state.active == i} 
                    endDate={this.state.date[i]}
                />;
            }else{
                periods[i] = 
                <Period 
                    style={{margin:5}} 
                    key={i} 
                    id={i}
                    show={i <= this.state.active}
                    name={"Break"} 
                    onComplete={this.onComplete.bind(this)}
                    active={this.state.active == i} 
                    endDate={this.state.date[i]}
                />;
            }
        }
        return periods;
    }

    onComplete(id){
        if((id + 1) == this.props.pomodoro){
            this.setState({
                done:true
            })
        }else{
            this.setState({
                active:id + 1
            })
        }
    }
  
    reset(){
        this.setState({
            on:false,
            done:false,
            date:this.generateEndDates(),
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
            onClick={() => this.setState({on:true, date:this.generateEndDates()})}>Start</Button>
    }
 
    render() {

    var body;
    if (this.state.done){
        body = <Alert bsStyle="success"> 
                You Finished! 
                <Button style={{margin:5}} onClick={() => this.reset()}>Restart</Button>
              </Alert>;
    }else{
        body = <div>
                    {this.renderButton()}
                    {this.renderPeriods()}
                </div>
    }
      return (
        <Grid>
            <Row>
                <Col md={4}/>
                <Col md={4}>
                    <Panel style={{margin:10}}>
                        <Panel.Heading>
                            <h2>Pomodoro</h2>
                        </Panel.Heading>
                        <Panel.Body>
                            {body}
                        </Panel.Body>
                    </Panel>
                </Col>
                <Col md={4}/>
            </Row>
        </Grid>
      );
    }
  }

export default Pomodoro
