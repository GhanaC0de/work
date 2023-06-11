import {applyMiddleware, createStore} from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './counterReducer';
import usersReducer from './usersReducer';
import loginReducer from './loginReducer';



const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
    login: loginReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;