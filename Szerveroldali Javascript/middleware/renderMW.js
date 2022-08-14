/**
 * Using the template engine render the values into the template
 */

const { append } = require('express/lib/response');
const requireOption = require('./requireOption');

module.exports = function (objRepo, viewName) {
    return function (req, res) {
        res.render(viewName);
        
    };

};
