const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const items = require("./routes/api/items");

const app = express();

//Body Parser Middleware
app.use(bodyParser.json());

//DB Config
const db = require("./config/key").mongoURI;

//Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected.."))
  .catch(err => console.log(err));

//Use Routes
app.use("/api/items", items);

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set Static folder
  app.use(express.static("../shopping-mern-frontEnd/build"));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(
        __dirname,
        "../shopping-mern-frontEnd",
        "build",
        "index.html"
      )
    );
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
