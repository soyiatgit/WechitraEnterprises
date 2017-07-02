(function(app){
	app.controller('ServiceCtrl', serviceCtrlFn);
	serviceCtrlFn.$inject = ['$scope', 'texts'];
	
	function serviceCtrlFn($scope, texts) {
	    var vm = this;
	    vm.texts = texts;
		vm.name = 'Servicespage';
	}
	
})(angular.module('wechitra'))