angular
.module("swishListApp")
.controller("SwishbackShowCtrl", SwishbackShowCtrl);

SwishbackShowCtrl.$inject = ["ClothesItem"];
function SwishbackShowCtrl(ClothesItem){
  console.log("working");
}
