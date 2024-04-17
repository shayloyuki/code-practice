/*
 * @Date: 2024-04-17 07:54:31
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-17 22:15:59
 * @FilePath: \28-组件修改store数据\src\Store\Reducer\Counter.reducer.js
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
    default:
      return state
  }
}