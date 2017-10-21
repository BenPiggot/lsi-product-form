import React, { Component } from 'react';

class DownloadOrShare extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-12 col-md-10 col-md-offset-1">
              <h1>Download Product Document</h1>
              <div className="dlinfo">
                <h4>Email and/or Download</h4>
                <p>Thank you for using our product builder.  Click the button below to download your project as a PDF file.</p>
              </div>
              <a href="/products/product-builder/download-action" className="btn-primary btn download-pdf">
                Download PDF Now
              </a>
              <div className="dlinfo">
                <p>Interested in sending your project to your LSI Representative, a client, or a colleague?  Fill out the form below and click "Send Project." </p>
              </div>
              <div className="form-wrapper form-group">
                <div className="form-item form-item-from-name form-type-textfield form-group"> 
                  <label className="control-label" for="edit-from-name">Your Name</label>
                  <input className="form-control form-text" type="text" id="edit-from-name" name="from_name" value="" size="60" maxlength="128" />
                </div>
                <div className="form-item form-item-from form-type-textfield form-group"> 
                  <label class="control-label" for="edit-from">Your Email</label>
                  <input className="form-control form-text" type="text" id="edit-from" name="from" value="" size="60" maxlength="128" />
                </div>
                <div className="form-item form-item-to form-type-textfield form-group"> 
                  <label className="control-label" for="edit-to">Recipient Email(s) separated by a comma</label>
                  <input className="form-control form-text" type="text" id="edit-to" name="to" value="" size="60" maxlength="128" />
                </div>
                <div className="form-item form-item-subject form-type-textfield form-group">
                  <label className="control-label" for="edit-subject">Subject</label>
                  <input className="form-control form-text" type="text" id="edit-subject" name="subject" value="Lighting Services Inc - Lighting Project " size="60" maxlength="128" />
                </div>
                <div className="form-item form-item-comments form-type-textarea form-group">
                  <label className="control-label" for="edit-comments">Comments</label>
                  <div className="form-textarea-wrapper">
                    <textarea className="form-control form-textarea" id="edit-comments" name="comments" cols="60" rows="5"></textarea>
                  </div>
                </div>
                <button class="btn btn-primary btn btn-default form-submit" type="submit" id="edit-submit" name="op" value="Send Project PDF">
                  Send Project PDF
                </button>
              </div>
              <button onClick={this.props.cancelDownloadOrShare} className="back-to-builder btn btn-info">
                Return to product builder summary
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DownloadOrShare;