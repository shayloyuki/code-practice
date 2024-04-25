/*
 * @Date: 2024-04-17 23:12:13
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-17 23:30:00
 * @FilePath: \28-设置action类型常量\src\Store\Actions\Counter.action.js
 */
import {INCREMENT, INCREMENT_N, DECREMENT} from '../Action_types/Counter.action.types'

export const increment = () => ({type: INCREMENT})
export const increment_n = (payload) => ({type: INCREMENT_N, payload})
export const decrement = () => ({type: DECREMENT})