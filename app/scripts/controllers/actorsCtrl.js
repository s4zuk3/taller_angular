 (function(){
 angular.module('angularSpa')
    .controller('ActorsCtrl', function($scope, actorsService){
        $scope.actors =[];
        function getActors(){
            actorsService.getActors()
            .success(function(data){
                $scope.actors = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
            });
        }
        getActors();
    });

    angular.module('angularSpa')
    .service('actorsService', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend-master/actors';
        this.getActors = function(){
            return $http.get(urlBase);
        };
    });

})();