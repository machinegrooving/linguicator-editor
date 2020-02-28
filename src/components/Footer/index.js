import React from 'react';
import './Footer.css'


/**
 * Linguiçator editor footer component.
 *
 * @component
 */
function Footer ()
{
    return (
        <div className='footer-container'>
            <p>
                Built with <span role="img" aria-label="Heart">❤️ </span>
                by the <a href="http://github.com/machinegrooving">Machine Grooving Studio</a>
            </p>
        </div>
    );
}


export default Footer;
