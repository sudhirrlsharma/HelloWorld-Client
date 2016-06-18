weatherApp.controller('weatherController', ['$scope', '$routeParams', 'weatherService', function($scope,$routeParams, weatherService) {

   $scope.findWeather= function (city) {
     const location = findCoordinates(city);
      if(!location){
          throw "Illigal location";
        }

        var weatherData = weatherService.getWeatherData(location);
        weatherData.then(function (data){
          console.log(data);
         $scope.weather = data;
         }, function(status){
             console.log(status);
        });
      }

      /**
      *  Code to find the Latitude and longitude based on city should go here, this can be a separate serevice
      */
      function findCoordinates(city) {
        const location = 42.7243,-73.6927;
        return location;
      };


});
