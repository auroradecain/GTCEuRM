ServerEvents.recipes(event =>{

    /** Balistic Steel */
    event.recipes.gtceu.mixer("gtceu:ballistic_steel_dust")
        .itemInputs("#forge:dusts/steel", "#forge:dusts/bronze", "#forge:dusts/nickel")
        .itemOutputs("2x gtceu:ballistic_steel_dust")
        .circuit(2)
        .duration(56)
        .EUt(GTValues.VH[GTValues.LV]) 

    /** Gabro Dust */
    event.recipes.gtceu.macerator('gabro_dust')
        .itemInputs("kubejs:gabro")
        .itemOutputs("gtceu:gabro_dust")
        .duration(80)
        .EUt(2)

    event.recipes.gtceu.rock_breaker('gabro')
        .notConsumable("kubejs:gabro")
        .itemOutputs("kubejs:gabro")
        .addDataString('fluidA', 'minecraft:lava')
        .addDataString('fluidB', 'minecraft:water')
        .duration(16)
        .EUt(7)

    /** Vidium dust */
    event.recipes.gtceu.centrifuge('vidium_dust')
        .itemInputs('15x gtceu:gabro_dust')
        .itemOutputs('14x gtceu:stone_dust', '1x gtceu:vidium_dust')
        .duration(210)
        .EUt(30)

    /** Viadium dust */
    event.recipes.gtceu.chemical_reactor('kubejs:viadium_dust')
        .itemInputs('2x gtceu:vidium_dust', '4x gtceu:copper_dust')
        .inputFluids('gtceu:chlorine 2000')
        .itemOutputs('2x gtceu:viadium_dust', '4x gtceu:cupric_oxide_dust')
        .outputFluids('gtceu:hydrochloric_acid 2000')
        .duration(140)
        .EUt(24)

    /** Sapatanium dust */
    event.recipes.gtceu.mixer('kubejs:sapatanium_dust')
        .itemInputs("gtceu:viadium_dust", "2x gtceu:chromium_dust", "gtceu:manganese_dust", "gtceu:gold_dust")
        .itemOutputs("5x gtceu:sapatanium_dust")
        .duration(164)
        .EUt(84)

    /** Fechantium dust */
    event.recipes.gtceu.centrifuge('kubejs:fechantium_dust')
        .itemInputs("13x gtceu:granite_red_dust")
        .itemOutputs("12x gtceu:granite_dust", "gtceu:fechantium_dust")
        .duration(286)
        .EUt(84)

    /** Yottrium dust */
    
    event.recipes.gtceu.mixer("gtceu:yottrium_dust")
        .itemInputs("gtceu:fechantium_dust", "gtceu:molybdenum_disulfide_dust", "2x gtceu:platinum_dust")
        .itemOutputs("4x gtceu:yottrium_dust")
        .duration(248)
        .EUt(480)
        .circuit(3)

    /** Denisium dust */
    event.recipes.gtceu.mixer("kubejs:denisium_dust")
        .itemInputs("gtceu:uranium_dust", "gtceu:yottrium_dust", "gtceu:tungsten_dust")
        .inputFluids("gtceu:oxygen 3000")
        .itemOutputs("6x gtceu:denisium_dust")
        .duration(216)
        .EUt(1920)


    // Molybdenum disulfide
    event.recipes.gtceu.chemical_reactor("kubejs:molybdenum_disulfide")
        .itemInputs("8x gtceu:purified_molybdenite_ore", "8x gtceu:purified_pyrite_ore")
        .inputFluids("gtceu:sulfuric_acid 2000")
        .itemOutputs("8x gtceu:molybdenum_disulfide_dust", "8x gtceu:iron_dust")
        .outputFluids("gtceu:diluted_sulfuric_acid 2000")
        .duration(155)
        .EUt(480)

    // Avisium line
    event.recipes.gtceu.chemical_bath("travinitic_acid_from_travinite")
        .itemInputs("7x gtceu:travinite_dust")
        .inputFluids("gtceu:hydrochloric_acid 2000")
        .itemOutputs("7x gtceu:travinitic_acid_dust", "4x gtceu:lithium_chloride_dust")
        .duration(210)
        .EUt(960)

    event.recipes.gtceu.electrolyzer("travinitic_acid_electrolysis")
        .itemInputs("7x gtceu:travinitic_acid_dust")
        .itemOutputs("gtceu:avisium_dust")
        .outputFluids("gtceu:hydrogen 2000", "gtceu:oxygen 4000")
        .duration(210)
        .EUt(960)

})