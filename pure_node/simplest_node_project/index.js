const express = require("express");
const fruitsRoute = require("./routes/fruits")

//create app
const app = express();
const fruits = [
    {id: 1, fruit: "Apple"},
    {id: 2, fruit: "Orange"},
    {id: 3, fruit: "Kiwi"}
];

//logger
function logger(req, res, next) {
    console.log(`${req.originalUrl} is called at ${new Date()}`);
    next();
}

//mount middleware
app.use(logger);

//routes API
app.use("/", fruitsRoute);

const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running");
});