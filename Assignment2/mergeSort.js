function iterativeMergeSort(arr) {
    const n = arr.length;
    let width = 1;
    const aux = new Array(n);

    const merge = (arr, aux, left, mid, right) => {
        let i = left;
        let j = mid;
        let k = left;

        while (i < mid && j < right) {
            if (arr[i] <= arr[j]) {
                aux[k++] = arr[i++];
            } else {
                aux[k++] = arr[j++];
            }
        }

        while (i < mid) {
            aux[k++] = arr[i++];
        }

        while (j < right) {
            aux[k++] = arr[j++];
        }

        for (let m = left; m < right; m++) {
            arr[m] = aux[m];
        }
    };

    while (width < n) {
        for (let i = 0; i < n; i += 2 * width) {
            const left = i;
            const mid = Math.min(i + width, n);
            const right = Math.min(i + 2 * width, n);
            merge(arr, aux, left, mid, right);
        }
        width *= 2;
    }

    return arr;
}

// Test cases
console.log(iterativeMergeSort([3, 2, 1, 13, 8, 5, 0, 1]));  // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(iterativeMergeSort([105, 79, 100, 110]));        // Output: [79, 100, 105, 110]
