(function(){
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */
    // var person = {};

    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */
    // person.firstname = "Tony"
    // person.lastname = "Ishak";
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */
    var person = {
        firstName : "Tony",
        lastName : "Ishak",
        sayHello : sayHellofx

    }
    function sayHellofx(){
        return "Hello from " + person.firstName + " " + person.lastName;
    }
    console.log(person.sayHello());
    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    console.log("Here is the amount before the discount and the amount after discount!");
    shoppers.forEach(function (shopper) {
        // shopper.forEach(function (amount) {
        console.log(shopper.amount);
        // });
        if (shopper.amount > 200) {
            var total = shopper.amount - (shopper.amount * .1);
        }else{
            var total = shopper.amount;
        }
        console.log("Cameron total amount is : " + total);

    });

})();
