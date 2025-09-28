Generalized Fourier Series
A generalized Fourier series is a series expansion of a function based on the special properties of a complete orthogonal system of functions. The prototypical example of such a series is the Fourier series, which is based of the biorthogonality of the functions cos(nx) and sin(nx) (which form a complete biorthogonal system under integration over the range [-pi,pi]). Another common example is the Laplace series, which is a double series expansion based on the orthogonality of the spherical harmonics Y_l^m(theta,phi) over theta in [0,pi] and phi in [0,2pi].

Given a complete orthogonal system of univariate functions {phi_n(x)} over the interval R, the functions phi_n(x) satisfy an orthogonality relationship of the form

 int_Rphi_m(x)phi_n(x)w(x)dx=c_mdelta_(mn) 	
(1)
over a range R, where w(x) is a weighting function, c_m are given constants and delta_(mn) is the Kronecker delta. Now consider an arbitrary function f(x). Write it as a series

 f(x)=sum_(n=0)^inftya_nphi_n(x) 	
(2)
and plug this into the orthogonality relationships to obtain

 int_Rf(x)phi_n(x)w(x)dx 
=int_Rsum_(n=0)^inftya_nphi_m(x)phi_n(x)w(x)dx 
=sum_(n=0)^inftya_nintphi_m(x)phi_n(x)w(x)dx 
=sum_(n=0)^inftya_nc_mdelta_(mn) 
=a_nc_n.  	
(3)
Note that the order of integration and summation has been reversed in deriving the above equations. As a result of these relations, if a series for f(x) of the assumed form exists, its coefficients will satisfy

 a_n=1/(c_n)int_Rf(x)phi_n(x)w(x)dx. 	
(4)
Given a complete biorthogonal system of univariate functions, the generalized Fourier series takes on a slightly more special form. In particular, for such a system, the functions f_1(n,x) and f_2(n,x) satisfy orthogonality relationships of the form

int_Rf_1(m,x)f_1(n,x)w(x)dx	=	c_mdelta_(mn)	
(5)
int_Rf_2(m,x)f_2(n,x)w(x)dx	=	d_mdelta_(mn)	
(6)
int_Rf_1(m,x)f_2(n,x)w(x)dx	=	0	
(7)
int_Rf_1(m,x)w(x)dx	=	0	
(8)
int_Rf_2(m,x)w(x)dx	=	0	
(9)
for m,n!=0 over a range R, where c_m and d_m are given constants and delta_(mn) is the Kronecker delta. Now consider an arbitrary function f(x) and write it as a series

 f(x)=sum_(n=0)^inftya_nf_1(n,x)+sum_(n=0)^inftyb_nf_2(n,x) 
=f_1(0)a_0+sum_(n=1)^inftya_nf_1(n,x)+f_2(0)b_0+sum_(n=1)^inftyb_nf_2(n,x) 
=[f_1(0)a_0+f_2(0)b_0]+sum_(n=1)^inftya_nf_1(n,x)+sum_(n=1)^inftyb_nf_2(n,x) 
=e+sum_(n=1)^inftya_nf_1(n,x)+sum_(n=1)^inftyb_nf_2(n,x)  	
(10)
and plug this into the orthogonality relationships to obtain

 int_Rf(x)f_1(n,x)w(x)dx=eint_Rf_1(n,x)dx+int_Rsum_(m=1)^inftya_mf_1(m,x)f_1(n,x)w(x)dx+int_Rsum_(m=1)^inftyb_mf_1(m,x)f_2(n,x)w(x)dx 
=e·0+sum_(m=1)^inftya_mint_Rf_1(m,x)f_1(n,x)w(x)dx+sum_(m=1)^inftyb_mint_Rf_1(m,x)f_2(n,x)w(x)dx 
=sum_(m=1)^inftya_mc_mdelta_(mn)+sum_(m=1)^inftyb_m·0 
=a_nc_n 
int_Rf(x)f_2(n,x)w(x)dx=eint_Rf_2(n,x)dx+int_Rsum_(m=1)^inftya_mf_1(m,x)f_2(n,x)w(x)dx+int_Rsum_(m=1)^inftyb_mf_2(m,x)f_2(n,x)w(x)dx 
=e·0+sum_(m=1)^inftya_mint_Rf_1(m,x)f_2(n,x)w(x)dx+sum_(m=1)^inftyb_mint_Rf_2(m,x)f_2(n,x)w(x)dx 
=sum_(m=1)^inftya_m·0+sum_(m=1)^inftyb_md_mdelta_(mn) 
=b_nd_n 
int_Rf(x)w(x)dx=eint_Rdx+int_Rsum_(m=1)^inftya_mf_1(m,x)w(x)dx+int_Rsum_(m=1)^inftyb_mf_2(m,x)w(x)dx 
=eint_Rdx+sum_(m=1)^inftya_mint_Rf_1(m,x)w(x)dx+sum_(m=1)^inftyb_nint_Rf_2(m,x)w(x)dx 
=eint_Rdx+sum_(m=1)^inftya_m·0+sum_(m=1)^inftyb_m·0 
=eint_Rdx.  	
(11)
As a result of these relations, if a series for f(x) of the assumed form exists, its coefficients will satisfy

a_n	=	1/(c_n)int_Rf(x)f_1(n,x)w(x)dx	
(12)
b_n	=	1/(d_n)int_Rf(x)f_2(n,x)w(x)dx	
(13)
e	=	(int_Rf(x)w(x)dx)/(int_Rw(x)dx).	
(14)
The usual Fourier series is recovered by taking f_1(n,x)=cos(nx) and f_2(n,x)=sin(nx) which form a complete orthogonal system over [-pi,pi] with weighting function w(x)=1 and noting that, for this choice of functions,

c_m	=	int_(-pi)^picos^2(mx)dx=pi	
(15)
d_m	=	int_(-pi)^pisin^2(mx)dx=pi.	
(16)
Therefore, the Fourier series of a function f(x) is given by

 f(x)=e+sum_(n=1)^inftya_ncos(nx)+sum_(n=1)^inftyb_nsin(nx), 	
(17)
where the coefficients are

a_n	=	1/piint_(-pi)^pif(x)cos(nx)dx	
(18)
b_n	=	1/piint_(-pi)^pif(x)sin(nx)dx	
(19)
e	=	1/(2pi)int_(-pi)^pif(x)dx.	
(20)
See also
Bessel Function Neumann Series, Bessel's Inequality, Fourier-Bessel Series, Fourier-Legendre Series, Fourier Series, Generalized Fourier Integral, Kapteyn Series, Orthogonal Basis, Orthogonal Polynomials, Orthonormal Basis, Laplace Series, Parseval's Theorem