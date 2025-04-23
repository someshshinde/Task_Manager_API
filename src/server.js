require('dotenv').config();
const db=require('./utils/db')
const app = require('./app');

db.sync({force:false}).then(()=>{
    console.log('Database Synced Successfully')
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server Started on http://localhost:${PORT}`)
    });
}).catch((err)=>{
    console.log('Database Sync Failed',err)
})