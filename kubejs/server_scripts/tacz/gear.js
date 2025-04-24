ServerEvents.recipes(event=>{
    // Iron Ammo Box
    event.remove('tacz:iron_ammo_box')
    event.shaped(Item.of('tacz:ammo_box', '{Level:0}').strongNBT(), [
        'CEC',
        'ABA',
        'DAD'
    ], {
        A: '#forge:plates/iron',
        B: '#functionalstorage:drawer',
        C: '#forge:screws/steel',
        D: '#forge:small_gears/iron',
        E: '#forge:tools/screwdrivers',
    }).damageIngredient(["#forge:tools/screwdrivers"]).id('kubejs:ammo_box_iron')

    // Gold Ammo Box
    event.remove('tacz:gold_ammo_box')
    event.shaped(Item.of('tacz:ammo_box', '{Level:1}').strongNBT(), [
        'CEC',
        'ABA',
        'DAD'
    ], {
        A: '#forge:plates/aluminium',
        B: Item.of('tacz:ammo_box', '{Level:0}').strongNBT(),
        C: '#forge:screws/gold',
        D: '#forge:small_gears/aluminium',
        E: '#forge:tools/screwdrivers',
    }).damageIngredient(["#forge:tools/screwdrivers"]).id('kubejs:ammo_box_gold')

    // Diamond Ammo Box
    event.remove('tacz:diamond_ammo_box')
    event.shaped(Item.of('tacz:ammo_box', '{Level:2}').strongNBT(), [
        'CEC',
        'ABA',
        'DAD'
    ], {
        A: '#forge:plates/stainless_steel',
        B: Item.of('tacz:ammo_box', '{Level:1}').strongNBT(),
        C: '#forge:screws/diamond',
        D: '#forge:small_gears/stainless_steel',
        E: '#forge:tools/screwdrivers',
    }).damageIngredient(["#forge:tools/screwdrivers"]).id('kubejs:ammo_box_diamond')
})