/*
 * @Date: 2024-04-26 00:57:41
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-26 01:37:10
 * @FilePath: \2.todolist案例\src\store\actions\todo.action.js
 */

/* 
 * 01 可以发送请求获取数据                load_todo
 * 02 当异步操作完成后还需要触发新的指令      load_todo_success
*/
import {createAction} from 'redux-actions'

export const load_todo = createAction('load_todo')
export const load_todo_success = createAction('load_todo_success')