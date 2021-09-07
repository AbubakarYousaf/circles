import React, { Component } from 'react';

export default class Topic extends Component {
  render() {
    return (
      <div className="my-5" >
          <h3>{this.props.text}</h3>
      </div>
    );
  }
}
