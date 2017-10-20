import React, { Component } from 'react';

class Tabs extends Component {
  render() {
    return (
      <div className="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all">
        <ul className="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all">
          <li className="ui-state-default ui-corner-top ui-tabs-active ui-state-active">
            LED Specs
          </li>
          <li className="ui-state-default ui-corner-top">
            Fitting
          </li>
          <li className="ui-state-default ui-corner-top">
            Dimming & Voltage
          </li>
        </ul>
      </div>
    )
  }
}

export default Tabs;