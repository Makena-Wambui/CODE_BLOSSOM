// Which of these alerts are going to execute?

// What will the results of the expressions be inside if(...)?

/*
if (-1 || 0) alert( 'first' );

All numbers including negative numbers, excluding 0 are considered to be truthy.

-1 || 0 => -1.

-1 is truthy.

so alert( 'first' ) will execute.
*/
if (-1 || 0) alert("first");

/*
if (-1 && 0) alert( 'second' );

-1 && 0 => 0.

0 is falsy.

so alert( 'second' ) will not execute.
*/
if (-1 && 0) alert("second");

/*
if (null || -1 && 1) alert( 'third' );

&& has a higher precedence than ||.
-1 && 1 => 1.

null || 1 => 1.

1 is truthy.

so alert( 'third' ) will execute.
*/
if (null || (-1 && 1)) alert("third");
