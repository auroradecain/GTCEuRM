ServerEvents.recipes(event=>{
    event.shaped("2x kubejs:aluminium_antenna_casing", [
        'ADB', 
        'ACB', 
        'AEB'
    ], {
        A:'#forge:plates/copper',
        B:'#forge:plates/aluminium', 
        C:'gtceu:iron_frame', 
        D:'#forge:tools/hammers', 
        E:'#forge:tools/wrenches'
    }).damageIngredient(['#forge:tools/hammers', '#forge:tools/wrenches']).id('kubejs:aluminium_antenna_casing_on_crafting_table')

    event.recipes.gtceu.assembler("aluminium_antenna_casing")
        .itemInputs("3x #forge:plates/aluminium", "3x #forge:plates/copper", "gtceu:iron_frame")
        .itemOutputs("2x kubejs:aluminium_antenna_casing")
        .circuit(6)
        .duration(50)
        .EUt(GTValues.VH[GTValues.LV])

    event.recipes.gtceu.assembler("basic_antenna_controller")
        .itemInputs(["gtceu:mv_machine_hull", "4x gtceu:aluminium_frame", "4x #gtceu:circuits/mv", "4x gtceu:mv_emitter", "gtceu:computer_monitor_cover", "4x gtceu:cupric_viadium_semielement_gear"])
        .itemOutputs("gtceu:basic_antenna_controller")
        .circuit(2)
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler("basic_simulation_unit")
        .itemInputs(["gtceu:mv_machine_hull", "4x gtceu:aluminium_frame", "4x #gtceu:circuits/mv", "4x gtceu:mv_conveyor_module", "4x gtceu:mv_sensor", "4x gtceu:cupric_viadium_semielement_gear"])
        .itemOutputs("gtceu:basic_simulation_unit")
        .circuit(2)
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])

})