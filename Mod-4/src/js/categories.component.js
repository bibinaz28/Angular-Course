(function () {

  angular.module('data')
         .component('categories', {
           templateUrl: 'src/templates/ct/categories.component.html',
           bindings: {
             categories: '<'
           }
         });

})();
