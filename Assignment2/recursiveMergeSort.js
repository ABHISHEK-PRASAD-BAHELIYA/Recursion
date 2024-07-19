function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const aux = arr.slice();  // Create a copy of the array for auxiliary use
    sort(arr, aux, 0, arr.length - 1);
    return arr;
}

function sort(arr, aux, left, right) {
    if (left >= right) {
        return;
    }

    const mid = Math.floor((left + right) / 2);
    sort(aux, arr, left, mid);      // Sort the left half into aux
    sort(aux, arr, mid + 1, right); // Sort the right half into aux
    merge(arr, aux, left, mid, right);
}

function merge(arr, aux, left, mid, right) {
    let i = left, j = mid + 1, k = left;

    while (i <= mid && j <= right) {
        if (aux[i] <= aux[j]) {
            arr[k++] = aux[i++];
        } else {
            arr[k++] = aux[j++];
        }
    }

    while (i <= mid) {
        arr[k++] = aux[i++];
    }

    while (j <= right) {
        arr[k++] = aux[j++];
    }
}

// Test cases
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));  // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110]));        // Output: [79, 100, 105, 110]
