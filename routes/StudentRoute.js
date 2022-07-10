const { success } = require('daisyui/src/colors');
const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{

    res.send({success: true});
})




module.exports =router;