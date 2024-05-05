import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import {
  load_todo,
  load_todo_success,
  add_todo,
  add_todo_success,
  rem_todo,
  rem_todo_success,
  modify_todo,
  modify_todo_success,
  clear_todo_completed,
  clear_todo_completed_success,
  modify_todo_edit,
  modify_todo_edit_success,
  modify_todo_name,
  modify_todo_name_success,
} from '../actions/todo.action'

function* load_todo_data() {
  const todoData = yield axios.get('/api/todos')
  yield put(load_todo_success(todoData))
}

function* add_todo_data(action) {
  const addData = yield axios.post('/api/todos', {taskName: action.payload})
  yield put(add_todo_success(addData.task))
}

function* rem_todo_data(action) {
  const remData = yield axios.delete('/api/todos', {
    params: {
      id: action.payload
    }
  })
  yield put(rem_todo_success(remData.tasks.id))
}

function* modify_todo_data(action) {
  const modifyData = yield axios.put('/api/todos/isCompleted', action.payload)
  yield put(modify_todo_success(modifyData.task))
}

function* clear_todo_completed_data() {
  yield axios.delete('/api/todos/clearCompleted')
  yield put(clear_todo_completed_success())
}

function* modify_todo_edit_data(action) {
  const editData = yield axios.put('/api/todos/isEditing', action.payload)
  yield put(modify_todo_edit_success(editData.task))
}

function* modify_todo_name_data(action) {
  const ret = yield axios.put('/api/todos', action.payload)
  yield put(modify_todo_name_success(ret.task))
}

export default function* todoSaga() {
  yield takeEvery(load_todo, load_todo_data)
  yield takeEvery(add_todo, add_todo_data)
  yield takeEvery(rem_todo, rem_todo_data)
  yield takeEvery(modify_todo, modify_todo_data)
  yield takeEvery(clear_todo_completed, clear_todo_completed_data)
  yield takeEvery(modify_todo_edit, modify_todo_edit_data)
  yield takeEvery(modify_todo_name, modify_todo_name_data)
}