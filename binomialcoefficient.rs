
#![feature(test)]

extern crate test;

pub const fn choose(qualities: usize, quantities: usize) -> usize {
    if quantities == 0 {
        return 1;
    }
    if qualities == quantities {
        return 1;
    }

    return choose(qualities - 1, quantities - 1) + choose(qualities - 1, quantities);
}

#[cfg(test)]
mod tests {
    use super::*;

    use test::Bencher;
    use core::assert_eq;

	#[test]
	fn binomial_coefficient_test () {
		assert_eq!(choose(0, 0), 1);

		assert_eq!(choose(1, 0), 1);
		assert_eq!(choose(1, 1), 1);

		assert_eq!(choose(2, 0), 1);
		assert_eq!(choose(2, 1), 2);
		assert_eq!(choose(2, 2), 1);

		assert_eq!(choose(3, 0), 1);
		assert_eq!(choose(3, 1), 3);
		assert_eq!(choose(3, 2), 3);
		assert_eq!(choose(3, 3), 1);

		assert_eq!(choose(4, 0), 1);
		assert_eq!(choose(4, 1), 4);
		assert_eq!(choose(4, 2), 6);
		assert_eq!(choose(4, 3), 4);
		assert_eq!(choose(4, 4), 1);

		assert_eq!(choose(5, 0),  1);
		assert_eq!(choose(5, 1),  5);
		assert_eq!(choose(5, 2), 10);
		assert_eq!(choose(5, 3), 10);
		assert_eq!(choose(5, 4),  5);
		assert_eq!(choose(5, 5),  1);

		assert_eq!(choose(6, 0),  1);
		assert_eq!(choose(6, 1),  6);
		assert_eq!(choose(6, 2), 15);
		assert_eq!(choose(6, 3), 20);
		assert_eq!(choose(6, 4), 15);
		assert_eq!(choose(6, 5),  6);
		assert_eq!(choose(6, 6),  1);

		assert_eq!(choose(7, 0),  1);
		assert_eq!(choose(7, 1),  7);
		assert_eq!(choose(7, 2), 21);
		assert_eq!(choose(7, 3), 35);
		assert_eq!(choose(7, 4), 35);
		assert_eq!(choose(7, 5), 21);
		assert_eq!(choose(7, 6),  7);
		assert_eq!(choose(7, 7),  1);
	}
}
pub const fn choose(qualities: usize, quantities: usize) -> usize {
    if quantities == 0 {
        return 1;
    }
    if qualities == quantities {
        return 1;
    }

    return choose(qualities - 1, quantities - 1) + choose(qualities - 1, quantities);
}