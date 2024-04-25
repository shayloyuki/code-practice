/*
 * @Date: 2024-04-22 00:36:58
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-22 00:39:09
 * @FilePath: \28-reducer拆分与合并\src\Store\Actions\Person.action.js
 */
import {ADDPERSON} from '../Action_types/Person.action.types'

export const addPerson = (payload) => ({type: ADDPERSON, payload})
