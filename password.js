// import readline for interactive user input/output
const readline = require('readline')

// create readline interface for the cli
const rl = readline.createInterface({
    input: process.stdin,         //Use stanard input (keyword)
    output: process.stdout        //Use standard output (keyword)
})

// Define character sets as strings 
const LOWER = 'abcdefghijklmnopqrstuvwxyz'  //Lowercase letters
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'  //Uppercase letters
const NUMBERS = '0123456789'                //Digits 0-9
const SYMBOLS = '!@#$%^&*()-_=+[]{};:,.<>?' //Common symbols

//funstion to prompt user for password options and generate password
function promptOptions() {
    rl.question('Enter password length (eg. 12): ', lenInput => {
        const length = parseInt(lenInput)       //convert input to integer
        //Validate length (must be atleast 4 characters)
        if(isNaN(length) || length < 4) {
            console.log('Please enter a number greater than or equal to 4.')
            return promptOptions   //prompt again on invalid input
        }
        //Ask the user if uppercase should be included
        rl.question('Include uppercase letters? (y/n): ', upperInput => {
            // Ask user if numbers are included
            rl.question('Include numbers? (y/n): ', numInput => {
                //Ask user if symbols are included
                rl.question('Include symbols? (y/n): ', symInput => {
                    let chars = LOWER  //always include lowercase by default

                    //Add uppercase letters if selected
                    if(upperInput.trim().toLowerCase() === 'y') chars += UPPER
                    //Add numbers if selected
                    if(numInput.trim().toLowerCase() === 'y') chars += NUMBERS
                    //Add symbols if selected
                    if(symInput.trim().toLowerCase() === 'y') chars += SYMBOLS
                    
                })
            })
        })

    })
}