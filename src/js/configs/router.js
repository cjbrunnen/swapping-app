angular
  .module("swishListApp")
  .config(Router);

Router.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
function Router($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "/js/views/home.html",
    controller: "HomeCtrl as home"
  })
  .state('clothesItemsIndex', {
    url: '/clothesItems',
    templateUrl: '/js/views/clothesItems/index.html',
    // controller: 'ClothesItemsIndexCtrl as clothesItems'
  });

  $urlRouterProvider.otherwise("/");

}
