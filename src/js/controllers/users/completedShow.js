angular
  .module("swishListApp")
  .controller("CompletedShowCtrl", CompletedShowCtrl);


  CompletedShowCtrl.$inject = ["Transaction", "CurrentUserService"];
  function CompletedShowCtrl(Transaction, CurrentUserService){
    const vm = this;
    Transaction
    .query()
    .$promise
    .then(data => {
      vm.swishes = data.transactions;
    });
  }
