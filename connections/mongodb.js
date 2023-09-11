import mongoose from "mongoose";
import { config } from "dotenv";
import { createError, errorHandler } from "../utils/errorHandler.js";
config();

const uri = process.env.MONGODB_FEEDBACK_CLUSTER_URI;

const mongoConnect = async () => {
    try {
        const atlasConnection = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        if (!atlasConnection) {
            throw createError("Mongoose Connection error", 503);
        }
        console.log("Connection established with mongodb.");
    } catch (error) {
        console.log("Error: ", error);
    }
};

export default mongoConnect;
