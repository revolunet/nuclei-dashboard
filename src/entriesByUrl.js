const entriesByUrl = (entries) =>
  entries.reduce((allEntries, entry) => {
    if (!allEntries[entry.host]) {
      allEntries[entry.host] = [];
    }
    allEntries[entry.host].push(entry);
    return allEntries;
  }, {});

module.exports = entriesByUrl;
