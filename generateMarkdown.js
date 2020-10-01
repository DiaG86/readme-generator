// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  ## ${data.TableOfContents}
  ## ${data.Install}
  ## ${data.Usage}
  ## ${data.License}
    ${data.Tests}
    ${data.Questions}

`;
}

module.exports = generateMarkdown;
