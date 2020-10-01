import React from 'react'
import logo from './darkicblogo.png'

export default function ArticleCard(props) {
    const article = props.article
    return (
        <div className = "article-card">
           <h3 className = "article-title">{article.title}</h3>
           <a href={article.url} target="_blank" rel="noopener noreferrer">
               {article.urlToImage ? (
                   <img src = {article.urlToImage} alt = {article.title} className = "article-image"/>
                   ) : (
                    <img src = {logo} alt = {article.title} className = "article-image"/>
                    )}
           </a>
           <p className = "article-description">{article.description}</p>
        </div>
    )
}
