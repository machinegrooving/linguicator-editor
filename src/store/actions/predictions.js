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


export {
    setMaxSize
}
