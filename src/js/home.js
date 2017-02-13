angular.module('shop')
.controller('donghua',['$scope','$timeout',
function($scope,$timeout){//定义一个控制器
	$scope.bol2 = false;
	$timeout(function(){
		$scope.bol2=!$scope.bol2;
	},3000);
}])