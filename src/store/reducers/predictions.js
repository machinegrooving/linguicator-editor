/**
 * Predictions store initial state.
 */
const INITIAL_STATE = {
    maxSize: 75,
    idleTime: 3000
};


/**
 * Predictions reducer.
 *
 * @param {object} state - current predictions store state
 * @param {object} action - dispatched action
 *
 * @returns {object} - updated state
 */
function predictions(state = INITIAL_STATE, action)
{
    switch (action.type) {
        case 'SET_MAX_SIZE':
            return {
                ...state,
                maxSize: action.payload.size
            };
        case 'SET_IDLE_TIME':
            return {
                ...state,
                idleTime: action.payload.time
            }
        default:
            return state;
    }
}


export default predictions;
