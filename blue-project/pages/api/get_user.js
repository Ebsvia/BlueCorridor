import { connectMongoDB } from "../../libs/MongoConnect";
import User from "../../models/UserModel";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).send({ msg: "Only GET request are allowed. " });
    return;
  }

  try {
    await connectMongoDB();
    const users = await User.find();

    res.status(200).send(users);
  } catch (err) {
    console.log(err);
    res.status(400).send({ err, msg: "Something went wrong! " });
  }
}
