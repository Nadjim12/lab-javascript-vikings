// Soldier
class Soldier {
    constructor (health,strength) {
        this.health = health;
        this.strength = strength;

    };
    
    attack() { return 
        this.strength;
};

    receiveDamage(damage){ 
        this.health -= damage 
    };

}
const Soldier1= newSoldier(100,150);

// Viking
class Viking extends Soldier{
    constructor (name,health,strength) {
        super(health,strength)
        this.name = name;
    }
    
    receiveDamage(damage) {
        this.health -= damage;
    
    if (this,health > 0) {
        return `${this.name} has received ${damage} points of damage`;
    } else {
        return `${this.name} has died in act of combat`;  
     }
    
    }
    battleCry() {
        return `Odin Owns You All!`;
      }
}
const Viking1 = newViking("Viking1",100,300)
console.log(Viking1.receiveDamage());

// Saxon
class Saxon extends Soldier {
constructor (name,health,strength) {
        super(health,strength)
    }
    receiveDamage(damage) {
        this.health -= damage;
    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`
    }  else {
        return `A Saxon has died in combat`;
      }
    }
}

const Saxon1 = newSaxon(100,250);

// War
class War {
constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}
addViking(newViking){
this.vikingArmy.push(newViking)
}

addSaxon(newSaxon) {
    this.saxonArmy.push(newSaxon);
}

vikingAttack(){
let randomSaxonNumber=Math.floor(Math.random()*this.saxonArmy.length);
let randomVikingNumber=Math.floor(Math.random()*this.vikingArmy.length);

const saxon=this.saxonArmy[randomSaxonNumber];
const viking=this.vikingArmy[randomVikingNumber];
saxon.receiveDamage(viking.strength);
if (saxon.health<=0){
    this.saxonArmy.splice(randomSaxonNumber,1)
}
return saxon.receiveDamage(viking.strength);

saxonAttack() {
    let v1 = Math.floor(Math.random() * this.vikingArmy.length);
    let s1 = Math.floor(Math.random() * this.saxonArmy.length);
    let result = this.vikingArmy[s1].receiveDamage(this.saxonArmy[s1].strength);

    if (this.vikingArmy[v1].health <= 0) {
      this.vikingArmy.splice(randomVikingNumber, 1);
    }
    return result;
  }

const damage = randomViking.attack();
const hurtSaxon = randomSaxon.receiveDamage(damage);

if (damage > health) {
    this.saxonArmy.splice(randomSaxonIndex,1);
}
return hurtSaxon;

}

showStatus() {
   if (this.saxonArmy.length === 0) {
    return `Vikings have won the war of the century!`
   } else if (this.vikingArmy.length === 0) {
    return `Saxons have fought for their lives and survived another day`
   } else{
    return `Vikings and Saxons are still in the thick of battle.`
   }
}

}
