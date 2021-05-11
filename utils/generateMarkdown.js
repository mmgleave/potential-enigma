const fs = require("fs");

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
    # ${data.title}

    ## Description
    ${data.description}

    # ${data.title}
    ## Table of Contents
    * [Installation] (#Installation)
    * [Usage] (#Usage)
    * [License] (#License)
    * [Contributing] (#Contributing)
    * [Tests] (#Tests)
    * [Questions] (#Questions)
  
    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${data.license}

    ## Contributing
    ${data.contribution}

    ## Tests
    ${data.tests}

    ## Questions
    For questions, you can reach me on GitHub at 
    http://github.com/${data.username}/ or via email at 
    ${data.email}.
    `;
}

module.exports = generateMarkdown;
