// https://calculator.swiftutors.com/operating-profit-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const operatingProfitRadio = document.getElementById('operatingProfitRadio');
const grossProfitRadio = document.getElementById('grossProfitRadio');
const operatingExpensesRadio = document.getElementById('operatingExpensesRadio');

let operatingProfit;
let grossProfit = v1;
let operatingExpenses = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

operatingProfitRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross Profit';
  variable2.textContent = 'Operating Expenses';
  grossProfit = v1;
  operatingExpenses = v2;
  result.textContent = '';
});

grossProfitRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Profit';
  variable2.textContent = 'Operating Expenses';
  operatingProfit = v1;
  operatingExpenses = v2;
  result.textContent = '';
});

operatingExpensesRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Profit';
  variable2.textContent = 'Gross Profit';
  operatingProfit = v1;
  grossProfit = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(operatingProfitRadio.checked)
    result.textContent = `Operating Profit = ${computeOperatingProfit().toFixed(2)}`;

  else if(grossProfitRadio.checked)
    result.textContent = `Gross Profit = ${computeGrossProfit().toFixed(2)}`;

  else if(operatingExpensesRadio.checked)
    result.textContent = `Operating Expenses = ${computeOperatingExpenses().toFixed(2)}`;
})

// calculation

function computeOperatingProfit() {
  return Number(grossProfit.value) - Number(operatingExpenses.value);
}

function computeGrossProfit() {
  return Number(operatingProfit.value) + Number(operatingExpenses.value);
}

function computeOperatingExpenses() {
  return Number(grossProfit.value) - Number(operatingProfit.value);
}