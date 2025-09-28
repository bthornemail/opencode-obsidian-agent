Zermelo-Fraenkel Axioms
The Zermelo-Fraenkel axioms are the basis for Zermelo-Fraenkel set theory. In the following (Jech 1997, p. 1),  exists  stands for exists,  forall  means for all,  in  stands for "is an element of," emptyset for the empty set, => for implies,  ^  for AND,  v  for OR, and = for "is equivalent to."

1. Axiom of Extensionality: If X and Y have the same elements, then X=Y.

  forall u(u in X=u in Y)=>X=Y. 	
(1)
2. Axiom of the Unordered Pair: For any a and b there exists a set {a,b} that contains exactly a and b. (also called Axiom of Pairing)

  forall a  forall b  exists c  forall x(x in c=(x=a v x=b)). 	
(2)
3. Axiom of Subsets: If phi is a property (with parameter p), then for any X and p there exists a set Y={u in X:phi(u,p)} that contains all those u in X that have the property phi. (also called Axiom of Separation or Axiom of Comprehension)

  forall X  forall p  exists Y  forall u(u in Y=(u in X ^ phi(u,p))). 	
(3)
4. Axiom of the Sum Set: For any X there exists a set Y= union X, the union of all elements of X. (also called Axiom of Union)

  forall X  exists Y  forall u(u in Y= exists z(z in X ^ u in z)). 	
(4)
5. Axiom of the Power Set: For any X there exists a set Y=P(X), the set of all subsets of X.

  forall X  exists Y  forall u(u in Y=u subset= X). 	
(5)
6. Axiom of Infinity: There exists an infinite set.

  exists S[emptyset in S ^ ( forall x in S)[x union {x} in S]]. 	
(6)
7. Axiom of Replacement: If F is a function, then for any X there exists a set Y=F[X]={F(x):x in X}.

  forall x  forall y  forall z[phi(x,y,p) ^ phi(x,z,p)=>y=z] 
 => forall X  exists Y  forall y[y in Y=( exists x in X)phi(x,y,p)]. 	
(7)
8. Axiom of Foundation: Every nonempty set has an  in -minimal element. (also called Axiom of Regularity)

  forall S[S!=emptyset=>( exists x in S)S intersection x=emptyset]. 	
(8)
9. Axiom of Choice: Every family of nonempty sets has a choice function.

  forall x in a exists A(x,y)=> exists y forall x in aA(x,y(x)). 	
(9)
The system of axioms 1-8 is called Zermelo-Fraenkel set theory, denoted "ZF." The system of axioms 1-8 minus the axiom of replacement (i.e., axioms 1-6 plus 8) is called Zermelo set theory, denoted "Z." The set of axioms 1-9 with the axiom of choice is usually denoted "ZFC."

Unfortunately, there seems to be some disagreement in the literature about just what axioms constitute "Zermelo set theory." Mendelson (1997) does not include the axioms of choice or foundation in Zermelo set theory, but does include the axiom of replacement. Enderton (1977) includes the axioms of choice and foundation, but does not include the axiom of replacement. Itô includes an Axiom of the empty set, which can be gotten from (6) and (3), via  exists X(X=X) and emptyset={u:u!=u}.

Abian (1969) proved consistency and independence of four of the Zermelo-Fraenkel axioms.

See also
Axiom of Choice, Axiom of Extensionality, Axiom of Foundation, Axiom of Infinity, Axiom of the Power Set, Axiom of Replacement, Axiom of Subsets, Axiom of the Unordered Pair, Set Theory, von Neumann-Bernays-Gödel Set Theory, Zermelo-Fraenkel Set Theory, Zermelo Set Theory

# Zermelo-Fraenkel Axioms

---

The Zermelo-Fraenkel axioms are the basis for [Zermelo-Fraenkel set theory](https://mathworld.wolfram.com/Zermelo-FraenkelSetTheory.html). In the following (Jech 1997, p. 1), ![exists](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline1.svg) stands for [exists](https://mathworld.wolfram.com/Exists.html), ![forall](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline2.svg) means [for all](https://mathworld.wolfram.com/ForAll.html), ![in](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline3.svg) stands for "is an element of," ![emptyset](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline4.svg) for the [empty set](https://mathworld.wolfram.com/EmptySet.html), ![=>](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline5.svg) for [implies](https://mathworld.wolfram.com/Implies.html), ![^](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline6.svg) for [AND](https://mathworld.wolfram.com/AND.html), ![v](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline7.svg) for [OR](https://mathworld.wolfram.com/OR.html), and ![=](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline8.svg) for "is [equivalent](https://mathworld.wolfram.com/Equivalent.html) to."

1. [Axiom of Extensionality](https://mathworld.wolfram.com/AxiomofExtensionality.html): If ![X](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline9.svg) and ![Y](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline10.svg) have the same elements, then ![X=Y](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline11.svg).

|   |   |
|---|---|
|![forall u(u in X=u in Y)=>X=Y.](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/NumberedEquation1.svg)|(1)|

2. [Axiom of the Unordered Pair](https://mathworld.wolfram.com/AxiomoftheUnorderedPair.html): For any ![a](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline12.svg) and ![b](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline13.svg) there exists a set ![{a,b}](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline14.svg) that contains exactly ![a](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline15.svg) and ![b](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline16.svg). (also called Axiom of Pairing)

|   |   |
|---|---|
|![forall a  forall b  exists c  forall x(x in c=(x=a v x=b)).](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/NumberedEquation2.svg)|(2)|

3. [Axiom of Subsets](https://mathworld.wolfram.com/AxiomofSubsets.html): If ![phi](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline17.svg) is a property (with parameter ![p](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline18.svg)), then for any ![X](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline19.svg) and ![p](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline20.svg) there exists a set ![Y={u in X:phi(u,p)}](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline21.svg) that contains all those ![u in X](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline22.svg) that have the property ![phi](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline23.svg). (also called Axiom of Separation or Axiom of Comprehension)

|   |   |
|---|---|
|![forall X  forall p  exists Y  forall u(u in Y=(u in X ^ phi(u,p))).](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/NumberedEquation3.svg)|(3)|

4. [Axiom of the Sum Set](https://mathworld.wolfram.com/AxiomoftheSumSet.html): For any ![X](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline24.svg) there exists a set ![Y= union X](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline25.svg), the union of all elements of ![X](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline26.svg). (also called Axiom of Union)

|   |   |
|---|---|
|![forall X  exists Y  forall u(u in Y= exists z(z in X ^ u in z)).](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/NumberedEquation4.svg)|(4)|

5. [Axiom of the Power Set](https://mathworld.wolfram.com/AxiomofthePowerSet.html): For any ![X](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline27.svg) there exists a set ![Y=P(X)](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline28.svg), the set of all subsets of ![X](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline29.svg).

|   |   |
|---|---|
|![forall X  exists Y  forall u(u in Y=u subset= X).](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/NumberedEquation5.svg)|(5)|

6. [Axiom of Infinity](https://mathworld.wolfram.com/AxiomofInfinity.html): There exists an infinite set.

|   |   |
|---|---|
|![exists S[emptyset in S ^ ( forall x in S)[x union {x} in S]].](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/NumberedEquation6.svg)|(6)|

7. [Axiom of Replacement](https://mathworld.wolfram.com/AxiomofReplacement.html): If ![F](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline30.svg) is a function, then for any ![X](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline31.svg) there exists a set ![Y=F[X]={F(x):x in X}](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline32.svg).

|   |   |
|---|---|
|![forall x  forall y  forall z[phi(x,y,p) ^ phi(x,z,p)=>y=z] <br>=> forall X  exists Y  forall y[y in Y=( exists x in X)phi(x,y,p)].](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/NumberedEquation7.svg)|(7)|

8. [Axiom of Foundation](https://mathworld.wolfram.com/AxiomofFoundation.html): Every nonempty set has an ![in](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline33.svg)-minimal element. (also called Axiom of Regularity)

|   |   |
|---|---|
|![forall S[S!=emptyset=>( exists x in S)S intersection x=emptyset].](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/NumberedEquation8.svg)|(8)|

9. [Axiom of Choice](https://mathworld.wolfram.com/AxiomofChoice.html): Every family of nonempty sets has a choice function.

|   |   |
|---|---|
|![forall x in a exists A(x,y)=> exists y forall x in aA(x,y(x)).](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/NumberedEquation9.svg)|(9)|

The system of axioms 1-8 is called [Zermelo-Fraenkel set theory](https://mathworld.wolfram.com/Zermelo-FraenkelSetTheory.html), denoted "ZF." The system of axioms 1-8 minus the [axiom of replacement](https://mathworld.wolfram.com/AxiomofReplacement.html) (i.e., axioms 1-6 plus 8) is called [Zermelo set theory](https://mathworld.wolfram.com/ZermeloSetTheory.html), denoted "Z." The set of axioms 1-9 with the [axiom of choice](https://mathworld.wolfram.com/AxiomofChoice.html) is usually denoted "ZFC."

Unfortunately, there seems to be some disagreement in the literature about just what axioms constitute "[Zermelo set theory](https://mathworld.wolfram.com/ZermeloSetTheory.html)." Mendelson (1997) does _not_ include the [axioms of choice](https://mathworld.wolfram.com/AxiomofChoice.html) or [foundation](https://mathworld.wolfram.com/AxiomofFoundation.html) in Zermelo set theory, but does include the [axiom of replacement](https://mathworld.wolfram.com/AxiomofReplacement.html). Enderton (1977) includes the [axioms of choice](https://mathworld.wolfram.com/AxiomofChoice.html) and [foundation](https://mathworld.wolfram.com/AxiomofFoundation.html), but does _not_ include the [axiom of replacement](https://mathworld.wolfram.com/AxiomofReplacement.html). Itô includes an [Axiom of the empty set](https://mathworld.wolfram.com/AxiomoftheEmptySet.html), which can be gotten from (6) and (3), via ![exists X(X=X)](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline34.svg) and ![emptyset={u:u!=u}](https://mathworld.wolfram.com/images/equations/Zermelo-FraenkelAxioms/Inline35.svg).

Abian (1969) proved [consistency](https://mathworld.wolfram.com/Consistency.html) and independence of four of the Zermelo-Fraenkel axioms.

---

## See also

[Axiom of Choice](https://mathworld.wolfram.com/AxiomofChoice.html), [Axiom of Extensionality](https://mathworld.wolfram.com/AxiomofExtensionality.html), [Axiom of Foundation](https://mathworld.wolfram.com/AxiomofFoundation.html), [Axiom of Infinity](https://mathworld.wolfram.com/AxiomofInfinity.html), [Axiom of the Power Set](https://mathworld.wolfram.com/AxiomofthePowerSet.html), [Axiom of Replacement](https://mathworld.wolfram.com/AxiomofReplacement.html), [Axiom of Subsets](https://mathworld.wolfram.com/AxiomofSubsets.html), [Axiom of the Unordered Pair](https://mathworld.wolfram.com/AxiomoftheUnorderedPair.html), [Set Theory](https://mathworld.wolfram.com/SetTheory.html), [von Neumann-Bernays-Gödel Set Theory](https://mathworld.wolfram.com/vonNeumann-Bernays-GoedelSetTheory.html), [Zermelo-Fraenkel Set Theory](https://mathworld.wolfram.com/Zermelo-FraenkelSetTheory.html), [Zermelo Set Theory](https://mathworld.wolfram.com/ZermeloSetTheory.html)