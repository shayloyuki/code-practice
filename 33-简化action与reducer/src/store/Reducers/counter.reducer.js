/*
 * @Date: 2024-04-23 07:56:12
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-23 12:19:06
 * @FilePath: \33-简化action与reducer\src\store\Reducers\counter.reducer.js
 */

import {handleActions as createReducer} from 'redux-actions'
import {increment_action, decrement_action} from '../Actions/counter.action'

const initialState = {
  count: 10
}

// function CounterReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'increment':
//       return {
//         count: state.count + 1
//       }
//     case 'decrement':
//       return {
//         count: state.count - 1
//       }
//     default:
//       return state
//   }
// }

const CounterReducer = createReducer({
  [increment_action]: (state, action) => ({count: state.count + 1}),
  [decrement_action]: (state, action) => ({count: state.count - 1})
}, initialState)

export default CounterReducer