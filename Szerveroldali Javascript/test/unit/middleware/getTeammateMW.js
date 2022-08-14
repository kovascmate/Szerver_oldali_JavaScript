var expect = require('chai').expect;
var getTeamateMW = require('../../../middleware/teammate/getTeammateMW');
////////////////////////////////////////////////////////
//
it('Tudom, hogy nem működik(vagyis, gyakorlatilag működik, csak a GetTeammateMW nem), sajnos nem találom, hogy miért nem működik az a middleware, azért is akartam erre megírni a tesztet');
//
////////////////////////////////////////////////////////////
describe('getTeammateMW middleware ', function () {
  it('should set res.locals.teammate', function (done) {
	const mw = getTeammateMW(objRepo={
		TeamModel:{
			findOne:(p1,cb)=>{
				expect(p1).eql({_id: '42069'});
				cb(null,'pizzasch');
			}
		}
	});
	const resMock={locals:{}}
	mw(
		{
			params:{
				mateid: '42069'
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
	const mw = getTeammateMW(objRepo={
		MateModel:{
			findOne:(p1,cb)=>{
				expect(p1).eql({_id: '42069'});
				cb('egyhiba','pizzasch');
			}
		}
	});
	const resMock={locals:{}}
	mw(
		{
			params:{
				mateid: '42069'
			}
		},
		resMock,
		(err)=>{
			expect(err).eql('egyhiba');
		  done();
		});
  });
  it('should call err because no teamate', function (done) {
	const mw = getTeammateMW(objRepo={
		MateModel:{
			findOne:(p1,cb)=>{
				expect(p1).eql({_id: '42069'});
				cb(undefined,null);
			}
		}
	});
	const resMock={locals:{}}
	mw(
		{
			params:{
				mateid: '42069'
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