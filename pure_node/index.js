// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 5000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello world!");
// })

// server.listen(port, hostname, () => {
//     console.log(`Server is running on http://${hostname}:${port}`);
// });

//handlebars
const express = require('express');
const { engine } = require('express-handlebars');
const PORT = 5000;
const app = express();

const PageDetails = { title: "Home", menu: ["Home", "About", "Contact"] };

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get("/", (req, res) => {
    // res.send("Hello world!")
    // res.json({ name: "Joe" });
    res.render("home", PageDetails);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});