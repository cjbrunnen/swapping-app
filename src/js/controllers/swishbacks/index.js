angular
.module("swishListApp")
.controller("SwishbackIndexCtrl", SwishbackIndexCtrl);

SwishbackIndexCtrl.$inject = ["ClothesItem"];
function SwishbackIndexCtrl(ClothesItem){
  console.log("working");
}
