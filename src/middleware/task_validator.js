const inputValidator=(req,res,next)=>{

    const {title,description,status,dueDate}=req.body
    if(!title){
        return res.status(400).json({error:'Title are required'})
    }
    if( !description){
        return res.status(400).json({error:'Description are required'})
    }
    if(!status){    
        return res.status(400).json({error:'Status are required'})
    }
   if(status!=='pending' && status!=='done'){
        return res.status(400).json({error:'Status should be either pending or done'})
    }
    if(!dueDate){
        return res.status(400).json({error:'Due date are required'})
    }
    if(isNaN(new Date(dueDate).getTime())){
        return res.status(400).json({error:'Due date should be a valid date'})
    }
    if(new Date(dueDate)<new Date()){
        return res.status(400).json({error:'Due date should be a future date'})
    }   
    next()
}

module.exports=inputValidator
