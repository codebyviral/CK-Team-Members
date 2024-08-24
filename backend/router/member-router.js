import express from "express";
import { CodeKalakaarMembers } from "../APIs/members.js";
const router = express.Router();

router.get("/members", (req, res) => {
    try {
        res.status(200).json(CodeKalakaarMembers)
    } catch (error) {
        console.log(`Error : ${error}`);

    }
})
const memberRouter = router;
export { memberRouter }