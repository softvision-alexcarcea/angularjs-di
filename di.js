(function(angular) {
  var module = angular.module('dependency-injection', []);
  module.constant('di-value', { title: 'Trololo', url: 'https://www.youtube.com/watch?v=sTSA_sWGM44' });
  module.controller('di-controller', function DIController() {
    this.type = 'Schnitzel';
  });
  module.component('diComponent', {
    template:
      '<div class="di-component">' +
        '{{::vm.name}} sings <a data-ng-href="{{::vm.url}}">"{{::vm.title}}"</a>.' +
      '</div>',
    bindings: {
      name: '@'
    },
    controller: [
		'di-service',
		function DIComponent(diService) {
		  var data = diService.get();
		  this.title = data.title;
		  this.url = data.url;
		}
	],
	controllerAs: 'vm'
  });
})(angular);