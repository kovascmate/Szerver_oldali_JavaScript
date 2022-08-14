var expect = require('chai').expect;
var getTeamMW = require('../../../middleware/team/getTeamMW');

describe('getTeamMW middleware ', function () {
  it('should set res.locals.team', function (done) {
	const mw = getTeamMW(objRepo={
		TeamModel:{
			findOne:(p1,cb)=>{
				expect(p1).eql({_id: '999'});
				cb(null,'pizzasch');
			}
		}
	});
	const resMock={locals:{}}
	mw(
		{
			params:{
				teamid: '999'
			}
		},
		resMock,
		(err)=>{
			expect(err).eql(undefined);
			expect(resMock.locals).eql({team:'pizzasch'})
		  done();
		});
  });
  it('should call next with error', function (done) {
	const mw = getTeamMW(objRepo={
		TeamModel:{
			findOne:(p1,cb)=>{
				expect(p1).eql({_id: '999'});
				cb('egyhiba','pizzasch');
			}
		}
	});
	const resMock={locals:{}}
	mw(
		{
			params:{
				teamid: '999'
			}
		},
		resMock,
		(err)=>{
			expect(err).eql('egyhiba');
		  done();
		});
  });
  it('should call err because no team', function (done) {
	const mw = getTeamMW(objRepo={
		TeamModel:{
			findOne:(p1,cb)=>{
				expect(p1).eql({_id: '999'});
				cb(undefined,null);
			}
		}
	});
	const resMock={locals:{}}
	mw(
		{
			params:{
				teamid: '999'
			}
		},
		resMock,
		(err)=>{
			expect(err).eql(undefined);
			expect(resMock.locals).eql({})
		  done();
		});
  });
});