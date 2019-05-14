function countAllPaarl(param){
    var reg = [];
      var reglist = param.split(', ')
    for (var i=0;i<reglist.length;i++){
      var car = reglist;
      
      if(reglist[i].startsWith("CJ")){
        reg.push(reglist[i]);
      }
    }
        
        return reg.length
    }