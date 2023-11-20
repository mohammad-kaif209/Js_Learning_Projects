const accountId = 2169;
let accountEmail = "mohammedkaif209@gmail.com";
var accountPassword = "pass"; //prefer not to use var to avoid scope issues...
accountCity = "madanapalle";
let accountState;
//it throws error hence,we cannot change or modify const variable values or we cannot overwrite const variable values..
// accountId = 2269;
// console.log(accountId);

accountEmail = "shaikmohammadk27@gmail.com";
accountPassword = "pass2";

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);