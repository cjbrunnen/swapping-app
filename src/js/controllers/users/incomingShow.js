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
      console.log(data);
      vm.transactions = data.transactions;
    });
}
