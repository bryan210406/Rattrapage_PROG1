function Ranger(array) {
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
console.log(Ranger([0, 1, 0, 0, 1, 0]));
