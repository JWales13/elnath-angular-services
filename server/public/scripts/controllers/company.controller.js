app.controller('CompanyController', ['CompanyService',function(CompanyService){
    var self = this;
    self.companies = CompanyService.companies;

    self.addNewCompany = CompanyService.addNewCompany;

    


    

}]);