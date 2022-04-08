
//Add


//Multiply


//Substract


//Divide

// abs
function absoluto(a) { 
    showResult('el valor absoluto de  ('+a+')' +'es',Math.abs(a));

  }

//pow
function pow(a,b){
  showResult('su resultado base: '+ a + ', exponente: '+ b +':', Math.pow(a,b))
}   

//max
function max(a,b){
    showResult('Max(' + a + ',' + b + ')', Math.max(a,b))
}

//Helper functions
function showResult(operation, result) {
    console.log(operation + ': ' + result)
}