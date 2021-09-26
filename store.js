import { createStore, applyMiddleware } from 'redux';
import createSageMiddleware from 'redux-saga';
import { reducer } from './app/models/root-reducer';
import { handler as puzzleSaga } from './app/models/puzzle/sagas';

const sagaMiddleware = createSageMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(puzzleSaga);

export { store };