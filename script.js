const inputs = document.querySelectorAll('input');
const percentageBtns = document.querySelectorAll('.percentage-btn');
const resetBtn = document.getElementById('reset-btn');
let tip = document.getElementById('tip-per-person');
let amount = document.getElementById('amount-per-person');
let customInput = document.getElementById('custom-input');
let tipPercentage = 0;

tip.innerText = 0.00;
amount.innerText = 0.00;

/*
const calculateTip = ()=>{
  
  let bill = parseFloat(inputs[0].value);
  let custom = parseFloat(inputs[1].value);
  let people = parseInt(inputs[2].value);
  let selectedTipPercentage = 0;

  percentageBtns.forEach((btn)=>{

    btn.addEventListener('click',(e)=>{
      selectedTipPercentage = e.target.innerText.replace('%','');

      console.log(selectedTipPercentage);
    })
 

  })
  
  if(isNaN(bill) || isNaN(custom) || isNaN(people) || people <= 0){
    tip.innerText = 0.00;
    amount.innerText = 0.00; 

    return
  }
  
  let percentage = custom / 100;
  let tipAmount = percentage * bill;
  let totalBill = bill + tipAmount;
  let tipperPerson = tipAmount / people;
  let totalperPerson = totalBill / people; 
  


  tip.innerText = tipperPerson.toFixed(2);
  amount.innerText = totalperPerson.toFixed(2);
}

const resetCalculator = ()=>{
  inputs.forEach(input =>{
    input.value = '';
  })
  tip.innerText = 0.00;
  amount.innerText = 0.00;
}

inputs.forEach((input)=>{

  input.addEventListener('input', calculateTip)
})

resetBtn.addEventListener('click', resetCalculator);

*/

percentageBtns.forEach((btn)=>{

  btn.addEventListener('click',(e)=>{

    tipPercentage = parseFloat(e.target.innerText.replace('%','')) / 100;

    if(isNaN(tipPercentage)){
      tipPercentage = '';
    }

    
    console.log(tipPercentage);
  })
})

customInput.addEventListener('change',(e)=>{

  tipPercentage = parseFloat(e.target.value) / 100;

  console.log(tipPercentage)

  e.target.value = ''
})


console.log(tipPercentage);

const calculateTip = (billAmount) =>{
  const tip = billAmount * tipPercentage;
  
  console.log(tip);
}

calculateTip(565) /*I need to update this function to capture my data*/ 

















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
