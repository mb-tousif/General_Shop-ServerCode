import express from "express";
import { getFashionData } from "../Controller/fashionController.js";
import { getFurnitures } from "../Controller/furnitureController.js";
import { getTopOffers } from "../Controller/topOfferController.js";
import { userLogin, userSignup } from "../Controller/userController.js";


const router = express.Router();

router.post("/signup", userSignup)
router.post("/login", userLogin)
router.get("/furnitures", getFurnitures);
router.get("/topOffers", getTopOffers);
router.get("/fashion", getFashionData);

export default router;