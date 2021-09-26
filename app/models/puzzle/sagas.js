import { takeEvery, put } from 'redux-saga/effects';
import { 
    GET_PUZZLE_REQUEST, 
    GET_PUZZLE_REQUEST_SUCCESS, 
} from './actions';
import { initPuzzleGrid } from '../../Helpers/index';

function* handler() {
    yield takeEvery(GET_PUZZLE_REQUEST, getPuzzle);
}

function* getPuzzle(action) {
    try {
        yield put({
            type: GET_PUZZLE_REQUEST_SUCCESS,
            payload: action.payload,
        });
    } catch(err) {

    }
}

export { handler };