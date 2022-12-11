const Sequelize=require('sequelize');
const db= require('../../db');

// retailer_id, wholesaler_id, stock_amount, date

module.exports = db.define('Stock',{
    retailer_id:{
        type:Sequelize.INTEGER(255),
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        ref:"Retailer"
    },
    wholesaler_id:{
        type:Sequelize.INTEGER(255),
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        ref:"Wholesaler"
    },
    
    stock_amount:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    date:{
        type:Sequelize.DATE,
        allowNull:false
    }
})