import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';

let router = express.Router();

router.post('', (req, res) => {
    console.log(req.body);
    var request = require('request');
    var responsedByApi = null;
    request.post({url:'http://api-hackathon.matera.com/api/v1/auth/login', form: req.body},function(err,httpResponse,body){
        console.log(body);
    });
    res.status(200).json({access_token: 'e7bb8dfd-21d0-4782-8b6c-cecfef5f12fa'});
});

export default router;
