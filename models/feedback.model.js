import { Schema, model } from "mongoose";
import { currentDate } from "../utils/currentTimeStamp";
import { createError, errorHandler } from "../utils/errorHandler.js";

const subSchema = new Schema({
    starRating: {
        type: Number,
        required: true,
    },
    suggestion: {
        type: String,
    },
    complaint: {
        type: String,
    },
    timestamp: {
        type: String,
        default: currentDate(),
    },
    // Do we need screen shots as well
    // use
    // {
    //     data: Buffer,
    //     contentType: String
    // }
});

const feedbackStructure = new Schema({
    userUniqueId: {
        type: String,
        required: true,
        unique: true,
    },
    feedbackContent: {
        type: [subSchema],
    },
});

const feedbackModel = model("feedback", feedbackStructure);

export const storeFeedbackInDB = async ({ feedbackContent, userUniqueId }) => {
    // validation pending
};

export const findFeedbackInDB = async ({ userUniqueId }) => {
    // validation pending
};
