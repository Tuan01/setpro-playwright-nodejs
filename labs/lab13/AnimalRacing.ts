import Animal from "./Animal";

export default class AnimalRacing {
    static getWinner(animalList: Animal[]) : Animal {
        let winner = animalList[0];
        animalList.forEach(animal => {
            if(animal.getSpeed() > winner.getSpeed()){
                winner = animal;
            }
        })
        console.log(`The winner has speed: ${winner.getSpeed()}`)
        return winner;
    }
}