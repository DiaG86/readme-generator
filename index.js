const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./generateMarkdown.js")
const badge = ("https://img.shields.io/github/languages/top/DiaG86/readme-generator")

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
        message: "Please enter a description of your project."
      },
      {
        type: "input",
        name: "TableOfContents",
        message: "Do you require a table of contents? If yes what are the sections of your project?"
      },
      {
        type: "input",
        name: "Install",
        message: "What is required for installation?"
      },
      {
        type: "input",
        name: "Usage",
        message: "How do you use the project?"
      },
      {
        type: 'checkbox',
        choices: ['Apache License 2.0', 'GNU LGPLv3', 'GNU AGPLv3', 'MIT License', 'None'],
        message: 'Which licenses did you use?',
        name: 'License'
      },
      {
        type: "input",
        name: "Contribution",
        message: "Who contributed to this project?"
      },
      {
        type: "input",
        name: "Tests",
        message: "What tests did you run?"
      },
      {
        type: "input",
        name: "Questions",
        message: "Who do users contact with questions(enter email)?"
      },
];



// function to write README file
function writeToFile(fileName, data){
    const template = generateMarkdown(data);
    fs.writeFileSync(fileName, template, function(err){
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
