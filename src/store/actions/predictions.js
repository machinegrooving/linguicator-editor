/**
 * I update predictions maximum size.
 *
 * @param {number} size - new predictions maximum size
 *
 * @returns {object} - action to be dispatched
 */
function setMaxSize(size)
{
    return {
        type: 'SET_MAX_SIZE',
        payload: {
            size
        }
    };
}


/**
 * I update idle time until predictions are scheduled.
 *
 * @param {number} time - time until predictions in miliseconds
 *
 * @returns {object} - action to be dispatched
 */
function setIdleTime(time)
{
    return {
        type: 'SET_IDLE_TIME',
        payload: {
            time
        }
    };
}


export {
    setMaxSize,
    setIdleTime
}
