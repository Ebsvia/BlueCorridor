// const mongoose = require("mongoose");
// mongoose.connect(
//   "mongodb+srv://ebesetiobhio:Eboselulu%21440@blue.bldnh1k.mongodb.net/"
// );
// const User = mongoose.model("User", {
//   name: String,
//   // email: String,
//   // comment: String,
// });

// const joe = new User({ name: "Joe" });
// joe.save().then(() => console.log("saved"));

// export default function handler(req, res) {
//   const data = req.body;
//   console.log(data);
//   createItem(data);

//   res.status(200).json({ message: "Hello from Next.js!" });
// }

// function createItem(data) {
//   client.connect((err) => {
//     if (err) throw err;
//     const db = client.db("blue");
//     const collection = db.collection("user");
//     collection.insertOne(data, (err, result) => {
//       if (err) throw err;
//       console.log("Document inserted");
//       client.close();
//       return result.insertedId;
//     });
//   });
// }
