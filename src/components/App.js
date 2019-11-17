import React from 'react';
import './../App.css';
import { Route, Switch } from 'react-router';
import Header from './Header'
import { connect } from 'react-redux';
import { APP_LOAD } from '../constants/actionTypes';
import Home from './Home';
import ArticleDetil from './ArticleDetil';

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
            <Route exact path="/" component={Home} />
            <Route exact path="/article/:id" component={ArticleDetil} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
