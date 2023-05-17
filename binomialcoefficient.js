/**
 * @function choose
 * @description binomial coefficient
 * @author Jacob Francis Powers <powersjf@outlook.com> {@link https://github.com/Announcement @Announcement}
 *
 * @version 1.0.0
 * @see {@link https://en.wikipedia.org/wiki/Binomial_coefficient Binomial Coefficient}
 *
 * @param {number} n - qualities that occur in n-size set of object.
 * @param {number} k - quantity of subset items to select in said object.
 *
 * @returns {number} possible arrangements of size [k]quantity, given [n]qualities.
 */
function choose (n, k) {
    if (n == 0) {
        return 1;
    }
    if (n == k) {
        return 1;
    }

    return choose(n - 1, k - 1) + choose(n - 1, k);
}
console.assert(choose(0, 0) === 1, `Received`, choose(0, 0), `but expected`, 1)
console.assert(choose(1, 0) === 1, `Received`, choose(1, 0), `but expected`, 1)
console.assert(choose(1, 1) === 1, `Received`, choose(1, 1), `but expected`, 1)
console.assert(choose(2, 0) === 1, `Received`, choose(2, 0), `but expected`, 1)
console.assert(choose(2, 1) === 2, `Received`, choose(2, 1), `but expected`, 2)
console.assert(choose(2, 2) === 1, `Received`, choose(2, 2), `but expected`, 1)
console.assert(choose(3, 0) === 1, `Received`, choose(3, 0), `but expected`, 1)
console.assert(choose(3, 1) === 3, `Received`, choose(3, 1), `but expected`, 3)
console.assert(choose(3, 2) === 3, `Received`, choose(3, 2), `but expected`, 3)
console.assert(choose(3, 3) === 1, `Received`, choose(3, 3), `but expected`, 1)
console.assert(choose(4, 0) === 1, `Received`, choose(4, 0), `but expected`, 1)
console.assert(choose(4, 1) === 4, `Received`, choose(4, 1), `but expected`, 4)
console.assert(choose(4, 2) === 6, `Received`, choose(4, 2), `but expected`, 6)
console.assert(choose(4, 3) === 4, `Received`, choose(4, 3), `but expected`, 4)
console.assert(choose(4, 4) === 1, `Received`, choose(4, 4), `but expected`, 1)
console.assert(choose(5, 0) === 1, `Received`, choose(5, 0), `but expected`, 1)
console.assert(choose(5, 1) === 5, `Received`, choose(5, 1), `but expected`, 5)
console.assert(choose(5, 2) === 10, `Received`, choose(5, 2), `but expected`, 10)
console.assert(choose(5, 3) === 10, `Received`, choose(5, 3), `but expected`, 10)
console.assert(choose(5, 4) === 5, `Received`, choose(5, 4), `but expected`, 5)
console.assert(choose(5, 5) === 1, `Received`, choose(5, 5), `but expected`, 1)
console.assert(choose(6, 0) === 1, `Received`, choose(6, 0), `but expected`, 1)
console.assert(choose(6, 1) === 6, `Received`, choose(6, 1), `but expected`, 6)
console.assert(choose(6, 2) === 15, `Received`, choose(6, 2), `but expected`, 15)
console.assert(choose(6, 3) === 20, `Received`, choose(6, 3), `but expected`, 20)
console.assert(choose(6, 4) === 15, `Received`, choose(6, 4), `but expected`, 15)
console.assert(choose(6, 5) === 6, `Received`, choose(6, 5), `but expected`, 6)
console.assert(choose(6, 6) === 1, `Received`, choose(6, 6), `but expected`, 1)
console.assert(choose(7, 0) === 1, `Received`, choose(7, 0), `but expected`, 1)
console.assert(choose(7, 1) === 7, `Received`, choose(7, 1), `but expected`, 7)
console.assert(choose(7, 2) === 21, `Received`, choose(7, 2), `but expected`, 21)
console.assert(choose(7, 3) === 35, `Received`, choose(7, 3), `but expected`, 35)
console.assert(choose(7, 4) === 35, `Received`, choose(7, 4), `but expected`, 35)
console.assert(choose(7, 5) === 21, `Received`, choose(7, 5), `but expected`, 21)
console.assert(choose(7, 6) === 7, `Received`, choose(7, 6), `but expected`, 7)
console.assert(choose(7, 7) === 1, `Received`, choose(7, 7), `but expected`, 1)