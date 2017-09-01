var app = angular.module('angularApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			template: '<h2>Click above tabs to continue<h2>'
		})
		//the login display
		.when('/chapterOne', {
			templateUrl: 'views/chapterOne.html'
		})
		//the signup display
		.when('/chapterTwo', {
			templateUrl: 'views/chapterTwo.html'
		})
		.when('/chapterThree', {
			templateUrl: 'views/chapterThree.html'
		})
		.when('/chapterFour', {
			templateUrl: 'views/chapterFour.html'
		});
});

app.controller('chapterOnefirstCtrl', [function() {
	// Controller-specific code goes here
	console.log('firstCntl has been created');
	}]);

app.controller('chapterOnesecondCtrl', [function() {
	var self = this;
	self.message= 'Hello ';
	self.changeMessage = function() {
		self.message = 'Goodbye';
	};
	}]);

app.controller('chapterOnethirdCtrl', [function() {
	var self = this;
	self.notes = [
		{id: 1, label: 'First Note', done: false},
		{id: 2, label: 'Second Note', done: false},
		{id: 3, label: 'Done Note', done: true},
		{id: 4, label: 'Last Note', done: false}
		];
	}]);

app.controller('chapterOnefourthCtrl', [function() {
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

app.controller('chapterOnefifthCtrl', [function() {
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

app.controller('chapterOnesixthCtrl', [function() {
	var self = this;
	self.notes = [
		{id: 1, label: 'First Note', done: false},
		{id: 2, label: 'Second Note', done: false},
		{id: 3, label: 'Done Note', done: true},
		{id: 4, label: 'Last Note', done: false}
		];
	}]);

app.controller('chapterOneseventhCtrl', [function() {
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

app.controller('chapterOneeighthCtrl', [function() {
	var self = this;
	self.notes = [
		{id: 1, label: 'First Note', done: false},
		{id: 2, label: 'Second Note', done: false},
		{id: 3, label: 'Finished Third Note', done: true}
		];
	}]);

//Chapter 2 controllers

app.controller('chapterTwofirstCtrl', [function() {
	this.username = 'nothing';
	}]);

app.controller('chapterTwosecondCtrl', [function() {
	var self = this;
	self.change = function() {
		self.username = 'changed';
		self.password = 'password';
	};
	self.submit = function() {
		console.log('User clicked submit with ',
		self.username, self.password);
	};
	}]);

app.controller('chapterTwothirdCtrl', [function() {
	var self = this;
	self.submit = function() {
		console.log('User clicked submit with ', self.user);
	};
	}]);

app.controller('chapterTwofourthCtrl', [function() {
	var self = this;
	self.submit1 = function() {
		// Create user object to send to the server
		var user = {username: self.username, password: self.password};
		console.log('First form submit with ', user);
	};
	self.submit2 = function() {
		console.log('Second form submit with ', self.user);
	};
	}]);

app.controller('chapterTwofifthCtrl', [function() {
	var self = this;
	self.submit = function() {
		console.log('User clicked submit with ', self.user);
	};
	}]);

app.controller('chapterTwosixthCtrl', [function () {
	var self = this;
	self.submit = function () {
		console.log('User clicked submit with ', self.user);
	};
	}]);

app.controller('chapterTwoseventhCtrl', [function() {
	var self = this;
	self.submit = function() {
		console.log('User clicked submit with ', self.user);
	};
	}]);

app.controller('chapterTwoeigthCtrl', [function() {
	var self = this;
	self.sports = [
		{label: 'Basketball', selected: 'YES'},
		{label: 'Cricket', selected: 'NO'},
		{label: 'Soccer', selected: 'NO'},
		{label: 'Swimming', selected: 'YES'}
		];
	}]);

//chapterThree

app.controller('chapterThreefirstCtrl', [function() {
	var self = this;
	self.tab = 'first';
	self.open = function(tab) {
		self.tab = tab;
	};
	}])
	.controller('chapterThreeSubCtrl', [function() {
	var self = this;
	self.list = [
	{id: 1, label: 'Item 0'},
	{id: 2, label: 'Item 1'}
	];
	self.add = function() {
		self.list.push({
			id: self.list.length + 1,
			label: 'Item ' + self.list.length
		});
	};
	}]);

app.controller('chapterThreesecondCtrl', ['$log', function($log) {
	var self = this;
	self.logStuff = function() {
	$log.log('The button was pressed');
	};
	}]);

//chapterFour

app.controller('chapterFourfirstCtrl', [function() {
	this.amount = 1024;
	this.totalCost = 4906;
	this.name = 'Mohamad Khan';
	this.startTime = new Date().getTime();
	}]);

app.controller('chapterFoursecondCtrl', [function() {
	this.amount = 1024;
	this.name = 'Mohamad Khan';
	this.obj = {test: 'value', num: 123};
	this.startTime = new Date().getTime();
	}]);

app.controller('chapterFourthirdCtrl', [function() {
	this.notes = [
		{label: 'FC Todo', type: 'chore', done: false},
		{label: 'FT Todo', type: 'task', done: false},
		{label: 'FF Todo', type: 'fun', done: true},
		{label: 'SC Todo', type: 'chore', done: false},
		{label: 'ST Todo', type: 'task', done: true},
		{label: 'SF Todo', type: 'fun', done: true},
		{label: 'TC Todo', type: 'chore', done: false},
		{label: 'TT Todo', type: 'task', done: false},
		{label: 'TF Todo', type: 'fun', done: false}
		];
	this.sortOrder = ['+type', '-label'];
	this.filterOptions = {
	"string": '',
	"object": {done: false, label: 'C'},
	"function": function(note) {
		return note.type === 'task' && note.done === false;
	}
	};
	this.currentFilter = 'string';
	}]);

app.controller('chapterFourforthCtrl', [function() {
	this.startTime = new Date().getTime();
	this.someTimeAgo = new Date().getTime() -
	(1000 * 60 * 60 * 4);
	}])
	.filter('timeAgo', [function() {
	var ONE_MINUTE = 1000 * 60;
	var ONE_HOUR = ONE_MINUTE * 60;
	var ONE_DAY = ONE_HOUR * 24;
	var ONE_MONTH = ONE_DAY * 30;
	return function(ts) {
		var currentTime = new Date().getTime();
		var diff = currentTime - ts;
		if (diff < ONE_MINUTE) {
		return 'seconds ago';
		} else if (diff < ONE_HOUR) {
		return 'minutes ago';
		} else if (diff < ONE_DAY) {
		return 'hours ago';
		} else if (diff < ONE_MONTH) {
		return 'days ago';
		} else {
		return 'months ago';
		}
	};
	}]);