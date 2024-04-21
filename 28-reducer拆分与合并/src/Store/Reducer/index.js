/*
 * @Date: 2024-04-22 00:55:16
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-22 01:00:44
 * @FilePath: \28-reducer拆分与合并\src\Store\Reducer\index.js
 */
import {combineReducers} from 'redux'
import CounterReducer from './Counter.reducer'
import PersonReducer from './Person.reducer'

export default combineReducers({
  counter: CounterReducer,
  person: PersonReducer
})

// {counter: {count}, person: [{}]}