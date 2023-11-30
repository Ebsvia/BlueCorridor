import { connectMongoDB } from "../../libs/MongoConnect";
import User from "../../models/UserModel";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ msg: "Only post request are allowed. " });
    return;
  }
  //if it is a post request
  const { user } = req.body;

  try {
    await connectMongoDB();
    User.create({ user }).then((data) => {
      console.log(data);

      res.status(201).send(data);
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ err, msg: "Something went wrong! " });
  }
}
