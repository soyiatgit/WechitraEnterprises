(function (app) {
    app.config(configFn);
	configFn.$inject = ['$urlRouterProvider', '$stateProvider'];
	app.run(runFn);
	runFn.$inject = ['$rootScope', '$window'];
	
	function configFn($urlRouterProvider, $stateProvider){
		
		$urlRouterProvider.otherwise('/home');
		
		$stateProvider.state('home',{
			url : '/home',
			templateUrl : 'public/templates/home.html',
			controller : 'HomeCtrl as hc'
		}).state('about', {
		    url: '/aboutus',
		    templateUrl: 'public/templates/aboutus.html',
		    controller: 'AboutCtrl as ac'
		}).state('products', {
		    url: '/products',
		    templateUrl: 'public/templates/products.html',
		    controller: 'ProductCtrl as pc'
		}).state('enquiry', {
		    url: '/enquiries',
		    templateUrl: 'public/templates/enquiry.html',
		    controller: 'EnquiryCtrl as ec'
		}).state('services', {
		    url: '/services',
		    templateUrl: 'public/templates/services.html',
		    controller: 'ServiceCtrl as sc'
		});
	}

	function runFn($rootScope, $window) {
	    $(window).on('scroll',function (e) {
	        if ($(window).scrollTop() > 100) {
	            $('.fixed_header').css({ 'position': 'fixed', 'top': '0px', 'background-color' : 'black', 'z-index':99 });
	        }
	        if ($(window).scrollTop() < 100) {
	            $('.fixed_header').css({ 'position': 'static', 'top': '10px', 'z-index': 0, 'background-color': 'transparent' });
	        }
	    });
	}
}(angular.module("wechitra", ["ui.router"])))