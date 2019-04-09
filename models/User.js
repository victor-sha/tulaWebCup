const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
  yandexId: String,
  name: {
    firstName: String,
    lastName: String
  },
  profilePicture: Buffer,
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("User", userSchema);
