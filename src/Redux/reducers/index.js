import { combineReducers } from 'redux'

import reviews from './reviews';
import movies from './movies';

export default combineReducers({
    reviews,
    movies
})