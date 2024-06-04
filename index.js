const express = require('express')
const cors = require('cors')
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = 5000


app.use(cors());
app.use(express.json());



function createToken(user) {
  const token = jwt.sign(
    {
      email: user.email,
    },
    "secret",
    { expiresIn: "7d" }
  );
  return token;
}



// middleware function



const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (authHeader) {
      const token = authHeader.split(' ')[1]; 
      
      jwt.verify(token, 'secret', (err, user) => {
          if (err) {
              return res.sendStatus(403); 
          }
          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401); 
  }
};


// Mongodb


const uri = "mongodb+srv://smshahinmahmud6:UHFD9dgwZkb283vI@cluster0.bqmqzs6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    await client.connect();

    const propertyDB= client.db('propertyDB');
    const clientDB= client.db('clientDB');
    const propertiesCollection = propertyDB.collection('propertiesCollection');
    const clientCollection = clientDB.collection('clientCollection');

    // Property
    app.post("/properties",verifyToken, async(req,res)=>{
      const propertyData = req.body;
      const result = await propertiesCollection.insertOne(propertyData);
      res.send(result);
    })
    app.get("/properties", async(req,res)=>{
      const propertyData = propertiesCollection.find();
      const result = await propertyData.toArray();
      res.send(result);
    })


    app.get("/properties/:id", async(req,res)=>{
      const id = req.params.id;
      const propertyData =await propertiesCollection.findOne({
        _id: new ObjectId(id),
      });
      
      res.send(propertyData);
    })

    app.patch("/properties/:id",verifyToken, async(req,res)=>{
      const id = req.params.id;
      const updateData = req.body;
      const result =await propertiesCollection.updateOne({
        _id: new ObjectId(id),
      },
      {$set:updateData}
    );
      
      res.send(result);
    })


    app.delete("/properties/:id",verifyToken, async(req,res)=>{
      const id = req.params.id;
      const result =await propertiesCollection.deleteOne({
        _id: new ObjectId(id),}
    );
      
      res.send(result);
    })



    // user

    app.post("/user",verifyToken ,async (req,res)=>{
      const user = req.body;

      const token = createToken(user);
     
      const isUserExist = await clientCollection.findOne({email:user?.email});
      if (isUserExist?._id) {
        return res.send({
          status:"Success",
          message:"Login Success",
          token,
        });
      }
      await clientCollection.insertOne(user);
      return res.send({ token });
    });

    // User/id related
    app.get("/user/get/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const result = await clientCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;
      const result = await clientCollection.findOne({ email });
      res.send(result);
    });
      

    app.patch("/user/:email", async (req, res) => {
      const email = req.params.email;
      const userData = req.body;
      const result = await clientCollection.updateOne(
        { email },
        { $set: userData },
        { upsert: true }
      );
      res.send(result);
    });

    
    
    console.log("Web DB Connected!");
  } finally {
   
  }
}
run().catch(console.dir);





app.get('/', (req, res) => {
  res.send('DB Connected!')
})

app.listen(port, (req,res) => {
  console.log("app listening on port", port)
})