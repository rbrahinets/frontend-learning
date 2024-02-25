import {combineReducers} from 'redux';
import success from './successReducer';
import {posts} from './posts/reducer'

export default combineReducers({
    success,
    posts,
});
