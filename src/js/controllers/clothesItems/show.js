angular
  .module("swishListApp")
  .controller("ClothesItemsShowCtrl", ClothesItemsShowCtrl);

ClothesItemsShowCtrl.$inject = ["ClothesItem", "CurrentUserService", "$stateParams", "$state"];
function ClothesItemsShowCtrl(ClothesItem, CurrentUserService, $stateParams, $state){
  const vm = this;
  ClothesItem.get($stateParams, data => {
    console.log(data);
    vm.item = data.clothesItem;
    vm.user = CurrentUserService.getUser();
  });

  vm.delete = () => {
    ClothesItem
      .delete($stateParams)
      .$promise
      .then(data => {
        $state.go("clothesItemsIndex");
      });
  };
}
