import React, { useState, Component } from 'react';
import './CoachForm.scss';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';


class CoachFormTwo extends Component {
    constructor (props, context) {
      super(props, context)
      this.state = {
        value: 0
      }
    }
  
    handleChangeStart = () => {
      console.log('Change event started')
    };
  
    handleChange = value => {
      this.setState({
        value: value
      })
    };
  
    handleChangeComplete = () => {
      console.log('Change event completed')
    };
  
    render () {
      const { value } = this.state
      return (
        <div className='slider'>
             <h2>Hourly Rate</h2>
              <p>Please set your hourly rate. To get the most jobs, we recommend setting your rate between $20 and $50.</p>
              <br />
             <div className='value'>${value}</div>
               <div className="Slider">
                 <Slider
                      min={0}
                      max={200}
                      value={value}
                      onChangeStart={this.handleChangeStart}
                      onChange={this.handleChange}
                      onChangeComplete={this.handleChangeComplete}
                    />
             </div>
          
             <div className="HourlyRate-buttons">
                  <button>Back</button>
                  <br/>
                  <button>Save and next</button>
              </div>
        </div>
      )
    }
  }
  
export default CoachFormTwo;