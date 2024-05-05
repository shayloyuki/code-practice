/*
 * @Date: 2024-05-05 18:22:00
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-05 18:25:12
 * @FilePath: \todolist\front\src\axios.config.js
 */
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3005'

axios.interceptors.response.use(res => res.data)