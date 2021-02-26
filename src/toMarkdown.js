const makeBadge = (severity, count) => {
  if (count === 0) {
    badge = "🏆";
  }
  const color =
    severity === "critical"
      ? "red"
      : severity === "high"
      ? "red"
      : severity === "medium"
      ? "orange"
      : severity === "low"
      ? "orange"
      : "success";

  badge = `![](https://img.shields.io/static/v1?label=${severity}&message=${count}&color=${color})`;
  return badge;
};

const makeUrl = (url) => {
  const small = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return `[${small}](${url})`;
};

const getDetailUrl = (summary) =>
  `https://revolunet.github.io/nuclei-dashboard/results/${summary.filename.replace(
    /\.json$/,
    ".html"
  )}`;

const makeDetailUrl = (summary) => {
  return `[🔎](${getDetailUrl(summary)})`;
};

const toMarkdown = (entries) => {
  const entriesByUrl = entries.reduce((allEntries, entry) => {
    if (!allEntries[entry.matched]) {
      allEntries[entry.matched] = [];
    }
    allEntries[entry.matched].push(entry);
    return allEntries;
  }, {});

  // console.log("entries", entries);
  const severities = Array.from(
    new Set(entries.map((entry) => entry.severity))
  );

  console.log("severities", severities);

  //console.log("entriesByUrl", entriesByUrl);
  const markdown = [
    `# Nuclei dashboard\n`,
    `
Url                  | details | ${severities
      .map((sev) => `${sev}`)
      .join(" | ")}
---------------------|:-------:|${severities.map((sev) => `:---:`).join(" | ")}
${Object.keys(entriesByUrl)
  .map(
    (url) =>
      `${makeUrl(url)} | - | ${severities
        .map((sev) =>
          makeBadge(
            sev,
            entriesByUrl[url].filter((e) => e.severity === sev).length
          )
        )
        .join(" | ")}`
  )
  .join("\n")}
`,
  ].join("\n");

  return markdown;
};

module.exports = toMarkdown;
