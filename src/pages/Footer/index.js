import React from 'react'

import "./styles.css";

export default function Footer() {
    const year = new Date().getFullYear();
    
    return (
        <div className="footer-container">
            <p>
                &copy; {
                    year
                } Everton Otavio Afonso
            </p>
        </div>
    )
}
