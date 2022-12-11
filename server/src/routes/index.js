const express= require('express');
const router=express.Router();
const {allWholesalers,home}=require('../controllers/Wholesalercontroller')

router.get('/',home)
router.get('/api/1/:id', allWholesalers)


module.exports=router;