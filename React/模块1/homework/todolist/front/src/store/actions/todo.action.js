/*
 * @Date: 2024-05-05 09:11:14
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-05 17:36:57
 * @FilePath: \todolist\src\store\actions\todo.action.js
 */
import { createAction } from "redux-actions";

// 加载列表
export const load_todo = createAction('load_todo')
export const load_todo_success = createAction('load_todo_success')

// 添加任务
export const add_todo = createAction('add_todo')
export const add_todo_success = createAction('add_todo_success')

// 删除任务
export const rem_todo = createAction('rem_todo')
export const rem_todo_success = createAction('rem_todo_success')

// 修改任务状态：是否完成
export const modify_todo = createAction('modify_todo')
export const modify_todo_success = createAction('modify_todo_success')

// 删除已完成任务
export const clear_todo_completed = createAction('clear_todo_completed')
export const clear_todo_completed_success = createAction('clear_todo_completed_success')

// 筛选任务
export const filter_todo = createAction('filter_todo')

// 修改编辑状态
export const modify_todo_edit = createAction('modify_todo_edit')
export const modify_todo_edit_success = createAction('modify_todo_edit_success')

// 修改任务名称
export const modify_todo_name = createAction('modify_todo_name')
export const modify_todo_name_success = createAction('modify_todo_name_success')