const mongoose =require("mongoose")
const validator = require("validator");

const resource=mongoose.Schema({
    Sno: {
        type:String
    },
    State:{ 
        type:String,
        required:[true,"Please Enter the State Name"],
    },
    District:{
        type:String,
        required:[true,"Please Enter the District Name"],

    },
    Quantity:{
        type:String,
        required:[true,"Please enter the Quantity"],
    },
    Item_details: {
            Item_code:{ type:Number,
            required:[true,"Please Enter the Item_CODE"]
            },
            Item:{ 
                type:String,
                required:[true,"Please ENter the Item name"]
            }
        },
        Department_contact_details: {
            Dept_name:{
                type:String,
                required:[true,"Please Enter the Department Name"],
            },
            Dept_addr: {
                type:String,
                required:[true,"Please Enter the Dept_Addr Name"],
        
            },
            Contact_person: {
                type:String,
                required:[true,"Please Enter the Person Name"],
        
            },
            Contact_no:{
                type:Number,
                required:[true,"Please Enter the District Name"],
                maxLength:[10,"Please Enter a Valid Phone Number"],
            } ,
            Contact_email: {
                type: String,
                required: [true, "Please Enter Your Email"],
                validate: [validator.isEmail, "Please Enter a valid Email"],
              },
        },
        Item_description: {
            Item_desc: {
                type:String,
                required:[true,"Please Enter the Person Name"],
        
            },
            Location: {
                type:String,
                required:[true,"Please Enter the Person Name"],
        
            },
            Source: {
                type:String,
                required:[true,"Please Enter the Person Name"],
        
            },
            Last_updation:{
                type:Date,
                default:Date.now,
            }
        }
})

module.exports=mongoose.model("Resource",resource);