angular
  .module("swishListApp")
  .controller("ArchiveShowCtrl", ArchiveShowCtrl);


  ArchiveShowCtrl.$inject = ["Transaction", "CurrentUserService"];
  function ArchiveShowCtrl(Transaction, CurrentUserService){
    console.log("hello");
    const vm = this;
    Transaction
    .query()
    .$promise
    .then(data => {
      vm.transactions = data.transactions;
    });
  }
