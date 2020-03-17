import React from 'react';
import './Content.css'


/**
 * Linguiçator editor content component.
 *
 * @component
 */
function Content()
{
    return (
        <div className="content-container">
            <textarea className="content-editor">
            </textarea>
            <textarea readOnly className="content-display">
            </textarea>
        </div>
    );
}


export default Content;
