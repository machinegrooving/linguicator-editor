import React from 'react';
import PropTypes from 'prop-types';


/**
 * Linguiçator identity component.
 *
 * @component
 */
function Identity({logo, brand})
{
    return(
        <div className="header-identity">
            <img
                src={logo}
                alt="Linguiçator Logo"
            />
            <h1>{brand}</h1>
        </div>
    );
}


Identity.propTypes = {
    /**
     * Identity logo.
     */
    logo: PropTypes.string.isRequired,

    /**
     * Identity brand name.
     */
    brand: PropTypes.string.isRequired
}


export default Identity;
