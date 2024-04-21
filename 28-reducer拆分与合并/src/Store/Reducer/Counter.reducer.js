/*
 * @Date: 2024-04-17 07:54:31
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-22 01:40:16
 * @FilePath: \28-reducer拆分与合并\src\Store\Reducer\Counter.reducer.js
 */
import {INCREMENT, INCREMENT_N, DECREMENT} from '../Action_types/Counter.action.types'

const initialState = {
  count: 6
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      }
    case DECREMENT:
      return {
        count: state.count - 1
      }
    case INCREMENT_N:
      return {
        count: state.count + action.payload
      }
    default:
      return state
  }
}