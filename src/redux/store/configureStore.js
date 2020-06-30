import { createStore, combineReducers } from 'redux';

import appReducer from '../reducers/appReducer';

const rootReducer = combineReducers(
    { 
        app: appReducer,
    }
);

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;

