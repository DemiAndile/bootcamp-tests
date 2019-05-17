describe('isWeekday function' , function(){
    it('should find out if the parameter passed in is a day of the week' , function(){
        assert.equal(isWeekday('Monday'), true);

    });

    it('should return false if is not a week day' , function(){
        assert.equal(isWeekday('Saturday'), false);

    });

});
