// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
      console.log("renderLicenseBadge")
      return `![License](https://img.shields.io/badge/license-${license}-green)`
  }
  console.log("no license")
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log("renderLicenseLink")
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log("renderLicenseSection")
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license)
  return `# ${data.projectname}
  ${licenseBadge}
  
### Deployed Project Website 
${data.website}

### Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [Collaborators](#collaborators)
- [Credit](#credentials)
- [License](#license)

### Description 
${data.description}

### Installation 
${data.installation}

### Usage 
${data.usage}

### Questions 
Checkout my Github account https://github.com/${data.github}  or contact me via ${data.email}
if you have any questions.

### Collaborators 
${data.collaborators}

### Credit 
${data.credit}

### License 
Project released under [${data.license} License](LICENSE)`;
}

module.exports = generateMarkdown;