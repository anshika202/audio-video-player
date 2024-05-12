import {combineReducers, createStore} from 'redux'
import playerReducer from "../actions/playerReducer";


 const reducer = combineReducers({
    player: playerReducer
 });

 const store = createStore(reducer);

export default store;