import express from "express";
import { CodeKalakaarMembers } from "../APIs/members.js";
const router = express.Router();

router.get("/members", (req, res) => {
    const pid = process.pid;
    try {
        res.status(200).json(CodeKalakaarMembers)
        console.log(`API Request Successful on Id: ${pid}`)
    } catch (error) {
        console.log(`Error : ${error}`);
    }
})
const memberRouter = router;
export { memberRouter }