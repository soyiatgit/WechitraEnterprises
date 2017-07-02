(function(app){
	app.controller('EnquiryCtrl', enquiryCtrlFn);
	enquiryCtrlFn.$inject = ['$scope', 'texts'];
	
	function enquiryCtrlFn($scope, texts) {
	    var vm = this;
	    vm.texts = texts;
		vm.name = 'Enquirypage';
	}
	
})(angular.module('wechitra'))