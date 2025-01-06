const chalk = require("chalk");
console.log(chalk.blue.bold.inverse("Hi. This is Node class"));

var figlet = require("figlet");

figlet("Hello Node!!", function(err,data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});