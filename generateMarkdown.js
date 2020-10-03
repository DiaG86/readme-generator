// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  ${data.TableOfContents}
  ## Installation
  ${data.Install}
  ## Usage
  ${data.Usage}
  ## License
  ${data.License}
  ## Contributors  
  ${data.Contribution}
  ##  Tests
    ${data.Tests}
  ## Questions
  "Please contact ${data.Questions} with any questions about the app.


`;
}

module.exports = generateMarkdown;
