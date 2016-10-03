angular
.module("swishListApp")
.controller("SwishbackIndexCtrl", SwishbackIndexCtrl);

SwishbackIndexCtrl.$inject = ["ClothesItem", "$stateParams"];
function SwishbackIndexCtrl(ClothesItem, $stateParams){
  console.log("working");
  const vm = this;
  console.log($stateParams);
  ClothesItem
  .query($stateParams)
  .$promise
  .then(data => {
    console.log(data);
    vm.items = data.clothesItems;
    for (var i = 0; i < vm.items.length; i++) {
      if (!vm.items[i].available){
        vm.items.splice(i,1);
        i--;
      }
    }
  });
}
