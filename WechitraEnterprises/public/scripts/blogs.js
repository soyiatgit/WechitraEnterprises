(function(app){
	app.controller('BlogCtrl', blogCtrlFn);
	blogCtrlFn.$inject = ['$scope', 'texts'];
	
	function blogCtrlFn($scope, texts) {
	    var vm = this;
	    vm.texts = texts;
		vm.name = 'Blogpage';
	}
	
})(angular.module('wechitra'))