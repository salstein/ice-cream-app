import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Onboarding1 from './components/onboarding1'
import Onboarding2 from './components/onboarding2'
import MainComponent from './components/mainComponents'
import Flavors from './components/flavors'

class App extends Component {
  state = {
    name: ''
  }
  submit = (name) => {
    this.setState({
      name: name
    })
  }
  
  render () {
    console.log(this);
    return (
        <BrowserRouter>
          <div className="App">
            {/* <Flavors /> */}
              <Route exact path='/' component={Onboarding1} />
              <Route path='/onboarding2' render={(props) => <Onboarding2 name={this.state.name} submit={this.submit} {...props} />}/>
              <Route path='/app' render={(props) => <MainComponent name={this.state.name} {...props} />} />
          </div>
        </BrowserRouter>
    );
  }
  
}

export default App;
