const fs = require('fs');

const rawText = `
[1380 .Lucky Numbers in a Matrix](https://leetcode.com/problems/lucky-numbers-in-a-matrix)
79.9%
Easy
[198 .House Robber](https://leetcode.com/problems/house-robber)
52.3%
Med.
[5 .Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring)
35.9%
Med.
[3508 .Implement Router](https://leetcode.com/problems/implement-router)
21.9%
Med.
[48 .Rotate Image](https://leetcode.com/problems/rotate-image)
78.0%
Med.
[412 .Fizz Buzz](https://leetcode.com/problems/fizz-buzz)
74.4%
Easy
[3 .Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters)
37.0%
Med.
[141 .Linked List Cycle](https://leetcode.com/problems/linked-list-cycle)
52.6%
Easy
[54 .Spiral Matrix](https://leetcode.com/problems/spiral-matrix)
54.0%
Med.
[146 .LRU Cache](https://leetcode.com/problems/lru-cache)
45.3%
Med.
[149 .Max Points on a Line](https://leetcode.com/problems/max-points-on-a-line)
29.0%
Hard
[2016 .Maximum Difference Between Increasing Elements](https://leetcode.com/problems/maximum-difference-between-increasing-elements)
66.1%
Easy
[56 .Merge Intervals](https://leetcode.com/problems/merge-intervals)
49.4%
Med.
[88 .Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array)
53.0%
Easy
[17 .Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number)
63.9%
Med.
[486 .Predict the Winner](https://leetcode.com/problems/predict-the-winner)
55.8%
Med.
[253 .Meeting Rooms II](https://code.nextleet.com/problem/meeting-rooms-ii/)
52.2%
Med.
[567 .Permutation in String](https://leetcode.com/problems/permutation-in-string)
47.3%
Med.
[26 .Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array)
60.4%
Easy
[909 .Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders)
47.8%
Med.
[877 .Stone Game](https://leetcode.com/problems/stone-game)
71.6%
Med.
[2986 .Find Third Transaction](https://code.nextleet.com/problem/find-third-transaction/)
53.8%
Med.
[53 .Maximum Subarray](https://leetcode.com/problems/maximum-subarray)
52.1%
Med.
[212 .Word Search II](https://leetcode.com/problems/word-search-ii)
37.4%
Hard
[202 .Happy Number](https://leetcode.com/problems/happy-number)
58.1%
Easy
[741 .Cherry Pickup](https://leetcode.com/problems/cherry-pickup)
37.9%
Hard
[1 .Two Sum](https://leetcode.com/problems/two-sum)
55.8%
Easy
[20 .Valid Parentheses](https://leetcode.com/problems/valid-parentheses)
42.4%
Easy
[42 .Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water)
65.2%
Hard
[2047 .Number of Valid Words in a Sentence](https://leetcode.com/problems/number-of-valid-words-in-a-sentence)
30.0%
Easy
[121 .Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock)
55.3%
Easy
[394 .Decode String](https://leetcode.com/problems/decode-string)
61.2%
Med.
[546 .Remove Boxes](https://leetcode.com/problems/remove-boxes)
48.3%
Hard
[200 .Number of Islands](https://leetcode.com/problems/number-of-islands)
62.4%
Med.
[283 .Move Zeroes](https://leetcode.com/problems/move-zeroes)
62.8%
Easy
[664 .Strange Printer](https://leetcode.com/problems/strange-printer)
60.8%
Hard
[74 .Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix)
52.3%
Med.
[206 .Reverse Linked List](https://leetcode.com/problems/reverse-linked-list)
79.3%
Easy
[809 .Expressive Words](https://leetcode.com/problems/expressive-words)
46.4%
Med.
[136 .Single Number](https://leetcode.com/problems/single-number)
76.0%
Easy
[134 .Gas Station](https://leetcode.com/problems/gas-station)
46.4%
Med.
[2 .Add Two Numbers](https://leetcode.com/problems/add-two-numbers)
46.3%
Med.
[79 .Word Search](https://leetcode.com/problems/word-search)
45.3%
Med.
[128 .Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence)
47.0%
Med.
[15 .3Sum](https://leetcode.com/problems/3sum)
37.1%
Med.
[2448 .Minimum Cost to Make Array Equal](https://leetcode.com/problems/minimum-cost-to-make-array-equal)
46.3%
Hard
[1784 .Check if Binary String Has at Most One Segment of Ones](https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones)
39.1%
Easy
[2081 .Sum of k-Mirror Numbers](https://leetcode.com/problems/sum-of-k-mirror-numbers)
63.9%
Hard
[3047 .Find the Largest Area of Square Inside Two Rectangles](https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles)
45.1%
Med.
[49 .Group Anagrams](https://leetcode.com/problems/group-anagrams)
71.0%
Med.
[125 .Valid Palindrome](https://leetcode.com/problems/valid-palindrome)
51.0%
Easy
[1606 .Find Servers That Handled Most Number of Requests](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests)
44.1%
Hard
[2067 .Number of Equal Count Substrings](https://code.nextleet.com/problem/number-of-equal-count-substrings/)
44.6%
Med.
[347 .Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements)
64.6%
Med.
[468 .Validate IP Address](https://leetcode.com/problems/validate-ip-address)
27.8%
Med.
[23 .Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists)
56.9%
Hard
[380 .Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1)
55.0%
Med.
[55 .Jump Game](https://leetcode.com/problems/jump-game)
39.5%
Med.
[151 .Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string)
52.1%
Med.
[153 .Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array)
52.7%
Med.
[62 .Unique Paths](https://leetcode.com/problems/unique-paths)
65.8%
Med.
[93 .Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses)
53.2%
Med.
[2719 .Count of Integers](https://leetcode.com/problems/count-of-integers)
37.1%
Hard
[560 .Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k)
45.5%
Med.
[1464 .Maximum Product of Two Elements in an Array](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array)
83.2%
Easy
[155 .Min Stack](https://leetcode.com/problems/min-stack)
56.5%
Med.
[516 .Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence)
64.2%
Med.
[63 .Unique Paths II](https://leetcode.com/problems/unique-paths-ii)
43.2%
Med.
[191 .Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits)
74.6%
Easy
[238 .Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self)
67.8%
Med.
[402 .Remove K Digits](https://leetcode.com/problems/remove-k-digits)
35.0%
Med.
[526 .Beautiful Arrangement](https://leetcode.com/problems/beautiful-arrangement)
64.5%
Med.
[1472 .Design Browser History](https://leetcode.com/problems/design-browser-history)
77.8%
Med.
[647 .Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings)
71.7%
Med.
[70 .Climbing Stairs](https://leetcode.com/problems/climbing-stairs)
53.6%
Easy
[118 .Pascal's Triangle](https://leetcode.com/problems/pascals-triangle)
77.1%
Easy
[268 .Missing Number](https://leetcode.com/problems/missing-number)
70.1%
Easy
[653 .Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst)
62.3%
Easy
[46 .Permutations](https://leetcode.com/problems/permutations)
80.7%
Med.
[230 .Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst)
75.4%
Med.
[165 .Compare Version Numbers](https://leetcode.com/problems/compare-version-numbers)
42.4%
Med.
[605 .Can Place Flowers](https://leetcode.com/problems/can-place-flowers)
28.9%
Easy
[84 .Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram)
47.5%
Hard
[197 .Rising Temperature](https://leetcode.com/problems/rising-temperature)
50.2%
Easy
[72 .Edit Distance](https://leetcode.com/problems/edit-distance)
58.8%
Med.
[239 .Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum)
47.6%
Hard
[6 .Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion)
51.7%
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

fs.writeFileSync('cisco_data.json', JSON.stringify(results, null, 2));

function processData(data) {
  return data.map(q => {
    return `    { id: ${q.id}, title: '${q.title.replace(/'/g, "\\'")}', difficulty: '${q.difficulty}', acceptance: '${q.acceptance}', bars: ${q.bars}, link: '${q.link}' }`;
  }).join(',\n');
}

const ciscoStr = `  cisco: [\n${processData(results)}\n  ]`;

let dataJs = fs.readFileSync('data.js', 'utf8');

// Update or add cisco in companiesData
if (dataJs.includes("id: 'cisco'")) {
    dataJs = dataJs.replace(
      /\{ id: 'cisco', name: 'Cisco', problems: \d+, icon: 'Ci' \}/,
      `{ id: 'cisco', name: 'Cisco', problems: ${results.length}, icon: 'Ci' }`
    );
} else {
    // Add Cisco to companiesData right after deshaw
    dataJs = dataJs.replace(
      /\{ id: 'deshaw', name: 'DE Shaw', problems: \d+, icon: 'DE' \}/,
      `{ id: 'deshaw', name: 'DE Shaw', problems: 104, icon: 'DE' },\n  { id: 'cisco', name: 'Cisco', problems: ${results.length}, icon: 'Ci' }`
    );
}

// Add or update cisco in questionsData
if (dataJs.includes('cisco: [')) {
    console.log("cisco already in questionsData, updating...");
    dataJs = dataJs.replace(/\s*cisco:\s*\[[\s\S]*?\n  \](?=\n\}|,)/, `,\n${ciscoStr}`);
} else {
    dataJs = dataJs.replace(/\n\};\s*$/, `,\n${ciscoStr}\n};\n`);
}

fs.writeFileSync('data.js', dataJs);
console.log(`Successfully created cisco_data.json and updated data.js with ${results.length} Cisco questions.`);
