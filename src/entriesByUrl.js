const entriesByUrl = (entries) =>
  entries.reduce((allEntries, entry) => {
    if (!allEntries[entry.matched]) {
      allEntries[entry.matched] = [];
    }
    allEntries[entry.matched].push(entry);
    return allEntries;
  }, {});

module.exports = entriesByUrl;
