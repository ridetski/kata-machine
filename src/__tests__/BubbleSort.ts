import bubble_sort from "@code/BubbleSort";

test("bubble-sort", function () {
    const arr = [9, 3, 7, 0, 4, 69, 10, 420, 42, 77, 2, 8, 90, 100]
    //debugger;
    bubble_sort(arr);
    expect(arr).toEqual([0, 2, 3, 4, 7, 8, 9, 10, 42, 69, 77, 90, 100, 420]);
});

