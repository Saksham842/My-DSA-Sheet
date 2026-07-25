const fs = require('fs');

const rawText = `
121 .
Best Time to Buy and Sell Stock
55.3%
Easy

53 .
Maximum Subarray
52.1%
Med.

70 .
Climbing Stairs
53.5%
Easy

169 .
Majority Element
65.7%
Easy

509 .
Fibonacci Number
72.9%
Easy

283 .
Move Zeroes
62.8%
Easy

875 .
Koko Eating Bananas
49.1%
Med.

200 .
Number of Islands
62.3%
Med.

2493 .
Divide Nodes Into the Maximum Number of Groups
67.4%
Hard

349 .
Intersection of Two Arrays
76.5%
Easy

319 .
Bulb Switcher
54.1%
Med.

202 .
Happy Number
58.1%
Easy

1 .
Two Sum
55.8%
Easy

9 .
Palindrome Number
59.2%
Easy

189 .
Rotate Array
43.0%
Med.

740 .
Delete and Earn
56.7%
Med.

13 .
Roman to Integer
64.9%
Easy

14 .
Longest Common Prefix
45.5%
Easy

5 .
Longest Palindromic Substring
35.9%
Med.

7 .
Reverse Integer
30.3%
Med.

179 .
Largest Number
41.3%
Med.

54 .
Spiral Matrix
54.0%
Med.

88 .
Merge Sorted Array
53.0%
Easy

1356 .
Sort Integers by The Number of 1 Bits
78.7%
Easy

279 .
Perfect Squares
55.7%
Med.

162 .
Find Peak Element
46.5%
Med.

151 .
Reverse Words in a String
52.1%
Med.

20 .
Valid Parentheses
42.4%
Easy

15 .
3Sum
37.1%
Med.

343 .
Integer Break
61.2%
Med.

3 .
Longest Substring Without Repeating Characters
37.0%
Med.

2 .
Add Two Numbers
46.3%
Med.

66 .
Plus One
47.6%
Easy

11 .
Container With Most Water
57.8%
Med.

242 .
Valid Anagram
66.7%
Easy

26 .
Remove Duplicates from Sorted Array
60.4%
Easy

238 .
Product of Array Except Self
67.8%
Med.

118 .
Pascal's Triangle
77.1%
Easy

345 .
Reverse Vowels of a String
58.3%
Easy

400 .
Nth Digit
35.7%
Med.

198 .
House Robber
52.3%
Med.

455 .
Assign Cookies
53.9%
Easy

2099 .
Find Subsequence of Length K With the Largest Sum
45.7%
Easy

2859 .
Sum of Values at Indices With K Set Bits
85.8%
Easy

3146 .
Permutation Difference between Two Strings
87.2%
Easy

2855 .
Minimum Right Shifts to Sort the Array
56.7%
Easy

3028 .
Ant on the Boundary
73.8%
Easy

3000 .
Maximum Area of Longest Diagonal Rectangle
36.6%
Easy

2960 .
Count Tested Devices After Test Operations
78.4%
Easy

1636 .
Sort Array by Increasing Frequency
80.3%
Easy

322 .
Coin Change
46.6%
Med.

48 .
Rotate Image
78.0%
Med.

72 .
Edit Distance
58.8%
Med.

485 .
Max Consecutive Ones
62.6%
Easy

204 .
Count Primes
34.8%
Med.

206 .
Reverse Linked List
79.3%
Easy

34 .
Find First and Last Position of Element in Sorted Array
46.9%
Med.

496 .
Next Greater Element I
74.6%
Easy

852 .
Peak Index in a Mountain Array
67.5%
Med.

1823 .
Find the Winner of the Circular Game
82.1%
Med.

28 .
Find the Index of the First Occurrence in a String
45.0%
Easy

56 .
Merge Intervals
49.4%
Med.

125 .
Valid Palindrome
51.0%
Easy

507 .
Perfect Number
45.0%
Easy

135 .
Candy
46.8%
Hard

300 .
Longest Increasing Subsequence
57.9%
Med.

217 .
Contains Duplicate
63.3%
Easy

27 .
Remove Element
60.1%
Easy

229 .
Majority Element II
54.4%
Med.

17 .
Letter Combinations of a Phone Number
63.9%
Med.

69 .
Sqrt(x)
40.4%
Easy

160 .
Intersection of Two Linked Lists
61.2%
Easy

83 .
Remove Duplicates from Sorted List
54.9%
Easy

2007 .
Find Original Array From Doubled Array
40.5%
Med.

1876 .
Substrings of Size Three with Distinct Characters
75.5%
Easy

49 .
Group Anagrams
71.0%
Med.

74 .
Search a 2D Matrix
52.3%
Med.

2824 .
Count Pairs Whose Sum is Less than Target
87.5%
Easy

4 .
Median of Two Sorted Arrays
43.9%
Hard

2455 .
Average Value of Even Numbers That Are Divisible by Three
61.7%
Easy

62 .
Unique Paths
65.8%
Med.

50 .
Pow(x, n)
37.1%
Med.

1816 .
Truncate Sentence
86.1%
Easy

746 .
Min Cost Climbing Stairs
67.2%
Easy

2169 .
Count Operations to Obtain Zero
74.9%
Easy

31 .
Next Permutation
43.1%
Med.

647 .
Palindromic Substrings
71.7%
Med.

137 .
Single Number II
65.3%
Med.

1365 .
How Many Numbers Are Smaller Than the Current Number
87.1%
Easy

104 .
Maximum Depth of Binary Tree
77.2%
Easy

392 .
Is Subsequence
48.4%
Easy

1360 .
Number of Days Between Two Dates
51.4%
Easy

227 .
Basic Calculator II
45.8%
Med.

264 .
Ugly Number II
49.3%
Med.

168 .
Excel Sheet Column Title
43.6%
Easy

1544 .
Make The String Great
68.3%
Easy

704 .
Binary Search
59.6%
Easy

876 .
Middle of the Linked List
80.6%
Easy

22 .
Generate Parentheses
77.2%
Med.

2667 .
Create Hello World Function
82.1%
Easy

1980 .
Find Unique Binary String
79.4%
Med.

152 .
Maximum Product Subarray
35.0%
Med.

197 .
Rising Temperature
50.2%
Easy

214 .
Shortest Palindrome
40.7%
Hard

215 .
Kth Largest Element in an Array
68.0%
Med.

739 .
Daily Temperatures
67.4%
Med.

12 .
Integer to Roman
68.7%
Med.

542 .
01 Matrix
51.6%
Med.

176 .
Second Highest Salary
43.9%
Med.

1137 .
N-th Tribonacci Number
63.6%
Easy

185 .
Department Top Three Salaries
57.8%
Hard
`;

const lines = rawText.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);
const results = [];
let i = 0;
while (i < lines.length) {
    if (lines[i].includes(' .')) {
        const idMatch = lines[i].match(/(\d+)\s*\./);
        if (idMatch && i + 3 < lines.length) {
            results.push({
                id: parseInt(idMatch[1], 10),
                title: lines[i+1],
                acceptance: lines[i+2],
                difficulty: lines[i+3],
                bars: 5
            });
            i += 4;
            continue;
        }
    }
    i++;
}

// Frequency bars ranking
results.forEach((q, idx) => {
    if (idx < 25) q.bars = 6;
    else if (idx < 60) q.bars = 5;
    else if (idx < 90) q.bars = 4;
    else q.bars = 3;
});

fs.writeFileSync('accenture_data.json', JSON.stringify(results, null, 2));

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function processData(data) {
  return data.map(q => {
    return `    { id: ${q.id}, title: '${q.title.replace(/'/g, "\\'")}', difficulty: '${q.difficulty}', acceptance: '${q.acceptance}', bars: ${q.bars}, link: 'https://leetcode.com/problems/${slugify(q.title)}/' }`;
  }).join(',\n');
}

const accentureStr = `  accenture: [\n${processData(results)}\n  ]`;

let dataJs = fs.readFileSync('data.js', 'utf8');

// 1. Add Accenture to companiesData if not present
if (!dataJs.includes(`id: 'accenture'`)) {
    dataJs = dataJs.replace(
        /\{ id: 'adobe', name: 'Adobe', problems: \d+, icon: 'Ad' \},/,
        `{ id: 'adobe', name: 'Adobe', problems: 113, icon: 'Ad' },\n  { id: 'accenture', name: 'Accenture', problems: ${results.length}, icon: 'Ac' },`
    );
} else {
    dataJs = dataJs.replace(/\{ id: 'accenture', name: 'Accenture', problems: \d+, icon: 'Ac' \}/, `{ id: 'accenture', name: 'Accenture', problems: ${results.length}, icon: 'Ac' }`);
}

// 2. Add or update accenture in questionsData
if (dataJs.includes('accenture: [')) {
    console.log("accenture already in questionsData, updating...");
    dataJs = dataJs.replace(/\s*accenture:\s*\[[\s\S]*?\n  \](?=\n\}|,)/, `,\n${accentureStr}`);
} else {
    dataJs = dataJs.replace(/\n\};\s*$/, `,\n${accentureStr}\n};\n`);
}

fs.writeFileSync('data.js', dataJs);
console.log(`Successfully created accenture_data.json and updated data.js with ${results.length} Accenture questions.`);
