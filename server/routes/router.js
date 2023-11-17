const express = require('express');
const routes = express.Router();


const renderfilecalling = require('../services/render');
const controllerfilecalling = require('../controller/controller')


 routes.get('/',renderfilecalling.index);

 routes.get('/thankyou',renderfilecalling.thankyou);

 routes.post('/api/users',controllerfilecalling.create);
 
 routes.get('/api/users',controllerfilecalling.find);


 module.exports=routes;