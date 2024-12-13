const inputs = document.querySelectorAll('input');
const resetBtn = document.getElementById('reset-btn');
let tip = document.getElementById('tip-per-person');
let amount = document.getElementById('amount-per-person');

tip.innerText = 0;
amount.innerText = 0;

inputs.forEach((index)=>{


  index.addEventListener('input',()=>{

   

    let bill = parseFloat(inputs[0].value);
    let custom = parseFloat(inputs[1].value);
    let people = parseInt(inputs[2].value);
    
    
    
    let percentage = custom / 100;
    let tipAmount = percentage * bill;
    let totalBill = bill + tipAmount;
    let tipperPerson = tipAmount / people;
    let totalperPerson = totalBill / people; 


    tip.innerText = tipperPerson.toFixed(2);
    amount.innerText = totalperPerson.toFixed(2);


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
