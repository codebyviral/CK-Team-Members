import express from 'express';
import cors from 'cors';
import { memberRouter } from "./router/member-router.js"
const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    method: "GET,POST,DELETE,PATCH,HEAD",
    Credentials: true,
    allowedHeaders: 'Content-Type, Authorization',
}

app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.status(200).send("This is CK Team Members Server.");
})

const PORT = 8000;

app.use(express.json());

app.use("/api/team", memberRouter)

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);

})