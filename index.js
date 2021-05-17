// Required Packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// User Input Questions
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Project Title: ",
            validate: titleInput => {
                if (titleInput) {
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
                if (descriptionInput) {
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
                if (installationInput) {
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
                if (usageInput) {
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
                if (contributionInput) {
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
                if (testsInput) {
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
                "GNU AGPL v3",
                "GNU GPL v3",
                "GNU LGPL v3",
                "Mozilla Public License 2.0",
                "Apache License 2.0",
                "MIT License 2.0",
                "Boost Software License 1.0",
                "The Unlicense"],
            validate: licenseInput => {
                if (licenseInput) {
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
                if (usernameInput) {
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
                if (emailInput) {
                    return true;
                } else {
                    console.log("You need to enter your email address.");
                    return false;
                }
            }
        }
    ]);
};

// Write to File Function using File Content
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./NewREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "README created successfully."
            });
        });
    });
};

// Initialize Application Function
function init() {
    questions()
        .then(answers => {
            return generateMarkdown(answers);
        })
        .then(pageMarkdown => {
            writeToFile(pageMarkdown);
        })
        .catch(err => {
            console.log(err);
        });
}

// Call Initialize Application
init();
