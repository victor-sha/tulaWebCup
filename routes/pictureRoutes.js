const mongoose = require("mongoose");

const Picture = mongoose.model("Picture");

module.exports = app => {
  app.get("/api/pictures/:id", async (req, res) => {
    const picture = await Picture.findOne({ _id: req.params.id });

    res.send(picture);
  });

  app.get("/api/pictures", async (req, res) => {
    const pictures = await Picture.find();

    res.send(pictures);
  });

  app.post("/api/pictures", async (req, res) => {
    const { title, imageUrl } = req.body;

    const picture = new Picture({
      title,
      imageUrl
    });

    try {
      await picture.save();
      res.send(picture);
    } catch (err) {
      res.send(400, err);
    }
  });
};
