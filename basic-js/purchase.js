const tax = 0.13;
const phonePrice = 79.99;
const accessoryPrice = 8.99;

const bankBalance = 605.92;
let amount = 0;

function calcTax() { return amount * tax; }

function format() { return `$${amount.toFixed(2)}`; }

while (amount < bankBalance) {
  amount += phonePrice;

  if (amount < bankBalance) {
    amount += accessoryPrice;
  }
}

amount += calcTax(amount);

console.log(`Your purchase: ${format(amount)}`);

if (amount > bankBalance) {
  console.log(`You can't afford this purchase. (${format(amount)})`);
}
