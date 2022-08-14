/**
 * Using POST params update or save a teamate to the database
 * If res.locals.teamate is there, it's an update otherwise this middleware creates an entity
 * Redirects to /teamate/:teamid after success
 */
 const requireOption = require('../requireOption');

 module.exports = function(objRepo) {
     const MateModel = requireOption(objRepo, 'MateModel');
	
     return function(req, res, next) {
	 console.log("pELLO");
				 if (
					 typeof req.body.name === 'undefined' ||
					 typeof req.body.role === 'undefined' ||
					 typeof req.body.active === 'undefined' ||
					 typeof res.locals.team === 'undefined'
				 ) 
				 {
					 console.log("kkkkkkkkkkkkkELLO");
					 return next();
				 }
 console.log("kELLO");
				 if (typeof res.locals.mate === 'undefined') {
					 res.locals.mate = new MateModel();
				 }
 
				 res.locals.mate.name = req.body.name;
				 res.locals.mate.role = req.body.role;
				 res.locals.mate.active = req.body.active;
				 res.locals.mate.team = res.locals.team._id;
 
				 res.locals.mate.save(err => {
					 if (err) {
						 return next(err);
					 }
			console.log("HELLO");
             return res.redirect(`/teammate/${res.locals.team._id}`);
			});
		};
 };