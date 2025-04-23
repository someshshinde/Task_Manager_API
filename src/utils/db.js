const {Sequelize }=require('sequelize')

const db = new Sequelize(process.env.DATABASE_NAME,process.env.DATABASE_USER,process.env.DATABASE_PASSWORD,{
    host:process.env.DATABASE_HOST,
    dialect:process.env.DATABASE_DIALECT

})

connection=()=>{
    db.authenticate().then(()=>{
        console.log('Database Connected Successfully')
    }).catch((err)=>{
        console.log('Database Connection Failed',err)
    })
}
connection()


module.exports = db;