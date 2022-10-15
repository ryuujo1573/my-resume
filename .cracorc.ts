const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");

module.exports = {
    mode: 'development',
    devServer: {
        port: 7777,
    },
};