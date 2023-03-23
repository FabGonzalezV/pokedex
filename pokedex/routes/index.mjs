import { default as express } from "express";
export const router = express.Router();
import fetch from "node-fetch";
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Pokedex" });
});

router.post("/pokeapi", async (req, res, next) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${req.body._id}`
    );
    const data = await response.json();
    const imageUrl = data.sprites.front_default;
    const name = data.name;
    const info = {
      imageUrl, 
      name
    }
    res.status(200).json(info);
  } catch (error) {
    console.log(error);
  }
});
