const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();


const User = require('../../models/User');
const keys = require('../../config/default');

const validateLoginInput = require('../../validation/login');


// @route POST api/auth/login
// @desc Login route
// @access Public

router.post('/login', (req, res) => {
    const {errors, isValid} = validateLoginInput(req.body);

    // check Validation
    if(!isValid){
        return res.status(400).json(errors);
    }

    const {email, password} = req.body;
    
    // Find User by email
    User
        .findOne({email})
        .then(user => {

            if(!user){
                
                return res.status(404).json('Email not found...');
            }

            // Check Password
            bcrypt
                .compare(password, user.password)
                .then((isMatch, errors) =>{

                    if(isMatch){
                        // User Matched

                        const payload = {
                            id: user.id,
                            name: user.name,
                            // avatar: user.avatar
                        }

                        //Sign Token
                        jwt.sign(
                            payload, 
                            keys.jwtSecret, 
                            {expiresIn: 3600}, 
                            (err, token)=>{
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                        });
                    } else{
                        
                        return res.status(400).json('Password is incorrect...');
                    }
                });
        });
})





module.exports = router;