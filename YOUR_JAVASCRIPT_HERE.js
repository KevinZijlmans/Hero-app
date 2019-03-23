const hero = {
    name: 'Kevin',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'slashing',
        damage: 2,
    },
}

function rest(Object) {
    if(Object.health !== 10){
    Object.health = 10
 } else return alert('Your health is already full!')
 return Object  }

function pickUpItem(Object, weapon) {
    Object.inventory.push(weapon)
}

function equipWeapon() {

}

rest(hero)
console.log(hero.health)