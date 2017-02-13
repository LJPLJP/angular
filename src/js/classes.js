angular.module('shop')
.controller('classes',['$scope','$http',function($scope,$http){
	$scope.classes_navArr = ['推荐分类','中西药品','成人药品','家庭药箱','健康体检','医疗器械','营养保健','中药饮片','隐形眼镜','家庭电器'];
	$scope.classes_datas = [];	
	$scope.classes_navClick = function(navName){
		switch(navName)
		{
			case '推荐分类':
			getClassesData("classify-class")
			  break;
			case '中西药品':
			 getClassesData("classify-doc")
			  break;
			case '成人药品':
			getClassesData("classify-sex")
			  break;
		}
	}
	getClassesData("classify-class")
	function getClassesData(name){
		$http.get('http://169.254.241.177:4321/' + name)
		.then(function(data){
				$scope.classes_datas = data.data.Data.Items;
		})
		
	}
	
	
}])