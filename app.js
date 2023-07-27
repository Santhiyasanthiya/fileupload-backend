const express = require("express");
const app = express();
require('dotenv').config();
require("./db/conn");
const cors = require("cors")
const router = require  ("./routes/router")

const port = process.env.PORT;


app.use(express.json())
app.use(cors());


app.use("/uploads",express.static("./uploads"))
app.use(router);

app.get("/", function (request, response) {
  response.send("File upload");
});

app.listen(port, ()=>{
console.log("server Started")
});

