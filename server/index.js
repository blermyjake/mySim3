require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");
const massive = require("massive");
const cors = require("cors");
const port = process.env.PORT || 4000;
const app = express();
const session = require("express-session");

// APP Build Folder serve all files
// console.log(__dirname + "/../build");
app.use(express.static(__dirname + "/../build"));

app.use(bodyParser.json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 50000
    }
  })
);

massive(process.env.CONNECTION_STRING)
  .then(sim3DB => {
    app.set("db", sim3DB);
  })
  .catch(err => console.log(err));
// console.log("****HERE*****");

app.post("/api/getUser", controller.getUser);
app.post("/api/addUser", controller.addUser);

app.get("/api/getPostUser", controller.getPostUser);

// routing match object
app.post("/api/userPost/:id", controller.postByUserID);

// console.log("***HERE***");
app.put("/api/updatePost/:title", controller.update);

app.get("/api/getSession", controller.sessionID);

app.delete("/api/delete", controller.deleteByID);

// Build the APP for production catch all errors during build
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
