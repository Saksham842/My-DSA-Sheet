const fs = require('fs');

const linkedinData = JSON.parse(fs.readFileSync('linkedin_data.json', 'utf8'));

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function processData(data) {
  return data.map(q => {
    return `    { id: ${q.id}, title: '${q.title.replace(/'/g, "\\'")}', difficulty: '${q.difficulty}', acceptance: '${q.acceptance}', bars: ${q.bars}, link: 'https://leetcode.com/problems/${slugify(q.title)}/' }`;
  }).join(',\n');
}

const linkedinStr = `  linkedin: [\n${processData(linkedinData)}\n  ]`;

let dataJs = fs.readFileSync('data.js', 'utf8');

// Replace the closing brace of questionsData with the new data
dataJs = dataJs.replace(/\n};\s*$/, `,\n${linkedinStr}\n};\n`);

// Insert linkedin into companiesData. We'll add it right before DE Shaw
const newCompany = `  { id: 'linkedin', name: 'LinkedIn', problems: ${linkedinData.length}, icon: 'LI' },\n`;
dataJs = dataJs.replace(/(\{ id: 'deshaw', name: 'DE Shaw')/, newCompany + '$1');

fs.writeFileSync('data.js', dataJs);
console.log("Successfully updated data.js with LinkedIn questions.");
