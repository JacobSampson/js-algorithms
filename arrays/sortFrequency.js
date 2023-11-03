(function () {
  let array = [0, 82, 2, 23, 82, 8, 18, 18, 23, 82];

  console.log(array);

  console.log(sortFrequency(array));
})();

function sortFrequency(array) {
  let freq = {};

  for (let i = 0; i < array.length; ++i) {
    if (freq[array[i]] != undefined) {
      freq[array[i]]++;
    } else {
      freq[array[i]] = 1;
    }
  }

  let sorted = [];

  for (let entry in freq) {
    for (let i = 0; i < freq[entry]; ++i) {
      sorted.unshift(entry);
    }
  }

  return sorted;
}
