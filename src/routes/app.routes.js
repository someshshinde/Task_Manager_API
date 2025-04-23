const express=require('express')
const router=express.Router()
const taskAction =require('../controllers/task.controller')
const {inputValidator}= require('../middleware/task_validator')


router.post('/createTask',inputValidator,taskAction.createTask)
router.get('/getAllTask',taskAction.getAllTask)
router.get('/statusCount',taskAction.statusCount)



module.exports=router
