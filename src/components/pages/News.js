import React from 'react'
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

    render() {
        return (
            <>
            {window.scrollTo(0, 0)}
            <div className = "news-page">
                <div className = "news-header">
                    <h1>In The News</h1>
                </div>
                <div className = "news-banner">

                </div>
                <div className = "articles">
                    {this.showArticles()}
                </div>
            </div>
            </>
        )
        
    }
}

export default News;