module.exports = function reverse (n) {
    let reverseNum = 0;

    n = Math.abs(n);
    while(n > 0)
    {
        reverseNum = reverseNum * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return reverseNum;
}
// function call   

