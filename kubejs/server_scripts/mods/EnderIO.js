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

    /** GT cheaper recipies */

})