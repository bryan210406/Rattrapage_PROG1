function NegatifPositif(array) {
    let result = [];
    let position = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] <= 0) {
            result[position] = array[i];
            position++;
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            result[position] = array[i];
            position++;
        }
    }

    return result;
}
console.log(NegatifPositif([-5, -3, 2, 4, 0]));
