const User = require('../models/users');
const signToken = require('../auth/index');

module.exports = {
    // list all users
    index: (req, res) => {
        User.find({}, (err, users) => {
            res.json(users)
        });
    },

    // get one user
    show: (req, res) => {
        User.findById(req.params.id, (err, user) => {
            res.json(user)
        });
    },

    // create a new user
    create: (req, res) => {
        User.create(req.body, (err, user) => {
            if(err) return res.json({
                success: false,
                code: err.code
            })
            // once user is created, generate a JWT and return to client"
            const token = signToken(user)
            res.json({
                success: true,
                message: "User create. Token attached.", token
            });
        });
    },

};