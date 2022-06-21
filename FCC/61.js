function sum(arr, n) {
    if (n <= 0) {
      return n;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }