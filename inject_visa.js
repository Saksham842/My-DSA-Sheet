const fs = require('fs');

const visaData = JSON.parse(fs.readFileSync('visa_data.json', 'utf8'));

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function processData(data) {
  return data.map(q => {
    return `    { id: ${q.id}, title: '${q.title.replace(/'/g, "\\'")}', difficulty: '${q.difficulty}', acceptance: '${q.acceptance}', bars: ${q.bars}, link: 'https://leetcode.com/problems/${slugify(q.title)}/' }`;
  }).join(',\n');
}

const visaStr = `  visa: [\n${processData(visaData)}\n  ]`;

let dataJs = fs.readFileSync('data.js', 'utf8');

// Replace the closing brace of questionsData with the new data
dataJs = dataJs.replace(/\n};\s*$/, `,\n${visaStr}\n};\n`);

// Update the problem counts in companiesData
dataJs = dataJs.replace(/\{ id: 'visa', name: 'Visa', problems: 0, icon: 'Vi' \}/, `{ id: 'visa', name: 'Visa', problems: ${visaData.length}, icon: 'Vi' }`);

fs.writeFileSync('data.js', dataJs);
console.log("Successfully updated data.js with Visa questions.");
