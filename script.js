const inputs = document.querySelectorAll('input');
const resetBtn = document.getElementById('reset-btn');




inputs.forEach((index, indexValue)=>{


  index.addEventListener('change',()=>{

   

    let bill = inputs[0].value;
    let custom = inputs[1].value;
    let people = inputs[2].value;

    /* I need to calculate my tip amount and total per person*/

    console.log(bill / people);

  })


})

























/*const bill = 305.57;
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

console.log(calculateTip())*/
