/**
 * Removes a teammate from the database, the entity used here is: res.locals.teammate
 * Redirects to /befott/:teamid after delete
 */
 const requireOption = require('../requireOption');

 module.exports = function(objectrepository) {
     return function(req, res, next) {
         if (typeof res.locals.mate === 'undefined') {
             return next();
         }
 
         res.locals.mate.remove(err => {
             if (err) {
                 return next(err);
             }
 
             return res.redirect(`/teammate/${res.locals.team._id}`);
         });
     };
 };