// required packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// user input questions array
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Project Title: ",
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log("You need to enter a project title.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Project Description: ",
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log("You need to enter a project description.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Installation Instructions: ",
            validate: installationInput => {
                if(installationInput) {
                    return true;
                } else {
                    console.log("You need to enter installation instructions.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "Usage Information: ",
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log("You need to enter usage information.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contribution",
            message: "Contribution Guidelines: ",
            validate: contributionInput => {
                if(contributionInput) {
                    return true;
                } else {
                    console.log("You need to enter contribution guidelines.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "tests",
            message: "Test Instructions: ",
            validate: testsInput => {
                if(testsInput) {
                    return true;
                } else {
                    console.log("You need to enter test instructions.");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "Select License: ",
            choices: [
                "GNU AGPLv3", 
                "GNU GPLv3", 
                "GNU LGPLv3", 
                "Mozilla Public License 2.0", 
                "Apache License 2.0", 
                "MIT License", 
                "Boost Software License 1.0", 
                "The Unlicense"],
            validate: licenseInput => {
                if(licenseInput) {
                    return true;
                } else {
                    console.log("You need to select a license.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "username",
            message: "GitHub Username: ",
            validate: usernameInput => {
                if(usernameInput) {
                    return true;
                } else {
                    console.log("You need to enter your GitHub Username.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Email Address: ",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("You need to enter your email address.");
                    return false;
                }
            }
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./utils/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {}
// ** prompt user for questions
// ** retrieve data from user input
// ** push data to writeToFile function
// ** resolve
// Function call to initialize app
init();