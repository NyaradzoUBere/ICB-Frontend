import React from 'react'
import {Link} from 'react-router-dom'
import ArticleCard from '.././ArticleCard'

const newsURL = "http://newsapi.org/v2/everything?q=%22blm_protest%22&language=en&from=2020-08-17&sortBy=publishedAt&apiKey=540c18062492423c90061fefc752f212"

class News extends React.Component {

    state = {
        news: []
    }

    componentDidMount() {
        fetch(newsURL)
            .then(response => response.json())
            // .then(response => console.log(response.articles))
            .then(response => this.setState({news: response.articles}))
    }

    showArticles = () => {
        return this.state.news.map(article => {
            return <ArticleCard article = {article} />
        })
    }
    render() {
        return (
            <div className = "news-page">
                <div className = "news-header">
                    <h1>See Why We Still Can't Breathe</h1>
                </div>
                <div className = "news-banner">

                </div>
                <div className = "articles">
                    {this.showArticles()}
                </div>
            </div>
        )
        
    }
}

export default News;