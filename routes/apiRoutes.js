const express = require('express');
const mongoose = require('mongoose');
const usersCtrl = require('../controllers/index');
const verifyToken = require('../auth').verifyToken;

//usersRouter helps to breakdown the API routes
const usersRouter = new express.Router();

const Product = require('../models/products.js')

/////////////////////////////////////////////DB Connection
let uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true }, 
    (err) => {
        console.log(err || 'Connect to MongoDB')
    });
////////////////////////////////////////////////////

usersRouter.route('/').get(usersCtrl.index)

usersRouter.route('/').post(usersCtrl.create)

// this is the signin route. It authenticates password
usersRouter.post('/authenticate', usersCtrl.authenticate)

usersRouter.get("/products", (req, res) => {
    Product.find({}, (err, data) => {
        if (err) {
            res.status(500).json("this is an error",err)
            return;
        }
        res.json(data)
    })
});

// this route serves as the software Firewall ... all routes after this
// point would need to have a verified token to proceed.
//protected routes need to be before the firewall
usersRouter.use(verifyToken)



usersRouter.route('/:id').get(usersCtrl.show)
// this is the signup route. It creates a new user

usersRouter.route('/:id').patch(usersCtrl.update)







module.exports = usersRouter;