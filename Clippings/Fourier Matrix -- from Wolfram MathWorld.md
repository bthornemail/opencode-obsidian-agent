---
title: "Fourier Matrix -- from Wolfram MathWorld"
source: "https://mathworld.wolfram.com/FourierMatrix.html"
author:
  - "[[Weisstein]]"
  - "[[Eric W.]]"
published:
created: 2025-09-27
description: "The n×n square matrix F_n with entries given by  F_(jk)=e^(2piijk/n)=omega^(jk)  (1)   for j,k=0, 1, 2, ..., n-1, where i is the imaginary number i=sqrt(-1), and normalized by 1/sqrt(n) to make it a unitary. The Fourier matrix F_2 is given by  F_2=1/(sqrt(2))[1 1; 1 i^2],  (2)   and the F_4 matrix by F_4 = 1/(sqrt(4))[1 1 1 1; 1 i i^2 i^3; 1 i^2 i^4 i^6; 1 i^3 i^6 i^9] (3)   = 1/2[1  1 ;  1  i; 1  -1 ;  1  -i][1 1  ; 1 i^2  ;   1 1;   1 i^2][1   ;   1 ;  1  ;    1]. (4)   In general, ..."
tags:
  - "clippings"
---
The [square matrix](https://mathworld.wolfram.com/SquareMatrix.html) with entries given by

|  | (1) |
| --- | --- |

for , 1, 2,..., , where [*i*](https://mathworld.wolfram.com/i.html) is the [imaginary number](https://mathworld.wolfram.com/ImaginaryNumber.html), and normalized by to make it a [unitary](https://mathworld.wolfram.com/UnitaryMatrix.html). The Fourier matrix is given by

| ![ F_2=1/(sqrt(2))[1 1; 1 i^2], ](https://mathworld.wolfram.com/images/equations/FourierMatrix/NumberedEquation2.svg) | (2) |
| --- | --- |

and the matrix by

|  |  | ![1/(sqrt(4))[1 1 1 1; 1 i i^2 i^3; 1 i^2 i^4 i^6; 1 i^3 i^6 i^9]](https://mathworld.wolfram.com/images/equations/FourierMatrix/Inline11.svg) | (3) |
| --- | --- | --- | --- |
|  |  | ![1/2[1  1 ;  1  i; 1  -1 ;  1  -i][1 1  ; 1 i^2  ;   1 1;   1 i^2][1   ;   1 ;  1  ;    1].](https://mathworld.wolfram.com/images/equations/FourierMatrix/Inline14.svg) | (4) |

In general,

| ![ F_(2n)=[I_n D_n; I_n -D_n][F_n ;  F_n][ even-odd ;  shuffle ], ](https://mathworld.wolfram.com/images/equations/FourierMatrix/NumberedEquation3.svg) | (5) |
| --- | --- |

with

| ![ [F_n ;  F_n]=[I_(n/2) D_(n/2)  ; I_(n/2) -D_(n/2)  ;   I_(n/2) D_(n/2);   I_(n/2) -D_(n/2)]  ×[F_(n/2)   ;  F_(n/2)  ;   F_(n/2) ;    F_(n/2)][even-odd; 0,2 (mod 4); even-odd; 1,3 (mod 4)],   ](https://mathworld.wolfram.com/images/equations/FourierMatrix/NumberedEquation4.svg) | (6) |
| --- | --- |

where is the [identity matrix](https://mathworld.wolfram.com/IdentityMatrix.html) and is the [diagonal matrix](https://mathworld.wolfram.com/DiagonalMatrix.html) with entries 1, ,..., . Note that the factorization (which is the basis of the [fast Fourier transform](https://mathworld.wolfram.com/FastFourierTransform.html)) has two copies of in the center factor [matrix](https://mathworld.wolfram.com/Matrix.html).