app.controller('CarController', ['CarService','CompanyService', function(CarService, CompanyService){
    var self = this;
    self.cars = CarService.cars;
    self.companies = CompanyService.companies;
    
    self.addNewCar = CarService.addNewCar;
}]);