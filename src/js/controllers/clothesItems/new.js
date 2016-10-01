angular
.module("swishListApp")
.controller("ClothesItemsNewCtrl", ClothesItemsNewCtrl);

ClothesItemsNewCtrl.$inject = ["ClothesItem", "$state", 'CurrentUserService'];
function ClothesItemsNewCtrl(ClothesItem, $state, CurrentUserService){
  const vm = this;
  vm.user = CurrentUserService.getUser();
  vm.item = {
    owner: vm.user.id,
    available: true
  };
  vm.submit = () => {
    ClothesItem
      .save({ clothesItem: vm.item })
      .$promise
      .then(data => {
        $state.go("clothesItemsIndex");
      });
  };
}
