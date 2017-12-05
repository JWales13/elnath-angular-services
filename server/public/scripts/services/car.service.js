app.service('CarService',['$http', function($http){
    var self = this;
    
    self.cars = { list: [] };
    self.companies = { list: [] };

    self.newCar = {};
    
    
    self.getCars = function(){
        $http({
            method: 'GET',
            url: '/cars'
        }).then(function (response) {
            self.cars.list = response.data;
        });
    };

    self.addNewCar = function(newCar){
        console.log('button clicked');
        $http({
            method: 'POST',
            url: '/cars',
            data: newCar
        }).then(function(response){
            self.newCar = {};
            self.getCars();
            console.log(response);
        })
    };

    self.getCars();
    
    
    
    
 

}])