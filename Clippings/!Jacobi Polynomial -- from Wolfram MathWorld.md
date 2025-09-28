---
title: "Jacobi Polynomial -- from Wolfram MathWorld"
source: "https://mathworld.wolfram.com/JacobiPolynomial.html"
author:
  - "[[Weisstein]]"
  - "[[Eric W.]]"
published:
created: 2025-09-27
description: "The Jacobi polynomials, also known as hypergeometric polynomials, occur in the study of rotation groups and in the solution to the equations of motion of the symmetric top. They are solutions to the Jacobi differential equation, and give some other special named polynomials as special cases. They are implemented in the Wolfram Language as JacobiP[n, a, b, z]. For alpha=beta=0, P_n^((0,0))(x) reduces to a Legendre polynomial. The Gegenbauer polynomial ..."
tags:
  - "clippings"
---
## Jacobi Polynomial

---

[Download Notebook](https://mathworld.wolfram.com/notebooks/SpecialFunctions/JacobiPolynomial.nb)

The Jacobi polynomials, also known as hypergeometric polynomials, occur in the study of [rotation groups](https://mathworld.wolfram.com/RotationGroup.html) and in the solution to the equations of motion of the symmetric top. They are solutions to the [Jacobi differential equation](https://mathworld.wolfram.com/JacobiDifferentialEquation.html), and give some other special named polynomials as special cases. They are implemented in the [Wolfram Language](http://www.wolfram.com/language/) as [JacobiP](http://reference.wolfram.com/language/ref/JacobiP.html) \[*n*, *a*, *b*, *z*\].

For , reduces to a [Legendre polynomial](https://mathworld.wolfram.com/LegendrePolynomial.html). The [Gegenbauer polynomial](https://mathworld.wolfram.com/GegenbauerPolynomial.html)

| ![ G_n(p,q,x)=(n!Gamma(n+p))/(Gamma(2n+p))P_n^((p-q,q-1))(2x-1) ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation1.svg) | (1) |
| --- | --- |

and [Chebyshev polynomial of the first kind](https://mathworld.wolfram.com/ChebyshevPolynomialoftheFirstKind.html) can also be viewed as special cases of the Jacobi polynomials.

Plugging

| ![ y=sum_(nu=0)^inftya_nu(x-1)^nu ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation2.svg) | (2) |
| --- | --- |

into the [Jacobi differential equation](https://mathworld.wolfram.com/JacobiDifferentialEquation.html) gives the [recurrence relation](https://mathworld.wolfram.com/RecurrenceRelation.html)

|  | (3) |
| --- | --- |

for , 1,..., where

|  | (4) |
| --- | --- |

Solving the [recurrence relation](https://mathworld.wolfram.com/RecurrenceRelation.html) gives

| ![ P_n^((alpha,beta))(x)=((-1)^n)/(2^nn!)(1-x)^(-alpha)(1+x)^(-beta)(d^n)/(dx^n)[(1-x)^(alpha+n)(1+x)^(beta+n)] ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation5.svg) | (5) |
| --- | --- |

for . They form a complete orthogonal system in the interval with respect to the weighting function

|  | (6) |
| --- | --- |

and are normalized according to

| ![ P_n^((alpha,beta))(1)=(n+alpha; n), ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation7.svg) | (7) |
| --- | --- |

where is a [binomial coefficient](https://mathworld.wolfram.com/BinomialCoefficient.html). Jacobi polynomials can also be written

| ![ P_n^((alpha,beta))=(Gamma(2n+alpha+beta+1))/(n!Gamma(n+alpha+beta+1))G_n(alpha+beta+1,beta+1,1/2(x+1)), ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation8.svg) | (8) |
| --- | --- |

where is the [gamma function](https://mathworld.wolfram.com/GammaFunction.html) and

| ![ G_n(p,q,x)=(n!Gamma(n+p))/(Gamma(2n+p))P_n^((p-q,q-1))(2x-1). ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation9.svg) | (9) |
| --- | --- |

Jacobi polynomials are [orthogonal polynomials](https://mathworld.wolfram.com/OrthogonalPolynomials.html) and satisfy

| ![ int_(-1)^1P_m^((alpha,beta))P_n^((alpha,beta))(1-x)^alpha(1+x)^betadx  =(2^(alpha+beta+1))/(2n+alpha+beta+1)(Gamma(n+alpha+1)Gamma(n+beta+1))/(n!Gamma(n+alpha+beta+1))delta_(mn).  ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation10.svg) | (10) |
| --- | --- |

The [coefficient](https://mathworld.wolfram.com/Coefficient.html) of the term in is given by

| ![ A_n=(Gamma(2n+alpha+beta+1))/(2^nn!Gamma(n+alpha+beta+1)). ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation11.svg) | (11) |
| --- | --- |

They satisfy the [recurrence relation](https://mathworld.wolfram.com/RecurrenceRelation.html)

| ![ 2(n+1)(n+alpha+beta+1)(2n+alpha+beta)P_(n+1)^((alpha,beta))(x)  =[(2n+alpha+beta+1)(alpha^2-beta^2)+(2n+alpha+beta)_3x]P_n^((alpha,beta))(x)-2(n+alpha)(n+beta)(2n+alpha+beta+2)P_(n-1)^((alpha,beta))(x),  ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation12.svg) | (12) |
| --- | --- |

where is a [Pochhammer symbol](https://mathworld.wolfram.com/PochhammerSymbol.html)

| ![ (m)_n=m(m+1)...(m+n-1)=((m+n-1)!)/((m-1)!). ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation13.svg) | (13) |
| --- | --- |

The [derivative](https://mathworld.wolfram.com/Derivative.html) is given by

| ![ d/(dx)[P_n^((alpha,beta))(x)]=1/2(n+alpha+beta+1)P_(n-1)^((alpha+1,beta+1))(x). ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation14.svg) | (14) |
| --- | --- |

The [orthogonal polynomials](https://mathworld.wolfram.com/OrthogonalPolynomials.html) with weighting function on the [closed interval](https://mathworld.wolfram.com/ClosedInterval.html) can be expressed in the form

| ![ [const]P_n^((alpha,beta))(2(x-a)/(b-a)-1) ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation15.svg) | (15) |
| --- | --- |

(Szegö 1975, p. 58).

Special cases with are

|  |  | ![(Gamma(2nu+alpha+1)Gamma(nu+1))/(Gamma(nu+alpha+1)Gamma(2nu+1))P_nu^((alpha,-1/2))(2x^2-1)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline16.svg) | (16) |
| --- | --- | --- | --- |
|  |  | ![(-1)^nu(Gamma(2nu+alpha+1)Gamma(nu+1))/(Gamma(nu+alpha+1)Gamma(2nu+1))P_nu^((-1/2,alpha))(1-2x^2)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline19.svg) | (17) |
|  |  | ![(Gamma(2nu+alpha+2)Gamma(nu+1))/(Gamma(nu+alpha+1)Gamma(2nu+2))xP_nu^((alpha,1/2))(2x^2-1)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline22.svg) | (18) |
|  |  | ![(-1)^nu(Gamma(2nu+alpha+2)Gamma(nu+1))/(Gamma(nu+alpha+1)Gamma(2nu+2))xP_nu^((1/2,alpha))(1-2x^2).](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline25.svg) | (19) |

Further identities are

|  |  | ![2/(2n+alpha+beta+2)((n+alpha+1)P_n^((alpha,beta))-(n+1)P_(n+1)^((alpha,beta))(x))/(1-x)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline28.svg) | (20) |
| --- | --- | --- | --- |
|  |  | ![2/(2n+alpha+beta+2)((n+beta+1)P_n^((alpha,beta))(x)+(n+1)P_(n+1)^((alpha,beta))(x))/(1+x)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline31.svg) | (21) |

| ![ sum_(nu=0)^n(2nu+alpha+beta+1)/(2^(alpha+beta+1))(Gamma(nu+1)Gamma(nu+alpha+beta+1))/(Gamma(nu+alpha+1)Gamma(nu+beta+1))P_nu^((alpha,beta))(x)Q_nu^((alpha,beta))(y)  =1/2((y-1)^(-alpha)(y+1)^(-beta))/(y-x)+(2^(-alpha-beta))/(2n+alpha+beta+2)(Gamma(n+2)Gamma(n+alpha+beta+2))/(Gamma(n+alpha+1)Gamma(n+beta+1))(P_(n+1)^((alpha,beta))(x)Q_n^((alpha,beta))(y)-P_n^((alpha,beta))(x)Q_(n+1)^(alpha,beta)(y))/(x-y)  ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation16.svg) | (22) |
| --- | --- |

(Szegö 1975, p. 79).

The kernel polynomial is

| ![ K_n^((alpha,beta))(x,y)=(2^(-alpha-beta))/(2n+alpha+beta+2)(Gamma(n+2)Gamma(n+alpha+beta+2))/(Gamma(n+alpha+1)Gamma(n+beta+1))(P_(n+1)^((alpha,beta))(x)P_n^((alpha,beta))(y)-P_n^((alpha,beta))(x)P_(n+1)^((alpha,beta))(y))/(x-y)  ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation17.svg) | (23) |
| --- | --- |

(Szegö 1975, p. 71).

The [polynomial discriminant](https://mathworld.wolfram.com/PolynomialDiscriminant.html) is

| ![ D_n^((alpha,beta))=2^(-n(n-1))product_(nu=1)^nnu^(nu-2n+2)(nu+alpha)^(nu-1)(nu+beta)^(nu-1)  ×(n+nu+alpha+beta)^(n-nu)   ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation18.svg) | (24) |
| --- | --- |

(Szegö 1975, p. 143).

In terms of the [hypergeometric function](https://mathworld.wolfram.com/HypergeometricFunction.html),

|  |  | ![(n+alpha; n)_2F_1(-n,n+alpha+beta+1;alpha+1;1/2(1-x))](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline34.svg) | (25) |
| --- | --- | --- | --- |
|  |  | ![((alpha+1)_n)/(n!)_2F_1(-n,n+alpha+beta+1;alpha+1;1/2(1-x))](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline37.svg) | (26) |
|  |  | ![(n+alpha; n)((x+1)/2)^n_2F_1(-n,-n-beta;alpha+1;(x-1)/(x+1)),](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline40.svg) | (27) |

where is the [Pochhammer symbol](https://mathworld.wolfram.com/PochhammerSymbol.html) (Abramowitz and Stegun 1972, p. 561; Koekoek and Swarttouw 1998).

Let be the number of zeros in , the number of zeros in , and the number of zeros in . Define Klein's symbol

| ![ E(u)={0   if u<=0; \|_u_\|   if u positive and nonintegral; u-1   if u=1, 2, ..., ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation19.svg) | (28) |
| --- | --- | --- | --- |

where is the [floor function](https://mathworld.wolfram.com/FloorFunction.html), and

|  |  |  | (29) |
| --- | --- | --- | --- |
|  |  |  | (30) |
|  |  |  | (31) |

If the cases , ,..., , , ,..., , and , ,..., are excluded, then the number of zeros of in the respective intervals are

|  |  | ![{2\|_1/2(X+1)_\| for (-1)^n(n+alpha; n)(n+beta; n)>0; 2\|_1/2X_\|+1 for (-1)^n(n+alpha; n)(n+beta; n)<0](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline70.svg) | (32) |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | ![{2\|_1/2(Y+1)_\| for (2n+alpha+beta; n)(n+beta; n)>0; 2\|_1/2Y_\|+1 for (2n+alpha+beta; n)(n+beta; n)<0](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline73.svg) | (33) |
|  |  | ![{2\|_1/2(Z+1)_\| for (2n+alpha+beta; n)(n+alpha; n)>0; 2\|_1/2Z_\|+1 for (2n+alpha+beta; n)(n+alpha; n)<0](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline76.svg) | (34) |

(Szegö 1975, pp. 144-146), where is again the [floor function](https://mathworld.wolfram.com/FloorFunction.html).

The first few [polynomials](https://mathworld.wolfram.com/Polynomial.html) are

|  |  |  | (35) |
| --- | --- | --- | --- |
|  |  |  | (36) |
|  |  |  | (37) |

(Abramowitz and Stegun 1972, p. 793).

See Abramowitz and Stegun (1972, pp. 782-793) and Szegö (1975, Ch. 4) for additional identities.

---

## See also

[Chebyshev Polynomial of the First Kind](https://mathworld.wolfram.com/ChebyshevPolynomialoftheFirstKind.html), [Gegenbauer Polynomial](https://mathworld.wolfram.com/GegenbauerPolynomial.html), [Jacobi Function of the Second Kind](https://mathworld.wolfram.com/JacobiFunctionoftheSecondKind.html), [Rising Factorial](https://mathworld.wolfram.com/RisingFactorial.html), [Zernike Polynomial](https://mathworld.wolfram.com/ZernikePolynomial.html)

## Related Wolfram sites

[http://functions.wolfram.com/Polynomials/JacobiP/](http://functions.wolfram.com/Polynomials/JacobiP/)

## Explore with Wolfram|Alpha

## References

Abramowitz, M. and Stegun, I. A. (Eds.). "Orthogonal Polynomials." Ch. 22 in *[Handbook of Mathematical Functions with Formulas, Graphs, and Mathematical Tables, 9th printing.](http://www.amazon.com/exec/obidos/ASIN/0486612724/ref=nosim/ericstreasuretro)* New York: Dover, pp. 771-802, 1972.Andrews, G. E.; Askey, R.; and Roy, R. "Jacobi Polynomials and Gram Determinants" and "Generating Functions for Jacobi Polynomials." §6.3 and 6.4 in *[Special Functions.](http://www.amazon.com/exec/obidos/ASIN/0521623219/ref=nosim/ericstreasuretro)* Cambridge, England: Cambridge University Press, pp. 293-306, 1999.Iyanaga, S. and Kawada, Y. (Eds.). "Jacobi Polynomials." Appendix A, Table 20.V in *[Encyclopedic Dictionary of Mathematics.](http://www.amazon.com/exec/obidos/ASIN/0262590204/ref=nosim/ericstreasuretro)* Cambridge, MA: MIT Press, p. 1480, 1980.Koekoek, R. and Swarttouw, R. F. "Jacobi." §1.8 in *The Askey-Scheme of Hypergeometric Orthogonal Polynomials and its* *\-Analogue.* Delft, Netherlands: Technische Universiteit Delft, Faculty of Technical Mathematics and Informatics Report 98-17, pp. 38-44, 1998.Roman, S. "The Theory of the Umbral Calculus I." *J. Math. Anal. Appl.***87**, 58-115, 1982.Szegö, G. "Jacobi Polynomials." Ch. 4 in *[Orthogonal Polynomials, 4th ed.](http://www.amazon.com/exec/obidos/ASIN/0821810235/ref=nosim/ericstreasuretro)* Providence, RI: Amer. Math. Soc., 1975.

## Referenced on Wolfram|Alpha

[Jacobi Polynomial](https://www.wolframalpha.com/input/?i=jacobi+polynomial "Jacobi Polynomial")

## Cite this as:

"Jacobi Polynomial." From [*MathWorld*](https://mathworld.wolfram.com/) --A Wolfram Resource. [https://mathworld.wolfram.com/JacobiPolynomial.html](https://mathworld.wolfram.com/JacobiPolynomial.html)

## Subject classifications

[Find out if you already have access to Wolfram tech through your organization](https://www.wolfram.com/siteinfo/)

×