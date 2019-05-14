describe('isFromBellville function' , function(){
    it('should return true if a registration number is for Bellville', function(){
        assert.equal(isFromBellville('CY'), true);
    });

    it('should return false if a registration number is not for Bellville', function(){
        assert.equal(isFromBellville('CA'), false );
    });
   
});