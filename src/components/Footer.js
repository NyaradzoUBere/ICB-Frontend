import React from 'react'
import logo from './icblogo copy.png'

export default function Footer() {
    return (
        <div className = "footer">
            <div className = "footer-image">
                <img src = {logo} alt = "I Can't Breathe logo" />
            </div>
            <div className = "footer-description">
                <p>I Can't Breathe was created in response to the protests happening around the country, sparked by the murder of George Floyd.
                    The focus is on increasing access to information and taking the first step towards self education and checking one's own bias.
                </p>
            </div>
        </div>
    )
}
