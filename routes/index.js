const express  = require('express');
const {Router} = express;
const router = Router();
const Url = require('../module/url');

router.get('/:code',async (req,res) =>{
    try{
        const url = await Url.findOne({urlCode: req.params.code});
        if(url){
            return res.redirect(url.longUrl);
        }else{
            return res.status(404).json('No Url Found');
        }
    }
    catch(err){
        console.error(err);
        res.status(500).json('Server error');
    }
})



module.exports = router;
