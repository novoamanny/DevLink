const express = require('express');
const {check, validationResult} = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const keys = require('../../config/default');


const router = express.Router();

const User = require('../../models/User');

const gravatar = require('gravatar');


// @route GET api/users
// @desc Test route
// @access Public
router.post('/',
    [
        check('name', 'Name is required...').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
    ],
     (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        const {name, email, password} = req.body;



        // See if user exists
        User.findOne({email: email})
            .then(user => {
                if(user){
                    res.status(400).json({errors: [{msg: 'User already exists...'}]});
                }else{
                     // // Get users gravatar
                // const avatar = gravatar.url(email, {
                //     s:'200',
                //     r: 'pg',
                //     d: 'mm'
                // })
        
        
                // Create User
                const newUser = new User ({
                    name,
                    email,
                    // avatar,
                    password
                });
        
        
                // Encrypt Password
                // const salt = bcrypt.genSalt(10);
        
                // newUser.password = bcrypt.hash(password, salt);
        
                // newUser.save();

                bcrypt.genSalt(10, (err, salt)=>{
                    bcrypt.hash(newUser.password, salt, (err, hash)=>{

                        if(err) throw err;

                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
                
        
                // Return jsonwebtoken

                const payload ={
                    user:{
                        id: newUser.id,
                    }
                }

                jwt.sign(payload, keys.jwtSecret, {expiresIn: 3600},(err, token)=>{
                    res.json({
                        success: true,
                        token: 'Bearer ' + token
                    })
                })
        
                
                }
            });

        

});


module.exports = router;