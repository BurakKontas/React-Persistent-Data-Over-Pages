export {};

const path = require("path");
const cracoConfig = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@Redux": path.resolve(__dirname, "src/Redux"),
        },
    },
};

module.exports = cracoConfig;