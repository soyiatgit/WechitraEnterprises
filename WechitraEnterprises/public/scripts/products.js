(function(app){
	app.controller('ProductCtrl', productCtrlFn);
	productCtrlFn.$inject = ['$scope', 'texts'];
	
	function productCtrlFn($scope, texts) {
	    var vm = this;
	    vm.texts = texts;
		vm.name = 'Productpage';
	}
	
})(angular.module('wechitra'))