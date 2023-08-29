class Ninja {
    constructor(name, health, speed=3, strength=3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
}

class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10){
        super (name , health, speed, strength )
        this.wisdom = wisdom
    }
    speakWisdom(){
        // console.log(`My name is ${this.name}, My health is estimated at ${this.health},My speed is ${this.speed} and I got ${this.strength} of power and ${this.wisdom} of wisdom  `);
        console.log(this);
    }
}


const superSensei = new Sensei("kakashi",100);
superSensei.speakWisdom();