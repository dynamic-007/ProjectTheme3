const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


router.get('/', async(req,res) => {
    try{
           const aliens = await Alien.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
  console.log(req.params.id);
    try{
           const alien = await Alien.find({senderId:req.params.id})
           res.json({data:{...alien}})
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    //{deptname,items}
    console.log(req.body)
    const {sender,request}=req.body;
    request.items=request.items.map(each=>({...each,status:"Pending"}))
    const alien = new Alien({
        // requestId:req.body.requestId,
        senderId: sender,
        receiverId: request.deptname,
        resourcesRequested: request.items,
        Status:req.body.Status
    })

    try{
        const a1 =  await alien.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
    
})

router.delete('/', async (req, res) => {
    try {
        const result = await Alien.deleteMany({}); // Deletes all records
        res.json({ message: 'All records deleted successfully', deletedCount: result.deletedCount });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting records', error: err });
    }
});

// router.patch('/:id',async(req,res)=> {
//     try{
//         const alien = await Alien.findById(req.params.id) 
//         alien.sub = req.body.sub
//         const a1 = await alien.save()
//         res.json(a1)   
//     }catch(err){
//         res.send('Error')
//     }

// })

router.get('/byid/:receiverId', async (req, res) => {
    try {
      const receiverId = req.params.receiverId;
       // console.log(requestId);
      // Use the `find` method to retrieve all data with the specified `requestId`
      const aliens = await Alien.find({ receiverId: receiverId });
      
      if (!aliens || aliens.length === 0) {
        return res.status(404).json({ message: 'No data found for the given requestId' });
      }
  
      res.status(200).json({data:{...aliens}});
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  router.put('/senderId/:senderId', async (req, res) => {
    try {
      const senderId = req.params.senderId;
      const { resourcesGranted,resourcesRequested,Status } = req.body;
      console.log(resourcesRequested)
      const updatedAlien = await Alien.findOneAndUpdate(
        { _id: senderId },
        { $set: { resourcesGranted: resourcesGranted ,resourcesRequested:resourcesRequested,Status: Status} },
        { new: true }
      );
  
      if (!updatedAlien) {
        return res.status(404).json({ message: 'No data found for the given senderId' });
      }
  
      res.status(200).json(updatedAlien);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

module.exports = router 