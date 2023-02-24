let n = 5672;
let r = 0;
let a;
while (n > 0) {
    let sum = n % 10;
    n = (n - sum) / 10;
    if (sum % 2 == 0) {
        r += sum;
    }
}
console.log(r);
document.write(r);