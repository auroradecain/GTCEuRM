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

    data_transmission(event, "overworld", 1, 1).forEach(builder =>{
        builder
            .dimension("minecraft:overworld")
            .notConsumable("kubejs:overworld_data_collection")
            .itemInputs("64x #forge:logs")
            .itemInputs("64x #forge:logs")
            .itemInputs("64x #forge:logs")
            .itemInputs("64x #forge:logs")
            .inputFluids("minecraft:water 8000")
            .itemOutputs("kubejs:mundane_data_binary")
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

    data_transmission(event, "scavenger", 1, 1).forEach(builder =>{
        builder
            .dimension("minecraft:overworld")
            .notConsumable("kubejs:scavenger_data_collection")
            .itemInputs("8x #forge:screws/bronze")
            .itemInputs("2x #forge:rods/bronze")
            .itemInputs("8x #forge:screws/steel")
            .itemInputs("2x #forge:rods/steel")
            .itemInputs("8x #forge:screws/aluminium")
            .itemInputs("2x #forge:rods/aluminium")
            .inputFluids("gtceu:lubricant 800")
            .itemOutputs("4x kubejs:mundane_data_binary")
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

    data_transmission(event, "miner", 1, 1).forEach(builder =>{
        builder
            .notConsumable("kubejs:miner_data_collection")
            .itemInputs("64x #forge:stone")
            .itemInputs("64x #forge:stone")
            .itemInputs("64x minecraft:gravel")
            .itemInputs("64x #forge:dusts/stone")
            .inputFluids("gtceu:drilling_fluid 1250")
            .itemOutputs("2x kubejs:mundane_data_binary")
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

    data_transmission(event, "nether", 2, 1).forEach(builder =>{
        builder
            .dimension("minecraft:the_nether")
            .notConsumable("kubejs:nether_data_collection")
            .itemInputs("64x minecraft:netherrack")
            .itemInputs("64x minecraft:netherrack")
            .itemInputs("64x minecraft:netherrack")
            .itemInputs("64x gtceu:netherrack_dust")
            .inputFluids("gtceu:sulfuric_acid 2000")
            .itemOutputs("2x kubejs:otherworldly_data_binary")
    })


    data_transmission(event, "end", 2, 1).forEach(builder => {
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

    data_transmission(event, "nether", 2, 1).forEach(builder =>{
        builder
            .dimension("minecraft:the_end")
            .notConsumable("kubejs:end_data_collection")
            .itemInputs("64x minecraft:end_stone")
            .itemInputs("64x minecraft:end_stone")
            .itemInputs("64x minecraft:end_stone")
            .itemInputs("64x gtceu:endstone_dust")
            .inputFluids("gtceu:radon 500")
            .itemOutputs("8x kubejs:otherworldly_data_binary")
    })

})