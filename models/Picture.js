const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var pictureSchema = new Schema({
  title: String,
  imageUrl: String,
  numberOfStars: Number,
  created: {
    type: Date,
    default: Date.now
  },
  author: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("Picture", pictureSchema);
