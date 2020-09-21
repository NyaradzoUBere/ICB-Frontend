import React from 'react'
import {Link} from 'react-router-dom'
import ArticleCard from '.././ArticleCard'

const newsURL = "https://i-cant-breathe.herokuapp.com/middleman"

class News extends React.Component {

    state = {
        news: []
    }

    componentDidMount() {
        fetch(newsURL)
            .then(response => response.json())
            .then(response => this.setState({news: response.articles}))
    }

    showArticles = () => {
        return this.state.news.map(article => {
            return <ArticleCard article = {article} />
        })
    }

    goToHome = () => {
        if (this.state.news) {
            return <Link to = {"/"}>Home</Link>
        } else {
            return <p>Page Loading...</p>
        }
    }

    render() {
        return (
            <div className = "news-page">
                <div className = "nav-bar">
                    {this.goToHome()}
                </div>
                <div className = "news-header">
                    <h1>In The News</h1>
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