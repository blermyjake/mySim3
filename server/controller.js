// const axios = require("axios");

const getUser = (req, res, next) => {
  let { username, password } = req.body;
  console.log(req.session);
  const db = req.app.get("db");
  // console.log("***controller hit*****");
  db.getUser([username, password])
    .then(response => {
      (req.session.id = response[0].id),
        (req.session.username = response[0].username);
      console.log(response);
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

const addUser = (req, res) => {
  let { username, password } = req.body;

  const db = req.app.get("db");

  db.addUser([username, password])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => console.log(err));
  res.status(500).send(err);
};

const sessionID = (req, res) => {
  // console.log("session");
  res.status(200).send({
    username: req.session.username,
    id: req.session.id
  });
};

const getPostUser = (req, res) => {
  const db = req.app.get("db");
  db.postUser()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const update = (req, res) => {
  // console.log(req.params);
  let { title } = req.params;
  let { content } = req.body;

  const db = req.app.get("db");
  db.updatePost([title, content])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const deleteByID = (req, res) => {
  let { id } = req.query;
  console.log(id);
  const deleteID = parseInt(id);

  const db = req.app.get("db");
  db.delete([deleteID])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

module.exports = {
  getUser,
  addUser,
  sessionID,
  getPostUser,
  update,
  deleteByID
};
