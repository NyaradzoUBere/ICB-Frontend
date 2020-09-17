import React from 'react'
import {Link} from 'react-router-dom'

export default function ArticleCard(props) {
    const article = props.article
    return (
        <div className = "article-card">
           <h3 className = "article-title">{article.title}</h3>
           <a href= {article.url}>
               <img src = {article.urlToImage} alt = {article.title} className = "article-image"/>
           </a>
           <p className = "article-description">{article.description}</p>
        </div>
    )
}
