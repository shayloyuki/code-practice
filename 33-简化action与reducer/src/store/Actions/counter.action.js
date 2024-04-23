/*
 * @Date: 2024-04-23 08:07:15
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-23 12:15:49
 * @FilePath: \33-简化action与reducer\src\store\Actions\counter.action.js
 */
import {createAction} from 'redux-actions'

// export const increment = () => ({
//   type: 'increment'
// })

// export const decrement = () => ({
//   type: 'decrement'
// })

export const increment_action = createAction('increment')
export const decrement_action = createAction('decrement')