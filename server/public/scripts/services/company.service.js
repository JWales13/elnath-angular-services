app.service('CompanyService',['$http', function($http){
    var self = this;
    
    self.companies = { list: [] };
    self.newCompany = {};
    
    self.getCompanies = function(){
        $http({
            method: 'GET',
            url: '/companies'
        }).then(function (response) {
            self.companies.list = response.data;
        });
    };

    self.addNewCompany = function(newCompany){
        console.log('button clicked');
        $http({
            method: 'POST',
            url: '/companies',
            data: newCompany
        }).then(function(response){
            self.newCompany = {};
            self.getCompanies();
            console.log(response);
        })
    };

    self.getCompanies();
    
    
    
    
 

}])