// We can use IIFE to create public and private variables and methods

/*
makeWithdraw is a higher order function that takes a parameter balance.

It immeditely calls an inner IIFE with balance as an argument, copyBalance.

The inner IIFE creates private variables and methods that are not accessible form outside.

Inside the IIFE:
    The let declared variable balance is local to the IIFE and initialized with the value of copyBalance.
    Hence creates a private copy of the balance that only the withdraw method can access.

    The doBadThings method is a private method that can only be accessed inside the IIFE.
    It is defined and called immediately.

    The IIFE returns an object that contains a single public method withdraw.
*/
const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // private variable balance

    const doBadThings = () =>
      console.log("I am doing bad things with your balance");

    doBadThings(); // private method

    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        } else {
          return "Insufficient funds";
        }
      },
    };
  })(balance);

const firstAccount = makeWithdraw(1000); // i am doing bad things with your balance is logged to the console

console.log(firstAccount.balance); // undefined because balance is private

console.log(firstAccount.withdraw(100)); // 900 because balance is 1000 and amount is 100
console.log(firstAccount.withdraw(100)); // 800 because balance is 900 and amount is 100

console.log(firstAccount.doBadThings); // undefined because doBadThings is a private method and not in the returned object, hence accessing it from outside returns undefined

const secondAccount = makeWithdraw(20); // i am doing bad things with your balance is logged to the console
console.log(secondAccount.withdraw(30)); // Insufficient funds because balance is 20 and amount is 30
console.log(secondAccount.withdraw(20)); // 0 because balance is 20 and amount is 20
