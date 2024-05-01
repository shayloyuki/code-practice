/*
 * @Date: 2024-05-01 23:59:41
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-05-02 00:18:33
 * @FilePath: \3.React Hooks\src\auth.js
 */
class Authorized {
  constructor() {
    this.authorized = false
  }

  login() {
    this.authorized = true
  }

  logout() {
    this.authorized = false
  }

  isAuthorized() {
    return this.authorized
  }
}

// export default new Authorized()
const auth = new Authorized()
export default auth