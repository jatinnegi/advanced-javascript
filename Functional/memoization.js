function addTo80(n) {
  return n + 80;
}

function memoizedAddTo80() {
  let cache = {}; // No need to pollute the global scope

  return function (n) {
    if (n in cache) return cache[n];

    let value = addTo80(n);
    cache[n] = value; // Save to cache
    return value;
  };
}

const memoized = memoizedAddTo80();

console.log(memoized(5));
console.log(memoized(5));
