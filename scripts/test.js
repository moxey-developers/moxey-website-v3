const arr = [1, 2, 3, 4];
function solution(arr) {
  return arr.reduce((acc, curr) => acc + curr);
}
console.log("Sum: ", solution(arr));

const arr2 = [10, 5, 8, 20];
function solution2(arr) {
  return arr.reduce((acc, curr) => {
    return (acc = Math.max(acc, curr));
  });
}
console.log("Find Maximum", solution2(arr2));

const arr3 = [[1, 2], [3, 4], [5]];
function solution3(arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(...curr);
  });
}
console.log("Flatten Single Level Array", solution3(arr3));

const arr4 = ["apple", "banana", "apple", "orange", "banana", "apple"];
function solution4(arr) {
  return arr.reduce((acc, curr) => {
    return acc.set(curr, (acc.get(curr) || 0) + 1);
  }, new Map());
}
console.log("Count occurrences", solution4(arr4));

const users = [
  { name: "A", age: 20 },
  { name: "B", age: 21 },
  { name: "C", age: 20 },
];
function solution5(arr) {
  return arr.reduce((acc, curr) => {
    const key = curr.age;

    if (acc.has(key)) {
      acc.get(key).push(curr);
    } else {
      acc.set(key, [curr]);
    }

    return acc;
  }, new Map());
}

console.log("Group by property", solution5(users));

const items = [
  { id: "a", value: 10 },
  { id: "b", value: 20 },
];
function solution6(arr) {
  return arr.reduce((acc, curr) => {
    const key = curr.id;
    const value = curr.value;

    acc[key] = value;

    return acc;
  }, {});
}
console.log("Convert array to object", solution6(items)); // → { a: 10, b: 20 }

const arr5 = [1, 2, 2, 3, 4, 3];
function solution7(arr) {
  return arr.reduce((acc, curr) => {
    return acc.add(curr);
  }, new Set());
}
console.log("Remove duplicates", solution7(arr5));

const arr8 = [1, 2, 3, 4, 6];
function solution8(arr) {
  return arr.reduce((acc, curr) => {
    if (curr % 2 === 0) {
      acc += curr;
    }

    return acc;
  }, 0);
}
console.log("Sum only even numbers", solution8(arr8));

const arr9 = [1, 2, 3, 4];
function solution9(arr) {
  return arr.reduce((acc, curr) => {
    if (curr % 2 === 0) {
      acc.push(curr * 2);
    }

    return acc;
  }, []);
}
console.log("Double only even numbers", solution9(arr9));

const arr10 = [1, 3, 2, 3, 4, 3, 2];
function solution10(arr) {
  const freq = arr.reduce((acc, curr) => {
    return acc.set(curr, (acc.get(curr) || 0) + 1);
  }, new Map());

  let max = Number.MIN_SAFE_INTEGER;

  for (let [_, value] of freq) {
    max = Math.max(max, value);
  }

  return max;
}
console.log("Find the most frequent element", solution10(arr10));

const arr11 = [1, 2, 3, 4, 5];
function solution11(arr) {
  return arr.reduce(
    (acc, curr) => {
      curr % 2 === 0 ? acc["even"].push(curr) : acc["odd"].push(curr);
      return acc;
    },
    { even: [], odd: [] },
  );
}
console.log("Separate even and odd", solution11(arr11)); // { even: [2, 4], odd: [1, 3, 5] }
