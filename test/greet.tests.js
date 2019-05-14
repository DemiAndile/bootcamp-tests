describe('greet function' , function(){
    it('should greet hello Andile when the name is passed' , function(){
        assert.equal('Hello, Andile', greet('Andile'));
    });

    it('should greet hello Siwe when the name is passed' , function(){
        assert.equal('Hello, Siwe', greet('Siwe'));
    });

    it('should greet hello Ivy when the name is passed' , function(){
        assert.equal('Hello, Ivy', greet('Ivy'));
    });


});