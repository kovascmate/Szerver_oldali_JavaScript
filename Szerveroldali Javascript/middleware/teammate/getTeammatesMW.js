/**
 * Load a teammate from the database using the :teammateid param
 * The result is saved to res.locals.team.teammates
 */
 const requireOption = require('../requireOption');

 module.exports = function(objectRepository) {
     const MateModel = requireOption(objectRepository, 'MateModel');
 
     return function(req, res, next) {
         if (typeof res.locals.team === 'undefined') {
             return next();
         }
 
         MateModel.find({ team: res.locals.team._id }, (err, mates) => {
             if (err) {
                 return next(err);
             }
 
             res.locals.mates = mates;
             return next();
         });
     };
 };