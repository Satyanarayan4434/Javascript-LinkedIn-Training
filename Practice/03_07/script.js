/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const car ={
    celerio:500000,
    scorpio:900000,
    BMW:3000000,
    MG:{
      MG_Hector:2500000,
      MG_X:5000000
    }
}
console.log("Price of celerio: ",car.celerio)
console.log("Price of scorpio: ",car.scorpio)
console.log("Price of BMW: ",car.BMW)
console.log("Price of MG Hector: ",car.MG.MG_Hector)
console.log("Price of MG x: ",car.MG.MG_X)