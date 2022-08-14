/**
 * Load all team from the database
 * The result is saved to res.locals.teams
 */

const requireOption = require('../requireOption');

module.exports = function(objRepo) {
    const TeamModel = requireOption(objRepo, 'TeamModel');

    return function(req, res, next) {
        TeamModel.find({}, (err, teams) => {
            if (err) {
                return next(err);
            }

            res.locals.teams = teams;
            return next();
        });
    };
};