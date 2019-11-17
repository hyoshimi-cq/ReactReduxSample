import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import { ARTICLE_DETAIL_LOAD } from '../constants/actionTypes';

const ReactMarkdown = require('react-markdown')

const mapStateToProps = state => ({
    ...state,
    article: state.common.article
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: ARTICLE_DETAIL_LOAD, payload }),
});

class ArticleDetail extends React.Component {
    componentWillMount() {
        this.props.onLoad(agent.Articles.detail(this.props.match.params.id));
    }

    render() {
        if (!this.props.article) {
            return <div className="article-preview">Loading...</div>
        }
        return (
            <div dangerouslySetInnerHTML={{ __html: this.props.article.rendered_body }} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);
