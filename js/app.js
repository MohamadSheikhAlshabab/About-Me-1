'use strict';
var mark = 0
var userName = prompt("hello,please enter your name :) ");
//console.log(userName);
alert("welcome ," + userName);

var myAge = prompt("is my age 23? (Y/N)(Yes/No0");
if (myAge.toLocaleLowerCase() === 'yes' || myAge.toLocaleLowerCase() === 'y') {
  //console.log(myAge);
  mark++
  alert('yep! Iam 23');
} else {
  //console.log(myAge);
  alert('NO,Iam 23');
}

var myJOB = prompt("Am I an architect ? (Y/N)(Yes/No0");
if (myJOB.toLocaleLowerCase() === 'yes' || myJOB.toLocaleLowerCase() === 'y') {
  //console.log(myJOB);
  mark++
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
  mark++
  alert('NO,I have not :0 ');
}

var workExpe =prompt("did I work as an interior designer in ksa? (Y/N)(Yes/No0");
if (address.toLocaleLowerCase() === 'yes' || address.toLocaleLowerCase() === 'y') {
  //console.log(address);
  mark++
  alert('yes, I worked as a freelancer ');
} else {
  //console.log(address);
  alert('NO,');
}

var workExpe = prompt("can I make a 3d model using 3dmax program for your producte? (Y/N)(Yes/No0");
if (address.toLocaleLowerCase() === 'yes' || address.toLocaleLowerCase() === 'y') {
  //console.log(address);
  mark++
  alert('yes, I can ');
} else {
  //console.log(address);
  alert('NO,I can make it');
}

alert('hello ' + name + ' welcome to my website have a nice day!')
document.write("Hello " + userName);

var seasonsNumber = prompt("How many seasons are there in Sherlock Holmes series?");

for (var i = 0; i < 3; i++) {

  if (seasonsNumber == 4) {
    alert('yes!,its 4 ');
    mark++
    break;
  } else if (seasonsNumber == 3) {

    alert('the true answer is bigger than 3');
    seasonsNumber = prompt("you are so close!!..How many seasons are there in Sherlock Holmes series?");

  } else if (seasonsNumber == 5) {
    alert('the true answer is lower than 3');
    seasonsNumber = prompt("you are so close!!..How many seasons are there in Sherlock Holmesseries?");
  }
  else {
    seasonsNumber = prompt("opps try agin!..How many seasons are there in Sherlock Holmesseries?");
  }

}
//console.log('i' + i);


var series = ['sherlock', 'presion break', 'hannibal', 'mentalist'];

var userAnswer = prompt('what is my favorite tv show ?');

for (var m = 0; m < 5; m++) {

  if (userAnswer == series[0] || userAnswer == series[1] || userAnswer == series[2] || userAnswer == series[3]) {
    alert('yes!,they are : ' + series);
     mark++
     break;
  }
  else {
    seasonsNumber = prompt(" try agin!");
  }
}
alert('ur mark'+mark);











