Hypergeometric Function
DOWNLOAD Mathematica Notebook
Download Wolfram Notebook
A generalized hypergeometric function _pF_q(a_1,...,a_p;b_1,...,b_q;x) is a function which can be defined in the form of a hypergeometric series, i.e., a series for which the ratio of successive terms can be written

 (c_(k+1))/(c_k)=(P(k))/(Q(k))=((k+a_1)(k+a_2)...(k+a_p))/((k+b_1)(k+b_2)...(k+b_q)(k+1))x. 	
(1)
(The factor of k+1 in the denominator is present for historical reasons of notation.)

The function _2F_1(a,b;c;x) corresponding to p=2, q=1 is the first hypergeometric function to be studied (and, in general, arises the most frequently in physical problems), and so is frequently known as "the" hypergeometric equation or, more explicitly, Gauss's hypergeometric function (Gauss 1812, Barnes 1908). To confuse matters even more, the term "hypergeometric function" is less commonly used to mean closed form, and "hypergeometric series" is sometimes used to mean hypergeometric function.

The hypergeometric functions are solutions to the hypergeometric differential equation, which has a regular singular point at the origin. To derive the hypergeometric function from the hypergeometric differential equation

 z(1-z)y^('')+[c-(a+b+1)z]y^'-aby=0, 	
(2)
use the Frobenius method to reduce it to

 sum_(n=0)^infty{(n+1)(n+c)A_(n+1)-[n^2+(a+b)n+ab]A_n}z^n=0, 	
(3)
giving the indicial equation

 A_(n+1)=((n+a)(n+b))/((n+1)(n+c))A_n. 	
(4)
Plugging this into the ansatz series

 y=sum_(n=0)^inftyA_nz^n 	
(5)
then gives the solution

 y=A_0[1+(ab)/(1!c)z+(a(a+1)b(b+1))/(2!c(c+1))z^2+...]. 	
(6)
This is the so-called regular solution, denoted

_2F_1(a,b;c;z)	=	1+(ab)/(1!c)z+(a(a+1)b(b+1))/(2!c(c+1))z^2+...	
(7)
	=	sum_(n=0)^(infty)((a)_n(b)_n)/((c)_n)(z^n)/(n!),	
(8)
which converges if c is not a negative integer (1) for all of |z|<1 and (2) on the unit circle |z|=1 if R[c-a-b]>0. Here, (a)_n is a Pochhammer symbol.

The complete solution to the hypergeometric differential equation is

 y=A_2F_1(a,b;c;z)+Bz^(1-c)_2F_1(a+1-c,b+1-c;2-c;z). 	
(9)
The hypergeometric series is convergent for arbitrary a, b, and c for real -1<z<1, and for z=+/-1 if c>a+b.

Derivatives of _2F_1(a,b;c;z) are given by

(d_2F_1(a,b;c;z))/(dz)	=	(ab)/c_2F_1(a+1,b+1;c+1;z)	
(10)
(d^2_2F_1(a,b;c;z))/(dz^2)	=	(a(a+1)b(b+1))/(c(c+1))_2F_1(a+2,b+2;c+2;z)	
(11)
(Magnus and Oberhettinger 1949, p. 8).

Hypergeometric functions with special arguments reduce to elementary functions, for example,

_2F_1(1,1;1;z)	=	1/(1-z)	
(12)
_2F_1(1,1;2;z)	=	-(ln(1-z))/z	
(13)
_2F_1(1,2;1;z)	=	1/((1-z)^2)	
(14)
_2F_1(1,2;2;z)	=	1/(1-z).	
(15)
An integral giving the hypergeometric function is

 _2F_1(a,b;c;z)=(Gamma(c))/(Gamma(b)Gamma(c-b))int_0^1(t^(b-1)(1-t)^(c-b-1))/((1-tz)^a)dt 	
(16)
as shown by Euler in 1748 (Bailey 1935, pp. 4-5). Barnes (1908) gave the contour integral

 _2F_1(a,b;c;z)=1/(2pii)int_(-iinfty)^(iinfty)(Gamma(a+s)Gamma(b+s)Gamma(-s))/(Gamma(c-s))(-z)^sds, 	
(17)
where |arg(-z)|<pi and the path is curved (if necessary) to separate the poles s=-a-n, s=-b-n, ... (n=0, 1, ...) from the poles s=0, 1 ... (Bailey 1935, pp. 4-5; Whittaker and Watson 1990).

Curiously, at a number of very special points, the hypergeometric functions can assume rational,

_2F_1(1/3,2/3;5/6;(27)/(32))	=	8/5	
(18)
_2F_1(1/4,1/2;3/4;(80)/(81))	=	9/5	
(19)
(M. Trott, pers. comm., Aug. 5, 2002; Zucker and Joyce 2001), quadratic surd

_2F_1(1/8,3/8;1/2;(2400)/(2401))	=	2/3sqrt(7)	
(20)
_2F_1(1/6,1/3;1/2;(25)/(27))	=	3/4sqrt(3)	
(21)
(Zucker and Joyce 2001), and other exact values

_2F_1(1/6,1/2;2/3;(125)/(128))	=	4/32^(1/6)	
(22)
_2F_1(1/(12),5/(12);1/2;(1323)/(1331))	=	3/4(11)^(1/4)	
(23)
_2F_1(1/(12),5/(12);1/2;(121)/(125))	=	(2^(1/6)(15)^(1/4))/(4sqrt(pi))([Gamma(1/3)]^3)/([Gamma(1/4)]^2)(1+sqrt(3))	
(24)
(Zucker and Joyce 2001, 2003).

An infinite family of rational values for well-poised hypergeometric functions with rational arguments is given by

 _kF_(k-1)(1/(k+1),...,k/(k+1);2/k,3/k,...,(k-1)/k,(k+1)/k;((x(1-x^k))/(f_k))^k)=1/(1-x^k)   	
(25)
for k=2, 3, ..., 0<=x<=(k+1)^(-1/k), and

 f_k=k/((1+k)^(1+1/k)) 	
(26)
(M. L. Glasser, pers. comm., Sept. 26, 2003). This gives the particular identity

 _2F_1(1/3,2/3;3/2;(27)/4x^2(1-x^2)^2) 
=(2sin[1/3sin^(-1)(3/2sqrt(3)x(1-x^2))])/(sqrt(3)x(1-x^2)) 
=1/(1-x^2)  	
(27)
for 0<=x<=sqrt(3)/3.

A hypergeometric function can be written using Euler's hypergeometric transformations

t	->	t	
(28)
t	->	1-t	
(29)
t	->	(1-z-tz)^(-1)	
(30)
t	->	(1-t)/(1-tz)	
(31)
in any one of four equivalent forms

_2F_1(a,b;c;z)	=	(1-z)^(-a)_2F_1(a,c-b;c;z/(z-1))	
(32)
	=	(1-z)^(-b)_2F_1(c-a,b;c;z/(z-1))	
(33)
	=	(1-z)^(c-a-b)_2F_1(c-a,c-b;c;z)	
(34)
(Abramowitz and Stegun 1972, p. 559).

It can also be written as a linear combination

 _2F_1(a,b;c;z)=(Gamma(c)Gamma(c-a-b))/(Gamma(c-a)Gamma(c-b))_2F_1(a,b;a+b+1-c;1-z) 
 +(Gamma(c)Gamma(a+b-c))/(Gamma(a)Gamma(b))(1-z)^(c-a-b)_2F_1(c-a,c-b;1+c-a-b;1-z)   	
(35)
(Barnes 1908; Bailey 1935, pp. 3-4; Whittaker and Watson 1990, p. 291).

Kummer found all six solutions (not necessarily regular at the origin) to the hypergeometric differential equation:

u_1(x)	=	_2F_1(a,b;c;z)	
(36)
u_2(x)	=	_2F_1(a,b;a+b+1-c;1-z)	
(37)
u_3(x)	=	z^(-a)_2F_1(a,a+1-c;a+1-b;z^(-1))	
(38)
u_4(x)	=	z^(-b)_2F_1(b+1-c,b;b+1-a;z^(-1))	
(39)
u_5(x)	=	z^(1-c)_2F_1(b+1-c,a+1-c;2-c;z)	
(40)
u_6(x)	=	(1-z)^(c-a-b)_2F_1(c-a,c-b;c+1-a-b;1-z)	
(41)
(Abramowitz and Stegun 1972, p. 563).

Applying Euler's hypergeometric transformations to the Kummer solutions then gives all 24 possible forms which are solutions to the hypergeometric differential equation:

u_1^((1))(x)	=	_2F_1(a,b;c;z)	
(42)
u_1^((2))(x)	=	(1-z)^(c-a-b)_2F_1(c-a,c-b;c;z)	
(43)
u_1^((3))(x)	=	(1-z)^(-a)_2F_1(a,c-b;c;z/(z-1))	
(44)
u_1^((4))(x)	=	(1-z)^(-b)_2F_1(c-a,b;c;z/(z-1))	
(45)
u_2^((1))(x)	=	_2F_1(a,b;a+b+1-c;1-z)	
(46)
u_2^((2))(x)	=	z^(1-c)_2F_1(a+1-c,b+1-c;a+b+1-c;1-z)	
(47)
u_2^((3))(x)	=	z^(-a)_2F_1(a,a+1-c;a+b+1-c;1-z^(-1))	
(48)
u_2^((4))(x)	=	z^(-b)_2F_1(b+1-c,b;a+b+1-c;1-z^(-1))	
(49)
u_3^((1))(x)	=	(-z)^(-a)_2F_1(a,a+1-c;a+1-b;z^(-1))	
(50)
u_3^((2))(x)	=	(-z)^(b-c)(1-z)^(c-a-b)_2F_1(1-b,c-b;a+1-b;z^(-1))	
(51)
u_3^((3))(x)	=	(1-z)^(-a)_2F_1(a,c-b;a+1-b;(1-z)^(-1))	
(52)
u_3^((4))(x)	=	(-z)^(1-c)(1-z)^(c-a-1)_2F_1(a+1-c,1-b;a+1-b;(1-z)^(-1))	
(53)
u_4^((1))(x)	=	(-z)^(-b)_2F_1(b+1-c,b;b+1-a;z^(-1))	
(54)
u_4^((2))(x)	=	(-z)^(a-c)(1-z)^(c-a-b)_2F_1(1-a,c-a;b+1-a;z^(-1))	
(55)
u_4^((3))(x)	=	(1-z)^(-b)_2F_1(b,c-a;b+1-a;(1-z)^(-1))	
(56)
u_4^((4))(x)	=	(-z)^(1-c)(1-z)^(c-b-1)_2F_1(b+1-c,1-a;b+1-a;(1-z)^(-1))	
(57)
u_5^((1))(x)	=	z^(1-c)_2F_1(a+1-c,b+1-c;2-c;z)	
(58)
u_5^((2))(x)	=	z^(1-c)(1-z)^(c-a-b)_2F_1(1-a,1-b;2-c;z)	
(59)
u_5^((3))(x)	=	z^(1-c)(1-z)^(c-a-1)_2F_1(a+1-c,1-b;2-c;z/(z-1))	
(60)
u_5^((4))(x)	=	z^(1-c)(1-z)^(c-b-1)_2F_1(b+1-c,1-a;2-c;z/(z-1))	
(61)
u_6^((1))(x)	=	(1-z)^(c-a-b)_2F_1(c-a,c-b;c+1-a-b;1-z)	
(62)
u_6^((2))(x)	=	z^(1-c)(1-z)^(c-a-b)_2F_1(1-a,1-b;c+1-a-b;1-z)	
(63)
u_6^((3))(x)	=	z^(a-c)(1-z)^(c-a-b)_2F_1(c-a,1-a;c+1-a-b;1-z^(-1))	
(64)
u_6^((4))(x)	=	z^(b-c)(1-z)^(c-a-b)_2F_1(c-b,1-b;c+1-a-b;1-z^(-1))	
(65)
(Kummer 1836; Erdélyi et al. 1981, pp. 105-106).

Goursat (1881) and Erdélyi et al. (1981) give many hypergeometric transformation formulas, including several cubic transformations.

Many functions of mathematical physics can be expressed as special cases of the hypergeometric functions. For example,

 _2F_1(-l,l+1;1;(1-z)/2)=P_l(z), 	
(66)
where P_l(z) is a Legendre polynomial.

 (1+z)^n=_2F_1(-n,b;b;-z) 	
(67)
 ln(1+z)=z_2F_1(1,1;2;-z) 	
(68)
Complete elliptic integrals and the Riemann P-series can also be expressed in terms of _2F_1(a,b;c;z). Special values include

_2F_1(a,b;a-b+1;-1)=2^(-a)sqrt(pi)(Gamma(1+a+b))/(Gamma(1+1/2a-b)Gamma(1/2+1/2a)) 	
(69)
_2F_1(1,-a;a;-1)=(sqrt(pi))/2(Gamma(a))/(Gamma(a+1/2))+1 	
(70)
_2F_1(a,b;c;1/2)=2^a_2F_1(a,c-b;c;-1) 	
(71)
_2F_1(a,b;1/2(a+b+1);1/2)=(Gamma(1/2)Gamma[1/2(1+a+b)])/(Gamma[1/2(1+a)]Gamma[1/2(1+b)]) 	
(72)
_2F_1(a,1-a;c;1/2)=(Gamma(1/2c)Gamma[1/2(c+1)])/(Gamma[1/2(a+c)]Gamma[1/2(1+c-a)]) 	
(73)
_2F_1(a,b;c;1)=(Gamma(c)Gamma(c-a-b))/(Gamma(c-a)Gamma(c-b)). 	
(74)
Kummer's first formula gives

 _2F_1(1/2+m-k,-n;2m+1;1)=(Gamma(2m+1)Gamma(m+1/2+k+n))/(Gamma(m+1/2+k)Gamma(2m+1+n)), 	
(75)
where m!=-1/2, -1, -3/2, .... Many additional identities are given by Abramowitz and Stegun (1972, p. 557).

Hypergeometric functions can be generalized to generalized hypergeometric functions

 _nF_m(a_1,...,a_n;b_1,...,b_m;z). 	
(76)
A function of the form _1F_1(a;b;z) is called a confluent hypergeometric function of the first kind, and a function of the form _0F_1(;b;z) is called a confluent hypergeometric limit function.

See also
Appell Hypergeometric Function, Barnes' Lemma, Bradley's Theorem, Cayley's Hypergeometric Function Theorem, Clausen Formula, Closed Form, Confluent Hypergeometric Function of the First Kind, Confluent Hypergeometric Function of the Second Kind, Confluent Hypergeometric Limit Function, Contiguous Function, Darling's Products, Generalized Hypergeometric Function, Gosper's Algorithm, Hypergeometric Identity, Hypergeometric Series, Jacobi Polynomial, Kummer's Formulas, Kummer's Quadratic Transformation, Kummer's Relation, Orr's Theorem, Pfaff Transformation, q-Hypergeometric Function, Ramanujan's Hypergeometric Identity, Saalschützian, Sister Celine's Method, Zeilberger's Algorithm
