/*
Say you have an expression that has more than one operator like this:
3 + 4 * 5

The order in which execution occurs is defined by the precedence of the operators. ie
which operator has a higher priority than the other.

For example, in this expression multiplication is done first before the addition because multiplication has a higher precedence than addition. 

4 * 5 = 20
3 + 20 = 23

So the result of the expression 3 + 4 * 5 is 23.

Sometimes we might want to override this default order in which operators are prioritized.
We can do this by using parentheses.

(3 + 4) * 5;

In this case, the addition is done first because it is enclosed in parentheses.
(3 + 4) = 7
7 * 5 = 35

Every operator in Js has a prcedence number.
The higher the number the higher the precedence of the operator.
Meaning it will be executed first.

If the operators have the same precedence then the order of execution is from left to right.

Check out the precedence table. no need to cram.
Note that unary operatores have a higher precedence than corresponding binary operators.


That is why in +apples + +oranges, the strings are first converted to numbers before the addition operation is done.
*/
