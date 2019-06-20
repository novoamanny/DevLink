const jwt = require('jsonwebtoken');


module.export = (req, res, next) =>{
    // get token from header
    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({msg: 'No token, authorization denied...'});
    }

}
