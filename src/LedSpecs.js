import React, { Component } from 'react';
import Selector from './form/Selector';
import Buttons from './form/Buttons';

class LedSpecs extends Component {
  render() {
    return (
      <div className="ui-tabs-panel ui-widget-content ui-corner-bottom">
        <div className="right form-wrapper form-group">
          <img className="default-img" src="" alt="placeholder" />
        </div>
        <div className="left form-wrapper form-group">
          <Selector /> 
          <Buttons />
        </div>
      </div>
    )
  }
}

export default LedSpecs;