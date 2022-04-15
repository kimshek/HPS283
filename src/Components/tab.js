// Tabs styling from https://codepen.io/c0deninjad976da24ae/pen/YVVyxz

import React from 'react';
import '../Style/tabs.css'

class Tab extends React.Component {
    constructor(props) {
      super(props);
  
      this._handleClick = this._handleClick.bind(this);
    }
  
    _handleClick() {
      this.props.onClick(this.props.index);
    }
  
    render() {
      const tabClassName = 'tab';
  
      return (
        <span onClick={this._handleClick}>
          <span >{this.props.label}</span>
        </span>
      );
    }
  }
  export default Tab;