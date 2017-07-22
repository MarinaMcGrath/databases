var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      db.con.query('select message, message_Id from messages;', function (err, result, fields) {
        if (err) {
          throw err;
        } else {
          cb(result);
        }
      });
    }, // a function which produces all the messages
    post: function (cb, message) {
      console.log(message.text);
      db.con.query(`insert into messages (message) values (${JSON.stringify(message.text)});`, 
        function (err, result, fields) {
          if (err) {
            throw err;
          } else {
            cb(result);
          }
        });
    } // a function which can be used to insert a message into the database
  },
  users: {
    // Ditto as above.
    get: function (cb) {
      db.con.query('select user, user_Id from users;', function (err, result, fields) {
        if (err) {
          throw err;
        } else {
          cb(result);
        }
      });
    },
    post: function (cb, body) {
      db.con.query(`insert into users (userName) values (\'${body.username}\');`, 
        function (err, result, fields) {
          if (err) {
            throw err;
          } else {
            cb(result);
          }
        });
    }
  }
};

