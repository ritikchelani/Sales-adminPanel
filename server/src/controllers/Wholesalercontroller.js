const Wholesaler=require('../models/Wholesaler');




const allWholesalers = async (req,res)=>{
    const wholesaler = await Wholesaler.findOne(req.params.id);
    await res.send('OK TESTED',wholesaler);
    await res.render('apione');
}





const home = async (req,res)=>{
    await  res.render('home');
}


module.exports={
    home,
    allWholesalers
}