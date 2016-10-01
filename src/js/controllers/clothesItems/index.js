angular
  .module("swishListApp")
  .controller("ClothesItemsIndexCtrl", ClothesItemsIndexCtrl);

ClothesItemsIndexCtrl.$inject = ["ClothesItem"];
function ClothesItemsIndexCtrl(ClothesItem){
  const vm = this;
  ClothesItem
    .query()
    .$promise
    .then(data => {
      vm.items = data.clothesItems;
    });

}
