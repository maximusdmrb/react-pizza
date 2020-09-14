import { createStore } from 'redux';

import rootReducer from './reducers';

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

window.store = store;
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

export default store;
