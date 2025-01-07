const inputs = document.querySelectorAll('input');
const percentageBtns = document.querySelectorAll('.percentage-btn');
const resetBtn = document.getElementById('reset-btn');
let tip = document.getElementById('tip-per-person');
let amount = document.getElementById('amount-per-person');
let customInput = document.getElementById('custom-input');
let tipPercentage = 0;


/* Reset values to 0 */
tip.innerText = 0.00;
amount.innerText = 0.00;


const calculateTip = ()=>{
  
const bill = parseFloat(document.getElementById('bill-input').value);
const people = parseInt(document.getElementById('people-input').value);


  if(people <= 0){
    alert('Number of people must be greater than 0')

    return;
  }

  let tipAmount = bill * tipPercentage;
  let totalBill = bill + tipAmount;

  let tipperPerson = tipAmount / people;
  let totalperPerson = totalBill / people; 

  tip.innerText = tipperPerson.toFixed(2);
  amount.innerText = totalperPerson.toFixed(2);
    

}

percentageBtns.forEach((btn)=>{

  btn.addEventListener('click',(e)=>{
    tipPercentage = parseFloat(e.target.innerText.replace('%','')) /100;
    customInput.value = '';

    calculateTip();
  })


})

customInput.addEventListener('input', (e)=>{
  tipPercentage = parseFloat(e.target.value) / 100;
  calculateTip();
})

const resetCalculator = ()=>{
  inputs.forEach((input) =>{
    input.value = '';
    tip.innerText = 0.00;
    amount.innerText = 0.00;
    tipPercentage = 0;
  })
}

resetBtn.addEventListener('click', resetCalculator);

inputs.forEach((input)=>{
  input.addEventListener('input', calculateTip);
})
