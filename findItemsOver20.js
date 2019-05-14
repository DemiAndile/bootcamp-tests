function findItemsOver20(param){
    var item = [];
     for (var i=0; i<param.length;i++){
     var num = param[i].qty
       var list = param[i];
       
       if(num>20){
        //console.log(num)
        item.push(list)
     }
     }
     return item
     
   }
   