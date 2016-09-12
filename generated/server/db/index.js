'use strict';
var db = require('./_db');
module.exports = db;

// eslint-disable-next-line no-unused-vars
var User = require('./models/user');
var Products = require('./models/products');
var Category = require('./models/product_category');
var Review = require('./models/reviews');
var Order = require('./models/order');

// if we had more models, we could associate them in this file
// e.g. User.hasMany(Reports)

//order has many products:
Order.hasMany(Products);
//order has one User:
Order.hasOne(User);

//join table: a product can have multiple product types
Product.belongsToMany(ProductType, {through: 'ProductCategory'});
//join table: a product can have multiple reviews
Product.hasMany(Review, {through: 'ProductReviews'});

//relationship needed: product has one farmer/originator/seller

//review has one productId
Review.hasOne(Product);
//review has one UserId
Review.hasOne(User);
