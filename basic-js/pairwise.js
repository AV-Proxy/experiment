function pairwise(arr, arg) {
  return arr.reduce((sum, value1, index1) => {
    arr.slice(index1 + 1).forEach((value2, index2) => {
      if (arr[index1] + arr[index1 + 1 + index2] === arg) {
        arr[index1] = arr[index1 + 1 + index2] = NaN;
        sum += index1 + index1 + 1 + index2;
      }
    });

    return sum;
  }, 0);
}

pairwise([1,4,2,3,0,5], 7);
