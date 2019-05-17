describe('totalPhoneBill function' , function(){
    it('should calculate the total bill for the data provided.' , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');

    });

    it('should calculate the total bill for the different data.' , function(){
        assert.equal(totalPhoneBill('call, sms'), 'R3.40');

    });

    it('should return the total bill for  calls.' , function(){
        assert.equal(totalPhoneBill('call'), 'R2.75');

    });

});