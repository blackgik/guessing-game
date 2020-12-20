const { stdin } = require('process');
const readline = require('readline');

// creating the stdin and stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const rangeOfNumbers = [0,1,2,3,4,5,6,7,8,9,10]
let num = Math.floor((Math.random()) * rangeOfNumbers.length );

let count = 0
let output =[]

// using while to check for tries
while (count < 3) {
    // asking the question
    rl.question('guess a number from 1-10:\n' , (userInput) => {

        if (userInput === num){
            console.log({
                numberChoosenRandomly: num,
                numberChoosenByUser: userInput
            })
            let numberOftries = output.length
            const s = numberOftries > 1 ? 'tries' : 'try'
            console.log('nice you guessed right, it took you ' + correctAnswerIndex, s)

            rl.close()
        } else {
            console.log('you entered \'' + userInput + '\' The number was ' + num )
            output.push(userInput)
            
            count += 1;
        }
        
    });
}


rl.on('close', ()=> {
    console.log('congrats!!!!')
});
