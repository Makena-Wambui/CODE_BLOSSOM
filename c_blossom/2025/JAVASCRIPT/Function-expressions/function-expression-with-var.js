console.log(notHoistedFuncExp); // undefined because var declarations are hoisted, the assignment is not

// notHoistedFuncExp(); // TypeError: notHoistedFuncExp is not a function

var notHoistedFuncExp = function () {
  console.log(`Function not hoisted`);
};

notHoistedFuncExp();
