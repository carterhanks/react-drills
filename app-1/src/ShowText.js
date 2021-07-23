import React, {Component} from 'react';

export default class ShowText extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    }
  };
  
  handleChange(value) {
    this.setState({message: value});
  };
  
  render() {
    return (
      <div className="ShowText">
        <input type="text" onChange={e => this.handleChange(e.target.value)}></input>
        <p>{this.state.message}</p>
      </div>
    );
  };
};