/**
 * Using POST params update or save a team to the database
 * If res.locals.team is there, it's an update otherwise this middleware creates an entity
 * Redirects to /team after success
 */

const requireOption = require('../requireOption');

module.exports = function(objRepo) {
    const TeamModel = requireOption(objRepo, 'TeamModel');

    return function(req, res, next) {
        if (
            typeof req.body.name === 'undefined' ||
            typeof req.body.size === 'undefined' ||
            typeof req.body.Founder === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.team === 'undefined') {
            res.locals.team = new TeamModel();
        }

        res.locals.team.name = req.body.name;
        res.locals.team.size = req.body.size;
        res.locals.team.Founder = req.body.Founder;

        res.locals.team.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });
    };
};