import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import { ARTICLES_LOAD } from '../constants/actionTypes';
import ArticleList from './ArticleList';

const mapStateToProps = state => ({
    ...state,
    appName: state.common.appName,
    articles: state.common.articles
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: ARTICLES_LOAD, payload }),
});

class Home extends React.Component {
    componentWillMount() {
        this.props.onLoad(agent.Articles.byTag("react"));
    }

    render() {
        return (
            <div >
                <ArticleList
                    articles={this.props.articles} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
