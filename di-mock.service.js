(function(module) {
  module.value('data', {
	title: 'Whatever I want it to be (edited)',
	url: 'http://www.example.com/dependency-injection'
  });
  module.service('di-service', [
      'data',
	  function DIService(absolutOriceVreauEu) {
		  this.get = function() {
			  return absolutOriceVreauEu;
		  };
	  }
  ]);
}(angular.module('dependency-injection')));