// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// Array of questions for user input 
const questions = [
        {
            type: 'input',
            name: 'projectname',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'website',
            message: 'What is the web address of your deployed project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a brief description of your project.',
        },

        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Briefly outline the installtion steps.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Explain the use of purpose of the project.',
        },
        {
            type: 'input',
            name: 'collaborators',
            message: '.',
        },
        {
            type: 'input',
            name: 'credit',
            message: 'refence sites.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).',
            choices: ['MIT', 'Apache', 'GPL','GNU'],
        },
    ];

// function to write README file
function writeTofile(fileName,data){
    fs.writeFileSync(fileName,data)
}

// function to promnt user
function promptUser() {
    return inquirer.prompt(questions)
};

// function to initiate
function init(){
    promptUser()
    .then((answers)=>generateMarkdown(answers))
    .then((data)=>writeTofile('README2.md',data))
    .then(() => console.log('You are a ROCKSTAR!!! The README.md has been created'))
    .catch((err) => console.error('Something went wrong, maybe try again',err));
};

// call init function
init();
