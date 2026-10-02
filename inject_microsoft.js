const fs = require('fs');

const rawText = `
[1 .Two Sum](https://leetcode.com/problems/two-sum)
55.8%
Easy
[3 .Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters)
37.0%
Med.
[5 .Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring)
35.9%
Med.
[4 .Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays)
43.9%
Hard
[70 .Climbing Stairs](https://leetcode.com/problems/climbing-stairs)
53.6%
Easy
[15 .3Sum](https://leetcode.com/problems/3sum)
37.1%
Med.
[49 .Group Anagrams](https://leetcode.com/problems/group-anagrams)
71.0%
Med.
[13 .Roman to Integer](https://leetcode.com/problems/roman-to-integer)
64.9%
Easy
[11 .Container With Most Water](https://leetcode.com/problems/container-with-most-water)
57.8%
Med.
[33 .Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array)
42.9%
Med.
[48 .Rotate Image](https://leetcode.com/problems/rotate-image)
78.0%
Med.
[45 .Jump Game II](https://leetcode.com/problems/jump-game-ii)
41.5%
Med.
[121 .Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock)
55.3%
Easy
[283 .Move Zeroes](https://leetcode.com/problems/move-zeroes)
62.8%
Easy
[162 .Find Peak Element](https://leetcode.com/problems/find-peak-element)
46.5%
Med.
[84 .Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram)
47.5%
Hard
[42 .Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water)
65.2%
Hard
[31 .Next Permutation](https://leetcode.com/problems/next-permutation)
43.1%
Med.
[35 .Search Insert Position](https://leetcode.com/problems/search-insert-position)
49.1%
Easy
[20 .Valid Parentheses](https://leetcode.com/problems/valid-parentheses)
42.4%
Easy
[146 .LRU Cache](https://leetcode.com/problems/lru-cache)
45.3%
Med.
[134 .Gas Station](https://leetcode.com/problems/gas-station)
46.4%
Med.
[560 .Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k)
45.5%
Med.
[209 .Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum)
49.5%
Med.
[88 .Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array)
53.0%
Easy
[485 .Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones)
62.6%
Easy
[2 .Add Two Numbers](https://leetcode.com/problems/add-two-numbers)
46.3%
Med.
[53 .Maximum Subarray](https://leetcode.com/problems/maximum-subarray)
52.1%
Med.
[56 .Merge Intervals](https://leetcode.com/problems/merge-intervals)
49.4%
Med.
[25 .Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group)
63.1%
Hard
[75 .Sort Colors](https://leetcode.com/problems/sort-colors)
67.6%
Med.
[239 .Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum)
47.6%
Hard
[21 .Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists)
66.9%
Easy
[7 .Reverse Integer](https://leetcode.com/problems/reverse-integer)
30.3%
Med.
[9 .Palindrome Number](https://leetcode.com/problems/palindrome-number)
59.3%
Easy
[17 .Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number)
63.9%
Med.
[73 .Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes)
60.8%
Med.
[54 .Spiral Matrix](https://leetcode.com/problems/spiral-matrix)
54.0%
Med.
[128 .Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence)
47.0%
Med.
[74 .Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix)
52.3%
Med.
[51 .N-Queens](https://leetcode.com/problems/n-queens)
72.9%
Hard
[22 .Generate Parentheses](https://leetcode.com/problems/generate-parentheses)
77.2%
Med.
[12 .Integer to Roman](https://leetcode.com/problems/integer-to-roman)
68.7%
Med.
[50 .Pow(x, n)](https://leetcode.com/problems/powx-n)
37.1%
Med.
[34 .Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array)
46.9%
Med.
[103 .Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal)
61.7%
Med.
[200 .Number of Islands](https://leetcode.com/problems/number-of-islands)
62.4%
Med.
[23 .Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists)
56.9%
Hard
[85 .Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle)
53.8%
Hard
[102 .Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal)
70.7%
Med.
[189 .Rotate Array](https://leetcode.com/problems/rotate-array)
43.1%
Med.
[39 .Combination Sum](https://leetcode.com/problems/combination-sum)
74.7%
Med.
[8 .String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi)
19.3%
Med.
[76 .Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring)
45.4%
Hard
[69 .Sqrt(x)](https://leetcode.com/problems/sqrtx)
40.4%
Easy
[40 .Combination Sum II](https://leetcode.com/problems/combination-sum-ii)
57.7%
Med.
[99 .Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree)
56.4%
Med.
[2858 .Minimum Edge Reversals So Every Node Is Reachable](https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable)
55.3%
Hard
[440 .K-th Smallest in Lexicographical Order](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order)
45.9%
Hard
[136 .Single Number](https://leetcode.com/problems/single-number)
76.0%
Easy
[224 .Basic Calculator](https://leetcode.com/problems/basic-calculator)
45.6%
Hard
[206 .Reverse Linked List](https://leetcode.com/problems/reverse-linked-list)
79.3%
Easy
[202 .Happy Number](https://leetcode.com/problems/happy-number)
58.1%
Easy
[37 .Sudoku Solver](https://leetcode.com/problems/sudoku-solver)
64.0%
Hard
[93 .Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses)
53.2%
Med.
[169 .Majority Element](https://leetcode.com/problems/majority-element)
65.8%
Easy
[26 .Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array)
60.4%
Easy
[540 .Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array)
59.2%
Med.
[410 .Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum)
58.2%
Hard
[3362 .Zero Array Transformation III](https://leetcode.com/problems/zero-array-transformation-iii)
55.2%
Med.
[215 .Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array)
68.0%
Med.
[234 .Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list)
55.9%
Easy
[127 .Word Ladder](https://leetcode.com/problems/word-ladder)
42.9%
Hard
[217 .Contains Duplicate](https://leetcode.com/problems/contains-duplicate)
63.3%
Easy
[2571 .Minimum Operations to Reduce an Integer to 0](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0)
57.4%
Med.
[1838 .Frequency of the Most Frequent Element](https://leetcode.com/problems/frequency-of-the-most-frequent-element)
44.1%
Med.
[160 .Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists)
61.2%
Easy
[153 .Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array)
52.7%
Med.
[340 .Longest Substring with At Most K Distinct Characters](https://code.nextleet.com/problem/longest-substring-with-at-most-k-distinct-characters/)
49.5%
Med.
[3445 .Maximum Difference Between Even and Odd Frequency II](https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-ii)
49.2%
Hard
[496 .Next Greater Element I](https://leetcode.com/problems/next-greater-element-i)
74.6%
Easy
[415 .Add Strings](https://leetcode.com/problems/add-strings)
51.9%
Easy
[3442 .Maximum Difference Between Even and Odd Frequency I](https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-i)
61.3%
Easy
[3576 .Transform Array to All Equal Elements](https://leetcode.com/problems/transform-array-to-all-equal-elements)
31.8%
Med.
[78 .Subsets](https://leetcode.com/problems/subsets)
80.9%
Med.
[198 .House Robber](https://leetcode.com/problems/house-robber)
52.3%
Med.
[139 .Word Break](https://leetcode.com/problems/word-break)
48.3%
Med.
[207 .Course Schedule](https://leetcode.com/problems/course-schedule)
49.3%
Med.
[2667 .Create Hello World Function](https://leetcode.com/problems/create-hello-world-function)
82.1%
Easy
[14 .Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix)
45.5%
Easy
[238 .Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self)
67.8%
Med.
[46 .Permutations](https://leetcode.com/problems/permutations)
80.7%
Med.
[155 .Min Stack](https://leetcode.com/problems/min-stack)
56.5%
Med.
[1757 .Recyclable and Low Fat Products](https://leetcode.com/problems/recyclable-and-low-fat-products)
89.2%
Easy
[18 .4Sum](https://leetcode.com/problems/4sum)
38.3%
Med.
[79 .Word Search](https://leetcode.com/problems/word-search)
45.3%
Med.
[72 .Edit Distance](https://leetcode.com/problems/edit-distance)
58.8%
Med.
[27 .Remove Element](https://leetcode.com/problems/remove-element)
60.1%
Easy
[104 .Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree)
77.2%
Easy
[1768 .Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately)
82.2%
Easy
[55 .Jump Game](https://leetcode.com/problems/jump-game)
39.5%
Med.
[349 .Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays)
76.5%
Easy
[297 .Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree)
59.0%
Hard
[28 .Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string)
45.0%
Easy
[875 .Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas)
49.1%
Med.
[2623 .Memoize](https://leetcode.com/problems/memoize)
64.1%
Med.
[98 .Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree)
34.4%
Med.
[10 .Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching)
29.3%
Hard
[64 .Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum)
66.5%
Med.
[348 .Design Tic-Tac-Toe](https://code.nextleet.com/problem/design-tic-tac-toe/)
58.6%
Med.
[383 .Ransom Note](https://leetcode.com/problems/ransom-note)
64.6%
Easy
[455 .Assign Cookies](https://leetcode.com/problems/assign-cookies)
53.9%
Easy
[62 .Unique Paths](https://leetcode.com/problems/unique-paths)
65.8%
Med.
[595 .Big Countries](https://leetcode.com/problems/big-countries)
68.2%
Easy
[901 .Online Stock Span](https://leetcode.com/problems/online-stock-span)
67.5%
Med.
[19 .Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list)
49.0%
Med.
[6 .Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion)
51.7%
Med.
[41 .First Missing Positive](https://leetcode.com/problems/first-missing-positive)
41.1%
Hard
[605 .Can Place Flowers](https://leetcode.com/problems/can-place-flowers)
28.9%
Easy
[739 .Daily Temperatures](https://leetcode.com/problems/daily-temperatures)
67.4%
Med.
[2235 .Add Two Integers](https://leetcode.com/problems/add-two-integers)
88.1%
Easy
[219 .Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii)
49.1%
Easy
[240 .Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii)
55.3%
Med.
[392 .Is Subsequence](https://leetcode.com/problems/is-subsequence)
48.4%
Easy
[29 .Divide Two Integers](https://leetcode.com/problems/divide-two-integers)
18.4%
Med.
[36 .Valid Sudoku](https://leetcode.com/problems/valid-sudoku)
62.3%
Med.
[94 .Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal)
78.6%
Easy
[416 .Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum)
48.5%
Med.
[334 .Increasing Triplet Subsequence](https://leetcode.com/problems/increasing-triplet-subsequence)
39.1%
Med.
[175 .Combine Two Tables](https://leetcode.com/problems/combine-two-tables)
78.1%
Easy
[225 .Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues)
67.4%
Easy
[1863 .Sum of All Subset XOR Totals](https://leetcode.com/problems/sum-of-all-subset-xor-totals)
90.1%
Easy
[1834 .Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu)
46.5%
Med.
[2874 .Maximum Value of an Ordered Triplet II](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii)
56.7%
Med.
[645 .Set Mismatch](https://leetcode.com/problems/set-mismatch)
45.0%
Easy
[235 .Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree)
68.4%
Med.
[151 .Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string)
52.1%
Med.
[43 .Multiply Strings](https://leetcode.com/problems/multiply-strings)
42.3%
Med.
[135 .Candy](https://leetcode.com/problems/candy)
46.8%
Hard
[994 .Rotting Oranges](https://leetcode.com/problems/rotting-oranges)
56.7%
Med.
[210 .Course Schedule II](https://leetcode.com/problems/course-schedule-ii)
53.5%
Med.
[253 .Meeting Rooms II](https://code.nextleet.com/problem/meeting-rooms-ii/)
52.2%
Med.
[123 .Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii)
51.2%
Hard
[242 .Valid Anagram](https://leetcode.com/problems/valid-anagram)
66.7%
Easy
[205 .Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings)
46.9%
Easy
[236 .Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree)
66.9%
Med.
[24 .Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs)
67.3%
Med.
[71 .Simplify Path](https://leetcode.com/problems/simplify-path)
47.9%
Med.
[92 .Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii)
49.6%
Med.
[32 .Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses)
36.4%
Hard
[271 .Encode and Decode Strings](https://code.nextleet.com/problem/encode-and-decode-strings/)
49.7%
Med.
[295 .Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream)
53.3%
Hard
[124 .Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum)
41.3%
Hard
[1004 .Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii)
66.0%
Med.
[138 .Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer)
60.6%
Med.
[44 .Wildcard Matching](https://leetcode.com/problems/wildcard-matching)
30.0%
Hard
[150 .Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation)
55.0%
Med.
[141 .Linked List Cycle](https://leetcode.com/problems/linked-list-cycle)
52.6%
Easy
[66 .Plus One](https://leetcode.com/problems/plus-one)
47.6%
Easy
[91 .Decode Ways](https://leetcode.com/problems/decode-ways)
36.6%
Med.
[67 .Add Binary](https://leetcode.com/problems/add-binary)
55.7%
Easy
[68 .Text Justification](https://leetcode.com/problems/text-justification)
48.2%
Hard
[81 .Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii)
38.9%
Med.
[80 .Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii)
63.0%
Med.
[61 .Rotate List](https://leetcode.com/problems/rotate-list)
40.0%
Med.
[100 .Same Tree](https://leetcode.com/problems/same-tree)
65.2%
Easy
[82 .Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii)
49.9%
Med.
[83 .Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list)
54.9%
Easy
[90 .Subsets II](https://leetcode.com/problems/subsets-ii)
59.6%
Med.
[57 .Insert Interval](https://leetcode.com/problems/insert-interval)
43.5%
Med.
[58 .Length of Last Word](https://leetcode.com/problems/length-of-last-word)
56.4%
Easy
[167 .Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted)
63.4%
Med.
[59 .Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii)
73.5%
Med.
[1148 .Article Views I](https://leetcode.com/problems/article-views-i)
77.1%
Easy
[122 .Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii)
69.6%
Med.
[268 .Missing Number](https://leetcode.com/problems/missing-number)
70.1%
Easy
[105 .Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal)
66.9%
Med.
[77 .Combinations](https://leetcode.com/problems/combinations)
73.0%
Med.
[97 .Interleaving String](https://leetcode.com/problems/interleaving-string)
42.2%
Med.
[101 .Symmetric Tree](https://leetcode.com/problems/symmetric-tree)
59.3%
Easy
[47 .Permutations II](https://leetcode.com/problems/permutations-ii)
61.6%
Med.
[38 .Count and Say](https://leetcode.com/problems/count-and-say)
60.6%
Med.
[108 .Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree)
74.1%
Easy
[106 .Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal)
66.2%
Med.
[86 .Partition List](https://leetcode.com/problems/partition-list)
59.0%
Med.
[63 .Unique Paths II](https://leetcode.com/problems/unique-paths-ii)
43.2%
Med.
[30 .Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words)
33.0%
Hard
[109 .Convert Sorted List to Binary Search Tree](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree)
64.5%
Med.
[16 .3Sum Closest](https://leetcode.com/problems/3sum-closest)
46.9%
Med.
[52 .N-Queens II](https://leetcode.com/problems/n-queens-ii)
76.8%
Hard
[96 .Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees)
62.5%
Med.
[95 .Unique Binary Search Trees II](https://leetcode.com/problems/unique-binary-search-trees-ii)
60.5%
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

fs.writeFileSync('microsoft_data.json', JSON.stringify(results, null, 2));

function processData(data) {
  return data.map(q => {
    return `    { id: ${q.id}, title: '${q.title.replace(/'/g, "\\'")}', difficulty: '${q.difficulty}', acceptance: '${q.acceptance}', bars: ${q.bars}, link: '${q.link}' }`;
  }).join(',\n');
}

const microsoftStr = `  microsoft: [\n${processData(results)}\n  ]`;

let dataJs = fs.readFileSync('data.js', 'utf8');

// Update microsoft problem count in companiesData
dataJs = dataJs.replace(
  /\{ id: 'microsoft', name: 'Microsoft', problems: \d+, icon: 'MS' \}/,
  `{ id: 'microsoft', name: 'Microsoft', problems: ${results.length}, icon: 'MS' }`
);

// Add or update microsoft in questionsData
if (dataJs.includes('microsoft: [')) {
    console.log("microsoft already in questionsData, updating...");
    dataJs = dataJs.replace(/\s*microsoft:\s*\[[\s\S]*?\n  \](?=\n\}|,)/, `,\n${microsoftStr}`);
} else {
    dataJs = dataJs.replace(/\n\};\s*$/, `,\n${microsoftStr}\n};\n`);
}

fs.writeFileSync('data.js', dataJs);
console.log(`Successfully created microsoft_data.json and updated data.js with ${results.length} Microsoft questions.`);
