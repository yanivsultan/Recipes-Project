const express = require('express')
const router = express.Router()
const request = require(`request`)



router.get(`/sanity`,function(req,res){
    console.log("OK")
    res.end()
})

router.get(`/recipes/:ingredient`, function(req,res){
    let ingredient = req.params.ingredient 
    console.log(req.params.ingredient)
    console.log(`HELLO: ${ingredient}`)
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`,function(error, response){
        const recipes = JSON.parse(response.body)
        console.log("OK")
        let orderedRecipes = recipes.results.map(r => ({title: r.title,thumbnail: r.thumbnail, link: r.href,ingredients: r.ingredients}))
        res.send(orderedRecipes)
    })
})




module.exports = router