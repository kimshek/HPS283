// Tabs styling from https://codepen.io/c0deninjad976da24ae/pen/YVVyxz

import React from 'react';
import Tab from './tab';
import '../Style/tabs.css'

class TabPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTabIndex: props.children.length === 0 ? null : 0
        };

        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(index) {
        this.setState({
        selectedTabIndex: index
        });
        
        this.props.onTabChange(index);
    }

    _renderTabs() {
        let tabs = [];
        
        for (let i = 0; i < this.props.children.length; i++) {
        tabs.push(
            <Tab
            key={`tab-${i}`}
            label={this.props.children[i].props.title}
            index={i}
            isSelected={i === this.state.selectedTabIndex}
            onClick={this._handleClick} />
        );
        }

        return tabs;
    }

    _renderTabContent() {
        return this.props.children[this.state.selectedTabIndex].props.children;
    }

    render() {
        if (this.state.selectedTabIndex == null) {
        return 'nope';
        }
        
        return (
        <div className="tab-panel">
            <div className="tab-panel__header">
            {this._renderTabs()}
            </div>
            <div className="tab-panel__content">
            {this._renderTabContent()}
            </div>
        </div>
        );
    }
}

export default TabPanel;