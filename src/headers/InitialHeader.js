import React from 'react';

const InitialHeader = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="row">
          <div className="col-sm-12 col-md-10 col-md-offset-1">
            <h1>Product Builder</h1>
            <h3>Add Product</h3>
            <p>Welcome to your LED Product Builder. Here you can configure a fixture to your specifications then export the details into a PDF document. Lighting Services does not record the data you enter and it is for your professional use only.</p>
            <p>(During your session, please do not use your browser’s back button, please use the navigation buttons within the Product Builder to modify selections, add or delete products.)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InitialHeader;
