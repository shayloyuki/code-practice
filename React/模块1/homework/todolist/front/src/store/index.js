import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/root.reducer'
import rootSaga from './sagas/root.saga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store