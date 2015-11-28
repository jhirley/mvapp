//jf server-spec.js
// testing for server.js

'use strict';

var	chai	=	require("chai");
var	request	=	require("superagent");

var should	=	chai.should();
var	expect	=	chai.expect;



describe("1. server.js test",function(){
	var server	=	require("../server");
	var port 	=	process.env.PORT ||3030;	//jf declare port 3030
	var baseUrl	=	'http://127.0.0.1:'+port;

	before(function(done){
		server.start(port,done);
	});

	after(function(done){
		server.stop(done);
	});

	it('should start the server and echo hello world', function(done){

		request.get(baseUrl).end(function assert(err,res){
			expect(err).to.not.be.ok;
			expect(res).to.have.property('status',200);
		//	expect(res.text).to.equal('Hello World');
			done();
		});
	});

/*
	var studentName	=	"John Doe";
	var	studentGrade=	5;

	it('should save the info on the student and create an id',function(){
		var student=	Student.create(studentName, studentGrade);

		should.exist(student.name);
		student.name.should.equal(studentName);

		should.exist(student.grade);
		student.grade.should.equal(studentGrade);

		should.exist(student.id);

	});
	it("should increade the student's grade by 1 when advanceGrade is called", function(){
		var student=	Student.create(studentName, studentGrade);

		student.advanceGrade();

		student.grade.should.equal(studentGrade+1);
	});

*/

});
