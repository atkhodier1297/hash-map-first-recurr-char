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