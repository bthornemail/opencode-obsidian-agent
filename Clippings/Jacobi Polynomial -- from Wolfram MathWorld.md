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
The Jacobi polynomials, also known as hypergeometric polynomials, occur in the study of [rotation groups](https://mathworld.wolfram.com/RotationGroup.html) and in the solution to the equations of motion of the symmetric top. They are solutions to the [Jacobi differential equation](https://mathworld.wolfram.com/JacobiDifferentialEquation.html), and give some other special named polynomials as special cases. They are implemented in the [Wolfram Language](http://www.wolfram.com/language/) as [JacobiP](http://reference.wolfram.com/language/ref/JacobiP.html)\[*n*, *a*, *b*, *z*\].

For ![alpha=beta=0](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline1.svg), ![P_n^((0,0))(x)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline2.svg) reduces to a [Legendre polynomial](https://mathworld.wolfram.com/LegendrePolynomial.html). The [Gegenbauer polynomial](https://mathworld.wolfram.com/GegenbauerPolynomial.html)

| ![ G_n(p,q,x)=(n!Gamma(n+p))/(Gamma(2n+p))P_n^((p-q,q-1))(2x-1) ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation1.svg) | (1) |
| --- | --- |

and [Chebyshev polynomial of the first kind](https://mathworld.wolfram.com/ChebyshevPolynomialoftheFirstKind.html) can also be viewed as special cases of the Jacobi polynomials.

Plugging

| ![ y=sum_(nu=0)^inftya_nu(x-1)^nu ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation2.svg) | (2) |
| --- | --- |

into the [Jacobi differential equation](https://mathworld.wolfram.com/JacobiDifferentialEquation.html) gives the [recurrence relation](https://mathworld.wolfram.com/RecurrenceRelation.html)

| ![ [gamma-nu(nu+alpha+beta+1)]a_nu-2(nu+1)(nu+alpha+1)a_(nu+1)=0 ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation3.svg) | (3) |
| --- | --- |

for ![nu=0](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline3.svg), 1, ..., where

| ![ gamma=n(n+alpha+beta+1). ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation4.svg) | (4) |
| --- | --- |

Solving the [recurrence relation](https://mathworld.wolfram.com/RecurrenceRelation.html) gives

| ![ P_n^((alpha,beta))(x)=((-1)^n)/(2^nn!)(1-x)^(-alpha)(1+x)^(-beta)(d^n)/(dx^n)[(1-x)^(alpha+n)(1+x)^(beta+n)] ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation5.svg) | (5) |
| --- | --- |

for ![alpha,beta>-1](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline4.svg). They form a complete orthogonal system in the interval ![[-1,1]](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline5.svg) with respect to the weighting function

| ![ w_n(x)=(1-x)^alpha(1+x)^beta, ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation6.svg) | (6) |
| --- | --- |

and are normalized according to

| ![ P_n^((alpha,beta))(1)=(n+alpha; n), ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation7.svg) | (7) |
| --- | --- |

where ![(n; k)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline6.svg) is a [binomial coefficient](https://mathworld.wolfram.com/BinomialCoefficient.html). Jacobi polynomials can also be written

| ![ P_n^((alpha,beta))=(Gamma(2n+alpha+beta+1))/(n!Gamma(n+alpha+beta+1))G_n(alpha+beta+1,beta+1,1/2(x+1)), ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation8.svg) | (8) |
| --- | --- |

where ![Gamma(z)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline7.svg) is the [gamma function](https://mathworld.wolfram.com/GammaFunction.html) and

| ![ G_n(p,q,x)=(n!Gamma(n+p))/(Gamma(2n+p))P_n^((p-q,q-1))(2x-1). ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation9.svg) | (9) |
| --- | --- |

Jacobi polynomials are [orthogonal polynomials](https://mathworld.wolfram.com/OrthogonalPolynomials.html) and satisfy

| ![ int_(-1)^1P_m^((alpha,beta))P_n^((alpha,beta))(1-x)^alpha(1+x)^betadx  =(2^(alpha+beta+1))/(2n+alpha+beta+1)(Gamma(n+alpha+1)Gamma(n+beta+1))/(n!Gamma(n+alpha+beta+1))delta_(mn).  ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation10.svg) | (10) |
| --- | --- |

The [coefficient](https://mathworld.wolfram.com/Coefficient.html) of the term ![x^n](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline8.svg) in ![P_n^((alpha,beta))(x)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline9.svg) is given by

| ![ A_n=(Gamma(2n+alpha+beta+1))/(2^nn!Gamma(n+alpha+beta+1)). ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation11.svg) | (11) |
| --- | --- |

They satisfy the [recurrence relation](https://mathworld.wolfram.com/RecurrenceRelation.html)

| ![ 2(n+1)(n+alpha+beta+1)(2n+alpha+beta)P_(n+1)^((alpha,beta))(x)  =[(2n+alpha+beta+1)(alpha^2-beta^2)+(2n+alpha+beta)_3x]P_n^((alpha,beta))(x)-2(n+alpha)(n+beta)(2n+alpha+beta+2)P_(n-1)^((alpha,beta))(x),  ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation12.svg) | (12) |
| --- | --- |

where ![(m)_n](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline10.svg) is a [Pochhammer symbol](https://mathworld.wolfram.com/PochhammerSymbol.html)

| ![ (m)_n=m(m+1)...(m+n-1)=((m+n-1)!)/((m-1)!). ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation13.svg) | (13) |
| --- | --- |

The [derivative](https://mathworld.wolfram.com/Derivative.html) is given by

| ![ d/(dx)[P_n^((alpha,beta))(x)]=1/2(n+alpha+beta+1)P_(n-1)^((alpha+1,beta+1))(x). ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation14.svg) | (14) |
| --- | --- |

The [orthogonal polynomials](https://mathworld.wolfram.com/OrthogonalPolynomials.html) with weighting function ![(b-x)^alpha(x-a)^beta](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline11.svg) on the [closed interval](https://mathworld.wolfram.com/ClosedInterval.html) ![[a,b]](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline12.svg) can be expressed in the form

| ![ [const]P_n^((alpha,beta))(2(x-a)/(b-a)-1) ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation15.svg) | (15) |
| --- | --- |

(Szegö 1975, p. 58).

Special cases with ![alpha=beta](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline13.svg) are

| ![P_(2nu)^((alpha,alpha))(x)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline14.svg) | ![=](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline15.svg) | ![(Gamma(2nu+alpha+1)Gamma(nu+1))/(Gamma(nu+alpha+1)Gamma(2nu+1))P_nu^((alpha,-1/2))(2x^2-1)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline16.svg) | (16) |
| --- | --- | --- | --- |
| ![](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline17.svg) | ![=](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline18.svg) | ![(-1)^nu(Gamma(2nu+alpha+1)Gamma(nu+1))/(Gamma(nu+alpha+1)Gamma(2nu+1))P_nu^((-1/2,alpha))(1-2x^2)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline19.svg) | (17) |
| ![P_(2nu+1)^((alpha,alpha))(x)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline20.svg) | ![=](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline21.svg) | ![(Gamma(2nu+alpha+2)Gamma(nu+1))/(Gamma(nu+alpha+1)Gamma(2nu+2))xP_nu^((alpha,1/2))(2x^2-1)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline22.svg) | (18) |
| ![](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline23.svg) | ![=](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline24.svg) | ![(-1)^nu(Gamma(2nu+alpha+2)Gamma(nu+1))/(Gamma(nu+alpha+1)Gamma(2nu+2))xP_nu^((1/2,alpha))(1-2x^2).](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline25.svg) | (19) |

Further identities are

| ![P_n^((alpha+1,beta))(x)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline26.svg) | ![=](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline27.svg) | ![2/(2n+alpha+beta+2)((n+alpha+1)P_n^((alpha,beta))-(n+1)P_(n+1)^((alpha,beta))(x))/(1-x)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline28.svg) | (20) |
| --- | --- | --- | --- |
| ![P_n^((alpha,beta+1))(x)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline29.svg) | ![=](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline30.svg) | ![2/(2n+alpha+beta+2)((n+beta+1)P_n^((alpha,beta))(x)+(n+1)P_(n+1)^((alpha,beta))(x))/(1+x)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline31.svg) | (21) |

| ![ sum_(nu=0)^n(2nu+alpha+beta+1)/(2^(alpha+beta+1))(Gamma(nu+1)Gamma(nu+alpha+beta+1))/(Gamma(nu+alpha+1)Gamma(nu+beta+1))P_nu^((alpha,beta))(x)Q_nu^((alpha,beta))(y)  =1/2((y-1)^(-alpha)(y+1)^(-beta))/(y-x)+(2^(-alpha-beta))/(2n+alpha+beta+2)(Gamma(n+2)Gamma(n+alpha+beta+2))/(Gamma(n+alpha+1)Gamma(n+beta+1))(P_(n+1)^((alpha,beta))(x)Q_n^((alpha,beta))(y)-P_n^((alpha,beta))(x)Q_(n+1)^(alpha,beta)(y))/(x-y)  ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation16.svg) | (22) |
| --- | --- |

(Szegö 1975, p. 79).

The kernel polynomial is

| ![ K_n^((alpha,beta))(x,y)=(2^(-alpha-beta))/(2n+alpha+beta+2)(Gamma(n+2)Gamma(n+alpha+beta+2))/(Gamma(n+alpha+1)Gamma(n+beta+1))(P_(n+1)^((alpha,beta))(x)P_n^((alpha,beta))(y)-P_n^((alpha,beta))(x)P_(n+1)^((alpha,beta))(y))/(x-y)  ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation17.svg) | (23) |
| --- | --- |

(Szegö 1975, p. 71).

The [polynomial discriminant](https://mathworld.wolfram.com/PolynomialDiscriminant.html) is

| ![ D_n^((alpha,beta))=2^(-n(n-1))product_(nu=1)^nnu^(nu-2n+2)(nu+alpha)^(nu-1)(nu+beta)^(nu-1)  ×(n+nu+alpha+beta)^(n-nu)   ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation18.svg) | (24) |
| --- | --- |

(Szegö 1975, p. 143).

In terms of the [hypergeometric function](https://mathworld.wolfram.com/HypergeometricFunction.html),

| ![P_n^((alpha,beta))(x)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline32.svg) | ![=](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline33.svg) | ![(n+alpha; n)_2F_1(-n,n+alpha+beta+1;alpha+1;1/2(1-x))](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline34.svg) | (25) |
| --- | --- | --- | --- |
| ![](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline35.svg) | ![=](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline36.svg) | ![((alpha+1)_n)/(n!)_2F_1(-n,n+alpha+beta+1;alpha+1;1/2(1-x))](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline37.svg) | (26) |
| ![](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline38.svg) | ![=](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline39.svg) | ![(n+alpha; n)((x+1)/2)^n_2F_1(-n,-n-beta;alpha+1;(x-1)/(x+1)),](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline40.svg) | (27) |

where ![(alpha)_n](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline41.svg) is the [Pochhammer symbol](https://mathworld.wolfram.com/PochhammerSymbol.html) (Abramowitz and Stegun 1972, p. 561; Koekoek and Swarttouw 1998).

Let ![N_1](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline42.svg) be the number of zeros in ![x in (-1,1)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline43.svg), ![N_2](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline44.svg) the number of zeros in ![x in (-infty,-1)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline45.svg), and ![N_3](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline46.svg) the number of zeros in ![x in (1,infty)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline47.svg). Define Klein's symbol

| ![ E(u)={0   if u<=0; \|_u_\|   if u positive and nonintegral; u-1   if u=1, 2, ..., ](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/NumberedEquation19.svg) | (28) |
| --- | --- | --- | --- |

where ![|_x_|](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline48.svg) is the [floor function](https://mathworld.wolfram.com/FloorFunction.html), and

| ![X(alpha,beta)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline49.svg) | ![=](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline50.svg) | ![E[1/2(\|2n+alpha+beta+1\|-\|alpha\|-\|beta\|+1)]](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline51.svg) | (29) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ![Y(alpha,beta)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline52.svg) | ![=](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline53.svg) | ![E[1/2(-\|2n+alpha+beta+1\|+\|alpha\|-\|beta\|+1)]](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline54.svg) | (30) |
| ![Z(alpha,beta)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline55.svg) | ![=](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline56.svg) | ![E[1/2(-\|2n+alpha+beta+1\|-\|alpha\|+\|beta\|+1)].](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline57.svg) | (31) |

If the cases ![alpha=-1](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline58.svg), ![-2](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline59.svg), ..., ![-n](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline60.svg), ![beta=-1](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline61.svg), ![-2](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline62.svg), ..., ![-n](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline63.svg), and ![n+alpha+beta=-1](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline64.svg), ![-2](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline65.svg), ..., ![-n](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline66.svg) are excluded, then the number of zeros of ![P_n^((alpha,beta))](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline67.svg) in the respective intervals are

| ![N_1(alpha,beta)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline68.svg) | ![=](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline69.svg) | ![{2\|_1/2(X+1)_\| for (-1)^n(n+alpha; n)(n+beta; n)>0; 2\|_1/2X_\|+1 for (-1)^n(n+alpha; n)(n+beta; n)<0](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline70.svg) | (32) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ![N_2(alpha,beta)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline71.svg) | ![=](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline72.svg) | ![{2\|_1/2(Y+1)_\| for (2n+alpha+beta; n)(n+beta; n)>0; 2\|_1/2Y_\|+1 for (2n+alpha+beta; n)(n+beta; n)<0](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline73.svg) | (33) |
| ![N_3(alpha,beta)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline74.svg) | ![=](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline75.svg) | ![{2\|_1/2(Z+1)_\| for (2n+alpha+beta; n)(n+alpha; n)>0; 2\|_1/2Z_\|+1 for (2n+alpha+beta; n)(n+alpha; n)<0](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline76.svg) | (34) |

(Szegö 1975, pp. 144-146), where ![|_x_|](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline77.svg) is again the [floor function](https://mathworld.wolfram.com/FloorFunction.html).

The first few [polynomials](https://mathworld.wolfram.com/Polynomial.html) are

| ![P_0^((alpha,beta))(x)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline78.svg) | ![=](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline79.svg) | ![1](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline80.svg) | (35) |
| --- | --- | --- | --- |
| ![P_1^((alpha,beta))(x)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline81.svg) | ![=](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline82.svg) | ![1/2[2(alpha+1)+(alpha+beta+2)(x-1)]](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline83.svg) | (36) |
| ![P_2^((alpha,beta))(x)](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline84.svg) | ![=](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline85.svg) | ![1/8[4(alpha+1)(alpha+2)+4(alpha+beta+3)(alpha+2)(x-1)+(alpha+beta+3)(alpha+beta+4)(x-1)^2]](https://mathworld.wolfram.com/images/equations/JacobiPolynomial/Inline86.svg) | (37) |

(Abramowitz and Stegun 1972, p. 793).

See Abramowitz and Stegun (1972, pp. 782-793) and Szegö (1975, Ch. 4) for additional identities.