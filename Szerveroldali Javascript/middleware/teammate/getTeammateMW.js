/**
 * Load all teamate from the database
 * The result is saved to res.locals.teamates
 */
 const requireOption = require('../requireOption');

 module.exports = function(objRepo) {
     const MateModel = requireOption(objRepo, 'MateModel');
 
     return function(req, res, next) {
         MateModel.findOne(
             {
                 _id: req.params.mateid
             },
             (err, mate) => {
                 if (err || !mate) {
                     return next(err);
                 }
 
                 res.locals.mate = mate;
                 return next();
             }
         );
     };
 };