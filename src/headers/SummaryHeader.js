import React from 'react';

const SummaryHeader = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="row">
          <div className="col-sm-12 col-md-10 col-md-offset-1">
            <h1>Product Builder</h1>
            <h3>Summary</h3>
            <p>With all of your product information completed, choose “Finish and Download” to download your product document to your device for your professional use or forward to your Representative or supplier.</p>
            <p>Or, you can choose “Create Project” where you can add a project name, location, product type and quantity, then export your job details into a PDF document.  </p>
            <p><i>(During your session, please do not use your browser’s back button, please use the navigation buttons within the Product Builder to modify selections, add or delete products.)</i></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryHeader;
