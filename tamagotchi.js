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
        this.foodInTummy --
        console.log(`WAHH! ${this.name} has ${this.foodInTummy} food in the tummy.`)
    }
    puke() {
        this.foodInTummy --
        console.log(`BLEHH! ${this.name} has ${this.foodInTummy} food in the tummy.`)
    }
    yawn() {
        this.restedness -- 
        console.log(`${this.name}'s current restedness is ${this.restedness}.`)
    }
}


let Bob = new Tamagotchi('Bob', 'Dragon')
let Bobo = new Tamagotchi('Bobo', 'Whale')
let Bibi = new Tamagotchi('Bibi', 'Bird')
let Bomba = new Tamagotchi('Bomba', 'Pig')

Bob.cry()
Bobo.cry()
Bobo.puke()
Bibi.cry()
Bomba.cry()
Bomba.yawn()
//create new Tamagotchis


//test out your Tamagotchies below via console.logs
