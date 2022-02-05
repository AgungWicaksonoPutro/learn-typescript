"use strict";
// Enum
var MONTH;
(function (MONTH) {
    MONTH[MONTH["JAN"] = 10] = "JAN";
    MONTH[MONTH["FEB"] = 11] = "FEB";
    MONTH[MONTH["MAR"] = 12] = "MAR";
    MONTH[MONTH["APR"] = 13] = "APR";
    MONTH[MONTH["MEI"] = 14] = "MEI";
})(MONTH || (MONTH = {}));
console.log(MONTH);
// String Enums
var GENDER;
(function (GENDER) {
    GENDER["MALE"] = "L";
    GENDER["FEMALE"] = "P";
})(GENDER || (GENDER = {}));
console.log(GENDER.FEMALE);
