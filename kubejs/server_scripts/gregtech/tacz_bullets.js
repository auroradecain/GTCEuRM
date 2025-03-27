ServerEvents.recipes(event => {

    /** ULV Recipies */

    const casing = [
        "9mm",
        "45acp",
        "357mag",
        "50ae",
        "12g",
        "338",
        "308",
        "30_06",
        "40mm",
        "57x28",
        "58x42",
        "46x30",
        "68x51fury",
        "556x45",
        "762x25",
        "762x39",
        "762x54",
        "50bmg"
    ]

    casing.forEach(casing =>{
        event.remove({id: `tacz:ammo/${casing}`})
    })

    function createAmmo(ammo, light, mat, powder, circuit){
        if(light==true){
            event.recipes.gtceu.bender(`kubejs:${ammo}_casing`)
                .itemInputs(`4x gtceu:${mat}_foil`)
                .itemOutputs(`kubejs:${ammo}_casing`)
                .duration(80)
                .EUt(GTValues.VH[GTValues.LV])
                .circuit(circuit)
            event.recipes.gtceu.packer(`kubejs:${ammo}`)
                .itemInputs(`kubejs:${ammo}_casing`, `${powder}x gtceu:small_gunpowder_dust`)
                .itemOutputs(Item.of("5x tacz:ammo", {AmmoId:`tacz:${ammo}`}))
                .duration(40)
                .EUt(GTValues.VH[GTValues.LV])
        }

        if(light==false){
            event.recipes.gtceu.bender(`kubejs:${ammo}_casing`)
                .itemInputs(`2x gtceu:${mat}_plate`)
                .itemOutputs(`kubejs:${ammo}_casing`)
                .duration(80)
                .EUt(GTValues.VH[GTValues.LV])
                .circuit(circuit)
            event.recipes.gtceu.packer(`kubejs:${ammo}`)
                .itemInputs(`kubejs:${ammo}_casing`, `${powder}x minecraft:gunpowder`)
                .itemOutputs(Item.of("5x tacz:ammo", {AmmoId:`tacz:${ammo}`}))
                .duration(40)
                .EUt(GTValues.VH[GTValues.LV])
        }
    }

    createAmmo('9mm',true, 'copper', '1', 1)
    createAmmo('45acp',true, 'copper', '1', 2)
    createAmmo('357mag',true, 'ballistic_steel', '1', 1)
    createAmmo('50ae',true, 'ballistic_steel', '1', 2)
    
    createAmmo('12g',false, 'brass', '1', 1)
    createAmmo('338',false, 'brass', '2', 2)
    createAmmo('308',false, 'brass', '2', 3)
    createAmmo('30_06',false, 'copper', '1', 1)
    createAmmo('57x28',false, 'copper', '2', 2)
    createAmmo('40mm',false, 'steel', '8', 1)
    createAmmo('58x42',false, 'ballistic_steel', '1', 1)
    createAmmo('46x30',false, 'ballistic_steel', '1', 2)
    createAmmo('68x51fury',false, 'ballistic_steel', '1', 3)
    createAmmo('556x45',false, 'ballistic_steel', '1', 4)
    createAmmo('762x25',false, 'invar', '1', 1)
    createAmmo('762x39',false, 'invar', '1', 2)
    createAmmo('762x54',false, 'invar', '1', 3)
    createAmmo('50bmg',false, 'double_ballistic_steel', '1', 1)

    /** LV Recipies */

    
    /** MV Recipies */


    /** HV Recipies */

    event.recipes.gtceu.assembler("kubejs:ammo/rpg_rocket")
        .itemInputs("8x gtceu:double_ballistic_steel_plate", "12x gtceu:copper_foil", "4x gtceu:lead_ring", "4x gtceu:gelled_toluene")
        .inputFluids("gtceu:sulfuric_acid 150")
        .itemOutputs(Item.of("2x tacz:ammo", {AmmoId:'tacz:rpg_rocket'}))
        .duration(800)
        .EUt(480)
        .circuit(16)

})