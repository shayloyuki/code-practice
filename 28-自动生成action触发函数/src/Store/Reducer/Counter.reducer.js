/*
 * @Date: 2024-04-17 07:54:31
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-17 22:39:08
 * @FilePath: \28-action传递参数\src\Store\Reducer\Counter.reducer.js
 */
const initialState = {
  count: 6
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1
      }
    case 'decrement':
      return {
        count: state.count - 1
      }
    case 'increment_n':
      return {
        count: state.count + action.payload
      }
    default:
      return state
  }
}