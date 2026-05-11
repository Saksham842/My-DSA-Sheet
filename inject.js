const fs = require('fs');

const googleData = JSON.parse(fs.readFileSync('google_data.json', 'utf8'));
const metaData = JSON.parse(fs.readFileSync('meta_data.json', 'utf8'));

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function processData(data) {
  return data.map(q => {
    return `    { id: ${q.id}, title: '${q.title.replace(/'/g, "\\'")}', difficulty: '${q.difficulty}', acceptance: '${q.acceptance}', bars: ${q.bars}, link: 'https://leetcode.com/problems/${slugify(q.title)}/' }`;
  }).join(',\n');
}

const googleStr = `  google: [\n${processData(googleData)}\n  ]`;
const metaStr = `  meta: [\n${processData(metaData)}\n  ]`;

let dataJs = fs.readFileSync('data.js', 'utf8');

// Replace the closing brace of questionsData with the new data
dataJs = dataJs.replace(/\n};\s*$/, `,\n${googleStr},\n${metaStr}\n};\n`);

// Update the problem counts in companiesData
dataJs = dataJs.replace(/\{ id: 'google', name: 'Google', problems: \d+, icon: 'G' \}/, `{ id: 'google', name: 'Google', problems: ${googleData.length}, icon: 'G' }`);
dataJs = dataJs.replace(/\{ id: 'meta', name: 'Meta', problems: 0, icon: 'M' \}/, `{ id: 'meta', name: 'Meta', problems: ${metaData.length}, icon: 'M' }`);

fs.writeFileSync('data.js', dataJs);
console.log("Successfully updated data.js with Google and Meta questions.");
