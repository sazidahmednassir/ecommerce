import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const reducer = combineReducers({})
const initalState= {}
const middleware = [thunk]
const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

export default store