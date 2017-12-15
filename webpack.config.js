const path = require('path');

module.exports = {
    entry: {
        background: "./app/scripts/background.js",
        new_tab: "./app/scripts/new_tab.js",
        options: "./app/scripts/options.js"
    },
    output: {
        path: path.join(__dirname, "wdist"),
        filename: "[name].bundle.js"
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
