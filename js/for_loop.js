

// var userInput = prompt('Please select a number between 1 and 10:');
// var result = Number(userInput);
// console.log('The user entered: ' + result);
//
// for (var i = 1; i < 11;i++) {
//
//     console.log(result + "x"+ i + " = "+ result*i);
//     // 5x1 = 5
// }


// for (var i = 1; i<11; i++){
//     //if a random number is generated state if it's even or odd
//     //by using modulus operator if remainder is zero number is even;
//     //else it is odd.
//     var number = Math.floor(Math.random() * 180) + 20;
//     var result = number % 2;
//     if(result == 0){
//         console.log(number + " number is even");
//     } else {
//         console.log(number + " number is odd");
//     }
// }

for(var i = 1; i<11; i++){
    var str = '';
    for(var j = 0; j < i; j++){
        if(i === 10){
            str = str + i.toString().substr(1,1);
        }else{
            str = str + i;
        }
    }
    console.log(str)
}