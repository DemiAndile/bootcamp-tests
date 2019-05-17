describe('yearAgo function' , function(){
    it('should return 0 if it is the current year' , function(){

        assert.deepEqual(yearsAgo(2019), 0);
    });

    it('should return 3 if it is previous years' , function(){

        assert.deepEqual(yearsAgo(2016),3);
    });

    it('should return how many years to come' , function(){

        assert.deepEqual(-2,yearsAgo(2021));
    });


    
});