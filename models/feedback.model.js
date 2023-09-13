import { Schema, model } from "mongoose";
import { currentDate } from "../utils/currentTimeStamp.js";

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
    const userExists = await findFeedbackInDB({ userUniqueId });
    if (userExists.status) {
        const updatedFeedback = await feedbackModel.updateOne(
            { userUniqueId },
            { $push: { feedbackContent: feedbackContent } }
        );
        console.log("updatedFeedback: ", updatedFeedback);
        return updatedFeedback;
    } else {
        const createdFeedback = await feedbackModel.create({
            userUniqueId,
            feedbackContent: [feedbackContent],
        });
        console.log("createdFeedback: ", createdFeedback);
        return createdFeedback;
    }
};

export const findFeedbackInDB = async ({ userUniqueId }) => {
    const userExists = await feedbackModel.find({ userUniqueId });
    console.log("User exists: ", userExists);
    if (userExists.length) {
        return { status: true, data: userExists };
    }
    return { status: false, data: null };
};
