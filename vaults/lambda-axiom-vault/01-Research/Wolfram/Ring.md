A ring in the mathematical sense is a set S together with two binary operators + and * (commonly interpreted as addition and multiplication, respectively) satisfying the following conditions:

1. Additive associativity: For all a,b,c in S, (a+b)+c=a+(b+c),

2. Additive commutativity: For all a,b in S, a+b=b+a,

3. Additive identity: There exists an element 0 in S such that for all a in S, 0+a=a+0=a,

4. Additive inverse: For every a in S there exists -a in S such that a+(-a)=(-a)+a=0,

5. Left and right distributivity: For all a,b,c in S, a*(b+c)=(a*b)+(a*c) and (b+c)*a=(b*a)+(c*a),

6. Multiplicative associativity: For all a,b,c in S, (a*b)*c=a*(b*c) (a ring satisfying this property is sometimes explicitly termed an associative ring).

Conditions 1-5 are always required. Though non-associative rings exist, virtually all texts also require condition 6 (Itô 1986, pp. 1369-1372; p. 418; Zwillinger 1995, pp. 141-143; Harris and Stocker 1998; Knuth 1998; Korn and Korn 2000; Bronshtein and Semendyayev 2004).

Rings may also satisfy various optional conditions:

7. Multiplicative commutativity: For all a,b in S, a*b=b*a (a ring satisfying this property is termed a commutative ring),

8. Multiplicative identity: There exists an element 1 in S such that for all a!=0 in S, 1*a=a*1=a (a ring satisfying this property is termed a unit ring, or sometimes a "ring with identity"),

9. Multiplicative inverse: For each a!=0 in S, there exists an element a^(-1) in S such that for all a!=0 in S, a*a^(-1)=a^(-1)*a=1, where 1 is the identity element.

A ring satisfying all additional properties 6-9 is called a field, whereas one satisfying only additional properties 6, 8, and 9 is called a division algebra (or skew field).

Some authors depart from the normal convention and require (under their definition) a ring to include additional properties. For example, Birkhoff and Mac Lane (1996) define a ring to have a multiplicative identity (i.e., property 8).

Here are a number of examples of rings lacking particular conditions:

1. Without multiplicative associativity (sometimes also called nonassociative algebras): octonions, OEIS A037292,

2. Without multiplicative commutativity: Real-valued 2×2 matrices, quaternions,

3. Without multiplicative identity: Even-valued integers,

4. Without multiplicative inverse: integers.

The word ring is short for the German word 'Zahlring' (number ring). The French word for a ring is anneau, and the modern German word is Ring, both meaning (not so surprisingly) "ring." Fraenkel (1914) gave the first abstract definition of the ring, although this work did not have much impact. The term was introduced by Hilbert to describe rings like

 Z[RadicalBox[2, 3]]={a+bRadicalBox[2, 3]+cRadicalBox[4, 3] such that a,b,c in Z}. 
By successively multiplying the new element RadicalBox[2, 3], it eventually loops around to become something already generated, something like a ring, that is, (RadicalBox[2, 3])^2=RadicalBox[4, 3] is new but (RadicalBox[2, 3])^3=2 is an integer. All algebraic numbers have this property, e.g., eta=sqrt(2)+sqrt(3) satisfies eta^4=10eta^2-1.

A ring must contain at least one element, but need not contain a multiplicative identity or be commutative. The number of finite rings of n elements for n=1, 2, ..., are 1, 2, 2, 11, 2, 4, 2, 52, 11, 4, 2, 22, 2, 4, 4, ... (OEIS A027623 and A037234; Fletcher 1980). If p and q are prime, there are two rings of size p, four rings of size pq, 11 rings of size p^2 (Singmaster 1964, Dresden), 22 rings of size p^2q, 52 rings of size p^3 for p=2, and 53 rings of size p^3 for p>2 (Ballieu 1947, Gilmer and Mott 1973; Dresden).

A ring that is commutative under multiplication, has a unit element, and has no divisors of zero is called an integral domain. A ring whose nonzero elements form a commutative multiplication group is called a field. The simplest rings are the integers Z, polynomials R[x] and R[x,y] in one and two variables, and square n×n real matrices.

Rings which have been investigated and found to be of interest are usually named after one or more of their investigators. This practice unfortunately leads to names which give very little insight into the relevant properties of the associated rings.

Renteln and Dundes (2005) give the following (bad) mathematical joke about rings:

Q: What's an Abelian group under addition, closed, associative, distributive, and bears a curse? A: The Ring of the Nibelung.

See also
Abelian Group, Artinian Ring, Chow Ring, Dedekind Ring, Division Algebra, Endomorphism Ring, Field, Gorenstein Ring, Group, Group Ring, Ideal, Integral Domain, Module, Nilpotent Element, Noetherian Ring, Noncommutative Ring, Number Field, Prime Ring, Prüfer Ring, Quotient Ring, Regular Ring, Ring of Integers, Ringoid, Semiprime Ring, Semiring, Semisimple Ring, Simple Ring, Trivial Ring, Unit Ring, Zero Divisor

---

A ring in the mathematical sense is a [set](https://mathworld.wolfram.com/Set.html) ![S](https://mathworld.wolfram.com/images/equations/Ring/Inline1.svg) together with two [binary operators](https://mathworld.wolfram.com/BinaryOperator.html) ![+](https://mathworld.wolfram.com/images/equations/Ring/Inline2.svg) and ![*](https://mathworld.wolfram.com/images/equations/Ring/Inline3.svg) (commonly interpreted as addition and multiplication, respectively) satisfying the following conditions:

1. Additive associativity: For all ![a,b,c in S](https://mathworld.wolfram.com/images/equations/Ring/Inline4.svg), ![(a+b)+c=a+(b+c)](https://mathworld.wolfram.com/images/equations/Ring/Inline5.svg),

2. Additive commutativity: For all ![a,b in S](https://mathworld.wolfram.com/images/equations/Ring/Inline6.svg), ![a+b=b+a](https://mathworld.wolfram.com/images/equations/Ring/Inline7.svg),

3. [Additive identity](https://mathworld.wolfram.com/AdditiveIdentity.html): There exists an element ![0 in S](https://mathworld.wolfram.com/images/equations/Ring/Inline8.svg) such that for all ![a in S](https://mathworld.wolfram.com/images/equations/Ring/Inline9.svg), ![0+a=a+0=a](https://mathworld.wolfram.com/images/equations/Ring/Inline10.svg),

4. [Additive inverse](https://mathworld.wolfram.com/AdditiveInverse.html): For every ![a in S](https://mathworld.wolfram.com/images/equations/Ring/Inline11.svg) there exists ![-a in S](https://mathworld.wolfram.com/images/equations/Ring/Inline12.svg) such that ![a+(-a)=(-a)+a=0](https://mathworld.wolfram.com/images/equations/Ring/Inline13.svg),

5. Left and right distributivity: For all ![a,b,c in S](https://mathworld.wolfram.com/images/equations/Ring/Inline14.svg), ![a*(b+c)=(a*b)+(a*c)](https://mathworld.wolfram.com/images/equations/Ring/Inline15.svg) and ![(b+c)*a=(b*a)+(c*a)](https://mathworld.wolfram.com/images/equations/Ring/Inline16.svg),

6. Multiplicative associativity: For all ![a,b,c in S](https://mathworld.wolfram.com/images/equations/Ring/Inline17.svg), ![(a*b)*c=a*(b*c)](https://mathworld.wolfram.com/images/equations/Ring/Inline18.svg) (a ring satisfying this property is sometimes explicitly termed an associative ring).

Conditions 1-5 are always required. Though non-associative rings exist, virtually all texts also require condition 6 (Itô 1986, pp. 1369-1372; p. 418; Zwillinger 1995, pp. 141-143; Harris and Stocker 1998; Knuth 1998; Korn and Korn 2000; Bronshtein and Semendyayev 2004).

Rings may also satisfy various optional conditions:

7. Multiplicative commutativity: For all ![a,b in S](https://mathworld.wolfram.com/images/equations/Ring/Inline19.svg), ![a*b=b*a](https://mathworld.wolfram.com/images/equations/Ring/Inline20.svg) (a ring satisfying this property is termed a [commutative ring](https://mathworld.wolfram.com/CommutativeRing.html)),

8. [Multiplicative identity](https://mathworld.wolfram.com/MultiplicativeIdentity.html): There exists an element ![1 in S](https://mathworld.wolfram.com/images/equations/Ring/Inline21.svg) such that for all ![a!=0 in S](https://mathworld.wolfram.com/images/equations/Ring/Inline22.svg), ![1*a=a*1=a](https://mathworld.wolfram.com/images/equations/Ring/Inline23.svg) (a ring satisfying this property is termed a [unit ring](https://mathworld.wolfram.com/UnitRing.html), or sometimes a "ring with identity"),

9. [Multiplicative inverse](https://mathworld.wolfram.com/MultiplicativeInverse.html): For each ![a!=0](https://mathworld.wolfram.com/images/equations/Ring/Inline24.svg) in ![S](https://mathworld.wolfram.com/images/equations/Ring/Inline25.svg), there exists an element ![a^(-1) in S](https://mathworld.wolfram.com/images/equations/Ring/Inline26.svg) such that for all ![a!=0 in S](https://mathworld.wolfram.com/images/equations/Ring/Inline27.svg), ![a*a^(-1)=a^(-1)*a=1](https://mathworld.wolfram.com/images/equations/Ring/Inline28.svg), where 1 is the [identity element](https://mathworld.wolfram.com/IdentityElement.html).

A ring satisfying all additional properties 6-9 is called a [field](https://mathworld.wolfram.com/Field.html), whereas one satisfying only additional properties 6, 8, and 9 is called a [division algebra](https://mathworld.wolfram.com/DivisionAlgebra.html) (or skew field).

Some authors depart from the normal convention and require (under their definition) a ring to include additional properties. For example, Birkhoff and Mac Lane (1996) define a ring to have a [multiplicative identity](https://mathworld.wolfram.com/MultiplicativeIdentity.html) (i.e., property 8).

Here are a number of examples of rings lacking particular conditions:

1. Without multiplicative associativity (sometimes also called nonassociative algebras): [octonions](https://mathworld.wolfram.com/Octonion.html), OEIS [A037292](http://oeis.org/A037292),

2. Without multiplicative commutativity: Real-valued ![2×2](https://mathworld.wolfram.com/images/equations/Ring/Inline29.svg) [matrices](https://mathworld.wolfram.com/Matrix.html), [quaternions](https://mathworld.wolfram.com/Quaternion.html),

3. Without multiplicative identity: Even-valued [integers](https://mathworld.wolfram.com/Integer.html),

4. Without multiplicative inverse: [integers](https://mathworld.wolfram.com/Integer.html).

The word ring is short for the German word 'Zahlring' (number ring). The French word for a ring is _anneau_, and the modern German word is _Ring_, both meaning (not so surprisingly) "ring." Fraenkel (1914) gave the first abstract definition of the ring, although this work did not have much impact. The term was introduced by Hilbert to describe rings like

|   |
|---|
|![Z[RadicalBox[2, 3]]={a+bRadicalBox[2, 3]+cRadicalBox[4, 3] such that a,b,c in Z}.](https://mathworld.wolfram.com/images/equations/Ring/NumberedEquation1.svg)|

By successively multiplying the new element ![RadicalBox[2, 3]](https://mathworld.wolfram.com/images/equations/Ring/Inline30.svg), it eventually loops around to become something already generated, something like a ring, that is, ![(RadicalBox[2, 3])^2=RadicalBox[4, 3]](https://mathworld.wolfram.com/images/equations/Ring/Inline31.svg) is new but ![(RadicalBox[2, 3])^3=2](https://mathworld.wolfram.com/images/equations/Ring/Inline32.svg) is an integer. All [algebraic numbers](https://mathworld.wolfram.com/AlgebraicNumber.html) have this property, e.g., ![eta=sqrt(2)+sqrt(3)](https://mathworld.wolfram.com/images/equations/Ring/Inline33.svg) satisfies ![eta^4=10eta^2-1](https://mathworld.wolfram.com/images/equations/Ring/Inline34.svg).

A ring must contain at least one element, but need not contain a multiplicative identity or be commutative. The number of finite rings of ![n](https://mathworld.wolfram.com/images/equations/Ring/Inline35.svg) elements for ![n=1](https://mathworld.wolfram.com/images/equations/Ring/Inline36.svg), 2, ..., are 1, 2, 2, 11, 2, 4, 2, 52, 11, 4, 2, 22, 2, 4, 4, ... (OEIS [A027623](http://oeis.org/A027623) and [A037234](http://oeis.org/A037234); Fletcher 1980). If ![p](https://mathworld.wolfram.com/images/equations/Ring/Inline37.svg) and ![q](https://mathworld.wolfram.com/images/equations/Ring/Inline38.svg) are [prime](https://mathworld.wolfram.com/PrimeNumber.html), there are two rings of size ![p](https://mathworld.wolfram.com/images/equations/Ring/Inline39.svg), four rings of size ![pq](https://mathworld.wolfram.com/images/equations/Ring/Inline40.svg), 11 rings of size ![p^2](https://mathworld.wolfram.com/images/equations/Ring/Inline41.svg) (Singmaster 1964, Dresden), 22 rings of size ![p^2q](https://mathworld.wolfram.com/images/equations/Ring/Inline42.svg), 52 rings of size ![p^3](https://mathworld.wolfram.com/images/equations/Ring/Inline43.svg) for ![p=2](https://mathworld.wolfram.com/images/equations/Ring/Inline44.svg), and 53 rings of size ![p^3](https://mathworld.wolfram.com/images/equations/Ring/Inline45.svg) for ![p>2](https://mathworld.wolfram.com/images/equations/Ring/Inline46.svg) (Ballieu 1947, Gilmer and Mott 1973; Dresden).

A ring that is [commutative](https://mathworld.wolfram.com/Commutative.html) under multiplication, has a unit element, and has no divisors of zero is called an [integral domain](https://mathworld.wolfram.com/IntegralDomain.html). A ring whose nonzero elements form a [commutative](https://mathworld.wolfram.com/Commutative.html) multiplication group is called a [field](https://mathworld.wolfram.com/Field.html). The simplest rings are the [integers](https://mathworld.wolfram.com/Integer.html) ![Z](https://mathworld.wolfram.com/images/equations/Ring/Inline47.svg), [polynomials](https://mathworld.wolfram.com/Polynomial.html) ![R[x]](https://mathworld.wolfram.com/images/equations/Ring/Inline48.svg) and ![R[x,y]](https://mathworld.wolfram.com/images/equations/Ring/Inline49.svg) in one and two variables, and [square](https://mathworld.wolfram.com/SquareMatrix.html) ![n×n](https://mathworld.wolfram.com/images/equations/Ring/Inline50.svg) [real matrices](https://mathworld.wolfram.com/RealMatrix.html).

Rings which have been investigated and found to be of interest are usually named after one or more of their investigators. This practice unfortunately leads to names which give very little insight into the relevant properties of the associated rings.

Renteln and Dundes (2005) give the following (bad) mathematical joke about rings:

Q: What's an [Abelian group](https://mathworld.wolfram.com/AbelianGroup.html) under addition, closed, associative, distributive, and bears a curse? A: The Ring of the Nibelung.

---

## See also

[Abelian Group](https://mathworld.wolfram.com/AbelianGroup.html), [Artinian Ring](https://mathworld.wolfram.com/ArtinianRing.html), [Chow Ring](https://mathworld.wolfram.com/ChowRing.html), [Dedekind Ring](https://mathworld.wolfram.com/DedekindRing.html), [Division Algebra](https://mathworld.wolfram.com/DivisionAlgebra.html), [Endomorphism Ring](https://mathworld.wolfram.com/EndomorphismRing.html), [Field](https://mathworld.wolfram.com/Field.html), [Gorenstein Ring](https://mathworld.wolfram.com/GorensteinRing.html), [Group](https://mathworld.wolfram.com/Group.html), [Group Ring](https://mathworld.wolfram.com/GroupRing.html), [Ideal](https://mathworld.wolfram.com/Ideal.html), [Integral Domain](https://mathworld.wolfram.com/IntegralDomain.html), [Module](https://mathworld.wolfram.com/Module.html), [Nilpotent Element](https://mathworld.wolfram.com/NilpotentElement.html), [Noetherian Ring](https://mathworld.wolfram.com/NoetherianRing.html), [Noncommutative Ring](https://mathworld.wolfram.com/NoncommutativeRing.html), [Number Field](https://mathworld.wolfram.com/NumberField.html), [Prime Ring](https://mathworld.wolfram.com/PrimeRing.html), [Prüfer Ring](https://mathworld.wolfram.com/PrueferRing.html), [Quotient Ring](https://mathworld.wolfram.com/QuotientRing.html), [Regular Ring](https://mathworld.wolfram.com/RegularRing.html), [Ring of Integers](https://mathworld.wolfram.com/RingofIntegers.html), [Ringoid](https://mathworld.wolfram.com/Ringoid.html), [Semiprime Ring](https://mathworld.wolfram.com/SemiprimeRing.html), [Semiring](https://mathworld.wolfram.com/Semiring.html), [Semisimple Ring](https://mathworld.wolfram.com/SemisimpleRing.html), [Simple Ring](https://mathworld.wolfram.com/SimpleRing.html), [Trivial Ring](https://mathworld.wolfram.com/TrivialRing.html), [Unit Ring](https://mathworld.wolfram.com/UnitRing.html), [Zero Divisor](https://mathworld.wolfram.com/ZeroDivisor.html)