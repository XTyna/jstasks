function deepCount(a){
  //...
  var result = 0;
  
  for(var i = 0; i < a.length; i++) {
    if(a[i] instanceof Array) {
      result += deepCount(a[i]) + 1;
    } else {
      result++;
    }
  }
    return result;
  }