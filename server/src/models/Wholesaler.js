const Sequelize=require('sequelize');
const db= require('../../db');

module.exports = db.define('Wholesaler',{
id:{
    type:Sequelize.INTEGER(255),
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    mobile_number:{
        type:Sequelize.STRING,
        allowNull:false,
    }
})