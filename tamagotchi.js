console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name) {
        this.name = name
        this.foodInTummy=10
        this.restedness=10
        this.health=10
    }
    cry() {
        this.foodInTummy -= 1
        console.log(`WAHH! ${this.name} has ${this.foodInTummy} food in the tummy.`)
    }
}

//create new Tamagotchis


//test out your Tamagotchies below via console.logs
