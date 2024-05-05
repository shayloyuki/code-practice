/*
 * @Date: 2024-04-22 21:59:15
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-22 22:13:30
 * @FilePath: \29-redux使用代码优化\src\store\Reducers\content.reducer.js
 */
import {ADDCONTENT} from '../Action_types/content.action.types'

const initialState = {
  content: ['默认内容']
}

function ContentReducer(state = initialState, action) {
  switch (action.type) {

    case ADDCONTENT:
      return {
        content: [
          ...state.content,
          action.payload
        ]
      }
    default: 
      return state
  }
}

export default ContentReducer