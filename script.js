var app=angular.module("imdb",[]);
app.controller("controller",function($scope,$http){
    $scope.callSearch=function(){
        if(typeof $scope.userinput =='undefined' || $scope.userinput=='' )
            {
                
            }
        else
            search();
    }
     function search(){
         $http.get("http://www.omdbapi.com/?t=" + $scope.userinput).then(function(response){
         $scope.details=response.data;
         console.log(response.data);
    });
    }
    
})