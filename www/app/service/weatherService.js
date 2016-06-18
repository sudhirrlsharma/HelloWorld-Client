weatherApp.service('weatherService', function($http,$log, $q) {

  this.getWeatherData = function(location) {

        // const apiKey = 'c64faea16c17df04e149a90549bd8065';
        // var weatherUrl = 'https://api.forecast.io/forecast/'+apiKey+'/'+location;

        console.log("Calling service to collect the data");

        const apiKey = 'c64faea16c17df04e149a90549bd8065';
        var weatherUrl = 'http://localhost:8001/wether/location/' + location


        var deferred = $q.defer();
        $http({method: 'GET', url: weatherUrl}).
        success(function(data,status,header,config){
             $log.info(data,status,header());
             deferred.resolve(data);
        }).
        error(function(data, status, header, config){
            deferred.reject(status);
        });
	}

});
