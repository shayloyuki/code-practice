/*
 * @Date: 2024-04-23 07:56:12
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-23 09:21:54
 * @FilePath: \31-redux-thunk异步解决方案\src\store\Reducers\person.reducer.js
 */
const initialState = {
  person: [
    {
      id: 1,
      name: 'lx'
    }
  ]
}

function PersonReducer(state = initialState, action) {
  switch (action.type) {
    // case 'getPersons':
    case 'loadPersonSuccess':
      return {
        person: [
          ...state.person,
          ...action.payload
        ]
      }
    default:
      return state
  }
}

export default PersonReducer