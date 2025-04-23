const express=require('express')
const router=express.Router()
const taskAction =require('../controllers/task.controller')
const inputValidator= require('../middleware/validator')


router.post('/createTask',inputValidator,taskAction.createTask)
router.get('/getAllTask',taskAction.getAllTask)




module.exports=router
