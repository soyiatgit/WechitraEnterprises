(function(app){
	app.controller('HomeCtrl', homeCtrlFn);
	homeCtrlFn.$inject = ['$scope', 'texts'];
	
	function homeCtrlFn($scope, texts) {
	    var vm = this;
	    vm.texts = texts;
		vm.name = 'homepage';
		
		vm.scrollFn = scrollFn;
		
		function scrollFn(event, state) {
				var target = $('#' + state);
				  target = target.length ? target : $('[name=' + state.slice(1) + ']');
				  if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
					  scrollTop: target.offset().top
					}, 500, function() {
					  var $target = $(target);
					  if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					  } else {
						$target.attr('tabindex','-1');
					  };
					});
				  }
		}
	}
	
})(angular.module('wechitra'))