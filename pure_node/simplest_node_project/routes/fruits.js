const express = require("express");
const router = express.Router();

const fruits = [
    { id: 1, fruit: "Apple" },
    { id: 2, fruit: "Orange" },
    { id: 3, fruit: "Kiwi" }
];

/**
 * @GET all fruits
 */
 router.get("/fruits", (req, res) => {
    if (req.query.id) {
        const { id } = req.query;
        //find single fruit
        const fruit = fruits.filter(fr => fr.id === parseInt(id));
        res.json(fruit[0])
    } else {
        res.json(fruits)
    }
    res.json(fruits);
});

/**
 * @GET single fruit
 */
 router.get("/admin", (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    //find single fruit
    const fruit = fruits.filter(fr => fr.id === parseInt(id));
    res.json(fruit)
});

module.exports = router;
