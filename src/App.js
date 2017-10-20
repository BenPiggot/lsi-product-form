import React, { Component } from 'react';
import InitialHeader from './headers/InitialHeader';
import SummaryHeader from './headers/SummaryHeader';
import CreateProjectHeader from './headers/CreateProjectHeader';
import ProjectCreatedHeader from './headers/ProjectCreatedHeader';
import Form from './Form';
import Summary from './Summary';
import ProjectForm from './ProjectForm';
import ModelNumber from './ModelNumber';
import CompletedButtons from './CompletedButtons';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productCompleted: true,
      createProjectActive: false,
      projectCreated: false
    }

    this.addAnotherProduct = this.addAnotherProduct.bind(this);
    this.activateCreateProject = this.activateCreateProject.bind(this);
    this.createProject = this.createProject.bind(this);
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

  createProject() {
    this.setState({
      createProjectActive: false,
      projectCreated: true
    })
  }

  renderHeader() {
    if (this.state.projectCreated) {
      return <ProjectCreatedHeader />
    }
    else if (this.state.createProjectActive) {
      return <CreateProjectHeader />
    }
    else if (this.state.productCompleted && !this.state.activateCreateProject) {
      return <SummaryHeader />
    }
    else {
      return <InitialHeader />
    }
  }

  renderContainer() {
    if (this.state.createProjectActive) {
      return (
        <div>
          <ProjectForm createProject={this.createProject} />
        </div>
      )
    }
    else if (this.state.productCompleted && !this.state.activateCreateProject) {
      return ( 
        <div>
          <CompletedButtons 
            projectCreated={this.state.projectCreated}
            addAnotherProduct={this.addAnotherProduct} 
            activateCreateProject={this.activateCreateProject}
            top={true} 
          /> 
          <Summary />
          <CompletedButtons 
            addAnotherProduct={this.addAnotherProduct} 
            activateCreateProject={this.activateCreateProject}
            top={false} 
          /> 
        </div>
      )
    }
    else {
      return (
        <div>
          <Summary />
          <ModelNumber />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="main-container container">
        { this.renderHeader() }
        { this.renderContainer() }
      </div>
    )
  }
}

export default App;
