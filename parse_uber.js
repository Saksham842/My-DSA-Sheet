const fs = require('fs');

const text = `269 .
Alien Dictionary
36.7%
Hard
815 .
Bus Routes
47.0%
Hard
427 .
Construct Quad Tree
77.2%
Med.
1438 .
Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
56.8%
Med.
977 .
Squares of a Sorted Array
73.2%
Easy
1861 .
Rotating the Box
79.1%
Med.
2603 .
Collect Coins in a Tree
36.5%
Hard
399 .
Evaluate Division
63.2%
Med.
729 .
My Calendar I
58.2%
Med.
238 .
Product of Array Except Self
67.8%
Med.
490 .
The Maze
59.5%
Med.
505 .
The Maze II
54.2%
Med.
210 .
Course Schedule II
53.5%
Med.
79 .
Word Search
45.3%
Med.
564 .
Find the Closest Palindrome
31.6%
Hard
3161 .
Block Placement Queries
16.8%
Hard
362 .
Design Hit Counter
69.2%
Med.
146 .
LRU Cache
45.3%
Med.
2768 .
Number of Black Blocks
38.7%
Med.
305 .
Number of Islands II
40.1%
Hard
200 .
Number of Islands
62.4%
Med.
212 .
Word Search II
37.4%
Hard
384 .
Shuffle an Array
59.1%
Med.
49 .
Group Anagrams
71.0%
Med.
84 .
Largest Rectangle in Histogram
47.5%
Hard
230 .
Kth Smallest Element in a BST
75.4%
Med.
3071 .
Minimum Operations to Write the Letter Y on a Grid
62.0%
Med.
57 .
Insert Interval
43.5%
Med.
153 .
Find Minimum in Rotated Sorted Array
52.7%
Med.
56 .
Merge Intervals
49.4%
Med.
1814 .
Count Nice Pairs in an Array
48.5%
Med.
2672 .
Number of Adjacent Elements With the Same Color
55.9%
Med.
679 .
24 Game
50.0%
Hard
224 .
Basic Calculator
45.6%
Hard
64 .
Minimum Path Sum
66.5%
Med.
347 .
Top K Frequent Elements
64.6%
Med.
1429 .
First Unique Number
55.9%
Med.
621 .
Task Scheduler
61.6%
Med.
827 .
Making A Large Island
55.0%
Hard
547 .
Number of Provinces
68.7%
Med.
465 .
Optimal Account Balancing
50.0%
Hard
460 .
LFU Cache
46.7%
Hard
121 .
Best Time to Buy and Sell Stock
55.3%
Easy
3045 .
Count Prefix and Suffix Pairs II
27.3%
Hard
286 .
Walls and Gates
63.0%
Med.
332 .
Reconstruct Itinerary
43.6%
Hard
227 .
Basic Calculator II
45.8%
Med.
1423 .
Maximum Points You Can Obtain from Cards
55.7%
Med.
1326 .
Minimum Number of Taps to Open to Water a Garden
50.7%
Hard
2101 .
Detonate the Maximum Bombs
49.2%
Med.
68 .
Text Justification
48.2%
Hard
54 .
Spiral Matrix
54.0%
Med.
36 .
Valid Sudoku
62.3%
Med.
127 .
Word Ladder
42.9%
Hard
48 .
Rotate Image
78.0%
Med.
76 .
Minimum Window Substring
45.4%
Hard
3466 .
Maximum Coin Collection
52.5%
Med.
322 .
Coin Change
46.6%
Med.
5 .
Longest Palindromic Substring
35.9%
Med.
135 .
Candy
46.8%
Hard
1 .
Two Sum
55.8%
Easy
528 .
Random Pick with Weight
48.3%
Med.
2246 .
Longest Path With Different Adjacent Characters
53.9%
Hard
588 .
Design In-Memory File System
48.2%
Hard
1428 .
Leftmost Column with at Least a One
54.9%
Med.
3034 .
Number of Subarrays That Match a Pattern I
66.9%
Med.
1584 .
Min Cost to Connect All Points
69.1%
Med.
545 .
Boundary of Binary Tree
47.2%
Med.
994 .
Rotting Oranges
56.7%
Med.
2402 .
Meeting Rooms III
43.9%
Hard
199 .
Binary Tree Right Side View
67.1%
Med.
722 .
Remove Comments
39.4%
Med.
14 .
Longest Common Prefix
45.5%
Easy
88 .
Merge Sorted Array
53.0%
Easy
2 .
Add Two Numbers
46.3%
Med.
13 .
Roman to Integer
64.9%
Easy
15 .
3Sum
37.1%
Med.
42 .
Trapping Rain Water
65.2%
Hard
27 .
Remove Element
60.1%
Easy
752 .
Open the Lock
60.7%
Med.
2502 .
Design Memory Allocator
48.5%
Med.
2551 .
Put Marbles in Bags
72.4%
Hard
1838 .
Frequency of the Most Frequent Element
44.1%
Med.
1698 .
Number of Distinct Substrings in a String
64.5%
Med.
1152 .
Analyze User Website Visit Pattern
43.8%
Med.
895 .
Maximum Frequency Stack
66.2%
Hard
730 .
Count Different Palindromic Subsequences
46.4%
Hard
2484 .
Count Palindromic Subsequences
39.4%
Hard
365 .
Water and Jug Problem
43.1%
Med.
295 .
Find Median from Data Stream
53.3%
Hard
380 .
Insert Delete GetRandom O(1)
55.0%
Med.
934 .
Shortest Bridge
58.7%
Med.
2444 .
Count Subarrays With Fixed Bounds
69.4%
Hard
21 .
Merge Two Sorted Lists
66.9%
Easy
20 .
Valid Parentheses
42.4%
Easy
4 .
Median of Two Sorted Arrays
43.9%
Hard
69 .
Sqrt(x)
40.4%
Easy
128 .
Longest Consecutive Sequence
47.0%
Med.
7 .
Reverse Integer
30.3%
Med.
31 .
Next Permutation
43.1%
Med.
53 .
Maximum Subarray
52.1%
Med.
22 .
Generate Parentheses
77.2%
Med.
26 .
Remove Duplicates from Sorted Array
60.4%
Easy
17 .
Letter Combinations of a Phone Number
63.9%
Med.
28 .
Find the Index of the First Occurrence in a String
45.0%
Easy
34 .
Find First and Last Position of Element in Sorted Array
46.9%
Med.
45 .
Jump Game II
41.5%
Med.
125 .
Valid Palindrome
51.0%
Easy
33 .
Search in Rotated Sorted Array
42.9%
Med.
139 .
Word Break
48.3%
Med.
2636 .
Promise Pool
79.8%
Med.
2021 .
Brightest Position on Street
60.6%
Med.
70 .
Climbing Stairs
53.6%
Easy
3 .
Longest Substring Without Repeating Characters
37.0%
Med.
55 .
Jump Game
39.5%
Med.
66 .
Plus One
47.6%
Easy
11 .
Container With Most Water
57.8%
Med.
9 .
Palindrome Number
59.3%
Easy
35 .
Search Insert Position
49.1%
Easy
6 .
Zigzag Conversion
51.7%
Med.
91 .
Decode Ways
36.6%
Med.
32 .
Longest Valid Parentheses
36.4%
Hard
102 .
Binary Tree Level Order Traversal
70.7%
Med.
73 .
Set Matrix Zeroes
60.8%
Med.
58 .
Length of Last Word
56.4%
Easy
122 .
Best Time to Buy and Sell Stock II
69.6%
Med.
141 .
Linked List Cycle
52.6%
Easy
118 .
Pascal's Triangle
77.1%
Easy
41 .
First Missing Positive
41.1%
Hard
29 .
Divide Two Integers
18.4%
Med.
78 .
Subsets
80.9%
Med.
10 .
Regular Expression Matching
29.3%
Hard
140 .
Word Break II
53.7%
Hard
23 .
Merge k Sorted Lists
56.9%
Hard
24 .
Swap Nodes in Pairs
67.3%
Med.
8 .
String to Integer (atoi)
19.3%
Med.
46 .
Permutations
80.7%
Med.
98 .
Validate Binary Search Tree
34.4%
Med.
81 .
Search in Rotated Sorted Array II
38.9%
Med.
16 .
3Sum Closest
46.9%
Med.
67 .
Add Binary
55.7%
Easy
40 .
Combination Sum II
57.7%
Med.
124 .
Binary Tree Maximum Path Sum
41.3%
Hard
51 .
N-Queens
72.9%
Hard
155 .
Min Stack
56.5%
Med.
143 .
Reorder List
62.6%
Med.
131 .
Palindrome Partitioning
72.2%
Med.
111 .
Minimum Depth of Binary Tree
50.7%
Easy
62 .
Unique Paths
65.8%
Med.
115 .
Distinct Subsequences
50.2%
Hard
114 .
Flatten Binary Tree to Linked List
68.6%
Med.
94 .
Binary Tree Inorder Traversal
78.6%
Easy
18 .
4Sum
38.3%
Med.
75 .
Sort Colors
67.6%
Med.
50 .
Pow(x, n)
37.1%
Med.
97 .
Interleaving String
42.2%
Med.
151 .
Reverse Words in a String
52.1%
Med.
19 .
Remove Nth Node From End of List
49.0%
Med.
63 .
Unique Paths II
43.2%
Med.
59 .
Spiral Matrix II
73.5%
Med.
43 .
Multiply Strings
42.3%
Med.
12 .
Integer to Roman
68.7%
Med.
44 .
Wildcard Matching
30.0%
Hard
95 .
Unique Binary Search Trees II
60.5%
Med.
123 .
Best Time to Buy and Sell Stock III
51.2%
Hard
92 .
Reverse Linked List II
49.6%
Med.
110 .
Balanced Binary Tree
55.4%
Easy
109 .
Convert Sorted List to Binary Search Tree
64.5%
Med.
104 .
Maximum Depth of Binary Tree
77.2%
Easy
37 .
Sudoku Solver
64.0%
Hard
39 .
Combination Sum
74.7%
Med.
133 .
Clone Graph
62.5%
Med.
149 .
Max Points on a Line
29.0%
Hard
152 .
Maximum Product Subarray
35.0%
Med.
138 .
Copy List with Random Pointer
60.6%
Med.
80 .
Remove Duplicates from Sorted Array II
63.0%
Med.
85 .
Maximal Rectangle
53.8%
Hard`;

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
fs.writeFileSync('uber_data.json', JSON.stringify(results, null, 2));
console.log("Created uber_data.json with " + results.length + " entries");
