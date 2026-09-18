function triLignes(M) {

    function Echanger(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    function NombreUn(array) {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 1) {
                count++;
            }
        }
        return count;
    }

    for (let i = 0; i < M.length - 1; i++) {
        for (let j = 0; j < M.length - 1 - i; j++) {
            if (NombreUn(M[j]) > NombreUn(M[j + 1])) {
                Echanger(M, j, j + 1);
            }
        }
    }
    return M;
}
const M = [
    [0, 0, 1, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
];

console.log(triLignes(M));