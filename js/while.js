// var i = 1;
//
// while (i < 70000) {
//     i=i*2
//     console.log(i);
// }



var allCones = Math.floor(Math.random() * 50) + 50;

while (allCones > 0) {

    var cones = Math.floor(Math.random() * 5) + 1;
    if (allCones === 0) {

        console.log("I can finally go home");
    } else if (allCones < cones) {

        console.log("I don't have enough cones to sell..");
    } else {
        //Listing current number of cones available....
        console.log("Current number of cones she has: " + allCones);
        //Announcing number of cones sold...
        console.log("I sold " + cones + " cones!");
        //Selling cones...
        allCones = allCones - cones;
        //Announcing number of cones left after the sale....
        console.log("Number of cones left: " + allCones);
    }








}