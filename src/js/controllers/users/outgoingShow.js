angular
.module("swishListApp")
.controller("OutgoingShowCtrl", OutgoingShowCtrl);

OutgoingShowCtrl.$inject = ["Transaction", "CurrentUserService", "$stateParams", "$state"];
function OutgoingShowCtrl(Transaction, CurrentUserService, $stateParams, $state){
  const vm = this;
  Transaction
  .query()
  .$promise
  .then(data => {
    vm.swishes = data.transactions;
  });

  vm.approve = () => {
    Transaction
    .update($stateParams, { transaction: vm.transaction })
    .$promise
    .then(data => {
      $state.go("usersArchiveShow", $stateParams);
    });
  };
}
