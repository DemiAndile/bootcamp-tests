describe('countRegNumber function' , function(){
    it('should return the number of registration numbers in the string' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328,CA 182736,CJ 812328'),5);

    });
    it('should return the string of registration numbers' , function(){
        assert.equal(regCount, 3);

    });
    
    it('should return one as the total number of registration numbers in the string' , function(){
        assert.equal(countRegNumber('CA 194798'), 1);

    });
});