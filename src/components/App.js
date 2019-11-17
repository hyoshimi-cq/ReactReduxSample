import React from 'react';
import logo from './../logo.svg';
import './../App.css';
import { Route, Switch } from 'react-router';
import Header from './Header'
import { connect } from 'react-redux';
import { APP_LOAD } from '../constants/actionTypes';

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName
  }
};

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
    dispatch({ type: APP_LOAD })
});

class App extends React.Component {
  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <Header
            appName={this.props.appName} />
          <Switch>
            <Route exact path="/" component={Default} />
          </Switch>
        </div>
      );
    }
    return (
      <div>
        <Header
          appName={this.props.appName} />
      </div>
    );
  }
}

function Default() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
      </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      </a>
      </header>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
