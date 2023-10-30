// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== '') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== '') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== '') {
    return `## License

This project is protected under the ${license} license.`;
  }
  return '';
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description 

${data.description}

## Table of Contents  

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation 

Run this command to install dependencies:

\`\`\`
${data.install}
\`\`\`

## Usage 

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing 

${data.contrib}

## Tests 

Run this command to run tests:

\`\`\`
${data.test}
\`\`\`

## Questions 

Reach me at my email: ${data.email}
Follow this link to check out my GitHub: [${data.github}](https://github.com/${data.github}/)

`;
}

module.exports = generateMarkdown;
