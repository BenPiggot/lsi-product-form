import React from 'react';

const CreateProjectHeader = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="row">
          <div className="col-sm-12 col-md-10 col-md-offset-1">
            <h1>Product Builder</h1>
            <h3>Create Project</h3>
            <p>Welcome to the "Create Project" section of the Lighting Services Inc Product Builder. Here you can add a project name, location, product type and quantity, then export your job details into a PDF document. Lighting Services does not record the data you enter and it is for your professional use only.</p>
            <p><i>(During your session, please do not use your browser’s back button, please use the navigation buttons within the Product Builder to modify selections, add or delete products.)</i></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProjectHeader;
