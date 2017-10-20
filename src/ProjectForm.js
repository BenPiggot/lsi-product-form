import React, { Component } from 'react';

class ProjectForm extends Component {
  render() {
    return (
      <div>
        <div className="form-container">
          <div className="form-item form-item-project form-type-textfield form-group">
            <label class="control-label" for="edit-project">Project:</label>
            <input class="form-control form-text pi-processed" type="text" value="" size="60" maxlength="128" />
          </div>
          <div className="form-item form-item-project form-type-textfield form-group">
            <label class="control-label" for="edit-project">Location:</label>
            <input class="form-control form-text pi-processed" type="text" value="" size="60" maxlength="128" />
          </div>
        </div>
        <div className="form-actions form-wrapper form-group">
          <button 
            className="btn-info btn-primary btn form-submit" 
            style={{ backgroundColor:'#fe7e00', borderColor: '#e57100' }}
            type="submit"
            value="Save & Go to Dashboard"
            onClick={this.props.createProject}>
            <span class="icon glyphicon glyphicon-ok" aria-hidden="true"></span>
            Save & Go to Dashboard
          </button>
        </div>
      </div>
    )
  }
}

export default ProjectForm;