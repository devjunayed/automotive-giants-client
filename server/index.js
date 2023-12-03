const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nxpfyu1.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const database = client.db("cars");
    const carsInfo = database.collection("carsInfo");
    const cart = database.collection("cart");

    app.get("/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await carsInfo.findOne(query);
      res.send(result);
    });
    app.get("/brand/:brandName", async (req, res) => {
      const brandName = req.params.brandName;
      const query = { selectedBrand: brandName };
      const result = await carsInfo.find(query).toArray();
      res.send(result);
    });

    app.put("/update/:id", async (req, res) => {
      const id = req.params.id;
      const car = req.body;

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedCar = {
        $set: {
          description: car.description,
          imageUrl: car.imageUrl,
          name: car.name,
          price: car.price,
          rating: car.rating,
          selectedBrand: car.selectedBrand,
          selectedCarType: car.selectedCarType,
        },
      };
      const result = await carsInfo.updateOne(filter, updatedCar, options);
      res.send(result);
    });
    app.post("/", async (req, res) => {
      const car = req.body;
      const result = await carsInfo.insertOne(car);
      res.send(result);
    });

    app.post("/cart", async (req, res) => {
      const carData = req.body;
      const result = await cart.insertOne(carData);
      res.send(result);
    });
    app.get("/cart/:userUid", async (req, res) => {
      const userUid = req.params.userUid;
      const query = { userId: userUid };
      const result = await cart.find(query).toArray();
      res.send(result);
    });

    app.delete("/delete/:id", async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await cart.deleteOne(query);
      res.send(result);
    })

    app.get("/:brandName/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await carsInfo.findOne(query);
      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("AutomativeGiants server is running");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
