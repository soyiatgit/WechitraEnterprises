(function(app){
	app.controller('AboutCtrl', aboutCtrlFn);
	aboutCtrlFn.$inject = ['$scope', 'texts'];
	
	function aboutCtrlFn($scope, texts) {
	    var vm = this;
	    vm.texts = texts;
		vm.name = 'Aboutpage';
	}
	
})(angular.module('wechitra'))