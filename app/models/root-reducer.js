import { combineReducers } from 'redux';
import { reducer as puzzleReducer } from './puzzle/reducers';

const reducer = combineReducers({
    puzzle: puzzleReducer,
});

export { reducer };