/*
 * @Date: 2024-04-26 00:57:41
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-26 23:31:01
 * @FilePath: \2.todolist案例\src\store\actions\todo.action.js
 */

/* 
 * 01 可以发送请求获取数据                load_todo
 * 02 当异步操作完成后还需要触发新的指令      load_todo_success
*/
import {createAction} from 'redux-actions'

// 1 获取 todos 列表的相关指令
export const load_todo = createAction('load_todo')
export const load_todo_success = createAction('load_todo_success')

// 2 新增 todo 列表项的相关指令
export const add_todo = createAction('add_todo')
export const add_todo_success = createAction('add_todo_success')

// 3 删除 todo 列表项的相关指令
export const remove_todo = createAction('remove_todo')
export const remove_todo_success = createAction('remove_todo_success')

// 4 更改 todo 列表项状态相关指令
export const modify_todo = createAction('modify_todo')
export const modify_todo_success = createAction('modify_todo_success')

// 5 更改 todo 列表筛选条件的指令
export const modify_todo_filter = createAction('modify_todo_filter')

// 6 清除已完成列表项的相关指令
export const clear_todo_completed = createAction('clear_todo_completed')
export const clear_todo_completed_success = createAction('clear_todo_completed_success')