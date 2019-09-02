import React from 'react';
import Post from './Post'

function ArticlesList({articles}) {
    const articlesElements = articles.map(article => 
        <li key={article.id}><Post article={article} /></li>
        )
    return(
        <ul>
            {articlesElements}
        </ul>

    )
}
export default ArticlesList