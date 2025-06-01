ServerEvents.recipes(event=>{
    data_receive(event, "miner", 1, 1).forEach(builder=>{
        builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 100")
            .inputFluids("gtceu:lubricant 20")
            .chancedInput("kubejs:logical_processing_array", 1200, -400)
            .notConsumable("kubejs:ocean_biome_core")
            .itemInputs("kubejs:mundane_data_binary")
            .itemOutputs("48x gtceu:raw_rock_salt")
            .itemOutputs("48x gtceu:raw_salt")
            .itemOutputs("32x gtceu:raw_lepidolite")
            .itemOutputs("24x gtceu:raw_spodumene")
            .outputFluids("gtceu:salt_water 12000")
    })

    data_receive(event, "miner", 1, 1).forEach(builder=>{
        builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 80")
            .inputFluids("gtceu:lubricant 30")
            .chancedInput("kubejs:logical_processing_array", 1200, -400)
            .notConsumable("kubejs:beach_biome_core")
            .itemInputs("kubejs:mundane_data_binary")
            .itemOutputs("48x gtceu:raw_oilsands")
            .itemOutputs("24x gtceu:raw_glauconite_sand")
            .itemOutputs("16x gtceu:raw_basaltic_mineral_sand")
            .itemOutputs("16x gtceu:raw_granitic_mineral_sand")
            .itemOutputs("32x minecraft:sand")
            .outputFluids("gtceu:oil 12000")
    })


    data_receive(event, "miner", 1, 1).forEach(builder=>{
        builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 115")
            .inputFluids("gtceu:lubricant 40")
            .chancedInput("kubejs:logical_processing_array", 1200, -400)
            .notConsumable("kubejs:hills_biome_core")
            .itemInputs("kubejs:mundane_data_binary")
            .itemOutputs("48x gtceu:raw_redstone")
            .itemOutputs("48x gtceu:raw_lapis")
            .itemOutputs("32x gtceu:raw_graphite")
            .itemOutputs("24x gtceu:raw_calcite")
    })

    data_receive(event, "miner", 1, 1).forEach(builder=>{
        builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 70")
            .inputFluids("gtceu:lubricant 35")
            .chancedInput("kubejs:logical_processing_array", 1200, -400)
            .notConsumable("kubejs:forest_biome_core")
            .itemInputs("kubejs:mundane_data_binary")
            .itemOutputs("32x gtceu:raw_prosperity")
            .itemOutputs("24x gtceu:raw_fullers_earth")
            .itemOutputs("24x gtceu:raw_inferium")
            .itemOutputs("24x gtceu:raw_glauconite_sand")
    })

    data_receive(event, "miner", 1, 1).forEach(builder=>{
        builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 70")
            .inputFluids("gtceu:lubricant 35")
            .chancedInput("kubejs:logical_processing_array", 1200, -400)
            .notConsumable("kubejs:meadow_biome_core")
            .itemInputs("kubejs:mundane_data_binary")
            .itemOutputs("48x gtceu:raw_red_garnet")
            .itemOutputs("48x gtceu:raw_yellow_garnet")
            .itemOutputs("32x gtceu:raw_grossular")
            .itemOutputs("32x gtceu:raw_spessartine")

        })
        
        data_receive(event, "miner", 2, 1).forEach(builder=>{
            builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 110")
            .inputFluids("gtceu:lubricant 55")
            .chancedInput("kubejs:logical_processing_array", 1200, -400)
            .notConsumable("kubejs:plains_biome_core")
            .itemInputs("kubejs:mundane_data_binary")
            .itemOutputs("48x gtceu:raw_pyrope")
            .itemOutputs("32x gtceu:raw_pyrolusite")
            .itemOutputs("24x gtceu:raw_tantalite")
            .itemOutputs("24x gtceu:raw_fluorspar")
    })

    data_receive(event, "miner", 2, 1).forEach(builder=>{
        builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 120")
            .inputFluids("gtceu:lubricant 45")
            .chancedInput("kubejs:resourceful_processing_array", 1200, -400)
            .notConsumable("kubejs:hills_biome_core")
            .itemInputs("kubejs:mundane_data_binary")
            .itemOutputs("48x gtceu:raw_ruby")
            .itemOutputs("32x gtceu:raw_diamond")
            .itemOutputs("24x gtceu:raw_emerald")
            .itemOutputs("24x gtceu:raw_coal")
    })

    data_receive(event, "miner", 2, 1).forEach(builder=>{
        builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 110")
            .inputFluids("gtceu:lubricant 55")
            .chancedInput("kubejs:resourceful_processing_array", 1200, -400)
            .notConsumable("kubejs:meadow_biome_core")
            .itemInputs("kubejs:mundane_data_binary")
            .itemOutputs("48x gtceu:raw_pitchblende")
            .itemOutputs("32x gtceu:raw_silver")
            .itemOutputs("24x gtceu:raw_uraninite")
        })
        
        data_receive(event, "miner", 2, 1).forEach(builder=>{
            builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 115")
            .inputFluids("gtceu:lubricant 45")
            .chancedInput("kubejs:resourceful_processing_array", 1200, -400)
            .notConsumable("kubejs:desert_biome_core")
            .itemInputs("kubejs:mundane_data_binary")
            .itemOutputs("48x gtceu:raw_galena")
            .itemOutputs("32x gtceu:raw_thorium")
            .itemOutputs("24x gtceu:raw_lead")
    })

    data_receive(event, "miner", 2, 1).forEach(builder=>{
        builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 95")
            .inputFluids("gtceu:lubricant 65")
            .chancedInput("kubejs:resourceful_processing_array", 1200, -400)
            .notConsumable("kubejs:beach_biome_core")
            .itemInputs("kubejs:mundane_data_binary")
            .itemOutputs("48x gtceu:raw_olivine")
            .itemOutputs("48x gtceu:raw_nickel")
            .itemOutputs("32x gtceu:raw_cassiterite_sand")
            .itemOutputs("32x gtceu:raw_pyrope")
    })

    data_receive(event, "miner", 2, 1).forEach(builder=>{
        builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 125")
            .inputFluids("gtceu:lubricant 35")
            .chancedInput("kubejs:resourceful_processing_array", 1200, -400)
            .notConsumable("kubejs:forest_biome_core")
            .itemInputs("kubejs:mundane_data_binary")
            .itemOutputs("48x gtceu:raw_chalcopyrite")
            .itemOutputs("32x gtceu:raw_cinnabar")
            .itemOutputs("32x gtceu:raw_tin")
            .itemOutputs("24x gtceu:raw_realgar")
    })



})