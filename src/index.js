const express = require("express");
const {json} = require("express");
const connect = require("./config/database");
const todoRoute = require("./router/TodoRoutes");


const app = express();
connect();
app.use(json());
app.use("/todo", todoRoute);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Just setting the server");
})

app.listen(PORT, ()  => console.log(`Server running on ${PORT}`))