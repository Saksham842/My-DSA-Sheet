const fs = require('fs');

const text = `42 .
Trapping Rain Water
65.2%
Hard
166 .
Fraction to Recurring Decimal
26.2%
Med.
1086 .
High Five
74.3%
Easy
387 .
First Unique Character in a String
63.7%
Easy
4 .
Median of Two Sorted Arrays
43.9%
Hard
64 .
Minimum Path Sum
66.5%
Med.
200 .
Number of Islands
62.4%
Med.
3 .
Longest Substring Without Repeating Characters
37.0%
Med.
11 .
Container With Most Water
57.8%
Med.
1094 .
Car Pooling
56.1%
Med.
657 .
Robot Return to Origin
76.2%
Easy
1343 .
Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
70.3%
Med.
33 .
Search in Rotated Sorted Array
42.9%
Med.
146 .
LRU Cache
45.3%
Med.
3494 .
Find the Minimum Amount of Time to Brew Potions
35.3%
Med.
153 .
Find Minimum in Rotated Sorted Array
52.7%
Med.
91 .
Decode Ways
36.6%
Med.
1823 .
Find the Winner of the Circular Game
82.1%
Med.
49 .
Group Anagrams
71.0%
Med.
1 .
Two Sum
55.8%
Easy
8 .
String to Integer (atoi)
19.3%
Med.
215 .
Kth Largest Element in an Array
68.0%
Med.
1446 .
Consecutive Characters
60.2%
Easy
53 .
Maximum Subarray
52.1%
Med.
1832 .
Check if the Sentence Is Pangram
83.9%
Easy
688 .
Knight Probability in Chessboard
56.6%
Med.
69 .
Sqrt(x)
40.4%
Easy
735 .
Asteroid Collision
45.6%
Med.
968 .
Binary Tree Cameras
47.2%
Hard
641 .
Design Circular Deque
64.4%
Med.
443 .
String Compression
58.1%
Med.
273 .
Integer to English Words
34.4%
Hard
435 .
Non-overlapping Intervals
55.6%
Med.
68 .
Text Justification
48.2%
Hard
312 .
Burst Balloons
61.4%
Hard
1041 .
Robot Bounded In Circle
56.2%
Med.
2375 .
Construct Smallest Number From DI String
85.8%
Med.
121 .
Best Time to Buy and Sell Stock
55.3%
Easy
56 .
Merge Intervals
49.4%
Med.
20 .
Valid Parentheses
42.4%
Easy
122 .
Best Time to Buy and Sell Stock II
69.6%
Med.
238 .
Product of Array Except Self
67.8%
Med.
326 .
Power of Three
48.1%
Easy
74 .
Search a 2D Matrix
52.3%
Med.
79 .
Word Search
45.3%
Med.
198 .
House Robber
52.3%
Med.
118 .
Pascal's Triangle
77.1%
Easy
3437 .
Permutations III
85.7%
Med.
706 .
Design HashMap
65.9%
Easy
162 .
Find Peak Element
46.5%
Med.
268 .
Missing Number
70.1%
Easy
141 .
Linked List Cycle
52.6%
Easy
347 .
Top K Frequent Elements
64.6%
Med.
188 .
Best Time to Buy and Sell Stock IV
47.2%
Hard
3371 .
Identify the Largest Outlier in an Array
35.7%
Med.
465 .
Optimal Account Balancing
50.0%
Hard
424 .
Longest Repeating Character Replacement
57.3%
Med.
322 .
Coin Change
46.6%
Med.
560 .
Subarray Sum Equals K
45.5%
Med.
1235 .
Maximum Profit in Job Scheduling
54.4%
Hard
59 .
Spiral Matrix II
73.5%
Med.
452 .
Minimum Number of Arrows to Burst Balloons
60.4%
Med.
21 .
Merge Two Sorted Lists
66.9%
Easy
218 .
The Skyline Problem
44.0%
Hard
2513 .
Minimize the Maximum of Two Arrays
31.3%
Med.
300 .
Longest Increasing Subsequence
57.9%
Med.
239 .
Sliding Window Maximum
47.6%
Hard
780 .
Reaching Points
33.7%
Hard
5 .
Longest Palindromic Substring
35.9%
Med.
55 .
Jump Game
39.5%
Med.
1395 .
Count Number of Teams
70.1%
Med.
2734 .
Lexicographically Smallest String After Substring Operation
32.4%
Med.
336 .
Palindrome Pairs
36.3%
Hard
695 .
Max Area of Island
73.2%
Med.
210 .
Course Schedule II
53.5%
Med.
225 .
Implement Stack using Queues
67.4%
Easy
414 .
Third Maximum Number
37.3%
Easy
283 .
Move Zeroes
62.8%
Easy
1910 .
Remove All Occurrences of a Substring
78.1%
Med.
112 .
Path Sum
53.1%
Easy
653 .
Two Sum IV - Input is a BST
62.3%
Easy
128 .
Longest Consecutive Sequence
47.0%
Med.
779 .
K-th Symbol in Grammar
47.4%
Med.
844 .
Backspace String Compare
49.5%
Easy
647 .
Palindromic Substrings
71.7%
Med.
1507 .
Reformat Date
67.4%
Easy
50 .
Pow(x, n)
37.1%
Med.
70 .
Climbing Stairs
53.6%
Easy
31 .
Next Permutation
43.1%
Med.
380 .
Insert Delete GetRandom O(1)
55.0%
Med.
209 .
Minimum Size Subarray Sum
49.5%
Med.
2097 .
Valid Arrangement of Pairs
66.3%
Hard
873 .
Length of Longest Fibonacci Subsequence
57.6%
Med.
767 .
Reorganize String
56.2%
Med.
135 .
Candy
46.8%
Hard
2933 .
High-Access Employees
46.2%
Med.
1010 .
Pairs of Songs With Total Durations Divisible by 60
53.3%
Med.
119 .
Pascal's Triangle II
66.0%
Easy
2006 .
Count Number of Pairs With Absolute Difference K
84.9%
Easy
134 .
Gas Station
46.4%
Med.
51 .
N-Queens
72.9%
Hard
221 .
Maximal Square
48.8%
Med.
41 .
First Missing Positive
41.1%
Hard
48 .
Rotate Image
78.0%
Med.
17 .
Letter Combinations of a Phone Number
63.9%
Med.
46 .
Permutations
80.7%
Med.
54 .
Spiral Matrix
54.0%
Med.
189 .
Rotate Array
43.1%
Med.
394 .
Decode String
61.2%
Med.
179 .
Largest Number
41.3%
Med.
295 .
Find Median from Data Stream
53.3%
Hard
556 .
Next Greater Element III
34.6%
Med.
592 .
Fraction Addition and Subtraction
66.2%
Med.
2484 .
Count Palindromic Subsequences
39.4%
Hard
496 .
Next Greater Element I
74.6%
Easy
2385 .
Amount of Time for Binary Tree to Be Infected
63.8%
Med.
15 .
3Sum
37.1%
Med.
287 .
Find the Duplicate Number
62.9%
Med.
994 .
Rotting Oranges
56.7%
Med.
1356 .
Sort Integers by The Number of 1 Bits
78.7%
Easy
1306 .
Jump Game III
66.1%
Med.
62 .
Unique Paths
65.8%
Med.
160 .
Intersection of Two Linked Lists
61.2%
Easy
219 .
Contains Duplicate II
49.1%
Easy
242 .
Valid Anagram
66.7%
Easy
36 .
Valid Sudoku
62.3%
Med.
45 .
Jump Game II
41.5%
Med.
316 .
Remove Duplicate Letters
51.4%
Med.
344 .
Reverse String
79.8%
Easy
2343 .
Query Kth Smallest Trimmed Number
45.6%
Med.
1396 .
Design Underground System
74.0%
Med.
1209 .
Remove All Adjacent Duplicates in String II
59.6%
Med.
887 .
Super Egg Drop
28.8%
Hard
876 .
Middle of the Linked List
80.6%
Easy
739 .
Daily Temperatures
67.4%
Med.
1190 .
Reverse Substrings Between Each Pair of Parentheses
71.7%
Med.
1047 .
Remove All Adjacent Duplicates In String
71.7%
Easy
1143 .
Longest Common Subsequence
58.3%
Med.
714 .
Best Time to Buy and Sell Stock with Transaction Fee
70.6%
Med.
519 .
Random Flip Matrix
43.6%
Med.
2438 .
Range Product Queries of Powers
41.9%
Med.
2087 .
Minimum Cost Homecoming of a Robot in a Grid
51.1%
Med.
2446 .
Determine if Two Events Have Conflict
52.4%
Easy
2420 .
Find All Good Indices
39.9%
Med.
2300 .
Successful Pairs of Spells and Potions
45.5%
Med.
2154 .
Keep Multiplying Found Values by Two
71.3%
Easy
2266 .
Count Number of Texts
48.9%
Med.
152 .
Maximum Product Subarray
35.0%
Med.
421 .
Maximum XOR of Two Numbers in an Array
53.3%
Med.
13 .
Roman to Integer
64.9%
Easy
2 .
Add Two Numbers
46.3%
Med.
73 .
Set Matrix Zeroes
60.8%
Med.
567 .
Permutation in String
47.3%
Med.
340 .
Longest Substring with At Most K Distinct Characters
49.5%
Med.
12 .
Integer to Roman
68.7%
Med.
143 .
Reorder List
62.6%
Med.
88 .
Merge Sorted Array
53.0%
Easy
97 .
Interleaving String
42.2%
Med.
6 .
Zigzag Conversion
51.7%
Med.`;

const lines = text.trim().split('\n');
const results = [];
for (let i = 0; i < lines.length; i += 4) {
    if (lines[i] && lines[i].includes(' .')) {
        const idMatch = lines[i].match(/(\d+)\s*\./);
        if (idMatch) {
            results.push({
                id: parseInt(idMatch[1], 10),
                title: lines[i+1].trim(),
                acceptance: lines[i+2].trim(),
                difficulty: lines[i+3].trim(),
                bars: 5
            });
        }
    }
}
fs.writeFileSync('goldmansachs_data.json', JSON.stringify(results, null, 2));

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function processData(data) {
  return data.map(q => {
    return `    { id: ${q.id}, title: '${q.title.replace(/'/g, "\\'")}', difficulty: '${q.difficulty}', acceptance: '${q.acceptance}', bars: ${q.bars}, link: 'https://leetcode.com/problems/${slugify(q.title)}/' }`;
  }).join(',\n');
}

const gStr = `  'goldman-sachs': [\n${processData(results)}\n  ]`;

let dataJs = fs.readFileSync('data.js', 'utf8');

// Replace the closing brace of questionsData with the new data
dataJs = dataJs.replace(/\n};\s*$/, `,\n${gStr}\n};\n`);

// Update goldman-sachs in companiesData to set the problems count
dataJs = dataJs.replace(/\{ id: 'goldman-sachs', name: 'Goldman Sachs', problems: 0, icon: 'GS' \}/, `{ id: 'goldman-sachs', name: 'Goldman Sachs', problems: ${results.length}, icon: 'GS' }`);

fs.writeFileSync('data.js', dataJs);
console.log("Successfully created goldmansachs_data.json and updated data.js with " + results.length + " Goldman Sachs questions.");
