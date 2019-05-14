describe('countAllPaarl function' , function(){
    it('should return the number of registration numbers in the string for Paarl' , function(){
        assert.deepEqual(countAllPaarl('CJ'), 1);

    });

    it('should return the number of registration numbers for Paarl' , function(){
        assert.deepEqual(countAllPaarl('CJ4546, CJ123'), 2);
  });

});
