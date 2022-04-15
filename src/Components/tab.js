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
      const tabClassName = this.props.isSelected ? 'tab tab--selected' : 'tab';
  
      return (
        <span className={tabClassName} onClick={this._handleClick}>
          <span className="tab__label">{this.props.label}</span>
        </span>
      );
    }
  }
  export default Tab;