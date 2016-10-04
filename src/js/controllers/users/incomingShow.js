angular
  .module("swishListApp")
  .controller("IncomingShowCtrl", IncomingShowCtrl);

  IncomingShowCtrl.$inject = ["Transaction", "CurrentUserService"];
  function IncomingShowCtrl(Transaction, CurrentUserService){
    const vm = this;
    Transaction
    .query({ responder : CurrentUserService.getUser().id})
    .$promise
    .then(data => {
      vm.transactions = data.transactions;
      for (var i = 0; i < vm.transactions.length; i++) {
        if (!vm.transactions[i].initial_item) {
          vm.transactions.splice(i,1);
          i--;
        } else if (!vm.transactions[i].initial_item.available) {
          vm.transactions.splice(i,1);
          i--;
        } else if (vm.transactions[i].response_item){
          if (vm.transactions[i].response_item.available === false) {
            vm.transactions.splice(i,1);
            i--;
          }
        }
      }
      for (var j = 0; j < vm.transactions.length; j++) {
        if (vm.transactions[j].status !== 1 && vm.transactions[j].status !== 2){
          vm.transactions.splice(j,1);
          j--;
        }
      }
    });

    vm.reject = (transaction) => {
      Transaction
      .reject({ _id: transaction._id })
      .$promise
      .then(data => {
        // $state.go("usersOutgoingShow", $stateParams);
        vm.transactions.splice(vm.transactions.indexOf(transaction), 1);
      });
    };
}
