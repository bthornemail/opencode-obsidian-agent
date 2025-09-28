---
title: "Abundant Number -- from Wolfram MathWorld"
source: "https://mathworld.wolfram.com/AbundantNumber.html"
author:
  - "[[Weisstein]]"
  - "[[Eric W.]]"
published:
created: 2025-09-27
description: "An abundant number, sometimes also called an excessive number, is a positive integer n for which  s(n)=sigma(n)-n>n,  (1)   where sigma(n) is the divisor function and s(n) is the restricted divisor function. The quantity sigma(n)-2n is sometimes called the abundance. A number which is abundant but for which all its proper divisors are deficient is called a primitive abundant number (Guy 1994, p. 46). The first few abundant numbers are 12, 18, 20, 24, 30, 36, ... (OEIS A005101). Every..."
tags:
  - "clippings"
---
## Abundant Number

---

[Download Notebook](https://mathworld.wolfram.com/notebooks/NumberTheory/AbundantNumber.nb)

An abundant number, sometimes also called an excessive number, is a [positive integer](https://mathworld.wolfram.com/PositiveInteger.html) for which

|  | (1) |
| --- | --- |

where is the [divisor function](https://mathworld.wolfram.com/DivisorFunction.html) and is the restricted divisor function. The quantity is sometimes called the [abundance](https://mathworld.wolfram.com/Abundance.html).

A number which is abundant but for which all its [proper divisors](https://mathworld.wolfram.com/ProperDivisor.html) are [deficient](https://mathworld.wolfram.com/DeficientNumber.html) is called a [primitive abundant number](https://mathworld.wolfram.com/PrimitiveAbundantNumber.html) (Guy 1994, p. 46).

The first few abundant numbers are 12, 18, 20, 24, 30, 36,... (OEIS [A005101](http://oeis.org/A005101)).

Every positive integer with is abundant. Any multiple of a [perfect number](https://mathworld.wolfram.com/PerfectNumber.html) or an abundant number is also abundant. Prime numbers are not abundant. Every number greater than 20161 can be expressed as a sum of two abundant numbers.

There are only 21 abundant numbers less than 100, and they are all [even](https://mathworld.wolfram.com/EvenNumber.html). The first [odd](https://mathworld.wolfram.com/OddNumber.html) abundant number is

|  | (2) |
| --- | --- |

That 945 is abundant can be seen by computing

|  | (3) |
| --- | --- |

![AbundantNumberDensity](https://mathworld.wolfram.com/images/eps-svg/AbundantNumberDensity_1000.svg)

Define the density function

| ![ A(x)=lim_(n->infty)(\|{k<=n:sigma(k)>=xk}\|)/n ](https://mathworld.wolfram.com/images/equations/AbundantNumber/NumberedEquation4.svg) | (4) |
| --- | --- | --- | --- |

(correcting the expression in Finch 2003, p. 126) for a [positive](https://mathworld.wolfram.com/Positive.html) [real number](https://mathworld.wolfram.com/RealNumber.html) where gives the [cardinal number](https://mathworld.wolfram.com/CardinalNumber.html) of the set , then Davenport (1933) proved that exists and is continuous for all , and Erdős (1934) gave a simplified proof (Finch 2003). The special case then gives the asymptotic density of abundant numbers,

| ![ A(2)=lim_(n->infty)(# abundant numbers <=n)/n. ](https://mathworld.wolfram.com/images/equations/AbundantNumber/NumberedEquation5.svg) | (5) |
| --- | --- |

The following table summarizes improvements in bounds on the constant over time.

| value | reference |
| --- | --- |
|  | Behrend (1933) |
|  | Wall (1971) and Wall et al. (1977) |
|  | Deléglise (1998) |
|  | Kobayashi (2010, p. 12) |

---

## See also

[Abundance](https://mathworld.wolfram.com/Abundance.html), [Aliquot Sequence](https://mathworld.wolfram.com/AliquotSequence.html), [Colossally Abundant Number](https://mathworld.wolfram.com/ColossallyAbundantNumber.html), [Deficient Number](https://mathworld.wolfram.com/DeficientNumber.html), [Highly Composite Number](https://mathworld.wolfram.com/HighlyCompositeNumber.html), [Multiamicable Numbers](https://mathworld.wolfram.com/MultiamicableNumbers.html), [Perfect Number](https://mathworld.wolfram.com/PerfectNumber.html), [Practical Number](https://mathworld.wolfram.com/PracticalNumber.html), [Primitive Abundant Number](https://mathworld.wolfram.com/PrimitiveAbundantNumber.html), [Weird Number](https://mathworld.wolfram.com/WeirdNumber.html)

## Explore with Wolfram|Alpha

## References

Behrend, F. "Über numeri abundantes." *Sitzungsber. Preuss. Akad. Wiss., Phys.-Math. Kl.*, No. 21/23, 322-328, 1932.Behrend, F. "Über numeri abundantes. II." *Sitzungsber. Preuss. Akad. Wiss., Phys.-Math. Kl.*, No. 6, 280-293, 1933.Davenport, H. "Über numeri abundantes." *Sitzungsber. Preuss. Akad. Wiss., Phys.-Math. Kl.*, No. 6, 830-837, 1933.Deléglise, M. "Bounds for the Density of Abundant Integers." *Exp. Math.***7**, 137-143, 1998.Dickson, L. E. *[History of the Theory of Numbers, Vol. 1: Divisibility and Primality.](http://www.amazon.com/exec/obidos/ASIN/0486442322/ref=nosim/ericstreasuretro)* New York: Dover, pp. 3-33, 2005.Erdős, P. "On the Density of the Abundant Numbers." *J. London Math. Soc.***9**, 278-282, 1934.Finch, S. R. "Abundant Numbers Density Constant." §2.11 in *[Mathematical Constants.](http://www.amazon.com/exec/obidos/ASIN/0521818052/ref=nosim/ericstreasuretro)* Cambridge, England: Cambridge University Press, pp. 126-127, 2003.Guy, R. K. *[Unsolved Problems in Number Theory, 2nd ed.](http://www.amazon.com/exec/obidos/ASIN/0387208607/ref=nosim/ericstreasuretro)* New York: Springer-Verlag, pp. 45-46, 1994.Kobayashi, M. "On the Density of Abundant Numbers." Ph.D. thesis. Hanover, NH: Dartmouth College, 2010.Singh, S. *[Fermat's Enigma: The Epic Quest to Solve the World's Greatest Mathematical Problem.](http://www.amazon.com/exec/obidos/ASIN/0802713319/ref=nosim/ericstreasuretro)* New York: Walker, pp. 11 and 13, 1997.Sloane, N. J. A. Sequence [A005101](http://oeis.org/A005101) /M4825 in "The On-Line Encyclopedia of Integer Sequences." Souissi, M. *Un Texte Manuscrit d'Ibn Al-Bannā' Al-Marrakusi sur les Nombres Parfaits, Abondants, Deficients, et Amiables.* Karachi, Pakistan: Hamdard Nat. Found., 1975.Wall, C. R. "Density Bounds for the Sum of Divisors Function." In *[The Theory of Arithmetic Functions: Proceedings of the Conference at Western Michigan University, April 29-May 1, 1971.](http://www.amazon.com/exec/obidos/ASIN/0387057234/ref=nosim/ericstreasuretro)* (Ed. A. A. Gioia and D. L. Goldsmith). New York: Springer-Verlag, pp. 283-287, 1971.Wall, C. R.; Crews, P. L.; and Johnson, D. B. "Density Bounds for the Sum of Divisors Function." *Math. Comput.***26**, 773-777, 1972.Wall, C. R.; Crews, P. L.; and Johnson, D. B. "Density Bounds for the Sum of Divisors Function." *Math. Comput.***31**, 616, 1977.

## Referenced on Wolfram|Alpha

[Abundant Number](https://www.wolframalpha.com/input/?i=abundant+number "Abundant Number")

## Cite this as:

"Abundant Number." From [*MathWorld*](https://mathworld.wolfram.com/) --A Wolfram Resource. [https://mathworld.wolfram.com/AbundantNumber.html](https://mathworld.wolfram.com/AbundantNumber.html)

## Subject classifications

[Find out if you already have access to Wolfram tech through your organization](https://www.wolfram.com/siteinfo/)

×