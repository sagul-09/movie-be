import expres from "express";
const router = expres.Router();

import {
  getAllMovies,
  addMovie,
  suggestMovie,
} from "../controller/movieController.js";

router.route("/").get(getAllMovies);

router.route("/addMovie").post(addMovie);

router.route("/suggest").post(suggestMovie);

export default router;
