import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import greeting from './greeting';

const reducer = combineReducers({
  greeting
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
