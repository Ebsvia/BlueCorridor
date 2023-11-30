const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  comment: String,
});

const User = mongoose.model("User", UserSchema);
