const controller = {};
const connection = require("../dbConnection/connection");
const PokeModel = require('../models/pokemon.model')

controller.index = async (req, res)=>{
    try{
    const title = 'index desde el servidor con pug y una variable';
    await connection();
    const allPokemons = await PokeModel.find()
    console.log(allPokemons)
    res.render("index",{ title });
    }catch(err){
        console.error(err)
    }
};
module.exports = controller;