import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  token: { type: String },
  // listFilms: {type:Object},
});
export default mongoose.model("User", UserModel);
