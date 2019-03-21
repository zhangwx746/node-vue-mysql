// sql语句
let sql = {
  user: {
    login: 'SELECT * FROM user WHERE user_name = ?;',
    register: 'INSERT INTO user (user_name, user_pwd, time) VALUES (?,?,?)'
  }
}

module.exports = sql