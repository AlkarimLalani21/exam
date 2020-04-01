const restaurant =require('../controllers/restaurants.js')

module.exports = function(app){

    app.get('/restaurants', (req,res)=>{
        restaurant.restaurants(req,res);
    })
    app.post('/restaurants/new', (req,res)=>{
        restaurant.create(req,res);
    })
    app.get('/restaurants/:id',(req,res)=>{
        restaurant.showRestaurant(req,res);
    })
    app.get('/restaurants/:id/update', (req,res)=>{
        restaurant.showRestaurant(req,res);
    })
    app.put('/restaurants/:id',(req,res) =>{
        console.log(req.body)
        restaurant.update(req,res);
    })
    app.delete('/restaurants/:id', (req,res)=>{
        restaurant.delete(req,res);
    })
    app.post('/restaurants/:id/review',(req,res)=>{
        restaurant.rating(req,res);
    })
}