import React from 'react'
import { Link } from 'react-router-dom';

const ArticleItem = props => {
    return (
        <div className="aricle_item">
            <img src={props.article.user.profile_image_url} alt={props.article.user.id} className="icon" />
            <div>{props.article.user.id}</div>
            <div>
                <Link to="/" >
                    {props.article.title}
                </Link>
            </div>
        </div>
    );
};


export default ArticleItem;