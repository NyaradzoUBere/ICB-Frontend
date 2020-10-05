import React from 'react'

export default function Resources() {
    return (
        <>
        {window.scrollTo(0, 0)}
            <div className = "resources-page">
                <div className = "resources-title">
                    <h1>Resources</h1>
                    <div className = "movies-resources">
                        <h2>Movies</h2>
                    </div>
                    <div className = "shows-resources">
                        <h2>TV Shows</h2>
                    </div>
                    <div className = "books-resources">
                        <h2>Books</h2>
                    </div>
                    <div className = "podcasts-resources">
                        <h2>Podcasts</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
