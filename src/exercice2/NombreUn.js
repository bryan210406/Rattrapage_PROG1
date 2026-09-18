function NombreUn(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            result++;
        }
    }
    return result;
}
console.log(NombreUn([0, 0, 0, 0, 1, 1]));
console.log(NombreUn([0, 1, 0, 1, 1]));
