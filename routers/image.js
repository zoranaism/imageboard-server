const { Router } = require("express");
// const { toData } = require("../auth/jwt");
const Image = require("../models").image;


const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const images = await Image.findAll();
    res.json(images);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { title, url } = req.body;
    if (!title || !url) {
      res.status(400).send("missing parameters");
    } else {
      const newImage = await Image.create(req.body);
      res.json(newImage);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const image = await Image.findByPk(id);

    if (!image) {
      res.status(404).send("No image found");
    } else {
      res.json(image);
    }
    
  } catch (error) {
    next(error);
  }

});

module.exports = router;