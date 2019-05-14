function yearsAgo(year){
    console.log(year)
    var today = new Date();
    var currentyear = today.getFullYear();
    return (currentyear - year)
   
  }

  //alert(yearsAgo(2020));