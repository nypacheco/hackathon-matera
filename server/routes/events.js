import express from 'express';
import authenticate from '../middlewares/authenticate';

let router = express.Router();

router.post('/', authenticate, (req, res) => {
    console.log(req);
    res.status(201).json({user: 'z'});
});

export default router;
