ServerEvents.recipes(event => {
    // Data trade and Creation
    data_transmission(event, "overworld", 1, 1).forEach(builder => {
        builder
            .dimension('minecraft:overworld')
            .itemInputs("12x gtceu:lv_sensor")
            .itemInputs("12x gtceu:lv_field_generator")
            .itemInputs("12x gtceu:lv_robot_arm")
            .itemInputs("4x gtceu:viadium_double_wire")
            .itemInputs("2x #gtceu:batteries/lv")
            .itemOutputs(
                "kubejs:overworld_data_collection"
            )
    })

    data_transmission(event, "scavenger", 1, 1).forEach(builder => {
        builder
            .dimension('minecraft:overworld')
            .itemInputs("kubejs:overworld_data_collection")
            .itemInputs("4x gtceu:lv_sensor")
            .itemInputs("3x gtceu:lv_field_generator")
            .itemInputs("3x gtceu:lv_emitter")
            .itemInputs("2x gtceu:sapatanium_double_wire")
            .itemInputs("2x #gtceu:circuits/mv")
            .itemOutputs(
                "kubejs:scavenger_data_collection"
            )
    })

    data_transmission(event, "miner", 1, 1).forEach(builder=> {
        builder
            .inputFluids("gtceu:drilling_fluid 2400", "gtceu:lubricant 1200")
            .itemInputs("kubejs:scavenger_data_collection")
            .itemInputs("2x gtceu:diamond_drill_head")
            .itemInputs("4x gtceu:mv_electric_motor")
            .itemInputs("3x gtceu:mv_conveyor_module")
            .itemInputs("2x gtceu:mv_robot_arm")
            .itemInputs("2x gtceu:mv_electric_pump")
            .itemOutputs(
                "kubejs:miner_data_collection"
            )
    })

    data_transmission(event, "nether", 1, 1).forEach(builder => {
        builder
            .dimension('minecraft:the_nether')
            .itemInputs("8x gtceu:mv_sensor")
            .itemInputs("8x gtceu:mv_field_generator")
            .itemInputs("8x gtceu:mv_robot_arm")
            .itemInputs("4x gtceu:sapatanium_double_wire")
            .itemInputs("2x #gtceu:batteries/mv")
            .itemOutputs(
                "kubejs:nether_data_collection"
            )
    })

    data_transmission(event, "end", 1, 1).forEach(builder => {
        builder
            .dimension('minecraft:the_end')
            .itemInputs("4x gtceu:hv_sensor")
            .itemInputs("4x gtceu:hv_field_generator")
            .itemInputs("4x gtceu:hv_robot_arm")
            .itemInputs("4x gtceu:fechantium_double_wire")
            .itemInputs("2x #gtceu:batteries/hv")
            .itemOutputs(
                "kubejs:end_data_collection"
            )
    })

})