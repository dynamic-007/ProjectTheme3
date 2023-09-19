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
        type:Number,
        required:[true,"Please enter the Quantity"],
    },
    Item_Details: {
            ITEM_CODE:{ type:Number,
            required:[true,"Please Enter the Item_CODE"]
            },
            ITEM:{ 
                type:String,
                required:[true,"Please ENter the Item name"]
            }
        },
        Department_Contact_Details: {
            DEPT_NAME:{
                type:String,
                required:[true,"Please Enter the Department Name"],
            },
            DEPT_ADDR: {
                type:String,
                required:[true,"Please Enter the Dept_Addr Name"],
        
            },
            CONTACT_PERSON: {
                type:String,
                required:[true,"Please Enter the Person Name"],
        
            },
            CONTACT_NO:{
                type:Number,
                required:[true,"Please Enter the District Name"],
                maxLength:[10,"Please Enter a Valid Phone Number"],
            } ,
            CONTACT_EMAIL: {
                type: String,
                required: [true, "Please Enter Your Email"],
                validate: [validator.isEmail, "Please Enter a valid Email"],
              },
        },
        Item_Description: {
            ITEM_DESC: {
                type:String,
                required:[true,"Please Enter the Person Name"],
        
            },
            LOCATION: {
                type:String,
                required:[true,"Please Enter the Person Name"],
        
            },
            SOURCE: {
                type:String,
                required:[true,"Please Enter the Person Name"],
        
            },
            LAST_UPDATION:{
                type:Date,
                default:Date.now,
            }
        }
})

module.exports=mongoose.model("Resource",resource);