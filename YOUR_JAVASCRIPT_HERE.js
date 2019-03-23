const hero = {
    name: 'Kevin',
    heroic: true,
    inventory: [],
    health: 2,
    weapon: {
        type: '',
        damage: 2,
    },
}

let dagger = {
    type: 'dagger',
    damage: 2,
}

function rest(Object) {
    if(Object.health !== 10){
    Object.health = 10
 } else return alert('Your health is already full!')
 return Object  }

function pickUpItem(Object, weapon) {
    Object.inventory.push(weapon)
}

function equipWeapon(Object) {
    if(Object.inventory[0]) {
        Object.weapon = Object.inventory[0]}
    else return false
}

rest(hero)
console.log(hero.inventory)