import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <button className={this.props.class} >
          {this.props.title}
      </button>
    );
  }
}
