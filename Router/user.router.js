import { Router } from "express";
import { getUser, register } from "../Controllers/user.controller.js";

const router = Router();

router.route("/register").post(register);
router.route("/getuser").get(getUser);

export default router;
