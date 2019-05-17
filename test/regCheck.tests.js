describe('regCheck function' , function(){
    it('should return a registration number for the specific town "GP"' , function(){
        assert.equal(isGP, true);

    });

    it('should return false if a registration number endwith a different town "MP"' , function(){
        assert.equal(isMP, false);

        
    });

});  



