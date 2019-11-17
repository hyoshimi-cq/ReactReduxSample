import React from 'react'
import { Link } from 'react-router-dom';

const ArticleItem = props => {
    const article = props.article
    const user = props.article.user
    return (
        <div className="aricle_item">
            <img src={user.profile_image_url} alt={user.id} className="icon" />
            <div>{user.id}</div>
            <div>
                <Link to={`article/${article.id}`} >
                    {article.title}
                </Link>
            </div>
        </div>
    );
};


export default ArticleItem;