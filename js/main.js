// var joshua = {
//   name: 'Joshua',
//   yearOfBirth: 1985,
//   job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//   // this.calculateAge = function() {
//   //   console.log(2019 - this.yearOfBirth);
//   // }
// };

// Person.prototype.calculateAge = function() {
//   console.log(2019 - this.yearOfBirth);
// };

// var john = new Person('John', 1990, 'teacher');
// // john.calculateAge();

// var joshua = new Person('Joshua', 1985, 'bleacher');

// john.calculateAge();
// joshua.calculateAge();
// // console.log(joshua);
// // console.log(john);

// var personProto = {
//   calculateAge: function() {
//     console.log(2019 - this.yearOfBirth);
//   }
// };

// var juan = Object.create(personProto);
// juan.name = 'Juan';
// juan.yearOfBirth = '1980';
// juan.job = 'Teacher';

// var juanita = Object.create(personProto, {
//   name: { value: 'Juanita' },
//   yearOfBirth: { value: 1969 },
//   job: { value: 'designer' }
// });

// var years = [1900, 1969, 1985, 2001, 2018];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }

//   return arrRes;
// }

// function calcAge(el) {
//   return 2019 - el;
// }

// var ages = arrayCalc(years, calcAge);

// console.log(ages);

// get the date //
var now, year;

now = new Date();

year = now.getFullYear;

console.log(year);
