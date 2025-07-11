export function areArraysEqual(
  arr1: Array<string | number | boolean>,
  arr2: Array<string | number | boolean>,
) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
