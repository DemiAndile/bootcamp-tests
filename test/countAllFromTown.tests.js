describe('countAllFromTown' , function(){
    it('should return number registration numbers in the string that is for that town' , function(){
        
        assert.deepEqual(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3);
    });

    it('should return number registration for a different town from the numbers in the string' , function(){
        
        assert.deepEqual(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CY'), 1);
    });

});