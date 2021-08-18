let number = 0;
module.exports = function reverse (n) {
    if (n < 0) {
        n = n*-1;
        number = n.toString().split('').reverse().join('');
    } else {
        number = n.toString().split('').reverse().join('');
    }
    return number;
}
