import React, { Component } from 'react';
import Fitting from './Fitting';
import LedSpecs from './LedSpecs';
import DimmingVoltage from './DimmingVoltage';
import Tabs from './Tabs';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "led-specs"
    }

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(value) {
    this.setState({ activeTab: value })
  }

  render() {
    return (
      <div className="ui-tabs ui-widget ui-widget-content ui-corner-all">
        <Tabs />
        <div>
          { this.state.activeTab === "led-specs" ? <LedSpecs changeTab={this.changeTab} /> : null }
          { this.state.activeTab === "fitting" ? <Fitting changeTab={this.changeTab} /> : null }
          { this.state.activeTab === "dimming-voltage" ? <DimmingVoltage changeTab={this.changeTab} /> : null }
        </div>
      </div>
    )
  }
}

export default Form;