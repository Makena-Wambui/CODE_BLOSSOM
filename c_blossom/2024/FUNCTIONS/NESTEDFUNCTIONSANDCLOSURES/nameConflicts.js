// If there are two argumnts or variables with the same name in the scope of a closure, there is a name conflict.
//  The innermost scope takes highest precedence.

// Outermost scope takes the lowest precedence.

// The scope chain is followed.

// The innermost scope is the first on the chain to be checked.
// The outermost scope is the last on the chain to be checked.

function outside() {
  const x = 1;
  function inside(x) {
    return x * 2; // Name conflict happens here between inside's parameter x and outside's variable x.

    /*
        Scope chain: inside -> outside -> global

        inside's x takes precedence over outside's x

        therefore inside's x is used in the return statement
        */
  }
  return inside;
}

console.log(outside()(10)); // 10 * 2 = 20, not 1 * 2 = 2
