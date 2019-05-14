function regCheck(regNum, town) {
  console.log(town);
  return regNum.endsWith(town);
}

 var isGP = regCheck('DV 23 NB GP', 'GP');
 var isMP = regCheck('DV 23 LP GP', 'MP');
  
