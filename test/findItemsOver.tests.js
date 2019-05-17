 describe('findItemsOver' , function(){
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
      ];
     it('should return products that have quantity higher than the threshold', function(){
        
        assert.deepEqual( findItemsOver(itemList, 30), [ { name: 'pears', qty: 37 } ]  );
     }); 

     it('should return false if have quantity lesss than 20', function(){
        
        assert.equal( false,findItemsOver({name : 'apples', qty : 10}, 20) );
     }); 

 });