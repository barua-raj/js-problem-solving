// Problem 01:
// A new company, "AlphaCorp," wants to automatically generate a Unique Employee username to give its employees access to their database. This username will be created based on some personal information of the employees.

// You need to write a program that will take an employee object as input, where the employee's information will be as follows:
// { firstName: "John", lastName: "Doe", employeeId: 101, departmentCode: "HR" }

// Output:
// username: doe101@alphacorp.com

// Rules:
// 👉 First, the first three letters of the lastName will be in lowercase.
// 👉 Then, the employeeId will be added.
// 👉 After that, there will be an @.
// 👉 Then, the company name will be in lowercase.
// 👉 Finally, there will be a .com.

// Problem 02:
// In addition to the username, generate a Temporary Password.
// 👉 If the lastName has less than three characters, all characters of the lastName will be used.
// 👉 For Password generation, use the first name's last 3 characters + # + departmentCode.

// Output:
// ID: doe101@alphacorp.com, TempPass: jn#HR


// Problem 01:

const employeeInfo = {firstName: "John", lastName: "Doe", employeeId: 101, departmentCode: "HR"};
employeeInfo['lastName'] = employeeInfo['lastName'].toLowerCase();
employeeInfo['departmentCode'] = employeeInfo['departmentCode'].toLowerCase();
const emailExtension = "@alphacorp.com";
console.log("username: ", employeeInfo['lastName'].concat(employeeInfo['employeeId']).concat(employeeInfo['departmentCode']).concat(emailExtension));


// Problem 02: