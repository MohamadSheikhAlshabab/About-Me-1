'use strict';
var userName = prompt("hello,please enter your name :) ");
//console.log(userName);
alert("welcome ," + userName);

var myAge = prompt("is my age 23? (Y/N)(Yes/No0");
if (myAge.toLocaleLowerCase() === 'yes' || myAge.toLocaleLowerCase() === 'y') {
  //console.log(myAge);
  alert('yep! Iam 23');
} else {
  //console.log(myAge);
  alert('NO,Iam 23');
}

var myJOB = prompt("Am I an architect ? (Y/N)(Yes/No0");
if (myJOB.toLocaleLowerCase() === 'yes' || myJOB.toLocaleLowerCase() === 'y') {
  //console.log(myJOB);
  alert('yes I am an architect');
} else {
  //console.log(myJOB);
  alert('NO,Iam an architect');
}

var address = prompt("do I have 1000000$ ? (Y/N)(Yes/No0");
if (address.toLocaleLowerCase() === 'no' || address.toLocaleLowerCase() === 'n') {
  //console.log(address);
  alert('yes ,unfortunately :(');
} else {
  //console.log(address);
  alert('NO,I have not :0 ');
}

var workExpe = prompt("did I work as an interior designer in ksa? (Y/N)(Yes/No0");
if (address.toLocaleLowerCase() === 'yes' || address.toLocaleLowerCase() === 'y') {
  //console.log(address);
  alert('yes, I worked as a freelancer ');
} else {
  //console.log(address);
  alert('NO,I worked as a freelancer');
}

var workExpe = prompt("can I make a 3d model using 3dmax program for your producte? (Y/N)(Yes/No0");
if (address.toLocaleLowerCase() === 'yes' || address.toLocaleLowerCase() === 'y') {
  //console.log(address);
  alert('yes, I can ');
} else {
  //console.log(address);
  alert('NO,I cant');
}

alert('hello ' + name + ' welcome to my website have a nice day!')
document.write("Hello " + userName);