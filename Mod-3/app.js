(function () {
'use strict';

angular.module('NarrowItDownApp', [])
       .controller('NarrowItDownController', NarrowItDownController)
       .service('MenuSearchService', MenuSearchService)
       .component('foundItem', {


         templateUrl: "foundItem.html",
         bindings: {
           foundItem: "<",
           noresults: "<",
           onRemove: "&",

         }
       });

//inject
    NarrowItDownController.$inject = ['MenuSearchService'];

//controller
    function NarrowItDownController(MenuSearchService) {
      var ctrl = this;

      ctrl.noresults = false;
      ctrl.searchTerm = "";
      ctrl.found = [];


      ctrl.getMatchedMenuItems = function getMatchedMenuItems() {
        ctrl.noresults = false;
        if (ctrl.searchTerm == "") {
          ctrl.noresults = true;
          return;
        }


        MenuSearchService.queryMenu(ctrl.searchTerm).then(function(results) {
          ctrl.found = results;
        }).finally(function() {
          ctrl.noresults = ctrl.found.length == 0 ? true : false;
        })
      };


      ctrl.removeItem = function removeItem(index) {
        ctrl.found.splice(index, 1);
      };
    }

    MenuSearchService.$inject = ["$http"];

    function MenuSearchService($http) {
      var service = this;

      service.queryMenu = function queryMenu(searchTerm) {
        return $http({
            url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
        }).then(function(response) {
          return response.data.menu_items.filter(function(item) {
            return matchTerm(item.description, searchTerm);
          });
        });
      };
    }


    function matchTerm(text, searchTerm) {
      return text.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    }

})();
