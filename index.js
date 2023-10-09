


// First recurring char using Hash Map
// Nested For Loop Solution
// O(n^2)
function firstRecurringChar(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; i < input.length; j++) {
      // i + 1 forces the nested loop to move on to the next index
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}
firstRecurringChar([1, 2, 3, 4, 5, 6, 7, 7, 8, 9]);

function firstRecurringCharHash(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
}
result = firstRecurringCharHash([1, 2, 3, 4, 5, 6, 7, 7, 8, 9]);
console.log(result)

// What is a hash map in JavaScript?

// A hash map in JavaScript is a data structure that allows you to store and retrieve key-value pairs efficiently. It uses a hashing function to map keys to specific locations in memory, making data retrieval fast.
// How does hashing work in a hash map?

// Hashing involves applying a hash function to a key to generate a unique hash code. This hash code is used to determine the index or location where the key-value pair is stored in the hash map.
// What is the time complexity of common hash map operations?

// Common hash map operations have an average time complexity of O(1) for insertion, deletion, and lookup. However, in the case of collisions, this complexity can degrade to O(n) in the worst scenario.
// How do you handle collisions in a hash map?

// Collisions are handled by using techniques like chaining (where multiple values at the same index are stored in a linked list) or open addressing (where values are placed in the next available slot). Chaining is a common method in JavaScript hash maps.
// What is the load factor in a hash map?

// The load factor is the ratio of the number of stored key-value pairs to the total number of available slots in the hash map. It's used to measure how "full" the hash map is and can affect its performance. A high load factor may lead to more collisions.
// When would you choose a hash map over an array or other data structures?

// Hash maps are preferable when you need fast key-based data retrieval, especially when the number of keys is large and unpredictable. Arrays are better for when keys are integer indices, and you need ordered data.
// What are the potential drawbacks of using hash maps in JavaScript?

// Some potential drawbacks include increased memory usage due to potential collisions, lack of guaranteed key order, and the need for a good hash function to avoid performance issues.
// Implement a hash map in JavaScript.

// Implementing a full hash map requires several lines of code. You can create an object and use functions to insert, retrieve, and delete key-value pairs, handling collisions as needed.
// Explain how you would iterate over the keys or values in a hash map.

// You can iterate over keys or values using a for...in loop or Object.keys(), Object.values(), or Object.entries() methods provided by JavaScript to access the keys and values in a hash map.
// What are hash collisions, and how can you minimize them?

// Hash collisions occur when two different keys produce the same hash code. To minimize them, choose a good hash function, maintain a low load factor, and use collision resolution techniques like chaining.
// What is a hash function, and why is it important in hash maps?

// A hash function is a function that takes a key as input and produces a unique hash code. It's crucial in hash maps because it determines the mapping of keys to specific locations, affecting the performance and efficiency of the data structure.
// Compare and contrast the performance of hash maps and arrays for various operations.

// Hash maps excel at key-based retrieval with O(1) average complexity, while arrays are better for ordered integer-indexed access. Hash maps offer flexibility but may consume more memory due to potential collisions. Arrays provide sequential access with O(1) complexity for integer indices.

function groupAnagrams(strs) {
  const anagramsMap = new Map();

  for (const str of strs) {
      // Sort the characters in the string and use it as a key.
      const sortedStr = str.split('').sort().join('');

      // If the key exists in the map, push the current string to its corresponding group.
      if (anagramsMap.has(sortedStr)) {
          anagramsMap.get(sortedStr).push(str);
      } else {
          // If the key doesn't exist, create a new group with the current string.
          anagramsMap.set(sortedStr, [str]);
      }
  }

  // Convert the values (groups of anagrams) from the map into an array and return it.
  return Array.from(anagramsMap.values());
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);
console.log(result);
