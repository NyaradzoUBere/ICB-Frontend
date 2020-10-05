import React from 'react'

export default function TVShows() {
    return (
        <div className = "resources">
            <h2 className = "resources-title">TV Shows</h2>
            <ul className = "resources-list">
                <a target = "_blank" rel = "noopener noreferrer" href ="https://www.google.com/search?q=dear+white+people&rlz=1C5CHFA_enUS721US727&oq=dear+&aqs=chrome.0.69i59j0j69i57j46j0l2j46j69i60.1163j0j9&sourceid=chrome&ie=UTF-8">
                    <li className = "resource">Dear White People</li>
                </a>
                <a target = "_blank" rel = "noopener noreferrer" href ="https://www.google.com/search?q=when+they+see+us&rlz=1C5CHFA_enUS721US727&oq=when+they+se&aqs=chrome.0.0j46j0j69i57j0l4.1450j0j9&sourceid=chrome&ie=UTF-8">
                    <li className = "resource">When They See Us</li>
                </a>
            </ul>
        </div>
    )
}
