import React, { Component } from 'react';

class Selector extends Component {
  render() {
    return (
      <div className="form-item form-type-select form-group">
        <label className="control-label">Category:</label>
        <select className="form-control form-select ajax-processed product-input-processed chosen-processed">
          <option>Select an Option</option>
        </select>
      </div>
    )
  }
}

export default Selector;