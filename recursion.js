// recursion

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

function longest(words) {
  if (words.length === 0) return 0;
  return Math.max(words[0].length, longest(words.slice(1)));
}

function everyOther(str) {
  if (str.length === 0) return "";
  return str[0] + everyOther(str.slice(2));
}

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

function findIndex(arr, val, index = 0) {
  if (index >= arr.length) return -1;
  if (arr[index] === val) return index;
  return findIndex(arr, val, index + 1);
}

function revString(str) {
  if (str.length === 0) return "";
  return str[str.length - 1] + revString(str.slice(0, -1));
}

function gatherStrings(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      result.push(obj[key]);
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      result = result.concat(gatherStrings(obj[key]));
    }
  }
  return result;
}

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === val) return mid;
  if (arr[mid] > val) return binarySearch(arr, val, left, mid - 1);
  return binarySearch(arr, val, mid + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
