
function isUnique(arr) {
    const seenValues = {}
    for (let i = 0; i < arr.length; i++) {
      if (seenValues[arr[i]]) {
        return false;
      } else {
        seenValues[arr[i]] = true
      }
    }
    return true;
  }
  console.log(isUnique([1,2,3]))