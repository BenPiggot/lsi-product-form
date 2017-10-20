import React, { Component } from 'react';

class ModelNumber extends Component {
  render() {
    return (
      <div style={{ clear: 'both' }} className="model-number form-wrapper form-group">
        <label>Model #</label>
        <span>_--_</span>
      </div>
    )
  }
}

export default ModelNumber;