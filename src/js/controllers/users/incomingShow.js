angular
  .module("swishListApp")
  .controller("IncomingShowCtrl", IncomingShowCtrl);

  IncomingShowCtrl.$inject = ["Transaction", "CurrentUserService"];
  function IncomingShowCtrl(Transaction, CurrentUserService){
    const vm = this;
    Transaction
    .query()
    .$promise
    .then(data => {
      console.log(data);
      vm.transactions = data.transactions;
      console.log(vm.transactions[0]);
      for (var i = 0; i < vm.transactions.length; i++) {
        if (vm.transactions[i].responder._id !== CurrentUserService.getUser().id){
          vm.transactions.splice(i,1);
          i--;
        }
      }
    });
}
