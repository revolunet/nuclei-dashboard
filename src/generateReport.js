const parseLog = require("./parseLog");
const toMarkdown = require("./toMarkdown");

const generateReport = (logPath) => {
  const entries = parseLog(logPath);
  const markdown = toMarkdown(entries);

  console.log(markdown);
};

if (require.main === module) {
  generateReport(process.argv[process.argv.length - 1]);
}
