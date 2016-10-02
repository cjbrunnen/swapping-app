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
    controller: 'ClothesItemsIndexCtrl as clothesItems'
  })
  .state('clothesItemsNew', {
    url: '/clothesItems/new',
    templateUrl: '/js/views/clothesItems/new.html',
    controller: 'ClothesItemsNewCtrl as clothesItems'
  })
  .state('usersWardrobeShow', {
    url: '/user/wardrobe',
    templateUrl: '/js/views/users/wardrobeShow.html',
    controller: 'WardrobeShowCtrl as wardrobe'
  })
  .state('usersIncomingShow', {
    url: '/user/inbox',
    templateUrl: '/js/views/users/incomingShow.html',
    // controller: 'IncomingShowCtrl as incoming'
  })
  .state('usersOutgoingShow', {
    url: '/user/outbox',
    templateUrl: '/js/views/users/outgoingShow.html',
    // controller: 'OutgoingShowCtrl as outgoing'
  })
  .state('usersArchiveShow', {
    url: '/user/archive',
    templateUrl: '/js/views/users/completedShow.html',
    // controller: 'ArchiveShowCtrl as archive'
  })
  ;

  $urlRouterProvider.otherwise("/");

}
