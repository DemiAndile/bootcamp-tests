 describe('findItemsOver20 function' , function(){
     it('should return all the products that have a quantity higher than 20' , function(){

         assert.deepEqual(findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":37}]),[{"name":"pears","qty":37}]);
     });

     it('should return the quantity of apples' , function(){

        assert.deepEqual(findItemsOver20([{"name":"apples","qty":40},{"name":"pears","qty":20}]),[{"name":"apples","qty":40}]);
    });

 });