angular
  .module("swishListApp")
  .controller("IncomingShowCtrl", IncomingShowCtrl);

  IncomingShowCtrl.$inject = ["ClothesItem", "CurrentUserService"];
  function IncomingShowCtrl(ClothesItem, CurrentUserService){
    const vm = this;
    ClothesItem
    .query()
    .$promise
    .then(data => {
      vm.transactions = data.clothesItems;
      for (var i = 0; i < vm.transactions.length; i++) {
        if (vm.transactions[i].owner !== CurrentUserService.getUser().id){
          vm.transactions.splice(i,1);
          i--;
        }
      }
    });
}
