const expect = @import("std").testing.expect;

pub fn choose(qualities: usize, quantities: usize) usize {
    if (quantities == 0) {
        return 1;
    }

    if (qualities == quantities) {
        return 1;
    }

    return choose(qualities - 1, quantities - 1) + choose(qualities - 1, quantities);
}

test "test fn binomial coefficient" {
    try comptime expect(choose(0, 0) == 1);
    try comptime expect(choose(1, 0) == 1);
    try comptime expect(choose(1, 1) == 1);
    try comptime expect(choose(2, 0) == 1);
    try comptime expect(choose(2, 1) == 2);
    try comptime expect(choose(2, 2) == 1);
    try comptime expect(choose(3, 0) == 1);
    try comptime expect(choose(3, 1) == 3);
    try comptime expect(choose(3, 2) == 3);
    try comptime expect(choose(3, 3) == 1);
    try comptime expect(choose(4, 0) == 1);
    try comptime expect(choose(4, 1) == 4);
    try comptime expect(choose(4, 2) == 6);
    try comptime expect(choose(4, 3) == 4);
    try comptime expect(choose(4, 4) == 1);
    try comptime expect(choose(5, 0) == 1);
    try comptime expect(choose(5, 1) == 5);
    try comptime expect(choose(5, 2) == 10);
    try comptime expect(choose(5, 3) == 10);
    try comptime expect(choose(5, 4) == 5);
    try comptime expect(choose(5, 5) == 1);
    try comptime expect(choose(6, 0) == 1);
    try comptime expect(choose(6, 1) == 6);
    try comptime expect(choose(6, 2) == 15);
    try comptime expect(choose(6, 3) == 20);
    try comptime expect(choose(6, 4) == 15);
    try comptime expect(choose(6, 5) == 6);
    try comptime expect(choose(6, 6) == 1);
    try comptime expect(choose(7, 0) == 1);
    try comptime expect(choose(7, 1) == 7);
    try comptime expect(choose(7, 2) == 21);
    try comptime expect(choose(7, 3) == 35);
    try comptime expect(choose(7, 4) == 35);
    try comptime expect(choose(7, 5) == 21);
    try comptime expect(choose(7, 6) == 7);
    try comptime expect(choose(7, 7) == 1);
}
