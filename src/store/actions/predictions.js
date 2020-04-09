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


/**
 * I reset the current prediction.
 *
 * @returns {object} - action to be dispatched
 */
function resetPrediction()
{
    return {
        type: 'RESET_PREDICTION',
        payload: {}
    }
}


/**
 * I wait for a prediction from backstage.
 *
 * @param {string} id - expected prediction id
 *
 * @returns {object} - action to be dispatched
 */
function waitPrediction(id)
{
    return {
        type: 'WAIT_PREDICTION',
        payload: {
            id
        }
    }
}


export {
    setMaxSize,
    setIdleTime,
    resetPrediction,
    waitPrediction
}
