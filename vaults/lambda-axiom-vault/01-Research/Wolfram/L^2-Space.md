L^2-Space
On a measure space X, the set of square integrable L2-functions is an L^2-space. Taken together with the L2-inner product with respect to a measure mu,

 <f,g>=int_Xfgdmu 	
(1)
the L^2-space forms a Hilbert space. The functions in an L^2-space satisfy

 <phi|psi>=intpsi^_phidx 	
(2)
and

 <phi|psi>^_=<psi|phi> 	
(3)
 <phi|lambda_1psi_1+lambda_2psi_2>=lambda_1<phi|psi_1>+lambda_2<phi|psi_2> 	
(4)
 <lambda_1phi_1+lambda_2phi_2|psi>=lambda^__1<phi_1|psi>+lambda^__2<phi_2|psi> 	
(5)
 <psi|psi> in R>=0 	
(6)
 ||<psi_1|psi_2>||^2<=<psi_1|psi_1><psi_2|psi_2>. 	
(7)
The inequality (7) is called Schwarz's inequality.

The basic example is when X=R with Lebesgue measure. Another important example is when X is the positive integers, in which case it is denoted as l^2, or "little ell-two." These are the square summable series.

Strictly speaking, L^2-space really consists of equivalence classes of functions. Two functions represent the same L^2-function if the set where they differ has measure zero. It is not hard to see that this makes <f,g> an inner product, because <f,f>=0 if and only if f=0 almost everywhere. A good way to think of an L^2-function is as a density function, so only its integral on sets with positive measure matter.

In practice, this does not cause much trouble, except that some care has to be taken with boundary conditions in differential equations. The problem is that for any particular point p, the value f(p) isn't well-defined for an L^2-function f.

If an L^2-function in Euclidean space can be represented by a continuous function f, then f is the only continuous representative. In such a case, it is not harmful to consider the L^2-function as the continuous function f. Also, it is often convenient to think of L^2(R^n) as the completion of the continuous functions with respect to the L2-norm.

See also
Completion, Hilbert Space, L2-Inner Product, L2-Norm, L-p-Space, L2-Function, Lebesgue Integral, Lebesgue Measure, Measure, Measure Space, Riesz-Fischer Theorem, Schwarz's Inequality