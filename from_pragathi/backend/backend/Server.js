const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://0.0.0.0:27017/trail', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const organizationSchema = new mongoose.Schema({
  organizationName: String,
  departmentName: String,
  location: String,
  email: String,
  src: String,
  contactDetails: String,
});

const requestForm= new mongoose.Schema({
  senderID: String,
  senderName: String,
  
})

const historyData= new mongoose.Schema({
  sender_ID: String,
  sender_Name: String,
  date: Date,
})


const Organization = mongoose.model('users', organizationSchema);
const Request= mongoose.model('users2',requestForm);
const History=mongoose.model('users3',historyData);

app.use(express.json());

app.get('/api/searchOrganization', async (req, res) => {
  try {
    const { organizationName } = req.query;

    const organization = await Organization.findOne({ organizationName });
    const request=await Request.findOne({senderName: organizationName});
    const history=await History.findOne({sender_Name: organizationName});

    if (!organization) {
      return res.status(404).json({ error: 'Organization not found' });
    }
    console.log(organization);

    const combinedData={
      organization: organization || null,
      requests: request|| null,
      history: history,

    }

    res.json(combinedData);
    console.log(combinedData);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to search for data' });
  }
});






app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
