function NegatifPositif(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= 0) {
            result.push(array[i]);
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            result.push(array[i]);
        }
    }

    return result;
}
console.log(NegatifPositif([3, -1, 0, 4, -2, 5, -3] ));
console.log(NegatifPositif([-5, -3, 2, 4, 0])); 