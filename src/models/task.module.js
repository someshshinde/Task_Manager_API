const {DataTypes,Sequelize}=require('sequelize')

const db=require('../utils/db')

const Task =db.define('task',{

    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        required:true,
        
    },
    description:{
        type:DataTypes.STRING,
        required:true,
    },
    status:{
        type:DataTypes.ENUM('pending','done'),
        defaultValue:'pending',
        required:true
    },
    dueDate:{
        type:DataTypes.DATE,
        required:true
    },
},{
    createdAt:'created_at',
})

module.exports=Task
