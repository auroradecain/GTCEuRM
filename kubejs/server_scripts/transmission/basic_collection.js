ServerEvents.recipes(event=>{
    data_receive(event, 'overworld', 1, 1).forEach(builder=>{
        builder
            .dimension('minecraft:overworld')
            .itemInputs('32x #minecraft:saplings')
            .itemInputs('kubejs:mundane_data_binary')
            .inputFluids('minecraft:water 4000')
            .inputFluids('gtceu:biomass 2000')
            .inputFluids('gtceu:oxygen 6000')
            .chancedOutput('kubejs:forest_biome_core', 4800, 450)
            .chancedOutput('kubejs:ocean_biome_core', 4800, 450)
            .chancedOutput('kubejs:desert_biome_core', 4800, 450)
            .chancedOutput('kubejs:beach_biome_core', 4800, 450)
            .chancedOutput('kubejs:hills_biome_core', 4800, 450)
            .chancedOutput('kubejs:plains_biome_core', 4800, 450)
            .chancedOutput('kubejs:meadow_biome_core', 4800, 450)
    })

    data_receive(event, 'scavenger', 1, 1, undefined).forEach(builder=>{
        builder
            .dimension('minecraft:overworld')
            .itemInputs('1x gtceu:steel_block')
            .itemInputs('kubejs:mundane_data_binary')
            .inputFluids('gtceu:rubber 1296')
            .inputFluids('gtceu:lubricant 576')
            .chancedOutput('gtceu:lv_electric_motor', 4000, 1000)
            .chancedOutput('gtceu:lv_electric_piston', 3000, 1000)
            .chancedOutput('gtceu:lv_conveyor_module', 3000, 1000)
            .chancedOutput('gtceu:lv_electric_pump', 2400, 930)
            .chancedOutput('gtceu:lv_robot_arm', 2400, 930)
            .chancedOutput('gtceu:lv_field_generator', 1200, 800)
    })

    data_receive(event, 'scavenger', 1, 1).forEach(builder=>{
        builder
            .dimension('minecraft:overworld')
            .itemInputs('1x gtceu:aluminium_block')
            .itemInputs('kubejs:mundane_data_binary')
            .inputFluids('gtceu:rubber 1296')
            .inputFluids('gtceu:lubricant 576')
            .chancedOutput('gtceu:mv_electric_motor', 4000, 1000)
            .chancedOutput('gtceu:mv_electric_piston', 3000, 1000)
            .chancedOutput('gtceu:mv_conveyor_module', 3000, 1000)
            .chancedOutput('gtceu:mv_electric_pump', 2400, 930)
            .chancedOutput('gtceu:mv_robot_arm', 2400, 930)
            .chancedOutput('gtceu:mv_field_generator', 1200, 800)
    })

    data_receive(event, 'scavenger', 2, 1).forEach(builder=>{
        builder
            .dimension('minecraft:overworld')
            .itemInputs('1x gtceu:stainless_steel_block')
            .itemInputs('kubejs:mundane_data_binary')
            .inputFluids('gtceu:rubber 1296')
            .inputFluids('gtceu:lubricant 576')
            .chancedOutput('gtceu:hv_electric_motor', 4000, 1000)
            .chancedOutput('gtceu:hv_electric_piston', 3000, 1000)
            .chancedOutput('gtceu:hv_conveyor_module', 3000, 1000)
            .chancedOutput('gtceu:hv_electric_pump', 2400, 930)
            .chancedOutput('gtceu:hv_robot_arm', 2400, 930)
            .chancedOutput('gtceu:hv_field_generator', 1200, 800)
    })

    data_receive(event, 'scavenger', 2, 1).forEach(builder=>{
        builder
            .dimension('minecraft:overworld')
            .itemInputs('1x gtceu:titanium_block')
            .itemInputs('kubejs:mundane_data_binary')
            .inputFluids('gtceu:rubber 1296')
            .inputFluids('gtceu:lubricant 576')
            .chancedOutput('gtceu:ev_electric_motor', 4000, 1000)
            .chancedOutput('gtceu:ev_electric_piston', 3000, 1000)
            .chancedOutput('gtceu:ev_conveyor_module', 3000, 1000)
            .chancedOutput('gtceu:ev_electric_pump', 2400, 930)
            .chancedOutput('gtceu:ev_robot_arm', 2400, 930)
            .chancedOutput('gtceu:ev_field_generator', 1200, 800)
    })
})