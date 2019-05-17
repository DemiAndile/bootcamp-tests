 describe('fromWhere function' , function(){
     it('should take a car registration number as a parameter and returns the town the car is from' , function(){
         assert.equal(fromWhere('CY'),'Bellville');

     });

     it('should take a car registration number that will return the town the car is from' , function(){
        assert.equal(fromWhere('CJ'),'Paarl');

    });

    it('should take a car registration number CA to return the town the car is from' , function(){
        assert.equal(fromWhere('CA'),'Cape Town');

    });

    it('should take a car registration number that returns a different town the car is from' , function(){
        assert.equal(fromWhere('CL'),'Some other place!');

    });

 });