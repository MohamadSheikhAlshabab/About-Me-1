'use strict';
var mark = 0
var userName = prompt("hello,please enter your name :) ");
var address;
//console.log(userName);
alert("welcome ," + userName);
var Q1 = (function q1() {
  var myAge = prompt("is my age 23? (Y/N)(Yes/No0");
  if (myAge.toLocaleLowerCase() === 'yes' || myAge.toLocaleLowerCase() === 'y') {
    //console.log(myAge);
    mark++
    alert('yep! Iam 23');
  } else {
    //console.log(myAge);
    alert('NO,Iam 23');
  }
})
  ();


var Q2 = (function q2() {
  var myJOB = prompt("Am I an architect ? (Y/N)(Yes/No0");
  if (myJOB.toLowerCase() === 'yes' || myJOB.toLowerCase() === 'y') {
    //console.log(myJOB);
    mark++
    alert('yes I am an architect');
  } else {
    //console.log(myJOB);
    alert('NO,Iam an architect');
  }
})
  ();
var Q3 = (function q3() {
  address = prompt("do I have 1000000$ ? (Y/N)(Yes/No0");
  if (address.toLowerCase() === 'no' || address.toLowerCase() === 'n') {
    //console.log(address);
    alert('unfortunately :(');
  } else {
    //console.log(address);
    mark++
    alert('NO,I have not :0 ');
  }
})
  ();
var Q4 = (function q4() {
  var workExpe = prompt("did I work as an interior designer in ksa? (Y/N)(Yes/No0");
  if (address.toLowerCase() === 'yes' || address.toLowerCase() === 'y') {
    //console.log(address);
    mark++
    alert('yes, I worked as a freelancer ');
  } else {
    //console.log(address);
    alert('NO,');
  }
})
  ();
var Q5 = (function q5() {
  var workExpe = prompt("can I make a 3d model using 3dmax program for your producte? (Y/N)(Yes/No0");
  if (address.toLocaleLowerCase() === 'yes' || address.toLocaleLowerCase() === 'y') {
    //console.log(address);
    mark++
    alert('yes, I can ');
  } else {
    //console.log(address);
    alert('NO,I can make it');
  }
})
  ();

var Q6 = (function q6() {
  alert('hello ' + name + ' welcome to my website have a nice day!')
  document.write("Hello " + userName);

  var seasonsNumber = parseInt(prompt("How many seasons are there in Sherlock Holmes series?"));

  for (var i = 0; i < 3; i++) {

    if (seasonsNumber === 4) {
      alert('yes!,its 4 ');
      mark++
      //console.log(seasonsNumber);
      break;
    } else if (seasonsNumber === 3) {

      alert('the true answer is bigger than 3');
      seasonsNumber = parseInt(prompt("you are so close!!..How many seasons are there in Sherlock Holmes series?"));

    } else if (seasonsNumber === 5) {
      alert('the true answer is lower than 5');
      seasonsNumber = parseInt(prompt("you are so close!!..How many seasons are there in Sherlock Holmes series?"));
    }
    else {
      seasonsNumber = parseInt(prompt("Oops try again!!..How many seasons are there in Sherlock Holmes series?"));
    }

  }
  alert('the true answer is 4');
})
  ();


var Q7 = (function q7() {
  var series = ['mentalist', 'sherlock', 'presion break', 'hannibal'];


  var userAnswer = prompt('what is my favorite tv show ?');
  
  // alert(`ur mark ${mark}`)
  
  
  for (var i =0 ; i < 4 ; i ++){
    
    for(var j =0 ; j < series.length ; j++){
      // console.log(series.length);
      if(userAnswer == series[j]){
        console.log(userAnswer)
        alert('true');
        i=4;
        break;
        
    }
  }
  
  if (i==4) {
    break;
  }
  
  userAnswer=prompt('try again')
  
}})
();





//   for (var i=0; i<6;i++){
//   if(userAnswer===series[0] ||userAnswer===series[1] ||userAnswer===series[2] ||userAnswer===series[3]){
//  alert(`correct ${series}`);
//  mark++;
// //  console.log(userAnswer);
//  break;
//   }
//   else{
//     userAnswer=prompt('try again');
//   }
// }
// alert(`They are ${series}`);
// })
// ();




//   for (var m = 0; m < 6; m++) {
//     for (var h = 0; h < series.length; h++) {
//       if (userAnswer === series[h]) {
//         alert('yes!,they are : ' + series);
//         // mark++
//         //console.log(userAnswer);
//         h = series.length;
//         break;

//       }
//       else if (m == 6) {
//         break;
//       }
//       else {
//         userAnswer = prompt(" try agin!");
//       }
//     }
//     break;
//   }
// } )
// ();
alert('they are : ' + series);
alert('ur mark' + mark);












