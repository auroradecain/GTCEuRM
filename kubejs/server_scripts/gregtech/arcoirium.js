ServerEvents.recipes(event =>{

    
    /** Balistic Steel */
    event.recipes.gtceu.mixer("gtceu:ballistic_steel_dust")
        .itemInputs("#forge:dusts/steel", "#forge:dusts/bronze", "#forge:dusts/nickel")
        .itemOutputs("2x gtceu:ballistic_steel_dust")
        .circuit(2)
        .duration(56)
        .EUt(GTValues.VH[GTValues.LV]) 

    /** Vidium dust */
    event.recipes.gtceu.mixer('gtceu:vidium_dust')
        .itemInputs("#forge:dusts/copper", "gtceu:magnetite_dust", "minecraft:redstone")
        .itemOutputs("3x gtceu:vidium_dust")
        .circuit(1)
        .duration(196)
        .EUt(28)

    /** Viadium dust */
    event.recipes.gtceu.centrifuge('gtceu:viadium_dust')
        .itemInputs("gtceu:vidium_dust")
        .itemOutputs("gtceu:viadium_dust")
        .duration(48)
        .EUt(16)
    
    /** Sapatanium dust */
    event.recipes.gtceu.mixer('gtceu:sapatanium_dust')
        .itemInputs("gtceu:viadium_dust", "gtceu:nickel_dust", "gtceu:gold_dust")
        .itemOutputs("3x gtceu:sapatanium_dust")
        .duration(164)
        .EUt(84)

    /** Fechantium dust */
    event.recipes.gtceu.centrifuge('gtceu:fechantium_dust')
        .itemInputs("13x gtceu:granite_red_dust")
        .itemOutputs("8x gtceu:granite_dust")
        .chancedOutput("gtceu:small_fechantium_dust", 3000, 1200)
        .duration(286)
        .EUt(84)

    /** Yottrium dust */
    event.recipes.gtceu.mixer("gtceu:yottrium_dust")
        .itemInputs("gtceu:fechantium_dust", "gtceu:viadium_dust", "gtceu:molybdenum_dust")
        .itemOutputs("2x gtceu:yottrium_dust")
        .duration(248)
        .EUt(480)

    /** Denisium dust */
    event.recipes.gtceu.mixer("gtceu:denisium_dust")
        .itemInputs("2x gtceu:platinum_dust", "gtceu:yottrium_dust")
        .inputFluids("gtceu:oxygen 3000")
        .itemOutputs("3x gtceu:denisium_dust")
        .duration(216)
        .EUt(1920)

})