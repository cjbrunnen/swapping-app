angular
.module("swishListApp")
.controller("WardrobeShowCtrl", WardrobeShowCtrl);

WardrobeShowCtrl.$inject = ["ClothesItem", "CurrentUserService"];
function WardrobeShowCtrl(ClothesItem, CurrentUserService){
  const vm = this;
  ClothesItem
  .query()
  .$promise
  .then(data => {
    vm.items = data.clothesItems;
    for (var i = 0; i < vm.items.length; i++) {
      if (vm.items[i].owner !== CurrentUserService.getUser().id){
        vm.items.splice(i,1);
        i--;
      }
    }
  });
  vm.clearFilters = clearFilters;
  function clearFilters(){
    vm.filters = null;
    ClothesItem
    .query()
    .$promise
    .then(data => {
      vm.items = data.clothesItems;
      for (var i = 0; i < vm.items.length; i++) {
        if (vm.items[i].owner !== CurrentUserService.getUser().id){
          vm.items.splice(i,1);
          i--;
        }
      }
    });
  }
  vm.filter = filter;
  function filter(){
    ClothesItem
    .query()
    .$promise
    .then(data => {
      vm.items = data.clothesItems;
      for (var k = 0; k < vm.items.length; k++) {
        if (vm.filters.category){
          if (vm.items[k].category !== vm.filters.category){
            vm.items.splice(k, 1);
            k--;
          }
        }
      }
      for (var j = 0; j < vm.items.length; j++) {
        if (vm.filters.sex){
          if (vm.items[j].sex !== vm.filters.sex && vm.items[j].sex !== "unisex"){
            vm.items.splice(j, 1);
            j--;
          }
        }
      }
      for (var i = 0; i < vm.items.length; i++) {
        if (vm.items[i].owner !== CurrentUserService.getUser().id){
          vm.items.splice(i,1);
          i--;
        }
      }
      if (vm.items.length === 0){vm.items = null;}
    });
  }
}
