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
  });

  vm.approve = () => {
    console.log("booy");
    Transaction
    .approve($stateParams, { transaction: vm.transaction })
    .$promise
    .then(data => {
      $state.go("usersArchiveShow", $stateParams);
    });
  };
}
