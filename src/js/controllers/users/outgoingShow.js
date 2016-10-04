angular
.module("swishListApp")
.controller("OutgoingShowCtrl", OutgoingShowCtrl);

OutgoingShowCtrl.$inject = ["Transaction", "CurrentUserService", "$stateParams", "$state"];
function OutgoingShowCtrl(Transaction, CurrentUserService, $stateParams, $state){
  const vm = this;
  Transaction
  .query({ initiator : CurrentUserService.getUser().id})
  .$promise
  .then(data => {
    vm.transactions = data.transactions;
    for (var i = 0; i < vm.transactions.length; i++) {
      if (!vm.transactions[i].initial_item.available) {
        vm.transactions.splice(i,1);
        i--;
      } else if (vm.transactions[i].response_item){
        if (vm.transactions[i].response_item.available === false) {
          vm.transactions.splice(i,1);
          i--;
        }
      }
    }
  });

  vm.approve = (idhere) => {
    Transaction
    .approve({ _id: idhere })
    .$promise
    .then(data => {
      $state.go("usersArchiveShow", $stateParams);
    });
  };

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
