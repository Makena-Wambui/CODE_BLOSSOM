/*
~ A module can be imported multiple times, but it will be executed only once.
! A module's code is evaluated only the first time it is imported.
! If the same module is imported multiple times into other modules, the code is not re-evaluated. Its code is executed only once, upon the first import.
! The module's exports are cached and shared between all importers.
~ All subsequent imports will return the cached version.
^ There is only a one time evaluation, which has important consequences:
    ^ - If executing a module's code has side effects, like showing a message, even if you import the module several times, that message will be shown only once, the first time the module is imported.

*/

console.log(`Logger Module is being evaluated...`);

export function logMessage(message) {
  console.log(`Log: ${message}`);
}
