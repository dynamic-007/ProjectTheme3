const express=require("express");
const { getAllResources, addResource, getAllItems } = require("../controllers/resourceController");

const router =express.Router();
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
router.route("/getResource").get(getAllResources);
router.route("/registerItem").post(addResource);
router.route("/getAllItems").get(getAllItems);
module.exports =router;