---
title: "Haar Function -- from Wolfram MathWorld"
source: "https://mathworld.wolfram.com/HaarFunction.html"
author:
  - "[[Weisstein]]"
  - "[[Eric W.]]"
published:
created: 2025-09-27
description: "Define  psi(x)={1   0<=x<1/2; -1   1/2<x<=1; 0   otherwise  (1)   and  psi_(jk)(x)=psi(2^jx-k)  (2)   for j a nonnegative integer and 0<=k<=2^j-1.  So, for example, the first few values of psi_(jk)(x) are psi_(00) = psi(x) (3)  psi_(10) = psi(2x) (4)  psi_(11) = psi(2x-1) (5)  psi_(20) = psi(4x) (6)  psi_(21) = psi(4x-1) (7)  psi_(22) = psi(4x-2) (8)  psi_(23) = psi(4x-3). (9)   Then a function f(x) can be written as a series expansion by ..."
tags:
  - "clippings"
---
Define

| ![ psi(x)={1   0<=x<1/2; -1   1/2<x<=1; 0   otherwise ](https://mathworld.wolfram.com/images/equations/HaarFunction/NumberedEquation1.svg) | (1) |
| --- | --- |

and

|  | (2) |
| --- | --- |

for a nonnegative integer and .

![HaarFns](https://mathworld.wolfram.com/images/eps-svg/HaarFns_900.svg)

So, for example, the first few values of are

|  |  |  | (3) |
| --- | --- | --- | --- |
|  |  |  | (4) |
|  |  |  | (5) |
|  |  |  | (6) |
|  |  |  | (7) |
|  |  |  | (8) |
|  |  |  | (9) |

Then a [function](https://mathworld.wolfram.com/Function.html) can be written as a series expansion by

| ![ f(x)=c_0+sum_(j=0)^inftysum_(k=0)^(2^j-1)c_(jk)psi_(jk)(x). ](https://mathworld.wolfram.com/images/equations/HaarFunction/NumberedEquation3.svg) | (10) |
| --- | --- |

The [functions](https://mathworld.wolfram.com/Function.html) and are all [orthogonal](https://mathworld.wolfram.com/OrthogonalFunctions.html) in , with

| ![int_0^1psi(x)psi_(jk)(x)dx](https://mathworld.wolfram.com/images/equations/HaarFunction/Inline29.svg) |  |  | (11) |
| --- | --- | --- | --- |
| ![int_0^1psi_(jk)(x)psi_(lm)(x)dx](https://mathworld.wolfram.com/images/equations/HaarFunction/Inline32.svg) |  |  | (12) |

for in the first case and in the second.

These functions can be used to define [wavelets](https://mathworld.wolfram.com/Wavelet.html). Let a [function](https://mathworld.wolfram.com/Function.html) be defined on intervals, with a [power](https://mathworld.wolfram.com/Power.html) of 2. Then an arbitrary function can be considered as an - [vector](https://mathworld.wolfram.com/Vector.html), and the [coefficients](https://mathworld.wolfram.com/Coefficient.html) in the expansion can be determined by solving the [matrix equation](https://mathworld.wolfram.com/MatrixEquation.html)

|  | (13) |
| --- | --- |

for , where is the [matrix](https://mathworld.wolfram.com/Matrix.html) of basis functions. For example, the fourth-order Haar function [wavelet matrix](https://mathworld.wolfram.com/WaveletMatrix.html) is given by

|  |  | ![[1  1  1  0;  1  1 -1  0;  1 -1  0  1;  1 -1  0 -1]](https://mathworld.wolfram.com/images/equations/HaarFunction/Inline47.svg) | (14) |
| --- | --- | --- | --- |
|  |  | ![[1  1  0  0;  1 -1  0  0;  0  0  1  1;  0  0  1 -1][1  0  0  0;  0  0  1  0;  0  1  0  0;  0  0  0  1][1  1  0  0;  1 -1  0  0;  0  0  1  0;  0  0  0  1].](https://mathworld.wolfram.com/images/equations/HaarFunction/Inline50.svg) | (15) |