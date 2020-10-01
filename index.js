const inquire = require("inquirer")
const fs = require("fs")

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project Title?"
      },
      {
        type: "input",
        name: "description",
        message: "Please enter a description of your projet."
      },
      {
        type: "input",
        name: "install",
        message: "What is required for installation?"
      },
      {
        type: "input",
        name: "usage",
        message: "Instructions for use"
      },
      {
        type: 'checkbox',
        choices: ['Apache License 2.0', 'GNU LGPLv3', 'GNU AGPLv3', 'MIT License'],
        message: 'Which licenses did you use?',
        name: 'license'
      },
      {
        type: "input",
        name: "email",
        message: "Enter email address."
      },
      {
        type: "input",
        name: "Tests",
        message: "What tests did you run?"
      },
      {
        type: "input",
        name: "Questions",
        message: "Who do users contact with questions?"
      },
];


// function to write README file
function writeToFile(fileName, data){
    const template = generateMarkdown(data);
    fs.writeFileSync(fileName, data, function(err){
    if(err)
        console.log(err);
    })
    questions.push(badge)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (data) {
        console.log(data);
        const fileName = "readme.md";
        writeToFile(fileName, data);
    })

}

// function call to initialize program
init();
