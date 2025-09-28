---
title: "Fourier Series -- from Wolfram MathWorld"
source: "https://mathworld.wolfram.com/FourierSeries.html"
author:
  - "[[Weisstein]]"
  - "[[Eric W.]]"
published:
created: 2025-09-27
description: "A Fourier series is an expansion of a periodic function f(x) in terms of an infinite sum of sines and cosines. Fourier series make use of the orthogonality relationships of the sine and cosine functions. The computation and study of Fourier series is known as harmonic analysis and is extremely useful as a way to break up an arbitrary periodic function into a set of simple terms that can be plugged in, solved individually, and then recombined to obtain the solution to the original problem or..."
tags:
  - "clippings"
---
## Fourier Series

---

[Download Notebook](https://mathworld.wolfram.com/notebooks/Calculus/FourierSeries.nb)

![FourierSeriesExamples](https://mathworld.wolfram.com/images/eps-svg/FourierSeriesExamples_1200.svg)

A Fourier series is an expansion of a [periodic function](https://mathworld.wolfram.com/PeriodicFunction.html) in terms of an infinite sum of [sines](https://mathworld.wolfram.com/Sine.html) and [cosines](https://mathworld.wolfram.com/Cosine.html). Fourier series make use of the [orthogonality](https://mathworld.wolfram.com/OrthogonalFunctions.html) relationships of the [sine](https://mathworld.wolfram.com/Sine.html) and [cosine](https://mathworld.wolfram.com/Cosine.html) functions. The computation and study of Fourier series is known as [harmonic analysis](https://mathworld.wolfram.com/HarmonicAnalysis.html) and is extremely useful as a way to break up an *arbitrary* periodic function into a set of simple terms that can be plugged in, solved individually, and then recombined to obtain the solution to the original problem or an approximation to it to whatever accuracy is desired or practical. Examples of successive approximations to common functions using Fourier series are illustrated above.

In particular, since the [superposition principle](https://mathworld.wolfram.com/SuperpositionPrinciple.html) holds for solutions of a linear homogeneous [ordinary differential equation](https://mathworld.wolfram.com/OrdinaryDifferentialEquation.html), if such an equation can be solved in the case of a single sinusoid, the solution for an arbitrary function is immediately available by expressing the original function as a Fourier series and then plugging in the solution for each sinusoidal component. In some special cases where the Fourier series can be summed in closed form, this technique can even yield analytic solutions.

Any set of functions that form a [complete orthogonal system](https://mathworld.wolfram.com/CompleteOrthogonalSystem.html) have a corresponding [generalized Fourier series](https://mathworld.wolfram.com/GeneralizedFourierSeries.html) analogous to the Fourier series. For example, using orthogonality of the roots of a [Bessel function of the first kind](https://mathworld.wolfram.com/BesselFunctionoftheFirstKind.html) gives a so-called [Fourier-Bessel series](https://mathworld.wolfram.com/Fourier-BesselSeries.html).

The computation of the (usual) Fourier series is based on the integral identities

| ![int_(-pi)^pisin(mx)sin(nx)dx](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline2.svg) |  |  | (1) |
| --- | --- | --- | --- |
| ![int_(-pi)^picos(mx)cos(nx)dx](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline5.svg) |  |  | (2) |
| ![int_(-pi)^pisin(mx)cos(nx)dx](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline8.svg) |  |  | (3) |
| ![int_(-pi)^pisin(mx)dx](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline11.svg) |  |  | (4) |
| ![int_(-pi)^picos(mx)dx](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline14.svg) |  |  | (5) |

for , where is the [Kronecker delta](https://mathworld.wolfram.com/KroneckerDelta.html).

Using the method for a [generalized Fourier series](https://mathworld.wolfram.com/GeneralizedFourierSeries.html), the usual Fourier series involving sines and cosines is obtained by taking and . Since these functions form a [complete orthogonal system](https://mathworld.wolfram.com/CompleteOrthogonalSystem.html) over , the Fourier series of a function is given by

| ![ f(x)=1/2a_0+sum_(n=1)^inftya_ncos(nx)+sum_(n=1)^inftyb_nsin(nx), ](https://mathworld.wolfram.com/images/equations/FourierSeries/NumberedEquation1.svg) | (6) |
| --- | --- |

where

|  |  | ![1/piint_(-pi)^pif(x)dx](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline25.svg) | (7) |
| --- | --- | --- | --- |
|  |  | ![1/piint_(-pi)^pif(x)cos(nx)dx](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline28.svg) | (8) |
|  |  | ![1/piint_(-pi)^pif(x)sin(nx)dx](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline31.svg) | (9) |

and , 2, 3,.... Note that the coefficient of the constant term has been written in a special form compared to the general form for a [generalized Fourier series](https://mathworld.wolfram.com/GeneralizedFourierSeries.html) in order to preserve symmetry with the definitions of and .

The Fourier cosine coefficient and sine coefficient are implemented in the [Wolfram Language](http://www.wolfram.com/language/) as [FourierCosCoefficient](http://reference.wolfram.com/language/ref/FourierCosCoefficient.html) \[*expr*, *t*, *n*\] and [FourierSinCoefficient](http://reference.wolfram.com/language/ref/FourierSinCoefficient.html) \[*expr*, *t*, *n*\], respectively.

A Fourier series converges to the function (equal to the original function at points of continuity or to the average of the two limits at points of discontinuity)

| ![ f^_={1/2[lim_(x->x_0^-)f(x)+lim_(x->x_0^+)f(x)]   for -pi<x_0<pi; 1/2[lim_(x->-pi^+)f(x)+lim_(x->pi_-)f(x)]   for x_0=-pi,pi ](https://mathworld.wolfram.com/images/equations/FourierSeries/NumberedEquation2.svg) | (10) |
| --- | --- |

if the function satisfies so-called [Dirichlet boundary conditions](https://mathworld.wolfram.com/DirichletBoundaryConditions.html). [Dini's test](https://mathworld.wolfram.com/DinisTest.html) gives a condition for the convergence of Fourier series.

![FourierSeriesSquareWave](https://mathworld.wolfram.com/images/eps-svg/FourierSeriesSquareWave_800.svg)

As a result, near points of discontinuity, a "ringing" known as the [Gibbs phenomenon](https://mathworld.wolfram.com/GibbsPhenomenon.html), illustrated above, can occur.

For a function periodic on an interval instead of , a simple change of variables can be used to transform the interval of integration from to . Let

|  |  |  | (11) |
| --- | --- | --- | --- |
|  |  | ![(pidx^')/L.](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline49.svg) | (12) |

Solving for gives , and plugging this in gives

| ![ f(x^')=1/2a_0+sum_(n=1)^inftya_ncos((npix^')/L)+sum_(n=1)^inftyb_nsin((npix^')/L). ](https://mathworld.wolfram.com/images/equations/FourierSeries/NumberedEquation3.svg) | (13) |
| --- | --- |

Therefore,

|  |  | ![1/Lint_(-L)^Lf(x^')dx^'](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline54.svg) | (14) |
| --- | --- | --- | --- |
|  |  | ![1/Lint_(-L)^Lf(x^')cos((npix^')/L)dx^'](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline57.svg) | (15) |
|  |  | ![1/Lint_(-L)^Lf(x^')sin((npix^')/L)dx^'.](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline60.svg) | (16) |

Similarly, the function is instead defined on the interval , the above equations simply become

|  |  | ![1/Lint_0^(2L)f(x^')dx^'](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline64.svg) | (17) |
| --- | --- | --- | --- |
|  |  | ![1/Lint_0^(2L)f(x^')cos((npix^')/L)dx^'](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline67.svg) | (18) |
|  |  | ![1/Lint_0^(2L)f(x^')sin((npix^')/L)dx^'.](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline70.svg) | (19) |

In fact, for periodic with period , *any* interval can be used, with the choice being one of convenience or personal preference (Arfken 1985, p. 769).

The [coefficients](https://mathworld.wolfram.com/Coefficient.html) for Fourier series expansions of a few common functions are given in Beyer (1987, pp. 411-412) and Byerly (1959, p. 51). One of the most common functions usually analyzed by this technique is the [square wave](https://mathworld.wolfram.com/FourierSeriesSquareWave.html). The Fourier series for a few common functions are summarized in the table below.

| function |  | Fourier series |
| --- | --- | --- |
| [Fourier series--sawtooth wave](https://mathworld.wolfram.com/FourierSeriesSawtoothWave.html) |  |  |
| [Fourier series--square wave](https://mathworld.wolfram.com/FourierSeriesSquareWave.html) |  |  |
| [Fourier series--triangle wave](https://mathworld.wolfram.com/FourierSeriesTriangleWave.html) |  |  |

If a function is [even](https://mathworld.wolfram.com/EvenFunction.html) so that , then is [odd](https://mathworld.wolfram.com/OddFunction.html). (This follows since is [odd](https://mathworld.wolfram.com/OddFunction.html) and an [even function](https://mathworld.wolfram.com/EvenFunction.html) times an [odd function](https://mathworld.wolfram.com/OddFunction.html) is an [odd function](https://mathworld.wolfram.com/OddFunction.html).) Therefore, for all . Similarly, if a function is [odd](https://mathworld.wolfram.com/OddFunction.html) so that , then is [odd](https://mathworld.wolfram.com/OddFunction.html). (This follows since is [even](https://mathworld.wolfram.com/EvenFunction.html) and an [even function](https://mathworld.wolfram.com/EvenFunction.html) times an [odd function](https://mathworld.wolfram.com/OddFunction.html) is an [odd function](https://mathworld.wolfram.com/OddFunction.html).) Therefore, for all .

The notion of a Fourier series can also be extended to [complex](https://mathworld.wolfram.com/ComplexNumber.html) [coefficients](https://mathworld.wolfram.com/Coefficient.html). Consider a real-valued function . Write

| ![ f(x)=sum_(n=-infty)^inftyA_ne^(inx). ](https://mathworld.wolfram.com/images/equations/FourierSeries/NumberedEquation4.svg) | (20) |
| --- | --- |

Now examine

| ![int_(-pi)^pif(x)e^(-imx)dx](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline92.svg) |  | ![int_(-pi)^pi(sum_(n=-infty)^(infty)A_ne^(inx))e^(-imx)dx](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline94.svg) | (21) |
| --- | --- | --- | --- |
|  |  | ![sum_(n=-infty)^(infty)A_nint_(-pi)^pie^(i(n-m)x)dx](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline97.svg) | (22) |
|  |  | ![sum_(n=-infty)^(infty)A_nint_(-pi)^pi{cos[(n-m)x]+isin[(n-m)x]}dx](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline100.svg) | (23) |
|  |  | ![sum_(n=-infty)^(infty)A_n2pidelta_(mn)](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline103.svg) | (24) |
|  |  |  | (25) |

so

| ![ A_n=1/(2pi)int_(-pi)^pif(x)e^(-inx)dx. ](https://mathworld.wolfram.com/images/equations/FourierSeries/NumberedEquation5.svg) | (26) |
| --- | --- |

The [coefficients](https://mathworld.wolfram.com/Coefficient.html) can be expressed in terms of those in the Fourier series

|  |  | ![1/(2pi)int_(-pi)^pif(x)[cos(nx)-isin(nx)]dx](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline109.svg) | (27) |
| --- | --- | --- | --- |
|  |  | ![{1/(2pi)int_(-pi)^pif(x)[cos(nx)+isin(\|n\|x)]dx n<0; 1/(2pi)int_(-pi)^pif(x)dx n=0; 1/(2pi)int_(-pi)^pif(x)[cos(nx)-isin(nx)]dx n>0](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline112.svg) | (28) |
|  |  | ![{1/2(a_n+ib_n) for n<0; 1/2a_0 for n=0; 1/2(a_n-ib_n) for n>0.](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline115.svg) | (29) |

For a function periodic in , these become

|  |  | ![sum_(n=-infty)^(infty)A_ne^(i(2pinx/L))](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline119.svg) | (30) |
| --- | --- | --- | --- |
|  |  | ![1/Lint_(-L/2)^(L/2)f(x)e^(-i(2pinx/L))dx.](https://mathworld.wolfram.com/images/equations/FourierSeries/Inline122.svg) | (31) |

These equations are the basis for the extremely important [Fourier transform](https://mathworld.wolfram.com/FourierTransform.html), which is obtained by transforming from a discrete variable to a continuous one as the length .

The complex Fourier coefficient is implemented in the [Wolfram Language](http://www.wolfram.com/language/) as [FourierCoefficient](http://reference.wolfram.com/language/ref/FourierCoefficient.html) \[*expr*, *t*, *n*\].

---

## See also

[Dini's Test](https://mathworld.wolfram.com/DinisTest.html), [Dirichlet Fourier Series Conditions](https://mathworld.wolfram.com/DirichletFourierSeriesConditions.html), [Fourier-Bessel Series](https://mathworld.wolfram.com/Fourier-BesselSeries.html), [Fourier Cosine Series](https://mathworld.wolfram.com/FourierCosineSeries.html), [Fourier-Legendre Series](https://mathworld.wolfram.com/Fourier-LegendreSeries.html), [Fourier Series--Power](https://mathworld.wolfram.com/FourierSeriesPower.html), [Fourier Series--Sawtooth Wave](https://mathworld.wolfram.com/FourierSeriesSawtoothWave.html), [Fourier Series--Semicircle](https://mathworld.wolfram.com/FourierSeriesSemicircle.html), [Fourier Series--Square Wave](https://mathworld.wolfram.com/FourierSeriesSquareWave.html), [Fourier Series--Triangle Wave](https://mathworld.wolfram.com/FourierSeriesTriangleWave.html), [Fourier Sine Series](https://mathworld.wolfram.com/FourierSineSeries.html), [Fourier Transform](https://mathworld.wolfram.com/FourierTransform.html), [Generalized Fourier Series](https://mathworld.wolfram.com/GeneralizedFourierSeries.html), [Gibbs Phenomenon](https://mathworld.wolfram.com/GibbsPhenomenon.html), [Harmonic Addition Theorem](https://mathworld.wolfram.com/HarmonicAdditionTheorem.html), [Harmonic Analysis](https://mathworld.wolfram.com/HarmonicAnalysis.html), [Lacunary Fourier Series](https://mathworld.wolfram.com/LacunaryFourierSeries.html), [Lebesgue Constants](https://mathworld.wolfram.com/LebesgueConstants.html), [Power Spectrum](https://mathworld.wolfram.com/PowerSpectrum.html), [Riesz-Fischer Theorem](https://mathworld.wolfram.com/Riesz-FischerTheorem.html), [Simple Harmonic Motion](https://mathworld.wolfram.com/SimpleHarmonicMotion.html), [Superposition Principle](https://mathworld.wolfram.com/SuperpositionPrinciple.html) [Explore this topic in the MathWorld classroom](https://mathworld.wolfram.com/classroom/FourierSeries.html)

## Explore with Wolfram|Alpha

## References

Arfken, G. "Fourier Series." Ch. 14 in *[Mathematical Methods for Physicists, 3rd ed.](http://www.amazon.com/exec/obidos/ASIN/0120598760/ref=nosim/ericstreasuretro)* Orlando, FL: Academic Press, pp. 760-793, 1985.Askey, R. and Haimo, D. T. "Similarities between Fourier and Power Series." *Amer. Math. Monthly* **103**, 297-304, 1996.Beyer, W. H. (Ed.). *[CRC Standard Mathematical Tables, 28th ed.](http://www.amazon.com/exec/obidos/ASIN/1584882913/ref=nosim/ericstreasuretro)* Boca Raton, FL: CRC Press, 1987.Brown, J. W. and Churchill, R. V. *[Fourier Series and Boundary Value Problems, 5th ed.](http://www.amazon.com/exec/obidos/ASIN/0070082022/ref=nosim/ericstreasuretro)* New York: McGraw-Hill, 1993.Byerly, W. E. *[An Elementary Treatise on Fourier's Series, and Spherical, Cylindrical, and Ellipsoidal Harmonics, with Applications to Problems in Mathematical Physics.](http://www.amazon.com/exec/obidos/ASIN/0486495469/ref=nosim/ericstreasuretro)* New York: Dover, 1959.Carslaw, H. S. *[Introduction to the Theory of Fourier's Series and Integrals, 3rd ed., rev. and enl.](http://www.amazon.com/exec/obidos/ASIN/0486600483/ref=nosim/ericstreasuretro)* New York: Dover, 1950.Davis, H. F. *[Fourier Series and Orthogonal Functions.](http://www.amazon.com/exec/obidos/ASIN/0486659739/ref=nosim/ericstreasuretro)* New York: Dover, 1963.Dym, H. and McKean, H. P. *[Fourier Series and Integrals.](http://www.amazon.com/exec/obidos/ASIN/0122264517/ref=nosim/ericstreasuretro)* New York: Academic Press, 1972.Folland, G. B. *[Fourier Analysis and Its Applications.](http://www.amazon.com/exec/obidos/ASIN/0534170943/ref=nosim/ericstreasuretro)* Pacific Grove, CA: Brooks/Cole, 1992.Groemer, H. *[Geometric Applications of Fourier Series and Spherical Harmonics.](http://www.amazon.com/exec/obidos/ASIN/0521473187/ref=nosim/ericstreasuretro)* New York: Cambridge University Press, 1996.Körner, T. W. *[Fourier Analysis.](http://www.amazon.com/exec/obidos/ASIN/0521389917/ref=nosim/ericstreasuretro)* Cambridge, England: Cambridge University Press, 1988.Körner, T. W. *[Exercises for Fourier Analysis.](http://www.amazon.com/exec/obidos/ASIN/0521432766/ref=nosim/ericstreasuretro)* New York: Cambridge University Press, 1993.Krantz, S. G. "Fourier Series." §15.1 in *[Handbook of Complex Variables.](http://www.amazon.com/exec/obidos/ASIN/0817640118/ref=nosim/ericstreasuretro)* Boston, MA: Birkhäuser, pp. 195-202, 1999.Lighthill, M. J. *[Introduction to Fourier Analysis and Generalised Functions.](http://www.amazon.com/exec/obidos/ASIN/0521091284/ref=nosim/ericstreasuretro)* Cambridge, England: Cambridge University Press, 1958.Morrison, N. *[Introduction to Fourier Analysis.](http://www.amazon.com/exec/obidos/ASIN/047101737X/ref=nosim/ericstreasuretro)* New York: Wiley, 1994.Sansone, G. "Expansions in Fourier Series." Ch. 2 in *[Orthogonal Functions, rev. English ed.](http://www.amazon.com/exec/obidos/ASIN/0486667308/ref=nosim/ericstreasuretro)* New York: Dover, pp. 39-168, 1991.Weisstein, E. W. "Books about Fourier Transforms." [http://www.ericweisstein.com/encyclopedias/books/FourierTransforms.html](http://www.ericweisstein.com/encyclopedias/books/FourierTransforms.html).Whittaker, E. T. and Robinson, G. "Practical Fourier Analysis." Ch. 10 in *[The Calculus of Observations: A Treatise on Numerical Mathematics, 4th ed.](http://www.amazon.com/exec/obidos/ASIN/B0006BP2CE/ref=nosim/ericstreasuretro)* New York: Dover, pp. 260-284, 1967.

## Referenced on Wolfram|Alpha

[Fourier Series](https://www.wolframalpha.com/input/?i=fourier+series "Fourier Series")

## Cite this as:

"Fourier Series." From [*MathWorld*](https://mathworld.wolfram.com/) --A Wolfram Resource. [https://mathworld.wolfram.com/FourierSeries.html](https://mathworld.wolfram.com/FourierSeries.html)

## Subject classifications

[Find out if you already have access to Wolfram tech through your organization](https://www.wolfram.com/siteinfo/)

×