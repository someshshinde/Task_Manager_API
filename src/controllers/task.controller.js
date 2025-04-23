const task= require('../models/task.module')
exports.createTask=async (req,res)=>{
    try{
        const {title,description,status,dueDate}=req.body
        const TaskData=await task.create({
            title,
            description,
            status,
            dueDate
        })
        res.status(201).json({message:'Task Created Successfully',data:TaskData})

    }catch(err){
        res.status(400).json({ error: err.message });
    }
} 

exports.getAllTask=async(req,res)=>{
    try {
        const filter = {};
        if (req.query.status) {
          filter.status = req.query.status;
        }
        const tasks = await task.findAll({where:filter,order:[['created_at','DESC']]});
        if(tasks.length === 0) {
            return res.status(404).json({ message: 'No tasks found' });
        }else{
            res.status(201).json(tasks);
        }
       
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.statusCount=async(req,res)=>{
    try {
        const statusCount = await task.findAll({
            attributes: ['status', [task.sequelize.fn('COUNT', task.sequelize.col('status')), 'count']],
            group: ['status']
        });
        if (statusCount.length === 0) {
            return res.status(404).json({ message: 'No tasks found' });
        }else
        {
            res.status(200).json(statusCount);
        }
        
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
