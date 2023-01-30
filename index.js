const express = require("express");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
//Middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true })); //middleware for parsing postbody format to object format
app.use("/api/user", authRoute);
app.use("/api/post", postRoute);
// app.use("/api/posts", postRoute);
app.listen(4000);
