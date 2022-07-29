import express from "express";
import { getFashionById, getFashionData } from "../Controller/fashionController.js";
import { getFurnitureById, getFurnitures } from "../Controller/furnitureController.js";
import { getTopOfferById, getTopOffers } from "../Controller/topOfferController.js";
import { userLogin, userSignup } from "../Controller/userController.js";


const router = express.Router();

router.get("/", (req,res)=>{
    res.send("welcome server site")
})
router.post("/signup", userSignup)
router.post("/login", userLogin)
router.get("/furnitures", getFurnitures);
router.get("/topOffers", getTopOffers);
router.get("/fashion", getFashionData);
router.get("/furniture/:id", getFurnitureById);
router.get("/topOffer/:id", getTopOfferById);
router.get("/fashion/:id", getFashionById);

export default router;