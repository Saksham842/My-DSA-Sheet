const fs = require('fs');

const index = JSON.parse(fs.readFileSync('system_design_data/chapters_index.json', 'utf8'));
const files = fs.readdirSync('system_design_data').filter(f => f.endsWith('.json') && f !== 'chapters_index.json');

const chaptersMap = {};
for (const file of files) {
  const slug = file.replace('.json', '');
  const data = JSON.parse(fs.readFileSync('system_design_data/' + file, 'utf8'));
  chaptersMap[slug] = data;
}

const jsContent = `// Auto-generated System Design Data
const _sdRoot = typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this);
_sdRoot.systemDesignChapters = ${JSON.stringify(index, null, 2)};
_sdRoot.systemDesignData = ${JSON.stringify(chaptersMap)};
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { chapters: _sdRoot.systemDesignChapters, data: _sdRoot.systemDesignData };
}
`;

fs.writeFileSync('sd_data.js', jsContent);
console.log('Successfully generated sd_data.js with ' + Object.keys(chaptersMap).length + ' chapters.');
