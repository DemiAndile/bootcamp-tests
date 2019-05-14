function countAllFromTown(reg,list){
    var townReg = [];
      var reglist = reg.split(',')
      console.log(reglist)
    for (var i=0;i<reglist.length;i++){
      var Town = reglist[i];
      
      if(reglist[i].trim().startsWith(list)){
        townReg.push(Town);
      }
    }
        
        return townReg.length
               
    }

    var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
    console.log(fromStellies)