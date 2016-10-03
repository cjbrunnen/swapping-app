angular
.module("swishListApp")
.controller("SwishbackShowCtrl", SwishbackShowCtrl);

SwishbackShowCtrl.$inject = ["ClothesItem", "Transaction", "CurrentUserService", "$stateParams", "$state"];
function SwishbackShowCtrl(ClothesItem, Transaction, CurrentUserService, $stateParams, $state){
  console.log("HIYA");
  const vm = this;
  ClothesItem.get($stateParams, data => {
    vm.item = data.clothesItem;
    vm.user = CurrentUserService.getUser();
  });

  vm.swishback = () => {
    console.log("swishback");
    // vm.transaction = {
    //   initial_item : vm.item._id
    // };
    // Transaction
    //   .save({ transaction : vm.transaction })
    //   .$promise
    //   .then(data => {
    //     console.log(data);
    //     $state.go("clothesItemsIndex");
    //   });
  };
}
