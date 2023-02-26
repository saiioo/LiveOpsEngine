const cors = require('cors')

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const conn = require('./connection')
const User = require('./UserSchema')
const Offer = require('./offerSchema')
conn()
app.use(cors())

app.use(bodyParser.json());




app.post('/post',async (req,res)=>{
  const data = await User.create(req.body)
  if(data){
    res.json(data)
  }
  else{
    res.send('failed')
  }
})
// Login API route
app.post('/api/login',cors(), async (req, res) => {
  console.log("api puched")
  const { username, password } = req.body;
  let seLook = await User.findOne({email:username})
  if(seLook.password == password && seLook.email == username){
      res.status(200).json({ message: 'Login successful' });
  }else{
    res.status(401).json({ message: 'Invalid username or password' })
  }
});

// Offers API route
app.get('/api/offers', async (req, res) => {
  // const offers = [
    // { id: 1, name: 'Offer 1', price: 100 },
    // { id: 2, name: 'Offer 2', price: 200 },
    // { id: 3, name: 'Offer 3', price: 300 }
    // ];
  try{
    const offes = await Offer.find()
    res.status(200).json(offes);
  }catch(e){
    res.send({message: e.message})
  }
    });
    
    // Start server
    app.listen(8080, () => {
    console.log('Server started on port 8080');
    });



app.post('/offerPost',async (req,res)=>{
  const of = await Offer.create(req.body)
  if(of){
    res.send(of)
  }
  else{
    res.send('not recived')
  }
})
