/**
 * Arcoirium Conduits
 */

ServerEvents.recipes(event =>{

    /** Avoids shenenigans */
    event.remove({ id: "enderio:energy_conduit"})
    
    /** Viadium */
    event.shaped('3x enderio:viadium_conduit', [
        'BBB',
        'VVV',
        'BBB'
    ], {
        B: "enderio:conduit_binder",
        V: "gtceu:viadium_single_wire"
    }).id('kubejs:viadium_conduit')

    event.recipes.gtceu.assembler('enderio:viadium_conduit')
        .itemInputs("6x enderio:conduit_binder", "3x gtceu:viadium_single_wire")
        .itemOutputs("4x enderio:viadium_conduit")
        .duration(80)
        .EUt(GTValues.VH[GTValues.LV])

    /** Sapatanium */
    event.shaped('3x enderio:sapatanium_conduit', [
        'BBB',
        'SCS',
        'BBB'
    ], {
        B: "enderio:conduit_binder",
        S: "gtceu:sapatanium_single_wire",
        C: "enderio:viadium_conduit"
    }).id('kubejs:sapatanium_conduit')

    event.recipes.gtceu.assembler('enderio:sapatanium_conduit')
        .itemInputs("6x enderio:conduit_binder", "2x gtceu:sapatanium_single_wire", "enderio:viadium_conduit")
        .itemOutputs("4x enderio:sapatanium_conduit")
        .duration(80)
        .EUt(GTValues.VH[GTValues.LV])

    /** Fechantium */
    event.shaped('3x enderio:fechantium_conduit', [
        'BBB',
        'FCF',
        'BBB'
    ], {
        B: "enderio:conduit_binder",
        F: "gtceu:fechantium_single_wire",
        C: "enderio:sapatanium_conduit"
    }).id("fechantium_conduit")
    
    event.recipes.gtceu.assembler('enderio:fechantium_conduit')
        .itemInputs("6x enderio:conduit_binder", "2x gtceu:fechantium_single_wire", "enderio:sapatanium_conduit")
        .itemOutputs("4x enderio:fechantium_conduit")
        .duration(80)
        .EUt(GTValues.VH[GTValues.LV])
    
    /** Yottrium */
    event.shaped('3x enderio:yottrium_conduit', [
        'BBB',
        'YCY',
        'BBB'
    ], {
        B: "enderio:conduit_binder",
        Y: "gtceu:yottrium_single_wire",
        C: "enderio:fechantium_conduit"
    }).id("kubejs:yottrium_conduit")

    event.recipes.gtceu.assembler('enderio:yottrium_conduit')
        .itemInputs("6x enderio:conduit_binder", "2x gtceu:yottrium_single_wire", "enderio:fechantium_conduit")
        .itemOutputs("4x enderio:yottrium_conduit")
        .duration(80)
        .EUt(GTValues.VH[GTValues.LV])

    /** Denisium */
    event.shaped('3x enderio:denisium_conduit', [
        'BBB',
        'DCD',
        'BBB'
    ], {
        B: "enderio:conduit_binder",
        D: "gtceu:denisium_single_wire",
        C: "enderio:yottrium_conduit"
    }).id("kubejs:denisium_conduit")

    event.recipes.gtceu.assembler('enderio:denisium_conduit')
        .itemInputs("6x enderio:conduit_binder", "2x gtceu:denisium_single_wire", "enderio:yottrium_conduit")
        .itemOutputs("4x enderio:denisium_conduit")
        .duration(80)
        .EUt(GTValues.VH[GTValues.LV])

    event.shaped('3x enderio:avisium_conduit', [
        'BBB',
        'DCD',
        'BBB'
    ], {
        B: "enderio:conduit_binder",
        D: "gtceu:avisium_single_wire",
        C: "enderio:denisium_conduit"
    }).id("kubejs:avisium_conduit")

    event.recipes.gtceu.assembler('enderio:avisium_conduit')
        .itemInputs("6x enderio:conduit_binder", "2x gtceu:avisium_single_wire", "enderio:denisium_conduit")
        .itemOutputs("4x enderio:avisium_conduit")
        .duration(80)
        .EUt(GTValues.VH[GTValues.LV])

})

/**
 * Enderio Conduits
 */

ServerEvents.recipes(event =>{
    
    event.shaped('3x enderio:conductive_conduit', [
        'BBB',
        'AAA',
        'BBB'
    ], {
        A: "gtceu:conductive_alloy_single_wire",
        B: "enderio:conduit_binder",
    }).id('kubejs:conductive_conduit')

    event.recipes.gtceu.assembler('enderio:conductive_conduit')
        .itemInputs("6x enderio:conduit_binder", "3x gtceu:conductive_alloy_single_wire")
        .itemOutputs("4x enderio:conductive_conduit")
        .duration(80)
        .EUt(GTValues.VH[GTValues.LV])

    event.shaped('3x enderio:energetic_conduit', [
        'BBB',
        'ACA',
        'BBB'
    ], {
        A: "gtceu:energetic_alloy_single_wire",
        B: "enderio:conduit_binder",
        C: "enderio:conductive_conduit"
    }).id("kubejs:energetic_conduit")

    event.recipes.gtceu.assembler('enderio:energetic_conduit')
        .itemInputs("6x enderio:conduit_binder", "2x gtceu:energetic_alloy_single_wire", "enderio:conductive_conduit")
        .itemOutputs("4x enderio:energetic_conduit")
        .duration(80)
        .EUt(GTValues.VH[GTValues.LV])

    event.shaped('3x enderio:vibrant_conduit', [
        'BBB',
        'ACA',
        'BBB'
    ], {
        A: "gtceu:vibrant_alloy_single_wire",
        B: "enderio:conduit_binder",
        C: "enderio:energetic_conduit"
    }).id("kubejs:vibrant_conduit")

    event.recipes.gtceu.assembler('enderio:vibrant_conduit')
        .itemInputs("6x enderio:conduit_binder", "2x gtceu:vibrant_alloy_single_wire", "enderio:energetic_conduit")
        .itemOutputs("4x enderio:vibrant_conduit")
        .duration(80)
        .EUt(GTValues.VH[GTValues.LV])

    event.shaped('3x enderio:endsteel_conduit', [
        'BBB',
        'ACA',
        'BBB'
    ], {
        A: "gtceu:end_steel_single_wire",
        B: "enderio:conduit_binder",
        C: "enderio:vibrant_conduit"
    }).id("kubejs:endsteel_conduit")

    event.recipes.gtceu.assembler('enderio:endsteel_conduit')
        .itemInputs("6x enderio:conduit_binder", "2x gtceu:end_steel_single_wire", "enderio:vibrant_conduit")
        .itemOutputs("4x enderio:endsteel_conduit")
        .duration(80)
        .EUt(GTValues.VH[GTValues.LV])

    // Misc.
    event.remove({id:'enderio:photovoltaic_composite'})
    event.shapeless('2x enderio:photovoltaic_composite', ['#forge:dusts/lapis', '#forge:dusts/coal', '#forge:dusts/silicon'])
    event.recipes.gtceu.alloy_smelter('kubejs:photovoltaic_plate')
        .itemInputs('3x enderio:photovoltaic_composite', 'gtceu:wrought_iron_plate')
        .itemOutputs('enderio:photovoltaic_plate')
        .duration(120)
        .EUt(7)
})