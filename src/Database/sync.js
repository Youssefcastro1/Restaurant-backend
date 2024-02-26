const connection=require('./connection');
const restaurant=require('../Models/restaurant');
const product = require('../Models/product');

function sync(){
    restaurant.hasMany(product,{
        foreignKey: 'restaurantId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(restaurant,{
        foreignKey: 'restaurantId',
    })
}
sync();