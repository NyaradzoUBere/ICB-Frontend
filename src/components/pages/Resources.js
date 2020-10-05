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
                            <li className = "movie">13th</li>
                            <li className = "movie">American Son</li>
                            <li className = "movie">Blindspotting</li>
                            <li className = "movie">Clemency</li>
                            <li className = "movie">Fruitvale Station</li>
                            <li className = "movie">I Am Not Your Negro</li>
                            <li className = "movie">If Beale Street Could Talk</li>
                            <li className = "movie">Just Mercy</li>
                            <li className = "movie">King In The Wilderness</li>
                            <li className = "movie">See You Yesterday</li>
                            <li className = "movie">Selma</li>
                            <li className = "movie">The Black Panthers: Vanguard of the Revolution</li>
                            <li className = "movie">The Hate U Give</li>
                            <li className = "movie"></li>
                            <li className = "movie"></li>
                        </ul>
                    </div>
                    <div className = "shows-resources">
                        <h2 className = "shows-title">TV Shows</h2>
                        <ul className = "shows-list">
                            <li className = "show"></li>
                            <li className = "show"></li>
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
