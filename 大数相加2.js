function add(a ,b){
    let mathLength = Math.max(a.length, b.length)
    //用0去补齐长度
    a = a.padStart(mathLength, 0) 
    b = b.padStart(mathLength, 0)
    let t = 0
    let f = 0 //"进位"
    let sum = ""
    for(let i = mathLength-1; i>=0; i--){
      t = parseInt(a[i]) + parseInt(b[i]) + f;
      f = Math.floor(t/10);
      sum = t%10 + sum;
    }
    if(f === 1){
      sum = "1" + sum;
    }
    return sum
  }
  console.log(add(a ,b))
