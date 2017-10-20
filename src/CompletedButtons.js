import React, { Component } from 'react';

class CompletedButtons extends Component {
  render() {
    const display = this.props.projectCreated ? 'none' : 'display';
    return (
      <div style={{ clear: 'both' }} className="form-actions form-wrapper form-group">
        { this.props.top ? 
          <button className="btn-primary project-create btn btn-success form-submit" style={{ display: display }} onClick={this.props.activateCreateProject}>
            Create Project
          </button> :
          <button className="btn-info summary-download btn form-submit" >
            <span className="icon glyphicon glyphicon-download" aria-hidden="true"></span>
            Finish: Download or Share
          </button> 
        }
        <button className="btn-primary project-create btn btn-success form-submit" onClick={this.props.addAnotherProduct}>
          <span className="icon glyphicon glyphicon-plus" aria-hidden="true"></span>
          Add Another Product
        </button>
      </div>
    )
  }
}

export default CompletedButtons;