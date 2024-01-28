function qs(arr: number[], lo: number, hi: number): void {
  //base case
  if (lo >= hi) {
    return;
  }
  //divide and conquer
  const pivotIndex = partition(arr, lo, hi)
  //recurse
  qs(arr, lo, pivotIndex - 1);
  qs(arr, pivotIndex + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];

  let index = lo - 1;
  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      index++;
      //swap
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }
  index++;
  //swap pivot
  [arr[hi], arr[index]] = [arr[index], pivot];

  return index;
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}