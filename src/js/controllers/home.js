angular
.module("swishListApp")
.controller("HomeCtrl", HomeCtrl);

HomeCtrl.$inject = ["User", "CurrentUserService", "$state"];
function HomeCtrl(User, CurrentUserService, $state){
  const vm = this;

  vm.register = () => {
    User
      .register( { user : vm.userRegister })
      .$promise
      .then(data => {
        const user = data.user || null;
        if (user){
        CurrentUserService.saveUser(user);
        $state.go('clothesItemsIndex');
      }
      });
  };

  vm.login = () => {
    User
    .login(vm.userLogin)
    .$promise
    .then(data => {
      const user = data.user || null;
      if (user){
        CurrentUserService.saveUser(user);
        $state.go('clothesItemsIndex');
      }
    });
  };
}
