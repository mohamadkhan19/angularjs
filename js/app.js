var app = angular.module('chapterOneModule', []);

app.controller('firstCtrl', [function() {
	// Controller-specific code goes here
	console.log('firstCntl has been created');
	}]);

app.controller('secondCtrl', [function() {
	var self = this;
	self.message= 'Hello ';
	self.changeMessage = function() {
		self.message = 'Goodbye';
	};
	}]);

app.controller('thirdCtrl', [function() {
	var self = this;
	self.notes = [
		{id: 1, label: 'First Note', done: false},
		{id: 2, label: 'Second Note', done: false},
		{id: 3, label: 'Done Note', done: true},
		{id: 4, label: 'Last Note', done: false}
		];
	}]);

app.controller('fourthCtrl', [function() {
	var self = this;
	self.notes = [
		{label: 'First Note', done: false, assignee: 'Shyam'},
		{label: 'Second Note', done: false},
		{label: 'Done Note', done: true},
		{label: 'Last Note', done: false, assignee: 'Brad'}
		];
	self.getNoteClass = function(status) {
		return {
		done: status,
		pending: !status
		};
		};
	}]);

app.controller('fifthCtrl', [function() {
	var self = this;
	self.notes = {
			shyam: {
			id: 1,
			label: 'First Note',
			done: false
			},
			Misko: {
			id: 3,
			label: 'Finished Third Note',
			done: true
			},
			brad: {
			id: 2,
			label: 'Second Note',
			done: false
			}
		};
	}]);

app.controller('sixthCtrl', [function() {
	var self = this;
	self.notes = [
		{id: 1, label: 'First Note', done: false},
		{id: 2, label: 'Second Note', done: false},
		{id: 3, label: 'Done Note', done: true},
		{id: 4, label: 'Last Note', done: false}
		];
	}]);

app.controller('seventhCtrl', [function() {
	var self = this;
	var notes = [
		{
		id: 1,
		label: 'First Note',
		done: false,
		someRandom: 31431
		},
		{
		id: 2,
		label: 'Second Note',
		done: false
		},
		{
		id: 3,
		label: 'Finished Third Note',
		done: true
		}
		];
	self.notes1 = angular.copy(notes);
	self.notes2 = angular.copy(notes);
	self.changeNotes = function() {
	notes = [
		{
		id: 1,
		label: 'Changed Note',
		done: false,
		someRandom: 4242
		},
		{
		id: 2,
		label: 'Second Note',
		done: false
		},
		{
		id: 3,
		label: 'Finished Third Note',
		done: true
		}
		];
	self.notes1 = angular.copy(notes);
	self.notes2 = angular.copy(notes);
	};
	}]);

app.controller('eighthCtrl', [function() {
	var self = this;
	self.notes = [
		{id: 1, label: 'First Note', done: false},
		{id: 2, label: 'Second Note', done: false},
		{id: 3, label: 'Finished Third Note', done: true}
		];
	}]);