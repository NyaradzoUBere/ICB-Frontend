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
                <div className = "resource-card">
                    <li>
                        <Link to ="/resources/movies">Movies</Link>
                    </li>
                </div>
                <div className = "shows-resources">
                    <h2 className = "resources-title">TV Shows</h2>
                    <ul className = "resources-list">
                        <li className = "resource">Dear White People</li>
                        <li className = "resource">When They See Us</li>
                    </ul>
                </div>
                <div className = "books-resources">
                    <h2 className = "resources-title">Books</h2>
                    <ul className = "resources-list">
                        <li className = "resource">Black Feminist Thought</li>
                        <li className = "resource">Eloquent Rage: A Black Feminist Discovers Her Superpower</li>
                        <li className = "resource">Heavy: An American Memoir</li>
                        <li className = "resource">How To Be An Antiracist</li>
                        <li className = "resource">I Know Why the Caged Bird Sings</li>
                        <li className = "resource">Invisible No More: Police Violence Against Black Women and Women of Color</li>
                        <li className = "resource">Just Mercy</li>
                        <li className = "resource">Me and White Supremacy</li>
                        <li className = "resource">Raising Our Hands</li>
                        <li className = "resource">Redefining Realness</li>
                        <li className = "resource">Sister Outsider</li>
                        <li className = "resource">So You Want to Talk About Race</li>
                        <li className = "resource">The Bluest Eye</li>
                        <li className = "resource">The Fire Next Time</li>
                        <li className = "resource">The New Jim Crow: Mass Incarceration in the Age of Colorblindness</li>
                        <li className = "resource">The Next American Revolution: Sustainable Activism for the Twenty-First Century</li>
                        <li className = "resource">When Affirmative Action Was White: An Untold History of Racial Inequality in Twentieth-Century America</li>
                        <li className = "resource">White Fragility: Why It's So Hard for White People to Talk About Racism</li>
                    </ul>
                </div>
                <div className = "podcasts-resources">
                    <h2 className = "resources-title">Podcasts</h2>
                    <ul className = "resources-list">
                        <li className = "resource">Code Switch (NPR)</li>
                        <li className = "resource">1619 (New York Times)</li>
                        <li className = "resource">About Race</li>
                        <li className = "resource">Intersectionality Matters! hosted by Kimberlé Crenshaw</li>
                        <li className = "resource">Momentum: A Race Forward Podcast</li>
                        <li className = "resource">Nice White Parents (Serial and The New York Times)</li>
                        <li className = "resource">Seeing White</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
