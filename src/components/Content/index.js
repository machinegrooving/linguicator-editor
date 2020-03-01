import React from 'react';
import { useEffect, useState } from 'react';
import { sanitize } from 'dompurify';
import marked from 'marked';
import './Content.css'


/**
 * Linguiçator editor content component.
 *
 * @component
 */
function Content()
{
    // component state hooks
    const [text, setText] = useState('');
    const [preview, setPreview] = useState('');


    /**
     * I am called whenever text input is changed and set sanitized markdown preview.
     */
    useEffect(() =>
    {
        setPreview(sanitize(marked(text)));
    }, [text]);


    /**
     * I am a callback for input text changed events.
     *
     * @param {Object} event - onChange event
     *
     * @returns {undefined} - nothing
     */
    function onTextChange(event)
    {
        setText(event.target.value);
    }


    return (
        <div className="content-container">
            <textarea
                autoFocus={true}
                className="content-editor"
                value={text}
                onChange={onTextChange}
            >
            </textarea>
            <div
                id='content'
                className="content-display"
                dangerouslySetInnerHTML={{__html:preview}}
            >
            </div>
        </div>
    );
}


export default Content;
