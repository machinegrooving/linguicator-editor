import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';


/**
 * Create application store with Redux-Dev-Tools support.
 */
const store = createStore(rootReducer, composeWithDevTools());


export default store;
