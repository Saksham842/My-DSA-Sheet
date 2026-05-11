const fs = require('fs');

const uberData = JSON.parse(fs.readFileSync('uber_data.json', 'utf8'));

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function processData(data) {
  return data.map(q => {
    return `    { id: ${q.id}, title: '${q.title.replace(/'/g, "\\'")}', difficulty: '${q.difficulty}', acceptance: '${q.acceptance}', bars: ${q.bars}, link: 'https://leetcode.com/problems/${slugify(q.title)}/' }`;
  }).join(',\n');
}

const uberStr = `  uber: [\n${processData(uberData)}\n  ]`;

let dataJs = fs.readFileSync('data.js', 'utf8');

// Replace the closing brace of questionsData with the new data
dataJs = dataJs.replace(/\n};\s*$/, `,\n${uberStr}\n};\n`);

// Update uber in companiesData to set the problems count
dataJs = dataJs.replace(/\{ id: 'uber', name: 'Uber', problems: 0, icon: 'U' \}/, `{ id: 'uber', name: 'Uber', problems: ${uberData.length}, icon: 'U' }`);

fs.writeFileSync('data.js', dataJs);
console.log("Successfully updated data.js with Uber questions.");
