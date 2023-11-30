export default function handler(req, res) {
  const data = req.body;
  console.log(data);

  res.status(200).json({ message: "Hello from Next.js!" });
}

// function createItem(data) {
//   const client = new MongoClient(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   client.connect((err) => {
//     if (err) throw err;
//     const db = client.db("blue");
//     const collection = db.collection("posts");
//     collection.insertOne(data, (err, result) => {
//       if (err) throw err;
//       console.log("Document inserted");
//       client.close();
//       return result.insertedId;
//     });
//   });
// }
