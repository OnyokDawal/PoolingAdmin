app.factory("productsFactory", function($http){
 
    var factory = {};
 
    // read all products
    factory.readProducts = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost/api/product/read.php'
        });
    };
     
    // createProduct will be here
     
    return factory;
});