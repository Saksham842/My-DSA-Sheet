const fs = require('fs');

const rawText = `
[1 .Two Sum](https://leetcode.com/problems/two-sum)
55.8%
Easy
[42 .Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water)
65.2%
Hard
[3 .Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters)
37.0%
Med.
[121 .Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock)
55.3%
Easy
[5 .Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring)
35.9%
Med.
[2 .Add Two Numbers](https://leetcode.com/problems/add-two-numbers)
46.3%
Med.
[56 .Merge Intervals](https://leetcode.com/problems/merge-intervals)
49.4%
Med.
[49 .Group Anagrams](https://leetcode.com/problems/group-anagrams)
71.0%
Med.
[20 .Valid Parentheses](https://leetcode.com/problems/valid-parentheses)
42.4%
Easy
[23 .Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists)
56.9%
Hard
[53 .Maximum Subarray](https://leetcode.com/problems/maximum-subarray)
52.1%
Med.
[22 .Generate Parentheses](https://leetcode.com/problems/generate-parentheses)
77.2%
Med.
[767 .Reorganize String](https://leetcode.com/problems/reorganize-string)
56.2%
Med.
[146 .LRU Cache](https://leetcode.com/problems/lru-cache)
45.3%
Med.
[33 .Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array)
42.9%
Med.
[200 .Number of Islands](https://leetcode.com/problems/number-of-islands)
62.4%
Med.
[45 .Jump Game II](https://leetcode.com/problems/jump-game-ii)
41.5%
Med.
[48 .Rotate Image](https://leetcode.com/problems/rotate-image)
78.0%
Med.
[79 .Word Search](https://leetcode.com/problems/word-search)
45.3%
Med.
[9 .Palindrome Number](https://leetcode.com/problems/palindrome-number)
59.3%
Easy
[31 .Next Permutation](https://leetcode.com/problems/next-permutation)
43.1%
Med.
[11 .Container With Most Water](https://leetcode.com/problems/container-with-most-water)
57.8%
Med.
[4 .Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays)
43.9%
Hard
[62 .Unique Paths](https://leetcode.com/problems/unique-paths)
65.8%
Med.
[55 .Jump Game](https://leetcode.com/problems/jump-game)
39.5%
Med.
[7 .Reverse Integer](https://leetcode.com/problems/reverse-integer)
30.3%
Med.
[13 .Roman to Integer](https://leetcode.com/problems/roman-to-integer)
64.9%
Easy
[36 .Valid Sudoku](https://leetcode.com/problems/valid-sudoku)
62.3%
Med.
[12 .Integer to Roman](https://leetcode.com/problems/integer-to-roman)
68.7%
Med.
[875 .Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas)
49.1%
Med.
[347 .Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements)
64.6%
Med.
[122 .Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii)
69.6%
Med.
[127 .Word Ladder](https://leetcode.com/problems/word-ladder)
42.9%
Hard
[54 .Spiral Matrix](https://leetcode.com/problems/spiral-matrix)
54.0%
Med.
[34 .Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array)
46.9%
Med.
[236 .Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree)
66.9%
Med.
[198 .House Robber](https://leetcode.com/problems/house-robber)
52.3%
Med.
[253 .Meeting Rooms II](https://code.nextleet.com/problem/meeting-rooms-ii/)
52.2%
Med.
[424 .Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement)
57.3%
Med.
[84 .Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram)
47.5%
Hard
[380 .Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1)
55.0%
Med.
[472 .Concatenated Words](https://leetcode.com/problems/concatenated-words)
49.5%
Hard
[76 .Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring)
45.4%
Hard
[322 .Coin Change](https://leetcode.com/problems/coin-change)
46.6%
Med.
[460 .LFU Cache](https://leetcode.com/problems/lfu-cache)
46.7%
Hard
[136 .Single Number](https://leetcode.com/problems/single-number)
76.0%
Easy
[207 .Course Schedule](https://leetcode.com/problems/course-schedule)
49.3%
Med.
[210 .Course Schedule II](https://leetcode.com/problems/course-schedule-ii)
53.5%
Med.
[238 .Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self)
67.8%
Med.
[15 .3Sum](https://leetcode.com/problems/3sum)
37.1%
Med.
[118 .Pascal's Triangle](https://leetcode.com/problems/pascals-triangle)
77.1%
Easy
[74 .Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix)
52.3%
Med.
[215 .Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array)
68.0%
Med.
[224 .Basic Calculator](https://leetcode.com/problems/basic-calculator)
45.6%
Hard
[88 .Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array)
53.0%
Easy
[412 .Fizz Buzz](https://leetcode.com/problems/fizz-buzz)
74.4%
Easy
[135 .Candy](https://leetcode.com/problems/candy)
46.8%
Hard
[70 .Climbing Stairs](https://leetcode.com/problems/climbing-stairs)
53.6%
Easy
[283 .Move Zeroes](https://leetcode.com/problems/move-zeroes)
62.8%
Easy
[102 .Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal)
70.7%
Med.
[3434 .Maximum Frequency After Subarray Operation](https://leetcode.com/problems/maximum-frequency-after-subarray-operation)
27.1%
Med.
[212 .Word Search II](https://leetcode.com/problems/word-search-ii)
37.4%
Hard
[169 .Majority Element](https://leetcode.com/problems/majority-element)
65.8%
Easy
[8 .String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi)
19.3%
Med.
[39 .Combination Sum](https://leetcode.com/problems/combination-sum)
74.7%
Med.
[239 .Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum)
47.6%
Hard
[273 .Integer to English Words](https://leetcode.com/problems/integer-to-english-words)
34.4%
Hard
[21 .Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists)
66.9%
Easy
[496 .Next Greater Element I](https://leetcode.com/problems/next-greater-element-i)
74.6%
Easy
[547 .Number of Provinces](https://leetcode.com/problems/number-of-provinces)
68.7%
Med.
[98 .Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree)
34.4%
Med.
[14 .Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix)
45.5%
Easy
[560 .Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k)
45.5%
Med.
[37 .Sudoku Solver](https://leetcode.com/problems/sudoku-solver)
64.0%
Hard
[138 .Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer)
60.6%
Med.
[140 .Word Break II](https://leetcode.com/problems/word-break-ii)
53.7%
Hard
[973 .K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin)
68.0%
Med.
[72 .Edit Distance](https://leetcode.com/problems/edit-distance)
58.8%
Med.
[26 .Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array)
60.4%
Easy
[25 .Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group)
63.1%
Hard
[61 .Rotate List](https://leetcode.com/problems/rotate-list)
40.0%
Med.
[128 .Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence)
47.0%
Med.
[18 .4Sum](https://leetcode.com/problems/4sum)
38.3%
Med.
[17 .Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number)
63.9%
Med.
[10 .Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching)
29.3%
Hard
[75 .Sort Colors](https://leetcode.com/problems/sort-colors)
67.6%
Med.
[50 .Pow(x, n)](https://leetcode.com/problems/powx-n)
37.1%
Med.
[994 .Rotting Oranges](https://leetcode.com/problems/rotting-oranges)
56.7%
Med.
[733 .Flood Fill](https://leetcode.com/problems/flood-fill)
66.5%
Easy
[155 .Min Stack](https://leetcode.com/problems/min-stack)
56.5%
Med.
[394 .Decode String](https://leetcode.com/problems/decode-string)
61.2%
Med.
[66 .Plus One](https://leetcode.com/problems/plus-one)
47.6%
Easy
[78 .Subsets](https://leetcode.com/problems/subsets)
80.9%
Med.
[103 .Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal)
61.7%
Med.
[692 .Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words)
59.3%
Med.
[226 .Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree)
79.1%
Easy
[2115 .Find All Possible Recipes from Given Supplies](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies)
56.5%
Med.
[1011 .Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days)
72.2%
Med.
[1235 .Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling)
54.4%
Hard
[2918 .Minimum Equal Sum of Two Arrays After Replacing Zeros](https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros)
50.2%
Med.
[1152 .Analyze User Website Visit Pattern](https://code.nextleet.com/problem/analyze-user-website-visit-pattern/)
43.8%
Med.
[443 .String Compression](https://leetcode.com/problems/string-compression)
58.1%
Med.
[287 .Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number)
62.9%
Med.
[417 .Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow)
57.6%
Med.
[77 .Combinations](https://leetcode.com/problems/combinations)
73.0%
Med.
[217 .Contains Duplicate](https://leetcode.com/problems/contains-duplicate)
63.3%
Easy
[746 .Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs)
67.2%
Easy
[849 .Maximize Distance to Closest Person](https://leetcode.com/problems/maximize-distance-to-closest-person)
49.0%
Med.
[295 .Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream)
53.3%
Hard
[2055 .Plates Between Candles](https://leetcode.com/problems/plates-between-candles)
46.7%
Med.
[2747 .Count Zero Request Servers](https://leetcode.com/problems/count-zero-request-servers)
34.2%
Med.
[41 .First Missing Positive](https://leetcode.com/problems/first-missing-positive)
41.1%
Hard
[1552 .Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls)
71.4%
Med.
[202 .Happy Number](https://leetcode.com/problems/happy-number)
58.1%
Easy
[108 .Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree)
74.1%
Easy
[2929 .Distribute Candies Among Children II](https://leetcode.com/problems/distribute-candies-among-children-ii)
56.0%
Med.
[802 .Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states)
68.7%
Med.
[1603 .Design Parking System](https://leetcode.com/problems/design-parking-system)
87.1%
Easy
[2894 .Divisible and Non-divisible Sums Difference](https://leetcode.com/problems/divisible-and-non-divisible-sums-difference)
91.3%
Easy
[588 .Design In-Memory File System](https://code.nextleet.com/problem/design-in-memory-file-system/)
48.2%
Hard
[399 .Evaluate Division](https://leetcode.com/problems/evaluate-division)
63.2%
Med.
[69 .Sqrt(x)](https://leetcode.com/problems/sqrtx)
40.4%
Easy
[73 .Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes)
60.8%
Med.
[503 .Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii)
66.4%
Med.
[139 .Word Break](https://leetcode.com/problems/word-break)
48.3%
Med.
[297 .Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree)
59.0%
Hard
[735 .Asteroid Collision](https://leetcode.com/problems/asteroid-collision)
45.6%
Med.
[268 .Missing Number](https://leetcode.com/problems/missing-number)
70.1%
Easy
[125 .Valid Palindrome](https://leetcode.com/problems/valid-palindrome)
51.0%
Easy
[51 .N-Queens](https://leetcode.com/problems/n-queens)
72.9%
Hard
[6 .Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion)
51.7%
Med.
[2667 .Create Hello World Function](https://leetcode.com/problems/create-hello-world-function)
82.1%
Easy
[242 .Valid Anagram](https://leetcode.com/problems/valid-anagram)
66.7%
Easy
[46 .Permutations](https://leetcode.com/problems/permutations)
80.7%
Med.
[28 .Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string)
45.0%
Easy
[32 .Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses)
36.4%
Hard
[19 .Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list)
49.0%
Med.
[27 .Remove Element](https://leetcode.com/problems/remove-element)
60.1%
Easy
[101 .Symmetric Tree](https://leetcode.com/problems/symmetric-tree)
59.3%
Easy
[71 .Simplify Path](https://leetcode.com/problems/simplify-path)
47.9%
Med.
[739 .Daily Temperatures](https://leetcode.com/problems/daily-temperatures)
67.4%
Med.
[64 .Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum)
66.5%
Med.
[80 .Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii)
63.0%
Med.
[92 .Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii)
49.6%
Med.
[29 .Divide Two Integers](https://leetcode.com/problems/divide-two-integers)
18.4%
Med.
[91 .Decode Ways](https://leetcode.com/problems/decode-ways)
36.6%
Med.
[152 .Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray)
35.0%
Med.
[150 .Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation)
55.0%
Med.
[387 .First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string)
63.7%
Easy
[24 .Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs)
67.3%
Med.
[90 .Subsets II](https://leetcode.com/problems/subsets-ii)
59.6%
Med.
[100 .Same Tree](https://leetcode.com/problems/same-tree)
65.2%
Easy
[227 .Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii)
45.8%
Med.
[189 .Rotate Array](https://leetcode.com/problems/rotate-array)
43.1%
Med.
[68 .Text Justification](https://leetcode.com/problems/text-justification)
48.2%
Hard
[86 .Partition List](https://leetcode.com/problems/partition-list)
59.0%
Med.
[35 .Search Insert Position](https://leetcode.com/problems/search-insert-position)
49.1%
Easy
[124 .Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum)
41.3%
Hard
[44 .Wildcard Matching](https://leetcode.com/problems/wildcard-matching)
30.0%
Hard
[40 .Combination Sum II](https://leetcode.com/problems/combination-sum-ii)
57.7%
Med.
[16 .3Sum Closest](https://leetcode.com/problems/3sum-closest)
46.9%
Med.
[543 .Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree)
63.6%
Easy
[528 .Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight)
48.3%
Med.
[131 .Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning)
72.2%
Med.
[143 .Reorder List](https://leetcode.com/problems/reorder-list)
62.6%
Med.
[134 .Gas Station](https://leetcode.com/problems/gas-station)
46.4%
Med.
[1922 .Count Good Numbers](https://leetcode.com/problems/count-good-numbers)
56.7%
Med.
[105 .Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal)
66.9%
Med.
[81 .Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii)
38.9%
Med.
[104 .Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree)
77.2%
Easy
[133 .Clone Graph](https://leetcode.com/problems/clone-graph)
62.5%
Med.
[67 .Add Binary](https://leetcode.com/problems/add-binary)
55.7%
Easy
[141 .Linked List Cycle](https://leetcode.com/problems/linked-list-cycle)
52.6%
Easy
[57 .Insert Interval](https://leetcode.com/problems/insert-interval)
43.5%
Med.
[58 .Length of Last Word](https://leetcode.com/problems/length-of-last-word)
56.4%
Easy
[83 .Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list)
54.9%
Easy
[94 .Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal)
78.6%
Easy
[38 .Count and Say](https://leetcode.com/problems/count-and-say)
60.6%
Med.
[43 .Multiply Strings](https://leetcode.com/problems/multiply-strings)
42.3%
Med.
[95 .Unique Binary Search Trees II](https://leetcode.com/problems/unique-binary-search-trees-ii)
60.5%
Med.
[142 .Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii)
55.0%
Med.
[112 .Path Sum](https://leetcode.com/problems/path-sum)
53.1%
Easy
[60 .Permutation Sequence](https://leetcode.com/problems/permutation-sequence)
50.0%
Hard
[85 .Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle)
53.8%
Hard
[63 .Unique Paths II](https://leetcode.com/problems/unique-paths-ii)
43.2%
Med.
[30 .Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words)
33.0%
Hard
[120 .Triangle](https://leetcode.com/problems/triangle)
59.4%
Med.
[93 .Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses)
53.2%
Med.
[99 .Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree)
56.4%
Med.
[82 .Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii)
49.9%
Med.
[96 .Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees)
62.5%
Med.
[97 .Interleaving String](https://leetcode.com/problems/interleaving-string)
42.2%
Med.
[47 .Permutations II](https://leetcode.com/problems/permutations-ii)
61.6%
Med.
[59 .Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii)
73.5%
Med.
[113 .Path Sum II](https://leetcode.com/problems/path-sum-ii)
60.5%
Med.
[65 .Valid Number](https://leetcode.com/problems/valid-number)
21.6%
Hard
[89 .Gray Code](https://leetcode.com/problems/gray-code)
61.9%
Med.
[52 .N-Queens II](https://leetcode.com/problems/n-queens-ii)
76.8%
Hard
[87 .Scramble String](https://leetcode.com/problems/scramble-string)
42.2%
Hard
`;

const lines = rawText.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);
const results = [];
let i = 0;
while (i < lines.length) {
    const linkMatch = lines[i].match(/^\[(\d+)\s*\.\s*(.+?)\]\((https?:\/\/[^\)]+)\)/);
    if (linkMatch && i + 2 < lines.length) {
        const id = parseInt(linkMatch[1], 10);
        const title = linkMatch[2].trim();
        let link = linkMatch[3].trim();
        if (!link.endsWith('/')) {
            link += '/';
        }
        const acceptance = lines[i+1];
        const difficulty = lines[i+2];

        results.push({
            id,
            title,
            acceptance,
            difficulty,
            link,
            bars: 5
        });
        i += 3;
        continue;
    }
    i++;
}

console.log(`Parsed ${results.length} questions.`);

// Frequency bars ranking:
// top 25: 6 bars
// next 35: 5 bars
// next 35: 4 bars
// rest: 3 bars
results.forEach((q, idx) => {
    if (idx < 25) q.bars = 6;
    else if (idx < 60) q.bars = 5;
    else if (idx < 95) q.bars = 4;
    else q.bars = 3;
});

fs.writeFileSync('amazon_data.json', JSON.stringify(results, null, 2));

function processData(data) {
  return data.map(q => {
    return `    { id: ${q.id}, title: '${q.title.replace(/'/g, "\\'")}', difficulty: '${q.difficulty}', acceptance: '${q.acceptance}', bars: ${q.bars}, link: '${q.link}' }`;
  }).join(',\n');
}

const amazonStr = `  amazon: [\n${processData(results)}\n  ]`;

let dataJs = fs.readFileSync('data.js', 'utf8');

// Update amazon problem count in companiesData
dataJs = dataJs.replace(
  /\{ id: 'amazon', name: 'Amazon', problems: \d+, icon: 'A' \}/,
  `{ id: 'amazon', name: 'Amazon', problems: ${results.length}, icon: 'A' }`
);

// Add or update amazon in questionsData
if (dataJs.includes('amazon: [')) {
    console.log("amazon already in questionsData, updating...");
    dataJs = dataJs.replace(/\s*amazon:\s*\[[\s\S]*?\n  \](?=\n\}|,)/, `,\n${amazonStr}`);
} else {
    dataJs = dataJs.replace(/\n\};\s*$/, `,\n${amazonStr}\n};\n`);
}

fs.writeFileSync('data.js', dataJs);
console.log(`Successfully created amazon_data.json and updated data.js with ${results.length} Amazon questions.`);
