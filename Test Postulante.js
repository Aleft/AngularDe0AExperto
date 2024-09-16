function CalculateFactorial(x) {
    let result = 1;
    for (let i = 1; i <= x; i++) {
        result = result * i;
    }
    return result;
}

function CalculateRecursiveFactorial(x) {
    if (x === 0 || x === 1) {
        return 1;
    } else {
        return x * CalculateRecursiveFactorial(x - 1);
    }
}

Console.log(CalculateFactorial(5));


function SortArray(array) {
    let x = array.length;

    for (let i = 0; i < x; i++) {  
        let min = i;
        for (let n = i + 1; n < x; n++) {
            if (array[n] < array[min]) {
                min = n;
            }
        }
        if (min !== i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

console.log(selectionSort([5, 2, 9, 1, 5, 6])); // Salida: [1, 2, 5, 5, 6, 9]
