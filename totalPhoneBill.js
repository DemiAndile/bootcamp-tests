function totalPhoneBill(param){
    var phoneBillCalls = [];
      var phoneBillSMS = [];
      var BillList = param.split(', ');
        //console.log(BillList)
      for (var i=0; i< BillList.length;i++){
        var elements = BillList[i]
        if(elements === 'call'){
          phoneBillCalls.push(elements)
                  }
        if(elements === 'sms'){
          phoneBillSMS.push(elements)
              }
          } 
      var sms = phoneBillSMS.length * 0.65;
      var calls = phoneBillCalls.length * 2.75;
      var total = sms + calls;
      console.log(total)
      return "R" + total.toFixed(2)
    }
    