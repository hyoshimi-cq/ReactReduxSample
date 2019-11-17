import ArticleItem from './ArticleItem';
import React from 'react';

const ArticleList = props => {
    if (!props.articles) {
        return (
            <div className="article-preview">Loading...</div>
        );
    }

    if (props.articles.length === 0) {
        return (
            <div className="article-preview">
                No articles are here... yet.
      </div>
        );
    }

    return (
        <div>
            {
                props.articles.map(article => {
                    return (
                        <ArticleItem article={article} key={article.id} />
                    );
                })
            }
        </div>
    );
};

export default ArticleList;
