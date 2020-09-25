import React from 'react'

export default function ArticleCard(props) {
    const article = props.article
    return (
        <div className = "article-card">
           <h3 className = "article-title">{article.title}</h3>
           <a href={article.url} target="_blank" rel="noopener noreferrer">
               <img src = {article.urlToImage} alt = {article.title} className = "article-image"/>
           </a>
           <p className = "article-description">{article.description}</p>
        </div>
    )
}
