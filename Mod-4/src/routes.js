(function () {
'use strict';

angular.module('MenuApp')
       .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
                  url: '/',
                  templateUrl: 'src/templates/home.html'
                })

                .state('categories', {
                  url: '/categories',
                  templateUrl: 'src/templates/categories.html',
                  controller: 'CategoriesController as catxCtrl',
                  resolve: {
                    items: ['MenuDataService', function (MenuDataService) {
                      return MenuDataService.getItemsForCategory();
                    }]
                  }

                })

                .state('categories.getItems', {
                  templateUrl: 'src/templates/items.html',
                  controller: 'ItemsController as itemxCtrl',
                  params: {
                    categoryId: null
                  }
                })
  }


})();
