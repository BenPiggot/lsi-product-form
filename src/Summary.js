import React, { Component } from 'react';

class Summary extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      attributes: [
        { name: 'LED Module', value: 'ZE4 2x2 Array'},
        { name: 'LED Rating', value: '1090 Lumens 90 CR 15 Watts'},
        { name: 'Color Temp', value: '2700K' },
        { name: 'Optic', value: '4 Degree'},
        { name: 'Fitting', value: '00 Track Fitting'},
        { name: 'Color', value: 'Black'},
        { name: 'Dimming', value: 'LE Leading Edge Dimming'},
        { name: 'Voltage', value: '120'},
        { name: 'Stem', value: 'none'}
      ]
    }
  }

  render() {
    return (
      <div className="products form-wrapper form-group summary-processed">
        <div className="lsi-product">
          <div className="product-info">
            <div className="info-top">
              <div className="model-number">
                <label>Model: </label>
                <span className="model-number">blahblahb</span>
              </div>
              <div className="actions">
                <div className="edit-product">
                  <button>Edit Product</button>
                </div>
                <div className="delete-product">
                  <button>Delete Product</button>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="img">
                <img className="product-image" src="" alt="product-image" />
                <div>
                  <label>Fixture: </label>
                  <span className="fixture">LP SuperSPOT Series (COB LED) LP1</span>
                </div>
              </div>
            </div>
            <div className="left">
              <div className="left">
                { this.state.attributes.slice(0,4).map(a => {
                  return (
                    <div>
                      <label>{a.name}: </label>
                      <span className={a.name}>{a.value}</span>
                    </div>
                  )
                })}
              </div>
              <div className="right">
                { this.state.attributes.slice(4).map(a => {
                  return (
                    <div>
                      <label>{a.name}: </label>
                      <span className={a.name}>{a.value}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Summary;