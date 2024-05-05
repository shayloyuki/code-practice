/*
 * @Date: 2024-04-23 07:56:12
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-23 11:05:56
 * @FilePath: \32-redux-saga异步解决方案\src\store\Reducers\person.reducer.js
 */
const initialState = {
  person: []
}

function PersonReducer(state = initialState, action) {
  switch (action.type) {
    case 'load_person_success':
      return {
        person: action.payload
      }
    default:
      return state
  }
}

export default PersonReducer