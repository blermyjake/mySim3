const axios = require("axios");

module.exports = {
  getUser: (req, res, next) => {
    const db = req.app.get("db");

    db.getUser([username, password])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => console.log(err));
    res.status(500).send(err);
  },

  addUser: (req, res, next) => {
    const db = req.app.get("db");

    db.addUser([username, password])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => console.log(err));
    res.status(500).send(err);
  }
};
