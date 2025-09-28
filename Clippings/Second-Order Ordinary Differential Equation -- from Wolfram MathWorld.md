---
title: "Second-Order Ordinary Differential Equation -- from Wolfram MathWorld"
source: "https://mathworld.wolfram.com/Second-OrderOrdinaryDifferentialEquation.html"
author:
  - "[[Weisstein]]"
  - "[[Eric W.]]"
published:
created: 2025-09-27
description: "An ordinary differential equation of the form  y^('')+P(x)y^'+Q(x)y=0.  (1)   Such an equation has singularities for finite x=x_0 under the following conditions: (a) If either P(x) or Q(x) diverges as x->x_0, but (x-x_0)P(x) and (x-x_0)^2Q(x) remain finite as x->x_0, then x_0 is called a regular or nonessential singular point. (b) If P(x) diverges faster than (x-x_0)^(-1) so that (x-x_0)P(x)->infty as x->x_0, or Q(x) diverges faster than (x-x_0)^(-2) so that..."
tags:
  - "clippings"
---
## Second-Order Ordinary Differential Equation

---

An [ordinary differential equation](https://mathworld.wolfram.com/OrdinaryDifferentialEquation.html) of the form

|  | (1) |
| --- | --- |

Such an equation has singularities for finite under the following conditions: (a) If either or diverges as , but and remain finite as , then is called a regular or nonessential singular point. (b) If diverges faster than so that as , or diverges faster than so that as , then is called an irregular or essential singularity.

Singularities of equation ([1](https://mathworld.wolfram.com/#eqn1)) at infinity are investigated by making the substitution , so , giving

| ![ (dy)/(dx)=-z^2(dy)/(dz) ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation2.svg) | (2) |
| --- | --- |

| ![(d^2y)/(dx^2)](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline20.svg) |  | ![-z^2d/(dz)(-z^2(dy)/(dz))](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline22.svg) | (3) |
| --- | --- | --- | --- |
|  |  | ![-z^2(-2z(dy)/(dz)-z^2(d^2y)/(dz^2))](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline25.svg) | (4) |
|  |  | ![2z^3(dy)/(dz)+z^4(d^2y)/(dz^2).](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline28.svg) | (5) |

Then ([3](https://mathworld.wolfram.com/#eqn3)) becomes

| ![ z^4(d^2y)/(dz^2)+[2z^3-z^2P(z^(-1))](dy)/(dz)+Q(z^(-1))y=0. ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation3.svg) | (6) |
| --- | --- |

Case (a): If

|  |  | ![(2z-P(z^(-1)))/(z^2)](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline31.svg) | (7) |
| --- | --- | --- | --- |
|  |  | ![(Q(z^(-1)))/(z^4)](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline34.svg) | (8) |

remain finite at (), then the point is ordinary. Case (b): If either diverges no more rapidly than or diverges no more rapidly than , then the point is a regular singular point. Case (c): Otherwise, the point is an irregular singular point.

Morse and Feshbach (1953, pp. 667-674) give the canonical forms and solutions for second-order ordinary differential equations classified by types of singular points.

For special classes of linear second-order ordinary differential equations, variable [coefficients](https://mathworld.wolfram.com/Coefficient.html) can be transformed into constant [coefficients](https://mathworld.wolfram.com/Coefficient.html). Given a second-order linear ODE with variable [coefficients](https://mathworld.wolfram.com/Coefficient.html)

| ![ (d^2y)/(dx^2)+p(x)(dy)/(dx)+q(x)y=0. ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation4.svg) | (9) |
| --- | --- |

Define a function ,

| ![(dy)/(dx)=(dz)/(dx)(dy)/(dz) ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline42.svg) | (10) |
| --- | --- |
| ![(d^2y)/(dx^2)=((dz)/(dx))^2(d^2y)/(dz^2)+(d^2z)/(dx^2)(dy)/(dz) ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline43.svg) | (11) |
| ![((dz)/(dx))^2(d^2y)/(dz^2)+[(d^2z)/(dx^2)+p(x)(dz)/(dx)](dy)/(dz)+q(x)y=0 ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline44.svg) | (12) |
| ![(d^2y)/(dz^2)+[((d^2z)/(dx^2)+p(x)(dz)/(dx))/(((dz)/(dx))^2)](dy)/(dz)+[(q(x))/(((dz)/(dx))^2)]y ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline45.svg) | (13) |
| ![=(d^2y)/(dz^2)+A(dy)/(dz)+By=0. ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline46.svg) | (14) |

This will have constant [coefficients](https://mathworld.wolfram.com/Coefficient.html) if and are not functions of . But we are free to set to an arbitrary [positive](https://mathworld.wolfram.com/Positive.html) constant for by defining as

| ![ z=B^(-1/2)int[q(x)]^(1/2)dx. ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation5.svg) | (15) |
| --- | --- |

Then

|  |  |  | (16) |
| --- | --- | --- | --- |
| ![(d^2z)/(dx^2)](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline56.svg) |  |  | (17) |

and

|  |  | ![(1/2B^(-1/2)[q(x)]^(-1/2)q^'(x)+B^(-1/2)p(x)[q(x)]^(1/2))/(B^(-1)q(x))](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline61.svg) | (18) |
| --- | --- | --- | --- |
|  |  | ![(q^'(x)+2p(x)q(x))/(2[q(x)]^(3/2))B^(1/2).](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline64.svg) | (19) |

Equation (◇) therefore becomes

| ![ (d^2y)/(dz^2)+(q^'(x)+2p(x)q(x))/(2[q(x)]^(3/2))B^(1/2)(dy)/(dz)+By=0, ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation6.svg) | (20) |
| --- | --- |

which has constant [coefficients](https://mathworld.wolfram.com/Coefficient.html) provided that

| ![ A=(q^'(x)+2p(x)q(x))/(2[q(x)]^(3/2))B^(1/2)=[constant]. ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation7.svg) | (21) |
| --- | --- |

Eliminating constants, this gives

| ![ A^'=(q^'(x)+2p(x)q(x))/([q(x)]^(3/2))=[constant]. ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation8.svg) | (22) |
| --- | --- |

So for an ordinary differential equation in which is a constant, the solution is given by solving the second-order linear ODE with constant [coefficients](https://mathworld.wolfram.com/Coefficient.html)

| ![ (d^2y)/(dz^2)+A(dy)/(dz)+By=0 ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation9.svg) | (23) |
| --- | --- |

for , where is defined as above.

A linear second-order homogeneous differential equation of the general form

|  | (24) |
| --- | --- |

can be transformed into standard form

|  | (25) |
| --- | --- |

with the first-order term eliminated using the substitution

| ![ lny=lnz-1/2intP(x)dx. ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation12.svg) | (26) |
| --- | --- |

Then

| ![(y^')/y=(z^')/z-1/2P(x) ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline68.svg) | (27) |
| --- | --- |
| ![(yy^('')-y^('2))/(y^2)=(zz^('')-z^('2))/(z^2)-1/2P^'(x) ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline69.svg) | (28) |
| ![(y^(''))/y-((y^')/y)^2=(z^(''))/z-(z^('2))/(z^2)-1/2P^'(x) ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline70.svg) | (29) |
| ![(y^(''))/y=[(z^')/z-1/2P(x)]^2+(z^(''))/z-(z^('2))/(z^2)-1/2P^'(x) ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline71.svg) | (30) |
| ![=(z^('2))/(z^2)-(z^')/zP(x)+1/4P^2(x)+(z^(''))/z-(z^('2))/(z^2)-1/2P^'(x), ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline72.svg) | (31) |

so

| ![(y^(''))/y+P(x)(y^')/y+Q(x)](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline73.svg) |  | ![-(z^')/zP(x)+1/4P^2(x)+(z^(''))/z-1/2P^'(x)+P(x)[(z^')/z-1/2P(x)]+Q(x)](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline75.svg) | (32) |
| --- | --- | --- | --- |
|  |  | ![(z^(''))/z-1/2P^'(x)-1/4P^2(x)+Q(x)=0.](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/Inline78.svg) | (33) |

Therefore,

|  | (34) |
| --- | --- |

where

|  | (35) |
| --- | --- |

If , then the differential equation becomes

|  | (36) |
| --- | --- |

which can be solved by multiplying by

| ![ exp[int^xP(x^')dx^'] ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation16.svg) | (37) |
| --- | --- |

to obtain

| ![ 0=d/(dx){exp[int^xP(x^')dx^'](dy)/(dx)} ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation17.svg) | (38) |
| --- | --- |

| ![ c_1=exp[int^xP(x^')dx^'](dy)/(dx) ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation18.svg) | (39) |
| --- | --- |

| ![ y=c_1int^x(dx)/(exp[int^xP(x^')dx^'])+c_2. ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation19.svg) | (40) |
| --- | --- |

For a nonhomogeneous second-order ordinary differential equation in which the term does not appear in the function ,

| ![ (d^2y)/(dx^2)=f(y,y^'), ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation20.svg) | (41) |
| --- | --- |

let , then

| ![ (dv)/(dx)=f(v,y)=(dv)/(dy)(dy)/(dx)=v(dv)/(dy). ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation21.svg) | (42) |
| --- | --- |

So the first-order ODE

| ![ v(dv)/(dy)=f(y,v), ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation22.svg) | (43) |
| --- | --- |

if linear, can be solved for as a linear first-order ODE. Once the solution is known,

| ![ (dy)/(dx)=v(y) ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation23.svg) | (44) |
| --- | --- |

| ![ int(dy)/(v(y))=intdx. ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation24.svg) | (45) |
| --- | --- |

On the other hand, if is missing from ,

| ![ (d^2y)/(dx^2)=f(x,y^'), ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation25.svg) | (46) |
| --- | --- |

let , then , and the equation reduces to

|  | (47) |
| --- | --- |

which, if linear, can be solved for as a linear first-order ODE. Once the solution is known,

| ![ y=intv(x)dx. ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation27.svg) | (48) |
| --- | --- |

Nonhomogeneous ordinary differential equations can be solved if the general solution to the homogenous version is known, in which case [variation of parameters](https://mathworld.wolfram.com/VariationofParameters.html) can be used to find the particular solution. In particular, the particular solution to a nonhomogeneous second-order ordinary differential equation

|  | (49) |
| --- | --- |

can be found using [variation of parameters](https://mathworld.wolfram.com/VariationofParameters.html) to be given by the equation

| ![ y^*(x)=-y_1(x)int(y_2(x)g(x))/(W(x))dx+y_2(x)int(y_1(x)g(x))/(W(x))dx, ](https://mathworld.wolfram.com/images/equations/Second-OrderOrdinaryDifferentialEquation/NumberedEquation29.svg) | (50) |
| --- | --- |

where and are the homogeneous solutions to the unforced equation

|  | (51) |
| --- | --- |

and is the [Wronskian](https://mathworld.wolfram.com/Wronskian.html) of these two functions.

---

## See also

[Abel's Differential Equation Identity](https://mathworld.wolfram.com/AbelsDifferentialEquationIdentity.html), [Adjoint](https://mathworld.wolfram.com/Adjoint.html), [First-Order Ordinary Differential Equation](https://mathworld.wolfram.com/First-OrderOrdinaryDifferentialEquation.html), [Ordinary Differential Equation](https://mathworld.wolfram.com/OrdinaryDifferentialEquation.html), [Second-Order Ordinary Differential Equation Second Solution](https://mathworld.wolfram.com/Second-OrderOrdinaryDifferentialEquationSecondSolution.html), [Undetermined Coefficients Method](https://mathworld.wolfram.com/UndeterminedCoefficientsMethod.html), [Variation of Parameters](https://mathworld.wolfram.com/VariationofParameters.html) [Explore this topic in the MathWorld classroom](https://mathworld.wolfram.com/classroom/Second-OrderOrdinaryDifferentialEquation.html)

## Explore with Wolfram|Alpha

## References

Arfken, G. "A Second Solution." §8.6 in *[Mathematical Methods for Physicists, 3rd ed.](http://www.amazon.com/exec/obidos/ASIN/0120598760/ref=nosim/ericstreasuretro)* Orlando, FL: Academic Press, pp. 467-480, 1985.Boyce, W. E. and DiPrima, R. C. *[Elementary Differential Equations and Boundary Value Problems, 4th ed.](http://www.amazon.com/exec/obidos/ASIN/0471089559/ref=nosim/ericstreasuretro)* New York: Wiley, 1986.Morse, P. M. and Feshbach, H. *[Methods of Theoretical Physics, Part I.](http://www.amazon.com/exec/obidos/ASIN/007043316X/ref=nosim/ericstreasuretro)* New York: McGraw-Hill, pp. 667-674, 1953.

## Referenced on Wolfram|Alpha

[Second-Order Ordinary Differential Equation](https://www.wolframalpha.com/input/?i=second-order+ordinary+differential+equation "Second-Order Ordinary Differential Equation")

## Cite this as:

"Second-Order Ordinary Differential Equation." From [*MathWorld*](https://mathworld.wolfram.com/) --A Wolfram Resource. [https://mathworld.wolfram.com/Second-OrderOrdinaryDifferentialEquation.html](https://mathworld.wolfram.com/Second-OrderOrdinaryDifferentialEquation.html)

## Subject classifications

[Find out if you already have access to Wolfram tech through your organization](https://www.wolfram.com/siteinfo/)

×