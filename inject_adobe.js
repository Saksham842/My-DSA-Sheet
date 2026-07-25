const fs = require('fs');

const rawText = `
692 .
Top K Frequent Words
59.3%
Med.

347 .
Top K Frequent Elements
64.6%
Med.

152 .
Maximum Product Subarray
35.0%
Med.

329 .
Longest Increasing Path in a Matrix
55.4%
Hard

146 .
LRU Cache
45.3%
Med.

424 .
Longest Repeating Character Replacement
57.3%
Med.

3046 .
Split the Array
59.3%
Easy

12 .
Integer to Roman
68.7%
Med.

76 .
Minimum Window Substring
45.4%
Hard

91 .
Decode Ways
36.6%
Med.

238 .
Product of Array Except Self
67.8%
Med.

121 .
Best Time to Buy and Sell Stock
55.3%
Easy

127 .
Word Ladder
42.9%
Hard

994 .
Rotting Oranges
56.7%
Med.

169 .
Majority Element
65.8%
Easy

1 .
Two Sum
55.8%
Easy

14 .
Longest Common Prefix
45.5%
Easy

15 .
3Sum
37.1%
Med.

4 .
Median of Two Sorted Arrays
43.9%
Hard

3 .
Longest Substring Without Repeating Characters
37.0%
Med.

7 .
Reverse Integer
30.3%
Med.

88 .
Merge Sorted Array
53.0%
Easy

42 .
Trapping Rain Water
65.2%
Hard

49 .
Group Anagrams
71.0%
Med.

9 .
Palindrome Number
59.3%
Easy

2 .
Add Two Numbers
46.3%
Med.

20 .
Valid Parentheses
42.4%
Easy

5 .
Longest Palindromic Substring
35.9%
Med.

31 .
Next Permutation
43.1%
Med.

27 .
Remove Element
60.1%
Easy

70 .
Climbing Stairs
53.6%
Easy

13 .
Roman to Integer
64.9%
Easy

11 .
Container With Most Water
57.8%
Med.

26 .
Remove Duplicates from Sorted Array
60.4%
Easy

54 .
Spiral Matrix
54.0%
Med.

73 .
Set Matrix Zeroes
60.8%
Med.

21 .
Merge Two Sorted Lists
66.9%
Easy

22 .
Generate Parentheses
77.2%
Med.

55 .
Jump Game
39.5%
Med.

66 .
Plus One
47.6%
Easy

17 .
Letter Combinations of a Phone Number
63.9%
Med.

48 .
Rotate Image
78.0%
Med.

34 .
Find First and Last Position of Element in Sorted Array
46.9%
Med.

56 .
Merge Intervals
49.4%
Med.

46 .
Permutations
80.7%
Med.

69 .
Sqrt(x)
40.4%
Easy

80 .
Remove Duplicates from Sorted Array II
63.0%
Med.

75 .
Sort Colors
67.6%
Med.

53 .
Maximum Subarray
52.1%
Med.

23 .
Merge k Sorted Lists
56.9%
Hard

62 .
Unique Paths
65.8%
Med.

45 .
Jump Game II
41.5%
Med.

36 .
Valid Sudoku
62.3%
Med.

105 .
Construct Binary Tree from Preorder and Inorder Traversal
66.9%
Med.

29 .
Divide Two Integers
18.4%
Med.

33 .
Search in Rotated Sorted Array
42.9%
Med.

41 .
First Missing Positive
41.1%
Hard

40 .
Combination Sum II
57.7%
Med.

35 .
Search Insert Position
49.1%
Easy

50 .
Pow(x, n)
37.1%
Med.

78 .
Subsets
80.9%
Med.

28 .
Find the Index of the First Occurrence in a String
45.0%
Easy

8 .
String to Integer (atoi)
19.3%
Med.

25 .
Reverse Nodes in k-Group
63.1%
Hard

58 .
Length of Last Word
56.4%
Easy

84 .
Largest Rectangle in Histogram
47.5%
Hard

103 .
Binary Tree Zigzag Level Order Traversal
61.7%
Med.

94 .
Binary Tree Inorder Traversal
78.6%
Easy

24 .
Swap Nodes in Pairs
67.3%
Med.

92 .
Reverse Linked List II
49.6%
Med.

44 .
Wildcard Matching
30.0%
Hard

18 .
4Sum
38.3%
Med.

6 .
Zigzag Conversion
51.7%
Med.

37 .
Sudoku Solver
64.0%
Hard

16 .
3Sum Closest
46.9%
Med.

19 .
Remove Nth Node From End of List
49.0%
Med.

86 .
Partition List
59.0%
Med.

57 .
Insert Interval
43.5%
Med.

101 .
Symmetric Tree
59.3%
Easy

79 .
Word Search
45.3%
Med.

60 .
Permutation Sequence
50.0%
Hard

68 .
Text Justification
48.2%
Hard

67 .
Add Binary
55.7%
Easy

100 .
Same Tree
65.2%
Easy

74 .
Search a 2D Matrix
52.3%
Med.

77 .
Combinations
73.0%
Med.

32 .
Longest Valid Parentheses
36.4%
Hard

104 .
Maximum Depth of Binary Tree
77.2%
Easy

110 .
Balanced Binary Tree
55.4%
Easy

59 .
Spiral Matrix II
73.5%
Med.

98 .
Validate Binary Search Tree
34.4%
Med.

72 .
Edit Distance
58.8%
Med.

83 .
Remove Duplicates from Sorted List
54.9%
Easy

81 .
Search in Rotated Sorted Array II
38.9%
Med.

63 .
Unique Paths II
43.2%
Med.

61 .
Rotate List
40.0%
Med.

30 .
Substring with Concatenation of All Words
33.0%
Hard

51 .
N-Queens
72.9%
Hard

38 .
Count and Say
60.6%
Med.

71 .
Simplify Path
47.9%
Med.

47 .
Permutations II
61.6%
Med.

93 .
Restore IP Addresses
53.2%
Med.

82 .
Remove Duplicates from Sorted List II
49.9%
Med.

90 .
Subsets II
59.6%
Med.

85 .
Maximal Rectangle
53.8%
Hard

43 .
Multiply Strings
42.3%
Med.

39 .
Combination Sum
74.7%
Med.

108 .
Convert Sorted Array to Binary Search Tree
74.1%
Easy

106 .
Construct Binary Tree from Inorder and Postorder Traversal
66.2%
Med.

96 .
Unique Binary Search Trees
62.5%
Med.

111 .
Minimum Depth of Binary Tree
50.7%
Easy

112 .
Path Sum
53.1%
Easy

102 .
Binary Tree Level Order Traversal
70.7%
Med.
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

// Adjust bars based on index ranking (top 25 questions get 6 bars, next 35 get 5 bars, next 35 get 4 bars, rest 3 bars)
results.forEach((q, idx) => {
    if (idx < 25) q.bars = 6;
    else if (idx < 60) q.bars = 5;
    else if (idx < 95) q.bars = 4;
    else q.bars = 3;
});

fs.writeFileSync('adobe_data.json', JSON.stringify(results, null, 2));

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function processData(data) {
  return data.map(q => {
    return `    { id: ${q.id}, title: '${q.title.replace(/'/g, "\\'")}', difficulty: '${q.difficulty}', acceptance: '${q.acceptance}', bars: ${q.bars}, link: 'https://leetcode.com/problems/${slugify(q.title)}/' }`;
  }).join(',\n');
}

const adobeStr = `  adobe: [\n${processData(results)}\n  ]`;

let dataJs = fs.readFileSync('data.js', 'utf8');

// If questionsData already contains adobe, remove/update or replace it
if (dataJs.includes('adobe: [')) {
    console.log("adobe already in questionsData, updating...");
    dataJs = dataJs.replace(/\s*adobe:\s*\[[\s\S]*?\n  \](?=\n\}|,)/, `,\n${adobeStr}`);
} else {
    // Replace closing brace of questionsData with the new data
    dataJs = dataJs.replace(/\n\};\s*$/, `,\n${adobeStr}\n};\n`);
}

// Update adobe in companiesData to set the problems count
dataJs = dataJs.replace(/\{ id: 'adobe', name: 'Adobe', problems: \d+, icon: 'Ad' \}/, `{ id: 'adobe', name: 'Adobe', problems: ${results.length}, icon: 'Ad' }`);

fs.writeFileSync('data.js', dataJs);
console.log(`Successfully created adobe_data.json and updated data.js with ${results.length} Adobe questions.`);
