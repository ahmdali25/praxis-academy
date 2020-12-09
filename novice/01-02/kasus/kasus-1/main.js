var numA, numB;
numA = prompt("Input the First number :", "0" );
numB = prompt("Input the second number : ", "0");
                                                 
if(numA > numB) 
  { 
  console.log("The larger of "+ numA+ " and "+ numB+ " is "+ numA+ ".");
  }   
else
  if(numB > numA) 
  {
  console.log("The larger of "+ numA+" and "+ numB+ " is "+ numB+ ".");
  }                  
else
  {
   console.log("The values "+ numA+ " and "+numB+ " are equal.");
  }