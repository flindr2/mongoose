const express = require("express");
const mongoose = require("mongoose");
const animalsRouter = require("./routes/animals");

mongoose.connect("mongodb+srv://cluster0.x4lmd.mongodb.net/zoo", {
    user: "fredriklindroth",
    pass: "4XHU0JIURD2huwS5",
});

const app = express();
app.use(express.json());
app.use("/animal", animalsRouter);

app.get("/", (request, response) => {
  response.send("Hello World!");
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
