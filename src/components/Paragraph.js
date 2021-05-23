import React, { Component } from 'react';

export default class Paragraph extends Component {
  render() {
    return (
    <div id="content1" className="my-3" >
        <p>{this.props.text}</p>
      </div>
    );
  }
}
