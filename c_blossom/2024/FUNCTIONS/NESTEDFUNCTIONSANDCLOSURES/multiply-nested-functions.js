// Functions can be multiply-nested.

// Function A contains function B which contains Function C.

// Functions B and C form closures.

// B can access A

// C can access B, hence C can access A

function A(arg1) {
  function B(arg2) {
    /*
    B forms a closure including A, B can access A's arguments and variables
    */
    function C(arg3) {
      /*
        C forms a closure including B.

        C's closure includes B, and B's closure includes A, hence C's closure also includes A.
        C can access the arguments and variables of A and B

        C chains the scopes of B and A, in that order. chain: C -> B -> A

        This is scope chaining.

        A cannot access B.
        A cannot access C.
        C is only private to B.

        */
      console.log(arg1 + arg2 + arg3);
    }
    C(2);
  }
  B(1);
}

A(5); // 8
