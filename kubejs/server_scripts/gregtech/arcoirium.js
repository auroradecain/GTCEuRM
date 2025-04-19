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
        .itemInputs('13x gtceu:gabro_dust')
        .itemOutputs('10x gtceu:basalt_dust', '2x gtceu:granite_dust', '1x gtceu:vidium_dust')
        .duration(210)
        .EUt(30)

    /** Viadium dust */
    event.recipes.gtceu.chemical_reactor('kubejs:viadium_from_copper')
        .itemInputs('2x gtceu:vidium_dust', '3x gtceu:copper_dust')
        .inputFluids('minecraft:water 3000')
        .itemOutputs('1x gtceu:viadium_dust', '6x gtceu:copper_ii_hydroxide_dust')
        .duration(140)
        .EUt(30)

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

    // Avisium line
    event.recipes.gtceu.chemical_bath("trevinitic_acid_from_travinite")
        .itemInputs("7x gtceu:trevinite_dust")
        .inputFluids("gtceu:hydrochloric_acid 2000")
        .itemOutputs("7x gtceu:trevinitic_acid_dust", "4x gtceu:lithium_chloride_dust")
        .duration(210)
        .EUt(960)

    event.recipes.gtceu.electrolyzer("trevinitic_acid_electrolysis")
        .itemInputs("7x gtceu:trevinitic_acid_dust")
        .itemOutputs("gtceu:avisium_dust")
        .outputFluids("gtceu:hydrogen 2000", "gtceu:oxygen 4000")
        .duration(210)
        .EUt(960)

})