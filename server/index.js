const express = require("express");
const massive = require("massive");
const bodyParser = require("body-parser");
const controller = require("./controller");
const session = require('express-session')
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

app.get("/api/houses", controller.read);
app.post("/api/houses", controller.create);
app.delete("/api/houses", controller.delete);
// app.put("/api/houses/:id",controller.edit)

massive(process.env.CONNECTION_STRING)
  .then(db => {
    console.log("YOU ARE AWESOME, THE GREATEST FOR SURE, NO DOUBT!^_^");
    app.set("db", db);
    db.init();
  })
  .catch(err => {
    console.log("YOU GOT THIS NO WORRIES!!");
  });

const port = process.env.port || 4000;
app.listen(port, () => {
  console.log(`Listnening on port ${port}`);
});
