const express = require("express");
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes/routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", routes);


app.listen(process.env.PORT, () => {
  console.log("Server listening on port:", process.env.PORT)
})