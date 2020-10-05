import React from 'react'
import {Link} from 'react-router-dom'

export default function Resources() {
    return (
        <>
        {window.scrollTo(0, 0)}
            <div className = "resources-page">
                <div className = "resources-header">
                    <h1>Resources</h1>
                </div>
                <div className = "resources-cards">
                    <Link to ="/resources/movies" className = "title">
                    <div className = "movie-card">
                        <h3 className = "title">Movies</h3>
                    </div>
                    </Link>
                    <Link to ="/resources/tvshows" className = "title">
                    <div className = "shows-card">
                    <h3 className = "title">TV Shows</h3>
                    </div>
                    </Link>
                    <Link to ="/resources/books" className = "title">
                    <div className = "books-card">
                        <h3 className = "title">Books</h3>
                    </div>
                    </Link>
                    <Link to ="/resources/podcasts" className = "title">
                        <div className = "podcasts-card">
                            <h3 className = "title">Podcasts</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
