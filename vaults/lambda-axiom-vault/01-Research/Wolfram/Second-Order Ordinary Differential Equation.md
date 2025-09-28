Second-Order Ordinary Differential Equation
An ordinary differential equation of the form

 y^('')+P(x)y^'+Q(x)y=0. 	
(1)
Such an equation has singularities for finite x=x_0 under the following conditions: (a) If either P(x) or Q(x) diverges as x->x_0, but (x-x_0)P(x) and (x-x_0)^2Q(x) remain finite as x->x_0, then x_0 is called a regular or nonessential singular point. (b) If P(x) diverges faster than (x-x_0)^(-1) so that (x-x_0)P(x)->infty as x->x_0, or Q(x) diverges faster than (x-x_0)^(-2) so that (x-x_0)^2Q(x)->infty as x->x_0, then x_0 is called an irregular or essential singularity.

Singularities of equation (1) at infinity are investigated by making the substitution x=z^(-1), so dx=-z^(-2)dz, giving

 (dy)/(dx)=-z^2(dy)/(dz) 	
(2)
(d^2y)/(dx^2)	=	-z^2d/(dz)(-z^2(dy)/(dz))	
(3)
	=	-z^2(-2z(dy)/(dz)-z^2(d^2y)/(dz^2))	
(4)
	=	2z^3(dy)/(dz)+z^4(d^2y)/(dz^2).	
(5)
Then (3) becomes

 z^4(d^2y)/(dz^2)+[2z^3-z^2P(z^(-1))](dy)/(dz)+Q(z^(-1))y=0. 	
(6)
Case (a): If

alpha(z)	=	(2z-P(z^(-1)))/(z^2)	
(7)
beta(z)	=	(Q(z^(-1)))/(z^4)	
(8)
remain finite at x=+/-infty (z=0), then the point is ordinary. Case (b): If either alpha(z) diverges no more rapidly than 1/z or beta(z) diverges no more rapidly than 1/z^2, then the point is a regular singular point. Case (c): Otherwise, the point is an irregular singular point.

Morse and Feshbach (1953, pp. 667-674) give the canonical forms and solutions for second-order ordinary differential equations classified by types of singular points.

For special classes of linear second-order ordinary differential equations, variable coefficients can be transformed into constant coefficients. Given a second-order linear ODE with variable coefficients

 (d^2y)/(dx^2)+p(x)(dy)/(dx)+q(x)y=0. 	
(9)
Define a function z=y(x),

(dy)/(dx)=(dz)/(dx)(dy)/(dz) 	
(10)
(d^2y)/(dx^2)=((dz)/(dx))^2(d^2y)/(dz^2)+(d^2z)/(dx^2)(dy)/(dz) 	
(11)
((dz)/(dx))^2(d^2y)/(dz^2)+[(d^2z)/(dx^2)+p(x)(dz)/(dx)](dy)/(dz)+q(x)y=0 	
(12)
(d^2y)/(dz^2)+[((d^2z)/(dx^2)+p(x)(dz)/(dx))/(((dz)/(dx))^2)](dy)/(dz)+[(q(x))/(((dz)/(dx))^2)]y 	
(13)
=(d^2y)/(dz^2)+A(dy)/(dz)+By=0. 	
(14)
This will have constant coefficients if A and B are not functions of x. But we are free to set B to an arbitrary positive constant for q(x)>=0 by defining z as

 z=B^(-1/2)int[q(x)]^(1/2)dx. 	
(15)
Then

(dz)/(dx)	=	B^(-1/2)[q(x)]^(1/2)	
(16)
(d^2z)/(dx^2)	=	1/2B^(-1/2)[q(x)]^(-1/2)q^'(x),	
(17)
and

A	=	(1/2B^(-1/2)[q(x)]^(-1/2)q^'(x)+B^(-1/2)p(x)[q(x)]^(1/2))/(B^(-1)q(x))	
(18)
	=	(q^'(x)+2p(x)q(x))/(2[q(x)]^(3/2))B^(1/2).	
(19)
Equation (◇) therefore becomes

 (d^2y)/(dz^2)+(q^'(x)+2p(x)q(x))/(2[q(x)]^(3/2))B^(1/2)(dy)/(dz)+By=0, 	
(20)
which has constant coefficients provided that

 A=(q^'(x)+2p(x)q(x))/(2[q(x)]^(3/2))B^(1/2)=[constant]. 	
(21)
Eliminating constants, this gives

 A^'=(q^'(x)+2p(x)q(x))/([q(x)]^(3/2))=[constant]. 	
(22)
So for an ordinary differential equation in which A^' is a constant, the solution is given by solving the second-order linear ODE with constant coefficients

 (d^2y)/(dz^2)+A(dy)/(dz)+By=0 	
(23)
for z, where z is defined as above.

A linear second-order homogeneous differential equation of the general form

 y^('')+P(x)y^'+Q(x)y=0 	
(24)
can be transformed into standard form

 z^('')+q(x)z=0 	
(25)
with the first-order term eliminated using the substitution

 lny=lnz-1/2intP(x)dx. 	
(26)
Then

(y^')/y=(z^')/z-1/2P(x) 	
(27)
(yy^('')-y^('2))/(y^2)=(zz^('')-z^('2))/(z^2)-1/2P^'(x) 	
(28)
(y^(''))/y-((y^')/y)^2=(z^(''))/z-(z^('2))/(z^2)-1/2P^'(x) 	
(29)
(y^(''))/y=[(z^')/z-1/2P(x)]^2+(z^(''))/z-(z^('2))/(z^2)-1/2P^'(x) 	
(30)
=(z^('2))/(z^2)-(z^')/zP(x)+1/4P^2(x)+(z^(''))/z-(z^('2))/(z^2)-1/2P^'(x), 	
(31)
so

(y^(''))/y+P(x)(y^')/y+Q(x)	=	-(z^')/zP(x)+1/4P^2(x)+(z^(''))/z-1/2P^'(x)+P(x)[(z^')/z-1/2P(x)]+Q(x)	
(32)
	=	(z^(''))/z-1/2P^'(x)-1/4P^2(x)+Q(x)=0.	
(33)
Therefore,

 z^('')+[Q(x)-1/2P^'(x)-1/4P^2(x)]z=z^('')(x)+q(x)z=0, 	
(34)
where

 q(x)=Q(x)-1/2P^'(x)-1/4P^2(x). 	
(35)
If Q(x)=0, then the differential equation becomes

 y^('')+P(x)y^'=0, 	
(36)
which can be solved by multiplying by

 exp[int^xP(x^')dx^'] 	
(37)
to obtain

 0=d/(dx){exp[int^xP(x^')dx^'](dy)/(dx)} 	
(38)
 c_1=exp[int^xP(x^')dx^'](dy)/(dx) 	
(39)
 y=c_1int^x(dx)/(exp[int^xP(x^')dx^'])+c_2. 	
(40)
For a nonhomogeneous second-order ordinary differential equation in which the x term does not appear in the function f(x,y,y^'),

 (d^2y)/(dx^2)=f(y,y^'), 	
(41)
let v=y^', then

 (dv)/(dx)=f(v,y)=(dv)/(dy)(dy)/(dx)=v(dv)/(dy). 	
(42)
So the first-order ODE

 v(dv)/(dy)=f(y,v), 	
(43)
if linear, can be solved for v as a linear first-order ODE. Once the solution is known,

 (dy)/(dx)=v(y) 	
(44)
 int(dy)/(v(y))=intdx. 	
(45)
On the other hand, if y is missing from f(x,y,y^'),

 (d^2y)/(dx^2)=f(x,y^'), 	
(46)
let v=y^', then v^'=y^(''), and the equation reduces to

 v^'=f(x,v), 	
(47)
which, if linear, can be solved for v as a linear first-order ODE. Once the solution is known,

 y=intv(x)dx. 	
(48)
Nonhomogeneous ordinary differential equations can be solved if the general solution to the homogenous version is known, in which case variation of parameters can be used to find the particular solution. In particular, the particular solution y^*(x) to a nonhomogeneous second-order ordinary differential equation

 y^('')+p(x)y^'+q(x)y=g(x) 	
(49)
can be found using variation of parameters to be given by the equation

 y^*(x)=-y_1(x)int(y_2(x)g(x))/(W(x))dx+y_2(x)int(y_1(x)g(x))/(W(x))dx, 	
(50)
where y_1(x) and y_2(x) are the homogeneous solutions to the unforced equation

 y^('')+p(x)y^'+q(x)y=0 	
(51)
and W(x) is the Wronskian of these two functions.

See also
Abel's Differential Equation Identity, Adjoint, First-Order Ordinary Differential Equation, Ordinary Differential Equation, Second-Order Ordinary Differential Equation Second Solution, Undetermined Coefficients Method, Variation of Parameters
Explore this topic in the MathWorld classroom
