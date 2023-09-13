export const createError = (message, statusCode) => {
    const error = new Error(message);
    error.statusCode = statusCode || 400;
    return error;
};

export const errorHandler = (error, res) => {
    console.log("Error: ", error.message);
    res.status(error.statusCode).json({ error: true, message: error.message });
};
