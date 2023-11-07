const merge = (nums1, nums2) => {
  let i = 0;
  let j = 0;
  const list = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      list.push(nums1[i]);
      i++;
    } else {
      list.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    list.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    list.push(nums2[j]);
    j++;
  }

  return list;
};

/**
 * @param {number[]} nums
 */
const mergeSort = (nums) => {
  if (nums.length === 1) return nums;

  const midIndex = Math.floor(nums.length / 2);

  // 0 -> midIndex - 1
  const left = mergeSort(nums.slice(0, midIndex));

  // midIndex -> nums.length - 1
  const right = mergeSort(nums.slice(midIndex, nums.length));

  return merge(left, right);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  return mergeSort(nums);
};
