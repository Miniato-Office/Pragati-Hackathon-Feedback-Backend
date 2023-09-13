export const currentDate = () => {
    const d = new Date();
    return (
        d.getUTCFullYear() +
        "-" +
        d.getUTCMonth() +
        "-" +
        d.getUTCDate() +
        "T" +
        d.getUTCHours() +
        ":" +
        d.getUTCMinutes() +
        ":" +
        d.getUTCSeconds() +
        "(UTC)"
    );
};
