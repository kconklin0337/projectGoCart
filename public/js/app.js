var app = angular.module('ngCart', []);


app.controller('CartController', function($scope){
   $scope.itemList = [];

  $scope.saveItem = function(){
    var item = $scope.item;
    $scope.itemList.push(item);
    $scope.item = {};

  }

  $scope.removeItem = function (singleItem){
   var remove = $scope.itemList.indexOf(singleItem)
   $scope.itemList.splice(remove, 1);
  }

  $scope.editItem = function(singleItem){
    $scope.item = singleItem;
    $scope.removeItem(singleItem);
  }

  $scope.moveUp = function(singleItem) {
    var index = $scope.itemList.indexOf(singleItem);
    $scope.itemList.splice(index, 1);
    $scope.itemList.splice(index-1, 0, singleItem);
  }

  $scope.moveDown = function(singleItem) {
    var index = $scope.itemList.indexOf(singleItem);
    $scope.itemList.splice(index, 1);
    $scope.itemList.splice(index+1, 0, singleItem);
  }

//adds to completed list
 $scope.completedItemList = [];
 $scope.singleItem = {};
  $scope.completedItem = function(singleItem) {
    $scope.completedItemList.push(singleItem);
    //deletes item from TodoList
    var remove = $scope.itemList.indexOf(singleItem)
        $scope.itemList.splice(remove, 1);
  }
//end

//deletes item from completed and moves back
$scope.removePurchase = function(singleItem) {
  $scope.itemList.push(singleItem);
  var remove = $scope.completedItemList.indexOf(singleItem)
      $scope.completedItemList.splice(remove, 1);
    }

  // cart total
  $scope.$watch('completedItemList', function() {
      var cartTotal = 0;

      $scope.completedItemList.forEach(function(singleItem) {
        cartTotal += singleItem.price;
      });

      $scope.cartTotal = cartTotal;
    }, true);

// function drag($scope) {
//   			$scope.item = [];
//   			$scope.cartItem = '';
//   			$scope.cartItem = function (){
//   				if($scope.tempplayer === "") return
//   				$scope.names.push({val: $scope.tempplayer});
//   				$scope.tempplayer = "";
//   			};
//   			$scope.checkForNameDelete = function($index){
//   				if($scope.names[$index].val === ''){
//   					$scope.names.splice($index, 1);
//   				}
//   			};
});
