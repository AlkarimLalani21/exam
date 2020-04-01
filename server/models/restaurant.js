const mongoose = require('mongoose');

const RateSchema = new mongoose.Schema({
    name: {type: String, required: true},
    stars:{type: Number, required: true, minlength:[1, "Must have a rating"]},
    review: {type: String, default:true, minlength: [3, "At least 3 character "]},
},{timestamps: true});
const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: [3, "At least 3 character "]},
    cuisine: { type: String, required: true, minlength: [3, "Needs 3 characters or more"]},
    rates:[RateSchema]
}, {timestamps: true});
const restaurantRates = {
    Restaurant : mongoose.model('Restaurant', RestaurantSchema),
    Rate : mongoose.model('Rate', RateSchema)
}
module.exports = restaurantRates;