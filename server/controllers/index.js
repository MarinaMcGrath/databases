var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((data) => res.end(JSON.stringify(data)));

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console.log(req.body)
      models.messages.post(() => res.end(), req.body);      
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((data) => res.end(JSON.stringify(data)));
      
    },
    post: function (req, res) {
      models.users.post(() => res.end(), req.body);      
    }
  }
};

