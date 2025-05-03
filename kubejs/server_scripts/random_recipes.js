ServerEvents.recipes(event=>{
    
    // Dust block from sand
    event.recipes.gtceu.forge_hammer("dust_block_from_sand_block")
        .itemInputs("#minecraft:smelts_to_glass")
        .itemOutputs("kubejs:dust")
        .duration(10)
        .EUt(16)
    // Dust to clay
    event.recipes.gtceu.chemical_reactor("clay_from_dust_block")
        .itemInputs("kubejs:dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("minecraft:clay")
        .duration(200)
        .EUt(24)
    // Clay to clay ball
    event.shapeless("4x minecraft:clay_ball", ["minecraft:clay"])

    // Chipped tinker's table
    event.replaceInput({ id: "chipped:benches/mechanist_workbench" }, "minecraft:tnt", "#forge:chests")

    // Lava from Magma
    event.recipes.gtceu.chemical_reactor("lava_from_magma")
        .itemInputs("minecraft:magma_block")
        .outputFluids(Fluid.of("minecraft:lava", 1000))
        .EUt(32)
        .duration(120)

    // Slime ball from plant ball
    event.smelting("2x minecraft:slime_ball", "gtceu:plant_ball")

    // Let Oilsands have multiple types of oil
    event.remove({id:"gtceu:centrifuge/oilsands_dust_separation"})
    event.recipes.gtceu.centrifuge("oilsands_to_oil")
        .itemInputs("gtceu:oilsands_dust")
        .chancedOutput("minecraft:sand", 5000, 5000)
        .outputFluids("gtceu:oil 1000")
        .duration(200)
        .EUt(30)
        .circuit(3)
    event.recipes.gtceu.centrifuge("oilsands_to_light_oil")
        .itemInputs("gtceu:oilsands_dust")
        .chancedOutput("minecraft:sand", 5000, 5000)
        .outputFluids("gtceu:oil_light 500")
        .duration(200)
        .EUt(30)
        .circuit(4)
    event.recipes.gtceu.centrifuge("oilsands_to_heavy_oil")
        .itemInputs("gtceu:oilsands_dust")
        .chancedOutput("minecraft:sand", 5000, 5000)
        .outputFluids("gtceu:oil_heavy 2000")
        .duration(200)
        .EUt(30)
        .circuit(2)
    event.recipes.gtceu.centrifuge("oilsands_to_raw_oil")
        .itemInputs("gtceu:oilsands_dust")
        .chancedOutput("minecraft:sand", 5000, 5000)
        .outputFluids("gtceu:oil_medium 1000")
        .duration(200)
        .EUt(30)
        .circuit(1)

    // Sodium to Sodium Hydroxide
    event.recipes.gtceu.chemical_reactor("na_to_naoh")
        .itemInputs("gtceu:sodium_dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("3x gtceu:sodium_hydroxide_dust")
        .outputFluids("gtceu:hydrogen 1000")
        .duration(50)
        .EUt(120)

    // Fix ilmenite -> rutile stoich
    event.remove({id:"gtceu:electric_blast_furnace/rutile_from_ilmenite"})
    event.recipes.gtceu.electric_blast_furnace("rutile_from_ilmenite")
        .itemInputs("10x gtceu:ilmenite_dust", "2x gtceu:carbon_dust")
        .itemOutputs("2x gtceu:wrought_iron_ingot", "6x gtceu:rutile_dust")
        .outputFluids("gtceu:carbon_dioxide 2000")
        .duration(1600)
        .blastFurnaceTemp(1700)
        .EUt(480)

    // XP canning and uncanning
    event.recipes.gtceu.canner("xp_unbottling")
        .itemInputs("minecraft:experience_bottle")
        .itemOutputs("minecraft:glass_bottle")
        .outputFluids("enderio:xp_juice 250")
        .duration(400)
        .EUt(2)
    event.recipes.gtceu.canner("xp_bottling")
        .itemInputs("minecraft:glass_bottle")
        .inputFluids("enderio:xp_juice 250")
        .itemOutputs("minecraft:experience_bottle")
        .duration(400)
        .EUt(2)
    
})