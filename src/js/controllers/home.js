angular
.module("swishListApp")
.controller("HomeCtrl", HomeCtrl);

HomeCtrl.$inject = ["User", "CurrentUserService"];
function HomeCtrl(User, CurrentUserService){
  const vm = this;

  vm.register = () => {
    User
      .register( { user : vm.userRegister })
      .$promise
      .then(data => {
        const user = data.user || null;
        if (user){
        CurrentUserService.saveUser(user);
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
      }
    });
  };
}
