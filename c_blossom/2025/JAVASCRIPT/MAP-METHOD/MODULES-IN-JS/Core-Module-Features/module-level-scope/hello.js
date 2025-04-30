/*
hello.js should import the user variable from user.js
In modules, we use export/import instead of relying on global variables.
*/

import { user } from "./user.js";
// alert(user);
document.body.innerHTML = user;
