// Require Libraries
const express = require('express');
require('dotenv').config();
// console.log("process.env", process.env);
// Require tenorjs near the top of the file
const Tenor = require("tenorjs").client({
    // Replace with your own key
    // https://tenor.com/developer/keyregistration
    "Key": process.env.KEY, // https://tenor.com/developer/keyregistration
    "Filter": "off", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
});

// App Setup
const app = express();
app.use(express.static("public"));

// Middleware
const {engine, create} = require("express-handlebars");

// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

app.engine(".hbs", engine({ defaultLayout: "main", extname: ".hbs" })); 
app.set("view engine", ".hbs");
app.set("views", "./views");

// const hbs = exphbs.create({
//     defaultLayout: 'main',
//     extname: "hbs"
// });

// app.engine('handlebars', hbs.engine);

// const exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");


// Routes

// app.get('/', (req, res) => {
//     // set the url of the gif
//     const gifUrl = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245'
//     // render the hello-gif view, passing the gifUrl into the view to be displayed
//     res.render('hello-gif.handlebars', { gifUrl })
//   });

// app.get('/greetings/:name', (req, res) => {
//     // grab the name from the path provided
//     const name = req.params.name;
//     // render the greetings view, passing along the name
//     res.render('greetings', { name });
// })

app.get('/', (req, res) => {
    // Handle the home page when we haven't queried yet
    let term = "";
    if (req.query.term) {
        term = req.query.term;
    }
    // Tenor.search.Query("SEARCH KEYWORD HERE", "LIMIT HERE")
    Tenor.Search.Query(term, "10")
    .then(response => {
        // store the gifs we get back from the search
        const gifs = response;
        // pass the gifs as an object into the home page
        res.render('home', { gifs });
    }).catch(console.error);
});

// Start Server
const PORT = 3000;
app.listen(3000, () => {
  console.log(`Giffy App listening on port localhost: ${3000}!`);
});
