const renderMW = require('../middleware/renderMW');

const delTeammateMW 	= require('../middleware/teammate/delTeammateMW');
const getTeammatesMW 	= require('../middleware/teammate/getTeammatesMW');
const getTeammateMW 	= require('../middleware/teammate/getTeammateMW');
const saveTeammateMW 	= require('../middleware/teammate/saveTeammateMW');

const delTeamMW 	= require('../middleware/team/delTeamMW');
const getTeamsMW 	= require('../middleware/team/getTeamsMW');
const getTeamMW 	= require('../middleware/team/getTeamMW');
const saveTeamMW	= require('../middleware/team/saveTeamMW');

const TeamModel = require('../models/team');
const MateModel = require('../models/mate');

module.exports = function (app) {
    const objRepo = {
        TeamModel: TeamModel,
        MateModel: MateModel
    };
		app.use('/team/new',    //jo
        saveTeamMW(objRepo),
        renderMW(objRepo, 'teameditnew'));
		
		app.use('/team/edit/:teamid',//jo
        getTeamMW(objRepo),
        saveTeamMW(objRepo),
        renderMW(objRepo, 'teameditnew'));
		
		app.get('/team/del/:teamid',//jo
		getTeammatesMW(objRepo),
		getTeammateMW(objRepo),
        getTeamMW(objRepo),
        delTeamMW(objRepo)),
		
		 app.get('/team',        //jo
        getTeamsMW(objRepo),
        renderMW(objRepo, 'teamlist'));
		
		app.get('/teammate/:teamid',//jo
        getTeamMW(objRepo),
        getTeammatesMW(objRepo),
        renderMW(objRepo, 'fix_team_view'));

		app.use('/teammate/:teamid/edit/:mateid',//jo
        getTeamMW(objRepo),
        getTeammateMW(objRepo),
        saveTeammateMW(objRepo),
        renderMW(objRepo, 'teammateeditnew'));
		
		app.get('/teammate/:teamid/del/:mateid',//jo
        getTeamMW(objRepo),
        getTeammateMW(objRepo),
        delTeammateMW(objRepo),
		renderMW(objRepo,'fix_team_view'));

        app.use('/teammate/:teamid/new',//jo
        getTeamMW(objRepo),
		getTeammatesMW(objRepo),
        saveTeammateMW(objRepo),
        renderMW(objRepo, 'teammateeditnew'));

        app.use('/',
        getTeamsMW(objRepo),
        getTeamMW(objRepo),
        renderMW(objRepo, 'index'));
        
};