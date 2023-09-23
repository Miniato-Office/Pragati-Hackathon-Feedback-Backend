import { errorHandler } from "../utils/errorHandler.js";
import {
    findFeedbackInDB,
    storeFeedbackInDB,
} from "../models/feedback.model.js";

export const storingFeedback = async (req, res) => {
    try {
        const { feedbackContent, userUniqueId } = req.body;
        const storeFeedbackStatus = await storeFeedbackInDB({
            feedbackContent,
            userUniqueId,
        });
        console.log("Store Feedback Status: ", storeFeedbackStatus);
        res.status(200).json({});
    } catch (error) {
        errorHandler(error, res);
    }
};
