const hero = {
    name: 'Kevin',
    heroic: true,
    inventory: [],
    health: 10,
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
    console.log(Object.inventory)
}

function equipWeapon(Object) {
    if(Object.inventory[0]) {
        Object.weapon = Object.inventory[0]}
    else return false
}
// function displayStats(Object) {
//     let newObj = {
//         name: Object.name,
//         health: Object.health,
//         weapon: Object.weapon,
//     }
//     return newObj
// }
// console.log(displayStats(hero))

function nameHero() {
    const name = document.getElementById('name')
    const nameInput = name.value
    if(null){
    return null}
    hero.name = nameInput
    console.log(hero.name)
}
console.log(hero.name)