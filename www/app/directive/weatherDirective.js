weatherApp.directive( 'weatherComponent', [ 'weatherService', function( weatherService ) {
  return {
      restrict: 'E',
      scope: {
       city: '@'
      },
      templateUrl :'app/template/wather.html',

     link: function( scope, element, attribute ) {
         var weatherData = weatherService.getWeatherData(scope.city);
         if(!weatherData){
           return;
         }
         weatherData.then(function (data){
           console.log(data);
           scope.weather = data;
             console.log(data);
          }, function(status){
              console.log(status);
         });
       }

     }
}
]);
