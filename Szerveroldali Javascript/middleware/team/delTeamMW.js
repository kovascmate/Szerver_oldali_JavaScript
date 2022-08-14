/**
 * Removes a team from the database, the entity used here is: res.locals.team
 * Redirects to /team after delete
 */


const requireOption = require('../requireOption');

module.exports = function(objRepo) {
    return function(req, res, next) {
        if (typeof res.locals.team === 'undefined') {
            return next();
        }

        res.locals.team.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });
    };
};