(function () {

  angular.module('data')
         .component('items', {
           templateUrl: 'src/templates/ct/items.component.html',
           bindings: {
             items: '<'
           }
         });

})();
