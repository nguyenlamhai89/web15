
// function add5(getNumber, print){
//     var num = getNumber() + 5 
//     print(num)
// }

// function randomNumber(){
//     return Math.floor(Math.random()*1000);
// }

// function printNumber(num){
//     console.log(num)
// }

// setTimeout(function(){add5(randomNumber, printNumber)}, 1000*1)
// console.log("ahihi")



// var a = 10;
// function abc(){
//     var b = 15;
//     function abcd(){
//         var c = 25;
//         console.log(a); //10
//         console.log(b); //15
//         console.log(c); //25
//     }
//     console.log(a); //10
//     console.log(b); //15
//     console.log(c); //undefined
// }

// abc();

// console.log(a);
// console(b);



// function printNum(num, waitTime){
//     setTimeout(function() {
//         console.log(num);
//     }, waitTime*1000)
// }


// function countDown(num) {
//     var i = num;
//     for(i; i >= 0; i--){
//         printNum(1, num-i);
//     }
// }

// countDown(5);

function countDown(num) {
    c = 25 //global scope (window.c)
    for(let i = num; i >= 0; i--){
        setTimeout(function() {
            console.log(i);
        }, (num-i)*1000)
    }
}

countDown(5);