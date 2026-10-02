const fs = require('fs');

const rawText = `
[146 .LRU Cache](https://leetcode.com/problems/lru-cache)
45.3%
Med.
[121 .Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock)
55.3%
Easy
[14 .Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix)
45.5%
Easy
[56 .Merge Intervals](https://leetcode.com/problems/merge-intervals)
49.4%
Med.
[347 .Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements)
64.6%
Med.
[122 .Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii)
69.6%
Med.
[53 .Maximum Subarray](https://leetcode.com/problems/maximum-subarray)
52.1%
Med.
[200 .Number of Islands](https://leetcode.com/problems/number-of-islands)
62.4%
Med.
[20 .Valid Parentheses](https://leetcode.com/problems/valid-parentheses)
42.4%
Easy
[215 .Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array)
68.0%
Med.
[23 .Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists)
56.9%
Hard
[48 .Rotate Image](https://leetcode.com/problems/rotate-image)
78.0%
Med.
[123 .Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii)
51.2%
Hard
[188 .Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv)
47.2%
Hard
[1 .Two Sum](https://leetcode.com/problems/two-sum)
55.8%
Easy
[1606 .Find Servers That Handled Most Number of Requests](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests)
44.1%
Hard
[3522 .Calculate Score After Performing Instructions](https://leetcode.com/problems/calculate-score-after-performing-instructions)
55.6%
Med.
[88 .Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array)
53.0%
Easy
[36 .Valid Sudoku](https://leetcode.com/problems/valid-sudoku)
62.3%
Med.
[155 .Min Stack](https://leetcode.com/problems/min-stack)
56.5%
Med.
[54 .Spiral Matrix](https://leetcode.com/problems/spiral-matrix)
54.0%
Med.
[42 .Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water)
65.2%
Hard
[34 .Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array)
46.9%
Med.
[714 .Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee)
70.6%
Med.
[362 .Design Hit Counter](https://code.nextleet.com/problem/design-hit-counter/)
69.2%
Med.
[125 .Valid Palindrome](https://leetcode.com/problems/valid-palindrome)
51.0%
Easy
[57 .Insert Interval](https://leetcode.com/problems/insert-interval)
43.5%
Med.
[5 .Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring)
35.9%
Med.
[17 .Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number)
63.9%
Med.
[7 .Reverse Integer](https://leetcode.com/problems/reverse-integer)
30.3%
Med.
[981 .Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store)
49.4%
Med.
[658 .Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements)
48.7%
Med.
[21 .Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists)
66.9%
Easy
[46 .Permutations](https://leetcode.com/problems/permutations)
80.7%
Med.
[28 .Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string)
45.0%
Easy
[283 .Move Zeroes](https://leetcode.com/problems/move-zeroes)
62.8%
Easy
[210 .Course Schedule II](https://leetcode.com/problems/course-schedule-ii)
53.5%
Med.
[348 .Design Tic-Tac-Toe](https://code.nextleet.com/problem/design-tic-tac-toe/)
58.6%
Med.
[297 .Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree)
59.0%
Hard
[206 .Reverse Linked List](https://leetcode.com/problems/reverse-linked-list)
79.3%
Easy
[855 .Exam Room](https://leetcode.com/problems/exam-room)
42.9%
Med.
[733 .Flood Fill](https://leetcode.com/problems/flood-fill)
66.5%
Easy
[622 .Design Circular Queue](https://leetcode.com/problems/design-circular-queue)
52.7%
Med.
[621 .Task Scheduler](https://leetcode.com/problems/task-scheduler)
61.6%
Med.
[151 .Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string)
52.1%
Med.
[341 .Flatten Nested List Iterator](https://leetcode.com/problems/flatten-nested-list-iterator)
65.2%
Med.
[443 .String Compression](https://leetcode.com/problems/string-compression)
58.1%
Med.
[127 .Word Ladder](https://leetcode.com/problems/word-ladder)
42.9%
Hard
[202 .Happy Number](https://leetcode.com/problems/happy-number)
58.1%
Easy
[509 .Fibonacci Number](https://leetcode.com/problems/fibonacci-number)
73.0%
Easy
[128 .Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence)
47.0%
Med.
[706 .Design HashMap](https://leetcode.com/problems/design-hashmap)
65.9%
Easy
[253 .Meeting Rooms II](https://code.nextleet.com/problem/meeting-rooms-ii/)
52.2%
Med.
[238 .Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self)
67.8%
Med.
[207 .Course Schedule](https://leetcode.com/problems/course-schedule)
49.3%
Med.
[236 .Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree)
66.9%
Med.
[49 .Group Anagrams](https://leetcode.com/problems/group-anagrams)
71.0%
Med.
[713 .Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k)
52.9%
Med.
[480 .Sliding Window Median](https://leetcode.com/problems/sliding-window-median)
38.7%
Hard
[198 .House Robber](https://leetcode.com/problems/house-robber)
52.3%
Med.
[227 .Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii)
45.8%
Med.
[359 .Logger Rate Limiter](https://code.nextleet.com/problem/logger-rate-limiter/)
76.6%
Easy
[3 .Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters)
37.0%
Med.
[268 .Missing Number](https://leetcode.com/problems/missing-number)
70.1%
Easy
[15 .3Sum](https://leetcode.com/problems/3sum)
37.1%
Med.
[22 .Generate Parentheses](https://leetcode.com/problems/generate-parentheses)
77.2%
Med.
[13 .Roman to Integer](https://leetcode.com/problems/roman-to-integer)
64.9%
Easy
[33 .Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array)
42.9%
Med.
[2 .Add Two Numbers](https://leetcode.com/problems/add-two-numbers)
46.3%
Med.
[26 .Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array)
60.4%
Easy
[8 .String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi)
19.3%
Med.
[139 .Word Break](https://leetcode.com/problems/word-break)
48.3%
Med.
[10 .Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching)
29.3%
Hard
[387 .First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string)
63.7%
Easy
[189 .Rotate Array](https://leetcode.com/problems/rotate-array)
43.1%
Med.
[560 .Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k)
45.5%
Med.
[68 .Text Justification](https://leetcode.com/problems/text-justification)
48.2%
Hard
[208 .Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree)
68.0%
Med.
[378 .Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix)
63.6%
Med.
[100 .Same Tree](https://leetcode.com/problems/same-tree)
65.2%
Easy
[4 .Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays)
43.9%
Hard
[9 .Palindrome Number](https://leetcode.com/problems/palindrome-number)
59.3%
Easy
[70 .Climbing Stairs](https://leetcode.com/problems/climbing-stairs)
53.6%
Easy
[165 .Compare Version Numbers](https://leetcode.com/problems/compare-version-numbers)
42.4%
Med.
[295 .Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream)
53.3%
Hard
[160 .Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists)
61.2%
Easy
[273 .Integer to English Words](https://leetcode.com/problems/integer-to-english-words)
34.4%
Hard
[394 .Decode String](https://leetcode.com/problems/decode-string)
61.2%
Med.
[1041 .Robot Bounded In Circle](https://leetcode.com/problems/robot-bounded-in-circle)
56.2%
Med.
[468 .Validate IP Address](https://leetcode.com/problems/validate-ip-address)
27.8%
Med.
[11 .Container With Most Water](https://leetcode.com/problems/container-with-most-water)
57.8%
Med.
[69 .Sqrt(x)](https://leetcode.com/problems/sqrtx)
40.4%
Easy
[19 .Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list)
49.0%
Med.
[27 .Remove Element](https://leetcode.com/problems/remove-element)
60.1%
Easy
[35 .Search Insert Position](https://leetcode.com/problems/search-insert-position)
49.1%
Easy
[67 .Add Binary](https://leetcode.com/problems/add-binary)
55.7%
Easy
[84 .Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram)
47.5%
Hard
[31 .Next Permutation](https://leetcode.com/problems/next-permutation)
43.1%
Med.
[167 .Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted)
63.4%
Med.
[344 .Reverse String](https://leetcode.com/problems/reverse-string)
79.8%
Easy
[2788 .Split Strings by Separator](https://leetcode.com/problems/split-strings-by-separator)
75.0%
Easy
[874 .Walking Robot Simulation](https://leetcode.com/problems/walking-robot-simulation)
58.2%
Med.
[787 .Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops)
40.4%
Med.
[543 .Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree)
63.6%
Easy
[843 .Guess the Word](https://leetcode.com/problems/guess-the-word)
37.6%
Hard
[134 .Gas Station](https://leetcode.com/problems/gas-station)
46.4%
Med.
[150 .Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation)
55.0%
Med.
[515 .Find Largest Value in Each Tree Row](https://leetcode.com/problems/find-largest-value-in-each-tree-row)
66.3%
Med.
[75 .Sort Colors](https://leetcode.com/problems/sort-colors)
67.6%
Med.
[55 .Jump Game](https://leetcode.com/problems/jump-game)
39.5%
Med.
[101 .Symmetric Tree](https://leetcode.com/problems/symmetric-tree)
59.3%
Easy
[39 .Combination Sum](https://leetcode.com/problems/combination-sum)
74.7%
Med.
[18 .4Sum](https://leetcode.com/problems/4sum)
38.3%
Med.
[45 .Jump Game II](https://leetcode.com/problems/jump-game-ii)
41.5%
Med.
[97 .Interleaving String](https://leetcode.com/problems/interleaving-string)
42.2%
Med.
[98 .Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree)
34.4%
Med.
[66 .Plus One](https://leetcode.com/problems/plus-one)
47.6%
Easy
[41 .First Missing Positive](https://leetcode.com/problems/first-missing-positive)
41.1%
Hard
[50 .Pow(x, n)](https://leetcode.com/problems/powx-n)
37.1%
Med.
[232 .Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks)
68.1%
Easy
[2591 .Distribute Money to Maximum Children](https://leetcode.com/problems/distribute-money-to-maximum-children)
19.5%
Easy
[79 .Word Search](https://leetcode.com/problems/word-search)
45.3%
Med.
[118 .Pascal's Triangle](https://leetcode.com/problems/pascals-triangle)
77.1%
Easy
[29 .Divide Two Integers](https://leetcode.com/problems/divide-two-integers)
18.4%
Med.
[92 .Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii)
49.6%
Med.
[94 .Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal)
78.6%
Easy
[44 .Wildcard Matching](https://leetcode.com/problems/wildcard-matching)
30.0%
Hard
[38 .Count and Say](https://leetcode.com/problems/count-and-say)
60.6%
Med.
[74 .Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix)
52.3%
Med.
[73 .Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes)
60.8%
Med.
[83 .Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list)
54.9%
Easy
[110 .Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree)
55.4%
Easy
[24 .Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs)
67.3%
Med.
[104 .Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree)
77.2%
Easy
[76 .Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring)
45.4%
Hard
[78 .Subsets](https://leetcode.com/problems/subsets)
80.9%
Med.
[51 .N-Queens](https://leetcode.com/problems/n-queens)
72.9%
Hard
[71 .Simplify Path](https://leetcode.com/problems/simplify-path)
47.9%
Med.
[102 .Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal)
70.7%
Med.
[6 .Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion)
51.7%
Med.
[91 .Decode Ways](https://leetcode.com/problems/decode-ways)
36.6%
Med.
[12 .Integer to Roman](https://leetcode.com/problems/integer-to-roman)
68.7%
Med.
[64 .Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum)
66.5%
Med.
[61 .Rotate List](https://leetcode.com/problems/rotate-list)
40.0%
Med.
[108 .Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree)
74.1%
Easy
[86 .Partition List](https://leetcode.com/problems/partition-list)
59.0%
Med.
[77 .Combinations](https://leetcode.com/problems/combinations)
73.0%
Med.
[37 .Sudoku Solver](https://leetcode.com/problems/sudoku-solver)
64.0%
Hard
[25 .Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group)
63.1%
Hard
[82 .Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii)
49.9%
Med.
[58 .Length of Last Word](https://leetcode.com/problems/length-of-last-word)
56.4%
Easy
[95 .Unique Binary Search Trees II](https://leetcode.com/problems/unique-binary-search-trees-ii)
60.5%
Med.
[43 .Multiply Strings](https://leetcode.com/problems/multiply-strings)
42.3%
Med.
[62 .Unique Paths](https://leetcode.com/problems/unique-paths)
65.8%
Med.
[30 .Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words)
33.0%
Hard
[105 .Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal)
66.9%
Med.
[85 .Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle)
53.8%
Hard
[72 .Edit Distance](https://leetcode.com/problems/edit-distance)
58.8%
Med.
[93 .Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses)
53.2%
Med.
[16 .3Sum Closest](https://leetcode.com/problems/3sum-closest)
46.9%
Med.
[120 .Triangle](https://leetcode.com/problems/triangle)
59.4%
Med.
[65 .Valid Number](https://leetcode.com/problems/valid-number)
21.6%
Hard
[96 .Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees)
62.5%
Med.
[80 .Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii)
63.0%
Med.
[114 .Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list)
68.6%
Med.
[81 .Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii)
38.9%
Med.
[99 .Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree)
56.4%
Med.
[116 .Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node)
65.5%
Med.
[90 .Subsets II](https://leetcode.com/problems/subsets-ii)
59.6%
Med.
[47 .Permutations II](https://leetcode.com/problems/permutations-ii)
61.6%
Med.
[63 .Unique Paths II](https://leetcode.com/problems/unique-paths-ii)
43.2%
Med.
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

fs.writeFileSync('apple_data.json', JSON.stringify(results, null, 2));

function processData(data) {
  return data.map(q => {
    return `    { id: ${q.id}, title: '${q.title.replace(/'/g, "\\'")}', difficulty: '${q.difficulty}', acceptance: '${q.acceptance}', bars: ${q.bars}, link: '${q.link}' }`;
  }).join(',\n');
}

const appleStr = `  apple: [\n${processData(results)}\n  ]`;

let dataJs = fs.readFileSync('data.js', 'utf8');

// Update apple problem count in companiesData
dataJs = dataJs.replace(
  /\{ id: 'apple', name: 'Apple', problems: \d+, icon: 'Ap' \}/,
  `{ id: 'apple', name: 'Apple', problems: ${results.length}, icon: 'Ap' }`
);

// Add or update apple in questionsData
if (dataJs.includes('apple: [')) {
    console.log("apple already in questionsData, updating...");
    dataJs = dataJs.replace(/\s*apple:\s*\[[\s\S]*?\n  \](?=\n\}|,)/, `,\n${appleStr}`);
} else {
    dataJs = dataJs.replace(/\n\};\s*$/, `,\n${appleStr}\n};\n`);
}

fs.writeFileSync('data.js', dataJs);
console.log(`Successfully created apple_data.json and updated data.js with ${results.length} Apple questions.`);
