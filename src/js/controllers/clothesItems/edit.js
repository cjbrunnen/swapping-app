angular
.module("swishListApp")
.controller("ClothesItemsEditCtrl", ClothesItemsEditCtrl);

ClothesItemsEditCtrl.$inject = ["ClothesItem", "$stateParams", "$state"];
function ClothesItemsEditCtrl(ClothesItem, $stateParams, $state){
  const vm = this;

  ClothesItem.get($stateParams, data => {
    vm.clothesItems = data.clothesItems;
  });

  vm.submit = () => {
    ClothesItem
      .update($stateParams, { clothesItems: vm.clothesItems })
      .$promise
      .then(data => {
        $state.go("clothesItemsShow", $stateParams);
      });
  };
}
