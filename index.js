import express from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoConnect from "./connections/mongodb.js";
import { errorHandler } from "./utils/errorHandler.js";
import { rootRouter } from "./routes.js";
config();
// validation pending || Should be done Manually
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// Cors config pending
app.use(cors());
app.use("/feedback", rootRouter);

mongoConnect();

app.get("/test", (req, res) => {
    try {
        res.status(200).json({ message: "Server working" });
    } catch (error) {
        errorHandler(error, res);
    }
});

app.listen(PORT, () => {
    console.log("Server is running on port ", PORT);
});
