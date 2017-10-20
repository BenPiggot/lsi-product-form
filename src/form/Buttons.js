import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return (
      <div className="form-actions form-wrapper form-group">
        <button className="btn-primary btn-next btn form-submit btn-next-processed" disabled={true} >
          Next >
        </button>
      </div>
    )
  }
}

export default Buttons;