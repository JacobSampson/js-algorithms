(() => {
    console.log(exponentiate(3, 4));

})();

function exponentiate(x, n) {
    if (n == 0) {
        return 1;
    } else if (n % 2 == 0) {
        return exponentiate(x * x, Math.floor(n / 2));
    } else {
        return x * exponentiate(x * x, Math.floor((n - 1) / 2))
    }
}