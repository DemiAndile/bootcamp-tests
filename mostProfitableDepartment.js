function mostProfitableDepartment(param){
    var str = 0;
    var str1 = "";
    for (var i=0; i<param.length;i++){
      var department = param[i].sales
      var most = param[i].department
      if (str<department){
      str = department
        str1 = most
      }
    }
    return str1
   }