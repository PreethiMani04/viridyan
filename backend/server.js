const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const plantRoutes = require("./routes/plantRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/viridyan")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

app.use("/plants", plantRoutes);

app.listen(5000, ()=>{
  console.log("Server running on port 5000");
});