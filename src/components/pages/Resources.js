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
                <div className = "movie-card">
                    <li>
                        <Link to ="/resources/movies">Movies</Link>
                    </li>
                </div>
                <div className = "shows-card">
                    <li>
                        <Link to ="/resources/tvshows">TV Shows</Link>
                    </li>
                </div>
                <div className = "books-card">
                    <li>
                        <Link to ="/resources/books">Books</Link>
                    </li>
                </div>
                <div className = "podcasts-card">
                    <li>
                        <Link to ="/resources/podcasts">Podcasts</Link>
                    </li>
                </div>
            </div>
        </>
    )
}
