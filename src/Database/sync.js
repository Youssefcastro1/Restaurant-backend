const connection = require('./connection.js');

//Models
const restaurant = require('../Models/restaurant');
const product = require('../Models/product');
const department = require('../Models/department.js');
const city = require('../Models/city.js');

const departmentjson = require('./jsonfiles/departmentjson.js');
const cityjson = require('./jsonfiles/cityjson.js');

function sync(){
    //Foreing Key restaurant - product
    restaurant.hasMany(product,{
        foreignKey: 'restaurantId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(restaurant,{
        foreignKey: 'restaurantId'
    });

    //Foreing Key department - city
    department.hasMany(city,{
        foreignKey: 'departmentId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    city.belongsTo(department,{
        foreignKey: 'departmentId'
    });

    //Foreing Key city - restaurant
    city.hasMany(restaurant,{
        foreignKey: 'cityId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    restaurant.belongsTo(city,{
        foreignKey: 'cityId'
    });
    
    // create json
    departmentjson.createDepartments();
    cityjson.createCities();
}

sync();