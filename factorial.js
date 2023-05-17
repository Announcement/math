/**
 * @function factorial
 * @author Jacob Francis Powers <powersjf@outlook.com> {@link https://github.com/Announcement @Announcement}
 *
 * @version 1.0.0
 * @see {@link https://en.wikipedia.org/wiki/Factorial Factorial}
 *
 * @param {number} n - number to get the factorial of
 *
 * @returns {number}
 */
function factorial (n) {
    if (n < 2) return 1;
    return n * factorial(n - 1)
}

console.assert(factorial(0) === 1, `Received`, factorial(0), `but expected`, 1)
console.assert(factorial(1) === 1, `Received`, factorial(1), `but expected`, 1)
console.assert(factorial(2) === 2, `Received`, factorial(2), `but expected`, 2)
console.assert(factorial(3) === 6, `Received`, factorial(3), `but expected`, 6)
console.assert(factorial(4) === 24, `Received`, factorial(4), `but expected`, 24)
console.assert(factorial(5) === 120, `Received`, factorial(5), `but expected`, 120)
console.assert(factorial(6) === 720, `Received`, factorial(6), `but expected`, 720)
console.assert(factorial(7) === 5040, `Received`, factorial(7), `but expected`, 5040)
console.assert(factorial(8) === 40320, `Received`, factorial(8), `but expected`, 40320)
console.assert(factorial(9) === 362880, `Received`, factorial(9), `but expected`, 362880)
console.assert(factorial(10) === 3628800, `Received`, factorial(10), `but expected`, 3628800)
console.assert(factorial(11) === 39916800, `Received`, factorial(11), `but expected`, 39916800)
console.assert(factorial(12) === 479001600, `Received`, factorial(12), `but expected`, 479001600)
console.assert(factorial(13) === 6227020800, `Received`, factorial(13), `but expected`, 6227020800)
console.assert(factorial(14) === 87178291200, `Received`, factorial(14), `but expected`, 87178291200)
console.assert(factorial(15) === 1307674368000, `Received`, factorial(15), `but expected`, 1307674368000)
console.assert(factorial(16) === 20922789888000, `Received`, factorial(16), `but expected`, 20922789888000)
console.assert(factorial(17) === 355687428096000, `Received`, factorial(17), `but expected`, 355687428096000)
console.assert(factorial(18) === 6402373705728000, `Received`, factorial(18), `but expected`, 6402373705728000)
console.assert(factorial(19) === 121645100408832000, `Received`, factorial(19), `but expected`, 121645100408832000)
console.assert(factorial(20) === 2432902008176640000, `Received`, factorial(20), `but expected`, 2432902008176640000)