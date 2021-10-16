const { RSA_X931_PADDING } = require("constants");
const { stdin } = require("process");
const readline = require("readline");

// creating the stdin and stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const rangeOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 0;
let output = [];

const guessingGame = () => {
  let num = Math.floor(Math.random() * rangeOfNumbers.length);
  rl.question("guess a number from 1-10: ", (dataInput) => {
    if (output.length === rangeOfNumbers.length) {
        console.log("#############################################")
      console.log({ error: "exceed the amount the tries" });

      rl.close();
    }

    dataInput = typeof dataInput === "string" ? Number(dataInput) : false;
    if (dataInput && dataInput !== num) {
      output.push(dataInput);
      console.log(output);
      console.log({ error: "incorrect number", realNumer: num });

      guessingGame();
    } else if (dataInput && dataInput === num) {
      output.push(dataInput);

      console.log(`it took you ${output.length} time(s) to get the number\n`);
      console.log({ randomNumber: num, yourNumber: dataInput });

      rl.close();
    }
  });
};

while (count <= rangeOfNumbers.length) {
  guessingGame();

  count += 1;
}
