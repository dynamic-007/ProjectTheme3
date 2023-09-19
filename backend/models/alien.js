const mongoose = require('mongoose')

const alienSchema = new mongoose.Schema({
    requestId:{
        type:Number,
        // required:true,
    },
    senderId: {
        type: String,
        required: true
    },
    receiverId: {
        type: String,
        required: true
    },
    resourcesRequested: {
        type: Array,
        required: true,
    },
    resourcesGranted:{
        type: Array,
        required: false,
    },
    Status:{
        type:String,
        required:false,
        default:"pending"
    },
    location:{
        //type:Point,
        coordinates:Array,
        //required:false,
    }
})

// const alienSchema = new mongoose.Schema({

//     name: {
//         type: String,
//         required: true
//     },
//     tech: {
//         type: String,
//         required: true
//     },
//     sub: {
//         type: Boolean,
//         required: true,
//         default: false
//     }

// })

//module.exports = mongoose.model('Alien',alienSchema)
module.exports = mongoose.model('newAlien',alienSchema)
