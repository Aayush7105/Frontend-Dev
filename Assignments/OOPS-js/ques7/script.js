// Q7: BankAccount with private #balance
class BankAccount {
  #balance;
  constructor(initial=0){
    this.#balance = initial;
  }

  deposit(amount){
    if (amount <= 0) throw new Error('Deposit amount must be positive');
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount){
    if (amount <= 0) throw new Error('Withdraw amount must be positive');
    if (amount > this.#balance) throw new Error('Insufficient balance');
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance(){
    return this.#balance;
  }
}

const out = document.getElementById('output');
const acc = new BankAccount(500);
const results = [];
results.push(`Initial balance: ₹${acc.getBalance()}`);
try{
  acc.deposit(1000);
  results.push(`After deposit 1000: ₹${acc.getBalance()}`);
  acc.withdraw(200);
  results.push(`After withdraw 200: ₹${acc.getBalance()}`);
  // invalid withdrawal
  acc.withdraw(2000);
  results.push(`After withdraw 2000: ₹${acc.getBalance()}`);
} catch (err) {
  results.push(`Error: ${err.message}`);
}

const pre = document.createElement('pre');
pre.textContent = results.join('\n');
out.appendChild(pre);

console.group('Q7 Banking');
console.log(results.join('\n'));
console.groupEnd();
