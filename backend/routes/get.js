// this router defines all endpoints for get requests!

const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("This is the landing endpoint for our pokedex! Feel free to try out our two endpoints like: \n /get-all-pokemons \n /get-pokemon/:name=");
})

router.get('/get-all-pokemons', (req, res)=>{
    res.send("All pokemons should be listed out: ");
})

router.get('/get-pokemon', (req, res)=>{
    res.send("Pokemon of choice: ");
})


module.exports = router;