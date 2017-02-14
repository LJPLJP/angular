angular.module('shop').controller("cart",['$scope','$http',function($scope,$http){
	$scope.arr = [];
	$scope.sum = 0;
	$http.get("http://169.254.241.177:4321/buyCar").then(function(data){
		$scope.arr = data.data.Data.Packages[0].Items;
	})
	$scope.jian = function(s){
		s.Qty--;
		if(s.Qty<0){
			s.Qty = 0;
		}
		sum();
	}
	$scope.jia = function(s){
		s.Qty++;
		sum();
	}
	sum();
	function sum(){
		$scope.sum = 0;
		for(var i= 0; i<$scope.arr.length;i++){
			$scope.sum = $scope.sum + $scope.arr[i].Qty*$scope.arr[i].Price;
		}
	}
	$scope.toggle = function(){
		$scope.hid = !$scope.hid;
	}
}])
