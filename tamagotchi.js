console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name, creatureType) {
        this.name = name
        this.creatureType = creatureType
        this.foodInTummy=10
        this.restedness=10
        this.health=10
    }
    cry() {
        this.foodInTummy -= 1
        console.log(`WAHH! ${this.name} ${this.creatureType} has ${this.foodInTummy} food in the tummy.`)
    }
}

let Bob = new Tamagotchi('Bob', 'Dragon')
let Bobo = new Tamagotchi('Bobo', 'Whale')
let Bibi = new Tamagotchi('Bibi', 'Bird')
let Bomba = new Tamagotchi('Bomba', 'Pig')

Bob.cry()
Bobo.cry()
Bibi.cry()
Bomba.cry()
//create new Tamagotchis


//test out your Tamagotchies below via console.logs
