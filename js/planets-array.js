// (function() {
//     "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'Saturn', 'Uranus', 'neptune'];
    console.log(planets);
    planets.unshift('sun');
    console.log(planets);
    planets.push('pluto');
    console.log(planets);x
    // function for logging the planets array
    // function logPlanets() {
    //     console.log("Here is the list of planets:");
    //     console.log(planets);
    //     console.log("---- ---- ---- ----");
    // }

//     logPlanets();
//
//     console.log('Adding "The Sun" to the beginning of the planets array.');
//     // TODO: Read the console.log() statement above. Write code to perform the step it describes.
//     logPlanets();
//
//     console.log('Adding "Pluto" to the end of the planets array.');
//     // TODO: Read the console.log() statement above. Write code to perform the step it describes.
//     logPlanets();
//
//     console.log('Removing "The Sun" from the beginning of the planets array.');
//     // TODO: Read the console.log() statement above. Write code to perform the step it describes.
//     logPlanets();
        planets.shift()
//
//     console.log('Removing "Pluto" from the end of the planets array.');
//     // TODO: Read the console.log() statement above. Write code to perform the step it describes.
//     logPlanets();
        planets.pop()
//
//     console.log('Finding and logging the index of "Earth" in the planets array.');
//     // TODO: Read the console.log() statement above. Write code to perform the step it describes.
        console.log(planets.indexOf("earth"));
//
//     console.log('Using splice to remove the planet after "Earth".');
//     // TODO: Read the console.log() statement above. Write code to perform the step it describes.
//     logPlanets();
        planets.splice(planets.indexof('earth') + 1,1);
//
//     console.log('Using splice to add back the planet after "Earth".');
//     // TODO: Read the console.log() statement above. Write code to perform the step it describes.
//     logPlanets();
        planets.splice(planets.indexof(earth + 1, 0,))
//
//     console.log("Reversing the order of the planets array.");
//     // TODO: Read the console.log() statement above. Write code to perform the step it describes.
//     logPlanets();
//
//     console.log("Sorting the planets array.");
//     // TODO: Read the console.log() statement above. Write code to perform the step it describes.
//     logPlanets();
// })();
