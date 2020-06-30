(function () {

  angular.module('data')
         .controller('CategoriesController',CategoriesController)

  CategoriesController.$inject = ['MenuDataService'];

  function CategoriesController(MenuDataService){
    var catxCtrl = this;

    catxCtrl.categories = [];
    catxCtrl.items = [];

    catxCtrl.$onInit = function(){
      MenuDataService.getAllCategories()
                 .then(
                   function(result){
                     catxCtrl.categories = result;
                   }
                 )
    };

    catxCtrl.getItems = function(category){
      MenuDataService.getItemsForCategory(category)
                 .then(
                   function(result){
                     catxCtrl.items = result;
                   }
                 )
    };
  }

})();
