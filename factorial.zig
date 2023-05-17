const expect = @import("std").testing.expect;

pub fn factorial(it: usize) usize {
    if (it < 2) return 1;
    return it * factorial(it - 1);
}

test "test fn factorial" {
    try comptime expect(factorial(0) == 1);
    try comptime expect(factorial(1) == 1);
    try comptime expect(factorial(2) == 2);
    try comptime expect(factorial(3) == 6);
    try comptime expect(factorial(4) == 24);
    try comptime expect(factorial(5) == 120);
    try comptime expect(factorial(6) == 720);
    try comptime expect(factorial(7) == 5040);
    try comptime expect(factorial(8) == 40320);
    try comptime expect(factorial(9) == 362880);
    try comptime expect(factorial(10) == 3628800);
    try comptime expect(factorial(11) == 39916800);
    try comptime expect(factorial(12) == 479001600);
    try comptime expect(factorial(13) == 6227020800);
    try comptime expect(factorial(14) == 87178291200);
    try comptime expect(factorial(15) == 1307674368000);
    try comptime expect(factorial(16) == 20922789888000);
    try comptime expect(factorial(17) == 355687428096000);
    try comptime expect(factorial(18) == 6402373705728000);
    try comptime expect(factorial(19) == 121645100408832000);
    try comptime expect(factorial(20) == 2432902008176640000);
}
