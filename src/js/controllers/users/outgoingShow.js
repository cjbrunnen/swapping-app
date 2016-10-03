angular
  .module("swishListApp")
  .controller("OutgoingShowCtrl", OutgoingShowCtrl);

OutgoingShowCtrl.$inject = ["Transaction", "CurrentUserService"];
function OutgoingShowCtrl(Transaction, CurrentUserService){
  const vm = this;
  Transaction
  .query()
  .$promise
  .then(data => {
    vm.swishes = data.transactions;
  });
}
