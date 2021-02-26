const fs = require("fs");
const path = require("path");

export const parseLog = (filename) => {
  const logData = fs.readFileSync(filename).toString();
  const entries = logData.split("\n").map(JSON.parse);
  return entries;
};

module.exports = parseLog;
