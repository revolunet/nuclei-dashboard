const fs = require("fs");
const path = require("path");

export const parseLog = (filename) => {
  const logData = fs.readFileSync(filename).toString();

  const entries = logData.split("\n").map(JSON.parse);

  //  console.log("entries", entries)
  // const categories = [
  //   "performance",
  //   "accessibility",
  //   "best-practices",
  //   "seo",
  //   "pwa",
  // ];
  // const data = {
  //   requestedUrl: report.requestedUrl,
  //   runWarnings: report.runWarnings,
  //   filename,
  //   scores: categories.reduce(
  //     (a, c) => ({ ...a, [c]: report.categories[c].score }),
  //     {}
  //   ),
  // };
  return entries;
};

// const parseLogs = (reportsPath) => {
//   const files = fs.readdirSync(reportsPath);
//   const reports = files
//     .filter((name) => name.match(/\.json/))
//     .map((name) => {
//       const reportData = fs
//         .readFileSync(path.join(reportsPath, name))
//         .toString();
//       return parseLog(name, JSON.parse(reportData));
//     });
//   return reports;
// };

module.exports = parseLog;
