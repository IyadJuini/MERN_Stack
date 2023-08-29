class Ninja {
    constructor(name, health, speed=3, strength=3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    // sayName(){
    //     console.log(`My name is ${this.name}`)
    // }
    showStats(){
        console.log(`My name is ${this.name}, My health is estimated at ${this.health},My speed ${this.speed} and I got ${this.strength} of power`);
    }
}
const ninja1 = new Ninja("Itachi",10);
// ninja1.sayName();
ninja1.showStats();

