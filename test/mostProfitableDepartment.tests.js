 describe('mostProfitableDepartment function' , function(){
     it('should determine which departments are the most profitable' , function(){

         assert.deepEqual(mostProfitableDepartment([{"department":"carpentry","sales":5500,"day":"Monday"}, {"department":"hardware","sales":4500,"day":"Monday"}]),'carpentry');
     });

     it('should return the least profitable department' , function(){
        assert.equal( mostProfitableDepartment([{"department":"outdoor","sales":1500,"day":"Monday"}]), 'outdoor');

    });

 });