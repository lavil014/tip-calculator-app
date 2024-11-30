const bill = 305.57;
const tipPercentage = [5, 10, 15, 25, 50,3.5];
const numberofPeople = 5;






const calculateTip = ()=>{
  let percentage = (tipPercentage[5] / 100);
  let tipAmount = bill * percentage;
  let totalperPerson = (bill + tipAmount) / numberofPeople;

  console.log(tipAmount);
  
  
  return {
    tipAmount: tipAmount.toFixed(2),
    totalperPerson: totalperPerson.toFixed(2)
  }
}

console.log(calculateTip())
