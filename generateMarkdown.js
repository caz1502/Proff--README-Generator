// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    // console.log("renderLicenseBadge")
    return `![License](https://img.shields.io/static/v1?label=License&message=${license}&color=blue)`
  }
  console.log("no license")
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    // console.log("renderLicenseLink")
    return `https://opensource.org/licenses/${license}/`
  }
  console.log("no license")
  return ""
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log("renderLicenseSection")
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
 
 
  return `# ${data.projectname}
  ${licenseBadge}

---  
  
### Deployed Project Website  


**${data.website}**

---

### **Table of Contents**  


- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [Contributing](#collaborators)
- [Credit](#credentials)
- [License](#license)

---

### **Description** 

${data.description}

---

### **Installation** 

${data.installation}

---

### **Usage**  

${data.usage}

---

### **Tests**  

${data.tests}

---

### **Questions**  

If there are questions, want to do a collaboration or simply want to say  "G'day" - Checkout my Github account https://github.com/${data.github}  or contact me via ${data.email}.

---

### **Collaborators**  

${data.collaborators}

---

### **Credit**  

${data.credit}

---

### **Language / Technology**  

${data.language}

---

### **License**  

This project is released under [${data.license}](${licenseLink})

---`;
}

module.exports = generateMarkdown;