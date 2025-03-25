ServerEvents.recipes(event => {

    /** ULV Recipies */

    event.recipes.gtceu.assembler("kubejs:ammo/9mm")
        .itemInputs("6x gtceu:ballistic_steel_foil", "gtceu:small_gunpowder_dust")
        .itemOutputs(Item.of("15x tacz:ammo", {AmmoId:'tacz:9mm'}))
        .duration(175)
        .EUt(7)
        .circuit(2)

    event.recipes.gtceu.assembler("kubejs:ammo/45acp")
        .itemInputs("4x gtceu:copper_foil", "gtceu:ballistic_steel_plate", "gtceu:small_gunpowder_dust")
        .itemOutputs(Item.of("20x tacz:ammo", {AmmoId:'tacz:45acp'}))
        .duration(195)
        .EUt(7)

    event.recipes.gtceu.assembler("kubejs:ammo/12g")
        .itemInputs("12x gtceu:ballistic_steel_foil", "6x gtceu:iron_round", "3x minecraft:gunpowder")
        .itemOutputs(Item.of("18x tacz:ammo", {AmmoId:'tacz:12g'}))
        .duration(245)
        .EUt(7)

    /** LV Recipies */

    event.recipes.gtceu.assembler("kubejs:ammo/556x45")
        .itemInputs("3x gtceu:ballistic_steel_plate", "2x gtceu:ballistic_steel_foil", "minecraft:gunpowder")
        .itemOutputs(Item.of("25x tacz:ammo", {AmmoId:'tacz:556x45'}))
        .duration(235)
        .EUt(24)

    event.recipes.gtceu.assembler("kubejs:ammo/762x39")
        .itemInputs("4x gtceu:ballistic_steel_plate", "2x gtceu:ballistic_steel_foil", "2x gtceu:brass_bolt", "2x gtceu:small_gunpowder_dust")
        .itemOutputs(Item.of("20x tacz:ammo", {AmmoId:'tacz:762x39'}))
        .duration(255)
        .EUt(24)
    
    event.recipes.gtceu.assembler("kubejs:ammo/308")
        .itemInputs("3x gtceu:ballistic_steel_plate", "8x gtceu:brass_bolt", "minecraft:gunpowder")
        .itemOutputs(Item.of("20x tacz:ammo", {AmmoId:'tacz:308'}))
        .duration(265)
        .EUt(24)

    event.recipes.gtceu.assembler("kubejs:ammo/338")
        .itemInputs("4x gtceu:ballistic_steel_plate", "gtceu:brass_plate", "6x gtceu:small_gunpowder_dust")
        .itemOutputs(Item.of("20x tacz:ammo", {AmmoId:'tacz:338'}))
        .duration(280)
        .EUt(24)
    
    /** MV Recipies */

    event.recipes.gtceu.assembler("kubejs:ammo/50ae")
        .itemInputs("5x gtceu:double_ballistic_steel_plate", "gtceu:invar_plate",  "2x minecraft:gunpowder")
        .itemOutputs(Item.of("36x tacz:ammo", {AmmoId:'tacz:50ae'}))
        .duration(540)
        .EUt(96)

    /** HV Recipies */

    event.recipes.gtceu.assembler("kubejs:ammo/rpg_rocket")
        .itemInputs("8x gtceu:double_ballistic_steel_plate", "12x gtceu:copper_foil", "4x gtceu:lead_ring", "4x gtceu:gelled_toluene")
        .inputFluids("gtceu:sulfuric_acid 150")
        .itemOutputs(Item.of("2x tacz:ammo", {AmmoId:'tacz:rpg_rocket'}))
        .duration(800)
        .EUt(480)
        .circuit(16)

    event.recipes.gtceu.assembler("kubejs:ammo/50bmg")
        .itemInputs("24x gtceu:copper_foil", "2x gtceu:invar_plate", "gtceu:double_brass_plate", "4x gtceu:ballistic_steel_foil", "6x minecraft:gunpowder")
        .itemOutputs(Item.of("12x tacz:ammo", {AmmoId:'tacz:50bmg'}))
        .duration(440)
        .EUt(480)
})