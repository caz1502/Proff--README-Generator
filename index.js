// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// Array of questions for user input 
const questions = [

        {   name:'message',
            message:' A series of questions will follow, and your answers will create and populate a README file ... easy peasy :) Press enter to start.'

         },
        {
            type: 'input',
            name: 'projectname',
            message: 'The project name will appear at the top of the README - what is the name or title of your project?',
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
            name: 'usage',
            message: 'Explain the use of purpose of the project. ie Is it solving a problem or fullfilling a purpose?',
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Briefly outline the installation steps, or what software is required to run this application.',
        },     
        
        {
            type: 'input',
            name: 'tests',
            message: 'Briefly outline how one would test this application.',
        },    
        
        {
            type: 'input',
            name: 'collaborators',
            message: 'Were there others that contributed to this project, if so, mention them here.',
        },
        {
            type: 'input',
            name: 'credit',
            message: 'Reference the 3rd party assets or sites that helped create this project ie. W3schools',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username please. This will go in the questions section of the README.',
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address please. This will go in the questions section of the README.',
        },    

        {
            type: 'checkbox',
            name: 'language',
            message: 'List out the languages and technologies you have used to develop this project.Use the spavebar to select each one.',
            choices: ['JavaScript','Python','Java','C#','C++','PHP','R','SQL','VBA','HTML','CSS','Other']
        },  

        {
            type: 'list',
            name: 'license',
            message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. Help on choosing a license is found here - (https://opensource.org/licenses).',
            choices: ['MIT', 'Apache-2.0','MPL-2.0','gpl-license','CDDL-1.0','EPL-2.0'],
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
    .then((data)=>writeTofile('README.md',data))
    .then(() => console.log('You are a ROCKSTAR!!! The README.md has been created'))
    .catch((err) => console.error('Something went wrong, maybe try again',err));
};

// call init function
init();
