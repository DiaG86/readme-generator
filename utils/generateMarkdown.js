// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  ### ${data.TableOfContents}
  ### ${data.Installation}
  ### ${data.Usage}
  ### ${data.license}
    ${data.tests}
    ${data.questions}

`;
}

module.exports = generateMarkdown;
