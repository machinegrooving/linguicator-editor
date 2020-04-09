import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPrediction } from '../../store/actions/predictions';
import { waitPrediction } from '../../store/actions/predictions';
import { sanitize } from 'dompurify';
import { v4 as uuidv4 } from 'uuid';
import marked from 'marked';
import './Content.css'


/**
 * Linguiçator editor content component.
 *
 * @component
 */
function Content({socket})
{
    // component state hooks
    const [text, setText] = useState('');
    const [preview, setPreview] = useState('');
    const [scheduled, setScheduled] = useState(null);
    const dispatch = useDispatch();
    const predictor = useSelector(state => state.predictions);


    /**
     * I am called whenever text input is changed and set sanitized markdown preview.
     */
    useEffect(() =>
    {
        setPreview(sanitize(marked(text)));
    }, [text]);


    /**
     * I ask a prediction from the backstage.
     *
     * @returns {undefined} - nothing
     */
    function askForPrediction()
    {
        // generate prediction request id
        const id = uuidv4();

        // update application state to wait for prediction
        dispatch(waitPrediction(id));

        // create prediction request payload
        const data = JSON.stringify({
            id,
            resource: '/predict',
            data: {
                text,
                length: predictor.maxSize
            }
        });

        // send payload through socket
        socket.send(data);
    }


    /**
     * I update predictions schedule state.
     *
     * @returns {undefined} - nothing
     */
    function updateSchedule()
    {
        // prediction scheduled: cancel current scheduled prediction
        if (scheduled !== null)
        {
            clearTimeout(scheduled);
            setScheduled(null);
        }

        // reset prediction state on store
        dispatch(resetPrediction());

        // schedule next prediction attempt
        const id  = setTimeout(askForPrediction, predictor.idleTime);
        setScheduled(id);
    }


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
        updateSchedule();
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
