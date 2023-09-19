const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    deptName: String,
    deptType: String,
    phone:Number,
    email: { type: String, unique: true },
    password: String,
    latitude:Number,
    longitude:Number,
    userType: String,
    speciality:String,
    secretKey:String
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);
