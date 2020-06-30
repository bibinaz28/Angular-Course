(function () {

  angular.module('data')
         .controller('ItemsController',ItemsController)

  ItemsController.$inject = ['$stateParams','MenuDataService'];

  function ItemsController($stateParams,MenuDataService){
    var itemxCtrl = this;

    itemxCtrl.items = [];

    itemxCtrl.$onInit = function(){
      MenuDataService.getItemsForCategory($stateParams.categoryId)
                 .then(
                   function(result) {
                     itemxCtrl.items = result;
                   }
                 )
    };
  }

})();
