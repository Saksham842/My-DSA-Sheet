const fs = require('fs');

const rawText = `
[42 .Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water)
65.2%
Hard
[146 .LRU Cache](https://leetcode.com/problems/lru-cache)
45.3%
Med.
[3 .Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters)
37.0%
Med.
[56 .Merge Intervals](https://leetcode.com/problems/merge-intervals)
49.4%
Med.
[200 .Number of Islands](https://leetcode.com/problems/number-of-islands)
62.4%
Med.
[22 .Generate Parentheses](https://leetcode.com/problems/generate-parentheses)
77.2%
Med.
[128 .Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence)
47.0%
Med.
[20 .Valid Parentheses](https://leetcode.com/problems/valid-parentheses)
42.4%
Easy
[1 .Two Sum](https://leetcode.com/problems/two-sum)
55.8%
Easy
[33 .Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array)
42.9%
Med.
[139 .Word Break](https://leetcode.com/problems/word-break)
48.3%
Med.
[498 .Diagonal Traverse](https://leetcode.com/problems/diagonal-traverse)
63.2%
Med.
[12 .Integer to Roman](https://leetcode.com/problems/integer-to-roman)
68.7%
Med.
[106 .Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal)
66.2%
Med.
[1329 .Sort the Matrix Diagonally](https://leetcode.com/problems/sort-the-matrix-diagonally)
83.0%
Med.
[73 .Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes)
60.8%
Med.
[994 .Rotting Oranges](https://leetcode.com/problems/rotting-oranges)
56.7%
Med.
[543 .Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree)
63.6%
Easy
[5 .Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring)
35.9%
Med.
[322 .Coin Change](https://leetcode.com/problems/coin-change)
46.6%
Med.
[103 .Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal)
61.7%
Med.
[39 .Combination Sum](https://leetcode.com/problems/combination-sum)
74.7%
Med.
[79 .Word Search](https://leetcode.com/problems/word-search)
45.3%
Med.
[15 .3Sum](https://leetcode.com/problems/3sum)
37.1%
Med.
[50 .Pow(x, n)](https://leetcode.com/problems/powx-n)
37.1%
Med.
[341 .Flatten Nested List Iterator](https://leetcode.com/problems/flatten-nested-list-iterator)
65.2%
Med.
[4 .Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays)
43.9%
Hard
[362 .Design Hit Counter](https://code.nextleet.com/problem/design-hit-counter/)
69.2%
Med.
[647 .Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings)
71.7%
Med.
[1209 .Remove All Adjacent Duplicates in String II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii)
59.6%
Med.
[490 .The Maze](https://code.nextleet.com/problem/the-maze/)
59.5%
Med.
[716 .Max Stack](https://code.nextleet.com/problem/max-stack/)
45.5%
Hard
[121 .Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock)
55.3%
Easy
[49 .Group Anagrams](https://leetcode.com/problems/group-anagrams)
71.0%
Med.
[54 .Spiral Matrix](https://leetcode.com/problems/spiral-matrix)
54.0%
Med.
[75 .Sort Colors](https://leetcode.com/problems/sort-colors)
67.6%
Med.
[215 .Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array)
68.0%
Med.
[36 .Valid Sudoku](https://leetcode.com/problems/valid-sudoku)
62.3%
Med.
[283 .Move Zeroes](https://leetcode.com/problems/move-zeroes)
62.8%
Easy
[189 .Rotate Array](https://leetcode.com/problems/rotate-array)
43.1%
Med.
[697 .Degree of an Array](https://leetcode.com/problems/degree-of-an-array)
57.4%
Easy
[863 .All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree)
66.5%
Med.
[347 .Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements)
64.6%
Med.
[138 .Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer)
60.6%
Med.
[67 .Add Binary](https://leetcode.com/problems/add-binary)
55.7%
Easy
[25 .Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group)
63.1%
Hard
[41 .First Missing Positive](https://leetcode.com/problems/first-missing-positive)
41.1%
Hard
[739 .Daily Temperatures](https://leetcode.com/problems/daily-temperatures)
67.4%
Med.
[460 .LFU Cache](https://leetcode.com/problems/lfu-cache)
46.7%
Hard
[198 .House Robber](https://leetcode.com/problems/house-robber)
52.3%
Med.
[23 .Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists)
56.9%
Hard
[977 .Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array)
73.2%
Easy
[53 .Maximum Subarray](https://leetcode.com/problems/maximum-subarray)
52.1%
Med.
[74 .Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix)
52.3%
Med.
[210 .Course Schedule II](https://leetcode.com/problems/course-schedule-ii)
53.5%
Med.
[14 .Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix)
45.5%
Easy
[841 .Keys and Rooms](https://leetcode.com/problems/keys-and-rooms)
74.7%
Med.
[76 .Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring)
45.4%
Hard
[155 .Min Stack](https://leetcode.com/problems/min-stack)
56.5%
Med.
[207 .Course Schedule](https://leetcode.com/problems/course-schedule)
49.3%
Med.
[2625 .Flatten Deeply Nested Array](https://leetcode.com/problems/flatten-deeply-nested-array)
64.5%
Med.
[1004 .Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii)
66.0%
Med.
[44 .Wildcard Matching](https://leetcode.com/problems/wildcard-matching)
30.0%
Hard
[875 .Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas)
49.1%
Med.
[11 .Container With Most Water](https://leetcode.com/problems/container-with-most-water)
57.8%
Med.
[560 .Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k)
45.5%
Med.
[97 .Interleaving String](https://leetcode.com/problems/interleaving-string)
42.2%
Med.
[122 .Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii)
69.6%
Med.
[45 .Jump Game II](https://leetcode.com/problems/jump-game-ii)
41.5%
Med.
[2291 .Maximum Profit From Trading Stocks](https://code.nextleet.com/problem/maximum-profit-from-trading-stocks/)
46.6%
Med.
[416 .Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum)
48.5%
Med.
[21 .Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists)
66.9%
Easy
[48 .Rotate Image](https://leetcode.com/problems/rotate-image)
78.0%
Med.
[394 .Decode String](https://leetcode.com/problems/decode-string)
61.2%
Med.
[881 .Boats to Save People](https://leetcode.com/problems/boats-to-save-people)
60.4%
Med.
[279 .Perfect Squares](https://leetcode.com/problems/perfect-squares)
55.7%
Med.
[124 .Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum)
41.3%
Hard
[767 .Reorganize String](https://leetcode.com/problems/reorganize-string)
56.2%
Med.
[545 .Boundary of Binary Tree](https://code.nextleet.com/problem/boundary-of-binary-tree/)
47.2%
Med.
[176 .Second Highest Salary](https://leetcode.com/problems/second-highest-salary)
43.9%
Med.
[904 .Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets)
46.5%
Med.
[2 .Add Two Numbers](https://leetcode.com/problems/add-two-numbers)
46.3%
Med.
[680 .Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii)
43.1%
Easy
[557 .Reverse Words in a String III](https://leetcode.com/problems/reverse-words-in-a-string-iii)
83.7%
Easy
[113 .Path Sum II](https://leetcode.com/problems/path-sum-ii)
60.5%
Med.
[9 .Palindrome Number](https://leetcode.com/problems/palindrome-number)
59.3%
Easy
[84 .Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram)
47.5%
Hard
[88 .Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array)
53.0%
Easy
[131 .Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning)
72.2%
Med.
[151 .Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string)
52.1%
Med.
[221 .Maximal Square](https://leetcode.com/problems/maximal-square)
48.8%
Med.
[242 .Valid Anagram](https://leetcode.com/problems/valid-anagram)
66.7%
Easy
[409 .Longest Palindrome](https://leetcode.com/problems/longest-palindrome)
55.6%
Easy
[2472 .Maximum Number of Non-overlapping Palindrome Substrings](https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings)
41.6%
Hard
[921 .Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid)
74.7%
Med.
[117 .Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii)
55.6%
Med.
[116 .Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node)
65.5%
Med.
[298 .Binary Tree Longest Consecutive Sequence](https://code.nextleet.com/problem/binary-tree-longest-consecutive-sequence/)
54.1%
Med.
[204 .Count Primes](https://leetcode.com/problems/count-primes)
34.8%
Med.
[238 .Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self)
67.8%
Med.
[141 .Linked List Cycle](https://leetcode.com/problems/linked-list-cycle)
52.6%
Easy
[1052 .Grumpy Bookstore Owner](https://leetcode.com/problems/grumpy-bookstore-owner)
64.0%
Med.
[1143 .Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence)
58.3%
Med.
[2461 .Maximum Sum of Distinct Subarrays With Length K](https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k)
42.6%
Med.
[1248 .Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays)
73.3%
Med.
[40 .Combination Sum II](https://leetcode.com/problems/combination-sum-ii)
57.7%
Med.
[415 .Add Strings](https://leetcode.com/problems/add-strings)
51.9%
Easy
[2390 .Removing Stars From a String](https://leetcode.com/problems/removing-stars-from-a-string)
78.0%
Med.
[1235 .Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling)
54.4%
Hard
[1768 .Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately)
82.2%
Easy
[1636 .Sort Array by Increasing Frequency](https://leetcode.com/problems/sort-array-by-increasing-frequency)
80.3%
Easy
[2406 .Divide Intervals Into Minimum Number of Groups](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups)
63.7%
Med.
[876 .Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list)
80.6%
Easy
[2071 .Maximum Number of Tasks You Can Assign](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign)
50.6%
Hard
[2541 .Minimum Operations to Make Array Equal II](https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii)
32.5%
Med.
[2449 .Minimum Number of Operations to Make Arrays Similar](https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar)
60.5%
Hard
[2179 .Count Good Triplets in an Array](https://leetcode.com/problems/count-good-triplets-in-an-array)
66.0%
Hard
[1977 .Number of Ways to Separate Numbers](https://leetcode.com/problems/number-of-ways-to-separate-numbers)
21.0%
Hard
[2072 .The Winner University](https://code.nextleet.com/problem/the-winner-university/)
75.3%
Easy
[199 .Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view)
67.1%
Med.
[387 .First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string)
63.7%
Easy
[91 .Decode Ways](https://leetcode.com/problems/decode-ways)
36.6%
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

fs.writeFileSync('walmart_data.json', JSON.stringify(results, null, 2));

function processData(data) {
  return data.map(q => {
    return `    { id: ${q.id}, title: '${q.title.replace(/'/g, "\\'")}', difficulty: '${q.difficulty}', acceptance: '${q.acceptance}', bars: ${q.bars}, link: '${q.link}' }`;
  }).join(',\n');
}

const walmartStr = `  walmart: [\n${processData(results)}\n  ]`;

let dataJs = fs.readFileSync('data.js', 'utf8');

// Update walmart problem count in companiesData
dataJs = dataJs.replace(
  /\{ id: 'walmart', name: 'Walmart', problems: \d+, icon: 'W' \}/,
  `{ id: 'walmart', name: 'Walmart', problems: ${results.length}, icon: 'W' }`
);

// Add or update walmart in questionsData
if (dataJs.includes('walmart: [')) {
    console.log("walmart already in questionsData, updating...");
    dataJs = dataJs.replace(/\s*walmart:\s*\[[\s\S]*?\n  \](?=\n\}|,)/, `,\n${walmartStr}`);
} else {
    dataJs = dataJs.replace(/\n\};\s*$/, `,\n${walmartStr}\n};\n`);
}

fs.writeFileSync('data.js', dataJs);
console.log(`Successfully created walmart_data.json and updated data.js with ${results.length} Walmart questions.`);
