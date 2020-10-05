import React from 'react'

export default function Resources() {
    return (
        <>
        {window.scrollTo(0, 0)}
            <div className = "resources-page">
                <div className = "resources-title">
                    <h1>Resources</h1>
                    <div className = "movies-resources">
                        <h2 className = "movies-title">Movies</h2>
                        <ul className = "movies-list">
                            <li className = "movie"></li>
                        </ul>
                    </div>
                    <div className = "shows-resources">
                        <h2 className = "shows-title">TV Shows</h2>
                        <ul className = "shows-list">
                            <li className = "show"></li>
                        </ul>
                    </div>
                    <div className = "books-resources">
                        <h2 className = "books-title">Books</h2>
                        <ul className = "books-list">
                            <li className = "book"></li>
                        </ul>
                    </div>
                    <div className = "podcasts-resources">
                        <h2 className = "podcasts-title">Podcasts</h2>
                        <ul className = "podcast-list">
                            <li className = "podcast"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
