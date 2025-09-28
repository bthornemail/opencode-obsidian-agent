---
title: "Generating Function -- from Wolfram MathWorld"
source: "https://mathworld.wolfram.com/GeneratingFunction.html"
author:
  - "[[Weisstein]]"
  - "[[Eric W.]]"
published:
created: 2025-09-27
description: "A generating function f(x) is a formal power series  f(x)=sum_(n=0)^inftya_nx^n  (1)   whose coefficients give the sequence {a_0,a_1,...}. The Wolfram Language command GeneratingFunction[expr, n, x] gives the generating function in the variable x for the sequence whose nth term is expr. Given a sequence of terms, FindGeneratingFunction[{a1, a2, ...}, x] attempts to find a simple generating function in x whose nth coefficient is a_n. Given a generating function, the analytic expression for..."
tags:
  - "clippings"
---
## Generating Function

---

[Download Notebook](https://mathworld.wolfram.com/notebooks/Combinatorics/GeneratingFunction.nb)

A generating function is a [formal power series](https://mathworld.wolfram.com/FormalPowerSeries.html)

| ![ f(x)=sum_(n=0)^inftya_nx^n ](https://mathworld.wolfram.com/images/equations/GeneratingFunction/NumberedEquation1.svg) | (1) |
| --- | --- |

whose [coefficients](https://mathworld.wolfram.com/Coefficient.html) give the [sequence](https://mathworld.wolfram.com/Sequence.html).

The [Wolfram Language](http://www.wolfram.com/language/) command [GeneratingFunction](http://reference.wolfram.com/language/ref/GeneratingFunction.html) \[*expr*, *n*, *x*\] gives the generating function in the variable for the sequence whose th term is *expr*. Given a sequence of terms, [FindGeneratingFunction](http://reference.wolfram.com/language/ref/FindGeneratingFunction.html) \[*a* 1, *a* 2,..., *x*\] attempts to find a simple generating function in whose th coefficient is .

Given a generating function, the analytic expression for the th term in the corresponding series can be computing using [SeriesCoefficient](http://reference.wolfram.com/language/ref/SeriesCoefficient.html) \[*expr*, *x*, *x0*, *n*\]. The generating function is sometimes said to " [enumerate](https://mathworld.wolfram.com/Enumerate.html) " (Hardy 1999, p. 85).

Generating functions giving the first few powers of the nonnegative integers are given in the following table.

|  |  | series |
| --- | --- | --- |
| 1 |  |  |
|  |  |  |
|  |  |  |
|  | ![(x(x^2+4x+1))/((1-x)^4)](https://mathworld.wolfram.com/images/equations/GeneratingFunction/Inline26.svg) |  |
|  | ![(x(x+1)(x^2+10x+1))/((1-x)^5)](https://mathworld.wolfram.com/images/equations/GeneratingFunction/Inline29.svg) |  |

There are many beautiful generating functions for special functions in number theory. A few particularly nice examples are

|  |  | ![1/((x)_infty)](https://mathworld.wolfram.com/images/equations/GeneratingFunction/Inline33.svg) | (2) |
| --- | --- | --- | --- |
|  |  | ![sum_(n=0)^(infty)P(n)x^n](https://mathworld.wolfram.com/images/equations/GeneratingFunction/Inline36.svg) | (3) |
|  |  |  | (4) |

for the [partition function P](https://mathworld.wolfram.com/PartitionFunctionP.html), where is a [*q* -Pochhammer symbol](https://mathworld.wolfram.com/q-PochhammerSymbol.html), and

|  |  | ![x/(1-x-x^2)](https://mathworld.wolfram.com/images/equations/GeneratingFunction/Inline43.svg) | (5) |
| --- | --- | --- | --- |
|  |  | ![sum_(n=0)^(infty)F_nx^n](https://mathworld.wolfram.com/images/equations/GeneratingFunction/Inline46.svg) | (6) |
|  |  |  | (7) |

for the [Fibonacci numbers](https://mathworld.wolfram.com/FibonacciNumber.html).

Generating functions are very useful in combinatorial enumeration problems. For example, the [subset sum problem](https://mathworld.wolfram.com/SubsetSumProblem.html), which asks the number of ways to select out of given integers such that their sum equals , can be solved using generating functions.

The generating function of of a sequence of numbers is given by the [Z-transform](https://mathworld.wolfram.com/Z-Transform.html) of in the variable (Germundsson 2000).

---

## See also

[Cumulant-Generating Function](https://mathworld.wolfram.com/Cumulant-GeneratingFunction.html), [Enumerate](https://mathworld.wolfram.com/Enumerate.html), [Exponential Generating Function](https://mathworld.wolfram.com/ExponentialGeneratingFunction.html), [Formal Power Series](https://mathworld.wolfram.com/FormalPowerSeries.html), [Moment-Generating Function](https://mathworld.wolfram.com/Moment-GeneratingFunction.html), [Recurrence Relation](https://mathworld.wolfram.com/RecurrenceRelation.html), [Subset Sum Problem](https://mathworld.wolfram.com/SubsetSumProblem.html), [Z-Transform](https://mathworld.wolfram.com/Z-Transform.html) [Explore this topic in the MathWorld classroom](https://mathworld.wolfram.com/classroom/GeneratingFunction.html)

## Explore with Wolfram|Alpha

## References

Bender, E. A. and Goldman, J. R. "Enumerative Uses of Generating Functions." *Indiana U. Math. J.***20**, 753-765, 1970/1971.Bergeron, F.; Labelle, G.; and Leroux, P. "Théorie des espèces er Combinatoire des Structures Arborescentes." Publications du LACIM. Québec, Montréal, Canada: Univ. Québec Montréal, 1994.Cameron, P. J. "Some Sequences of Integers." *Disc. Math.***75**, 89-102, 1989.Doubilet, P.; Rota, G.-C.; and Stanley, R. P. "The Idea of Generating Function." Ch. 3 in *[Finite Operator Calculus](http://www.amazon.com/exec/obidos/ASIN/B00072GPAU/ref=nosim/ericstreasuretro)* (Ed. G.-C. Rota). New York: Academic Press, pp. 83-134, 1975.Germundsson, R. " *Mathematica* Version 4." *Mathematica J.***7**, 497-524, 2000.Graham, R. L.; Knuth, D. E.; and Patashnik, O. *[Concrete Mathematics: A Foundation for Computer Science, 2nd ed.](http://www.amazon.com/exec/obidos/ASIN/0201558025/ref=nosim/ericstreasuretro)* Reading, MA: Addison-Wesley, 1994.Harary, F. and Palmer, E. M. *[Graphical Enumeration.](http://www.amazon.com/exec/obidos/ASIN/0123242452/ref=nosim/ericstreasuretro)* New York: Academic Press, 1973.Hardy, G. H. *[Ramanujan: Twelve Lectures on Subjects Suggested by His Life and Work, 3rd ed.](http://www.amazon.com/exec/obidos/ASIN/0821820230/ref=nosim/ericstreasuretro)* New York: Chelsea, p. 85, 1999.Lamdo, S. K. *[Lectures on Generating Functions.](http://www.amazon.com/exec/obidos/ASIN/0821834819/ref=nosim/ericstreasuretro)* Providence, RI: Amer. Math. Soc., 2003.Leroux, P. and Miloudi, B. "Généralisations de la formule d'Otter." *Ann. Sci. Math. Québec* **16**, 53-80, 1992.Riordan, J. *[Combinatorial Identities.](http://www.amazon.com/exec/obidos/ASIN/0882758292/ref=nosim/ericstreasuretro)* New York: Wiley, 1979.Riordan, J. *[An Introduction to Combinatorial Analysis.](http://www.amazon.com/exec/obidos/ASIN/0691023654/ref=nosim/ericstreasuretro)* New York: Wiley, 1980.Rosen, K. H. *[Discrete Mathematics and Its Applications, 4th ed.](http://www.amazon.com/exec/obidos/ASIN/0072899050/ref=nosim/ericstreasuretro)* New York: McGraw-Hill, 1998.Sloane, N. J. A. and Plouffe, S. "Recurrences and Generating Functions." §2.4 in *[The Encyclopedia of Integer Sequences.](http://www.amazon.com/exec/obidos/ASIN/0125586302/ref=nosim/ericstreasuretro)* San Diego, CA: Academic Press, pp. 9-10, 1995.Stanley, R. P. *[Enumerative Combinatorics, Vol. 1.](http://www.amazon.com/exec/obidos/ASIN/0521553091/ref=nosim/ericstreasuretro)* Cambridge, England: Cambridge University Press, p. 63, 1996.Viennot, G. "Une Théorie Combinatoire des Polynômes Orthogonaux Généraux." Publications du LACIM. Québec, Montréal, Canada: Univ. Québec Montréal, 1983.Wilf, H. S. *[Generatingfunctionology, 2nd ed.](http://www.amazon.com/exec/obidos/ASIN/0127519564/ref=nosim/ericstreasuretro)* New York: Academic Press, 1994.

## Referenced on Wolfram|Alpha

[Generating Function](https://www.wolframalpha.com/input/?i=generating+function "Generating Function")

## Cite this as:

"Generating Function." From [*MathWorld*](https://mathworld.wolfram.com/) --A Wolfram Resource. [https://mathworld.wolfram.com/GeneratingFunction.html](https://mathworld.wolfram.com/GeneratingFunction.html)

## Subject classifications

[Find out if you already have access to Wolfram tech through your organization](https://www.wolfram.com/siteinfo/)

×