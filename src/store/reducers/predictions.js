/**
 * Predictions store initial state.
 */
const INITIAL_STATE = {
    hasPrediction: false,
    idleTime: 3000,
    isPredicting: false,
    maxSize: 75,
    prediction: ''
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
        case 'RESET_PREDICTION':
            return {
                ...state,
                isPredicting: false,
                expectedId: null,
                prediction: '',
                hasPrediction: false
            }
        default:
            return state;
    }
}


export default predictions;
