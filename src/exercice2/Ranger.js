function Ranger(array) {
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
console.log(Ranger([0, 1, 0, 0, 1, 0]));
