An abstract vector space of dimension n over a field k is the set of all formal expressions

 a_1v_1+a_2v_2+...+a_nv_n, 	
(1)
where {v_1,v_2,...,v_n} is a given set of n objects (called a basis) and (a_1,a_2,...,a_n) is any n-tuple of elements of k. Two such expressions can be added together by summing their coefficients,

 (a_1v_1+a_2v_2+...+a_nv_n)+(b_1v_1+b_2v_2+...+b_nv_n) 
 =(a_1+b_1)v_1+(a_2+b_2)v_2+...+(a_n+b_n)v_n.   	
(2)
This addition is a commutative group operation, since the zero element is 0v_1+0v_2+...+0v_n and the inverse of a_1v_1+a_2v_2+...+a_nv_n is (-a_1)v_1+(-a_2)v_2+...+(-a_n)v_n. Moreover, there is a natural way to define the product of any element a_1v_1+a_2v_2+...+a_nv_n by an arbitrary element (a so-called scalar) a of k,

 a(a_1v_1+a_2v_2+...+a_nv_n)=(aa_1)v_1+(aa_2)v_2+...+(aa_n)v_n. 	
(3)
Note that multiplication by 1 leaves the element unchanged.

This structure is a formal generalization of the usual vector space over R^n, for which the field of scalars is the real field R and a basis is given by {(1,0,0,...,0),(0,1,0,0,...,0),...,(0,0,...,0,1)}. As in this special case, in any abstract vector space V, the multiplication by scalars fulfils the following two distributive laws:

1. For all a,b in k and all v in V, (a+b)v=av+bv.

2. For all a in k and all v,w in V, a(v+w)=av+aw.

These are the basic properties of the integer multiples in any commutative additive group. This special behavior of a product with respect to the sum defines the notion of linear structure, which was first formulated by Peano in 1888.

Linearity implies, in particular, that the zero elements 0_k and 0_V of k and V annihilate any product. From (1), it follows that

 0_kv=(0_k-0_k)v=0_kv-0_kv=0_V 	
(4)
for all v in V, whereas from (2), it follows that

 a0_V=a(0_V-0_V)=a0_V-a0_V=0_V 	
(5)
for all a in k.

A more general kind of abstract vector space is obtained if one admits that the basis has infinitely many elements. In this case, the vector space is called infinite-dimensional and its elements are the formal expressions in which all but a finite number of coefficients are equal to zero.

Free Module, Quotient Vector Space, Vector Space

----
An abstract vector space of dimension ![n](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline1.svg) over a [field](https://mathworld.wolfram.com/Field.html) ![k](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline2.svg) is the set of all formal expressions

|   |   |
|---|---|
|![a_1v_1+a_2v_2+...+a_nv_n,](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/NumberedEquation1.svg)|(1)|

where ![{v_1,v_2,...,v_n}](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline3.svg) is a given set of ![n](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline4.svg) objects (called a [basis](https://mathworld.wolfram.com/Basis.html)) and ![(a_1,a_2,...,a_n)](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline5.svg) is any ![n](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline6.svg)-tuple of elements of ![k](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline7.svg). Two such expressions can be added together by summing their coefficients,

|   |   |
|---|---|
|![(a_1v_1+a_2v_2+...+a_nv_n)+(b_1v_1+b_2v_2+...+b_nv_n) <br>=(a_1+b_1)v_1+(a_2+b_2)v_2+...+(a_n+b_n)v_n.](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/NumberedEquation2.svg)|(2)|

This addition is a commutative group operation, since the zero element is ![0v_1+0v_2+...+0v_n](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline8.svg) and the inverse of ![a_1v_1+a_2v_2+...+a_nv_n](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline9.svg) is ![(-a_1)v_1+(-a_2)v_2+...+(-a_n)v_n](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline10.svg). Moreover, there is a natural way to define the product of any element ![a_1v_1+a_2v_2+...+a_nv_n](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline11.svg) by an arbitrary element (a so-called scalar) ![a](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline12.svg) of ![k](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline13.svg),

|   |   |
|---|---|
|![a(a_1v_1+a_2v_2+...+a_nv_n)=(aa_1)v_1+(aa_2)v_2+...+(aa_n)v_n.](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/NumberedEquation3.svg)|(3)|

Note that multiplication by 1 leaves the element unchanged.

This structure is a formal generalization of the usual [vector space](https://mathworld.wolfram.com/VectorSpace.html) over ![R^n](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline14.svg), for which the field of scalars is the real field ![R](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline15.svg) and a [basis](https://mathworld.wolfram.com/Basis.html) is given by ![{(1,0,0,...,0),(0,1,0,0,...,0),...,(0,0,...,0,1)}](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline16.svg). As in this special case, in any abstract vector space ![V](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline17.svg), the multiplication by scalars fulfils the following two distributive laws:

1. For all ![a,b in k](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline18.svg) and all ![v in V](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline19.svg), ![(a+b)v=av+bv](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline20.svg).

2. For all ![a in k](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline21.svg) and all ![v,w in V](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline22.svg), ![a(v+w)=av+aw](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline23.svg).

These are the basic properties of the integer multiples in any commutative additive group. This special behavior of a product with respect to the sum defines the notion of linear structure, which was first formulated by Peano in 1888.

Linearity implies, in particular, that the zero elements ![0_k](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline24.svg) and ![0_V](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline25.svg) of ![k](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline26.svg) and ![V](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline27.svg) annihilate any product. From (1), it follows that

|   |   |
|---|---|
|![0_kv=(0_k-0_k)v=0_kv-0_kv=0_V](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/NumberedEquation4.svg)|(4)|

for all ![v in V](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline28.svg), whereas from (2), it follows that

|   |   |
|---|---|
|![a0_V=a(0_V-0_V)=a0_V-a0_V=0_V](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/NumberedEquation5.svg)|(5)|

for all ![a in k](https://mathworld.wolfram.com/images/equations/AbstractVectorSpace/Inline29.svg).

A more general kind of abstract vector space is obtained if one admits that the basis has infinitely many elements. In this case, the vector space is called infinite-dimensional and its elements are the formal expressions in which all but a finite number of coefficients are equal to zero.