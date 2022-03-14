const MongoClient = require('mongodb').MongoClient;
const api = require('./api_url');
// Connection string from MongoDB
const url = api.url;

// Create record in db
const createProduct = async (req, res, next) => {
  // Test product create as example
  // Use any parameter
  const newProduct = {
    name: req.body.name,
    paramater: req.body.paramater
  };
  // DOES NOT ESTABLISH CONNECTION.. just specifies the desired url
  const client = new MongoClient(url);

  try {
    // Connects
    await client.connect();
    const db = client.db('products_test');
    // Inserts record
    const result = await db.collection('products').insertOne(newProduct);
  } catch (error) {
    console.log(error)
    return res.json({message: 'Could not store data.'})
  };
  client.close();

  res.json(newProduct);
};

// Gets all products from db
const getProducts = async (req, res, next) => {
   const client = new MongoClient(url);

   // Products will be returned as an array
   let products

   try {
    await client.connect();
    const db = client.db('products_test');
    // Returns array of JSON
    products = await db.collection('products').find().toArray();

   } catch (error){
    res.json({message: 'Could not retrieve products.'});
   };
   client.close();

   res.json(products)
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;