
//Add
function add(a,b) { 
  showResult('la suma entre '+a+' y '+b+' es ',a+b);
}

//Multiply
function multiply(a,b) { 
  showResult('la multiplicacion entre '+a+' y '+b+' es ',a*b);
}

//Substract
function substract(a,b) { 
  showResult('la resta entre '+a+' y '+b+' es ',a-b);
}

//Divide
function divide(a,b) { 
  showResult('la divicion entre '+a+' y '+b+' es ',a/b);
}

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