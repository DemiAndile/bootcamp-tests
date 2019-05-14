function findItemsOver(param1,param2){
    var itemOver = [];
     for (var i=0; i<param1.length;i++){
     var list = param1[i].qty
     var itemlist = param1[i]
       
       if(list>param2){
        itemOver.push(itemlist)
     }
     }
     return itemOver
   }