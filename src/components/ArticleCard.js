import React from 'react'
import {Link} from 'react-router-dom'

export default function ArticleCard(props) {
    return (
        <div>
           <img src = {props.article.urlToImage} />
        </div>
    )
}
