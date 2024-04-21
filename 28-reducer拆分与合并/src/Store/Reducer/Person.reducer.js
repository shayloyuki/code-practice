/*
 * @Date: 2024-04-22 00:34:36
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-22 00:39:56
 * @FilePath: \28-reducer拆分与合并\src\Store\Reducer\Person.reducer.js
 */
import {ADDPERSON} from '../Action_types/Person.action.types'

const initialState = [
  {
    id: 1,
    name: 'lx'
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDPERSON:
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}