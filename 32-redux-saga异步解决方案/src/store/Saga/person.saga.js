import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* loadPerson() {
  const person = yield axios.get('http://localhost:3005/api/getUsers').then(res => res.data)
  yield put({type: 'load_person_success', payload: person})
}

export default function* personSaga() {
  yield takeEvery('load_person', loadPerson)
}