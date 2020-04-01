const { Restaurant } = require('../models/restaurant.js');
const { Rate } = require('../models/restaurant.js');


module.exports = {
    restaurants: function(req,res){
        Restaurant.find()
            .then(restaurants => {
                let response = {
                    restaurants: restaurants,
                    message: authors.length ? 'restaurant found' : 'No restaurant found'
                }
                console.log('Get method controller level');
                res.json(response)
            })
            .catch(err => {
                res.json(err)
            })
    },

    create: function(req,res){
        console.log(req.body.name)
    let restaurant = new Restaurant()
    restaurant.name = req.body.name;
    restaurant.cuisine = req.body.cuisine;
    restaurant.save()
        .then(restaurant => {
            res.json(restaurant)
        })
        .catch(err => {
            console.log("Error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.json(err);
    })},

    update: function (req, res) {
        Restaurant.findOne({ _id: req.params.id })
            .then(restaurant => {
              restaurant.name = req.body.name;
              restaurant.cuisine = req.body.cuisine;
                return restaurant.save()
  
            })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                bad=[];
                for (var key in err.errors) {
                    bad.push(err.errors[key].message);
                }
                res.json(bad);
            })
    },

    showRestaurant: function(req,res){
        Restaurant.findOne({_id: req.params.id})
        .then(restaurant=>{
            res.json(restaurant);
        })
        .catch(err => {
            console.log("Error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.json(err);
        })
    },

    rating: function(req,res){
        let rate = new Rate()
        rate.name = req.body.name;
        rate.stars = req.body.stars;
        rate.review = req.body.review;
        rate.save()
        Restaurant.findOne({_id: req.params.id})

        .then(restaurant =>{
            restaurant.rates.push({name:req.body.name, stars:req.body.stars, review:req.body.review})
            restaurant.save()
            .then(result => {
                console.log("show ratings ",result)
                res.json(result)
            })
        })},

        delete: function (req, res) {
            console.log('DELETE');
            Restaurant.remove({ _id: req.params.id })
                .then(restaurant => {
                    res.json(restaurant)
                })
                .catch(err => res.json(err));
        },

}