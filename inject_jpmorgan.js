const fs = require('fs');

const jpmorganData = JSON.parse(fs.readFileSync('jpmorgan_data.json', 'utf8'));

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function processData(data) {
  return data.map(q => {
    return `    { id: ${q.id}, title: '${q.title.replace(/'/g, "\\'")}', difficulty: '${q.difficulty}', acceptance: '${q.acceptance}', bars: ${q.bars}, link: 'https://leetcode.com/problems/${slugify(q.title)}/' }`;
  }).join(',\n');
}

const jpmorganStr = `  jpmorgan: [\n${processData(jpmorganData)}\n  ]`;

let dataJs = fs.readFileSync('data.js', 'utf8');

// Replace the closing brace of questionsData with the new data
dataJs = dataJs.replace(/\n};\s*$/, `,\n${jpmorganStr}\n};\n`);

// Update the problem counts in companiesData
dataJs = dataJs.replace(/\{ id: 'jpmorgan', name: 'JP Morgan', problems: 0, icon: 'JP' \}/, `{ id: 'jpmorgan', name: 'JP Morgan', problems: ${jpmorganData.length}, icon: 'JP' }`);

fs.writeFileSync('data.js', dataJs);
console.log("Successfully updated data.js with JP Morgan questions.");
