import Animal from "./Animal";
import AnimalRacing from "./AnimalRacing";
import Horse from "./Horse";


const horse = new Horse("Horse")
const tiger = new Horse("Tiger")
const dog = new Horse("Dog")
const winner = AnimalRacing.getWinner([horse,tiger,dog]);
console.log(winner);