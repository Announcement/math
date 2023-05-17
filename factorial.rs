#![feature(test)]

extern crate test;

pub const fn factorial(n: usize) -> usize {
    if n < 2 {
        1
    } else {
        n * factorial(n - 1)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    use test::Bencher;
    use core::assert_eq;

	#[test]
	fn factorial_test () {
		assert_eq!(factorial(0), 1);
		assert_eq!(factorial(1), 1);
		assert_eq!(factorial(2), 2);
		assert_eq!(factorial(3), 6);
		assert_eq!(factorial(4), 24);
		assert_eq!(factorial(5), 120);
		assert_eq!(factorial(6), 720);
		assert_eq!(factorial(7), 5040);
		assert_eq!(factorial(8), 40320);
		assert_eq!(factorial(9), 362880);
		assert_eq!(factorial(10), 3628800);
		assert_eq!(factorial(11), 39916800);
		assert_eq!(factorial(12), 479001600);
		assert_eq!(factorial(13), 6227020800);
		assert_eq!(factorial(14), 87178291200);
		assert_eq!(factorial(15), 1307674368000);
		assert_eq!(factorial(16), 20922789888000);
		assert_eq!(factorial(17), 355687428096000);
		assert_eq!(factorial(18), 6402373705728000);
		assert_eq!(factorial(19), 121645100408832000);
		assert_eq!(factorial(20), 2432902008176640000);
	}
}