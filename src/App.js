import React, { Component } from 'react';
import InitialHeader from './headers/InitialHeader';
import SummaryHeader from './headers/SummaryHeader';
import ProjectCreateHeader from './headers/ProjectCreateHeader';
import Form from './Form';
import Summary from './Summary';
import ModelNumber from './ModelNumber';
import CompletedButtons from './CompletedButtons';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productCompleted: true,
      createProjectActive: false
    }

    this.addAnotherProduct = this.addAnotherProduct.bind(this);
    this.activateCreateProject = this.activateCreateProject.bind(this);
  }

  addAnotherProduct() {
    this.setState({
      productCompleted: false
    })
  }

  activateCreateProject() {
    this.setState({
      createProjectActive: true
    })
  }

  renderHeader() {
    if (this.state.createProjectActive) {
      return <ProjectCreateHeader />
    }
    else if (this.state.productCompleted && !this.state.activateCreateProject) {
      return <SummaryHeader />
    }
    else {
      return <InitialHeader />
    }
  }

  render() {
    return (
      <div className="main-container container">
        { this.renderHeader() }
        { this.}
        { 
          this.state.productCompleted ? 
          <CompletedButtons 
            addAnotherProduct={this.addAnotherProduct} 
            activateCreateProject={this.activateCreateProject}
            top={true} 
          /> : 
          null 
        }
        { !this.state.productCompleted ? <Form /> : <Summary /> }
        { 
          !this.state.productCompleted ? 
          <ModelNumber /> : 
          <CompletedButtons 
            addAnotherProduct={this.addAnotherProduct} 
            activateCreateProject={this.activateCreateProject}
            top={false} 
          /> 
        }
      </div>
    )
  }
}

export default App;
