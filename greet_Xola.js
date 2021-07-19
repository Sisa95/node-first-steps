const chalk = require("chalk")
const greet = require("./greet")
const styledMessage =chalk.bgGreen.white(greet("Sisa"))

console.log(styledMessage)

const figlet = require("figlet")
figlet(greet("Sisa"), function(err,data){
    if(err){
        console.log("Error")
        return;
    }
    console.log(data)
})