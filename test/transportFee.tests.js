describe('transportFee function' , function(){
    it('should return the right price based on the shift you are working' , function(){
        assert.equal(transportFee('morning'), "R20");
    });

    it('should return the price based on the shift ' , function(){
        assert.equal(transportFee('afternoon'), "R10");
    });

    it('should return free because of the shift' , function(){
        assert.equal(transportFee('nightshift'), "free");
    });

});