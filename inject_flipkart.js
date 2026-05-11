const fs = require('fs');

const text = `3576 .
Transform Array to All Equal Elements
31.8%
Med.
210 .
Course Schedule II
53.5%
Med.
907 .
Sum of Subarray Minimums
37.7%
Med.
1011 .
Capacity To Ship Packages Within D Days
72.2%
Med.
875 .
Koko Eating Bananas
49.1%
Med.
134 .
Gas Station
46.4%
Med.
1 .
Two Sum
55.8%
Easy
72 .
Edit Distance
58.8%
Med.
632 .
Smallest Range Covering Elements from K Lists
69.8%
Hard
934 .
Shortest Bridge
58.7%
Med.
42 .
Trapping Rain Water
65.2%
Hard
2750 .
Ways to Split Array Into Good Subarrays
33.9%
Med.
16 .
3Sum Closest
46.9%
Med.
1552 .
Magnetic Force Between Two Balls
71.4%
Med.
11 .
Container With Most Water
57.8%
Med.
2499 .
Minimum Total Cost to Make Arrays Unequal
40.5%
Hard
1423 .
Maximum Points You Can Obtain from Cards
55.7%
Med.
3 .
Longest Substring Without Repeating Characters
37.0%
Med.
735 .
Asteroid Collision
45.6%
Med.
124 .
Binary Tree Maximum Path Sum
41.3%
Hard
1703 .
Minimum Adjacent Swaps for K Consecutive Ones
41.9%
Hard
1463 .
Cherry Pickup II
72.0%
Hard
238 .
Product of Array Except Self
67.8%
Med.
321 .
Create Maximum Number
32.6%
Hard
420 .
Strong Password Checker
14.6%
Hard
200 .
Number of Islands
62.4%
Med.
207 .
Course Schedule
49.3%
Med.
1235 .
Maximum Profit in Job Scheduling
54.4%
Hard
994 .
Rotting Oranges
56.7%
Med.
2952 .
Minimum Number of Coins to be Added
56.8%
Med.
174 .
Dungeon Game
39.5%
Hard
719 .
Find K-th Smallest Pair Distance
45.8%
Hard
560 .
Subarray Sum Equals K
45.5%
Med.
21 .
Merge Two Sorted Lists
66.9%
Easy
675 .
Cut Off Trees for Golf Event
35.3%
Hard
91 .
Decode Ways
36.6%
Med.
103 .
Binary Tree Zigzag Level Order Traversal
61.7%
Med.
662 .
Maximum Width of Binary Tree
44.2%
Med.
85 .
Maximal Rectangle
53.8%
Hard
84 .
Largest Rectangle in Histogram
47.5%
Hard
4 .
Median of Two Sorted Arrays
43.9%
Hard
236 .
Lowest Common Ancestor of a Binary Tree
66.9%
Med.
416 .
Partition Equal Subset Sum
48.5%
Med.
2385 .
Amount of Time for Binary Tree to Be Infected
63.8%
Med.
56 .
Merge Intervals
49.4%
Med.
1700 .
Number of Students Unable to Eat Lunch
78.7%
Easy
752 .
Open the Lock
60.7%
Med.
1383 .
Maximum Performance of a Team
47.5%
Hard
741 .
Cherry Pickup
37.9%
Hard
33 .
Search in Rotated Sorted Array
42.9%
Med.
139 .
Word Break
48.3%
Med.
15 .
3Sum
37.1%
Med.
41 .
First Missing Positive
41.1%
Hard
496 .
Next Greater Element I
74.6%
Easy
542 .
01 Matrix
51.6%
Med.
75 .
Sort Colors
67.6%
Med.
486 .
Predict the Winner
55.8%
Med.
135 .
Candy
46.8%
Hard
1366 .
Rank Teams by Votes
59.4%
Med.
198 .
House Robber
52.3%
Med.
26 .
Remove Duplicates from Sorted Array
60.4%
Easy
312 .
Burst Balloons
61.4%
Hard
2093 .
Minimum Cost to Reach City With Discounts
59.9%
Med.
982 .
Triples with Bitwise AND Equal To Zero
59.4%
Hard
2019 .
The Score of Students Solving Math Expression
33.2%
Hard
1912 .
Design Movie Rental System
35.6%
Hard
967 .
Numbers With Same Consecutive Differences
58.8%
Med.
1760 .
Minimum Limit of Balls in a Bag
67.3%
Med.
138 .
Copy List with Random Pointer
60.6%
Med.
162 .
Find Peak Element
46.5%
Med.
55 .
Jump Game
39.5%
Med.
1190 .
Reverse Substrings Between Each Pair of Parentheses
71.7%
Med.
437 .
Path Sum III
46.1%
Med.
330 .
Patching Array
53.5%
Hard
1048 .
Longest String Chain
62.1%
Med.
169 .
Majority Element
65.8%
Easy
424 .
Longest Repeating Character Replacement
57.3%
Med.
983 .
Minimum Cost For Tickets
67.4%
Med.
1105 .
Filling Bookcase Shelves
68.7%
Med.
128 .
Longest Consecutive Sequence
47.0%
Med.
918 .
Maximum Sum Circular Subarray
47.7%
Med.
1326 .
Minimum Number of Taps to Open to Water a Garden
50.7%
Hard
452 .
Minimum Number of Arrows to Burst Balloons
60.4%
Med.
480 .
Sliding Window Median
38.7%
Hard
239 .
Sliding Window Maximum
47.6%
Hard
199 .
Binary Tree Right Side View
67.1%
Med.
189 .
Rotate Array
43.1%
Med.
630 .
Course Schedule III
40.7%
Hard
2551 .
Put Marbles in Bags
72.4%
Hard
121 .
Best Time to Buy and Sell Stock
55.3%
Easy
116 .
Populating Next Right Pointers in Each Node
65.5%
Med.
100 .
Same Tree
65.2%
Easy
130 .
Surrounded Regions
43.0%
Med.
939 .
Minimum Area Rectangle
55.0%
Med.
871 .
Minimum Number of Refueling Stops
40.6%
Hard
2141 .
Maximum Running Time of N Computers
49.8%
Hard
215 .
Kth Largest Element in an Array
68.0%
Med.
1046 .
Last Stone Weight
66.0%
Easy
1598 .
Crawler Log Folder
71.6%
Easy
45 .
Jump Game II
41.5%
Med.
1642 .
Furthest Building You Can Reach
50.4%
Med.
1094 .
Car Pooling
56.1%
Med.
241 .
Different Ways to Add Parentheses
72.4%
Med.
48 .
Rotate Image
78.0%
Med.
1482 .
Minimum Number of Days to Make m Bouquets
55.5%
Med.
295 .
Find Median from Data Stream
53.3%
Hard
332 .
Reconstruct Itinerary
43.6%
Hard
63 .
Unique Paths II
43.2%
Med.
113 .
Path Sum II
60.5%
Med.
863 .
All Nodes Distance K in Binary Tree
66.5%
Med.
739 .
Daily Temperatures
67.4%
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
fs.writeFileSync('flipkart_data.json', JSON.stringify(results, null, 2));

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function processData(data) {
  return data.map(q => {
    return `    { id: ${q.id}, title: '${q.title.replace(/'/g, "\\'")}', difficulty: '${q.difficulty}', acceptance: '${q.acceptance}', bars: ${q.bars}, link: 'https://leetcode.com/problems/${slugify(q.title)}/' }`;
  }).join(',\n');
}

const flipkartStr = `  flipkart: [\n${processData(results)}\n  ]`;

let dataJs = fs.readFileSync('data.js', 'utf8');

// Replace the closing brace of questionsData with the new data
dataJs = dataJs.replace(/\n};\s*$/, `,\n${flipkartStr}\n};\n`);

// Update flipkart in companiesData to set the problems count
dataJs = dataJs.replace(/\{ id: 'flipkart', name: 'Flipkart', problems: 0, icon: 'F' \}/, `{ id: 'flipkart', name: 'Flipkart', problems: ${results.length}, icon: 'F' }`);

fs.writeFileSync('data.js', dataJs);
console.log("Successfully created flipkart_data.json and updated data.js with " + results.length + " Flipkart questions.");
