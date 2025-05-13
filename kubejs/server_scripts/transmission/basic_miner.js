ServerEvents.recipes(event=>{
    data_receive(event, "miner", 1, 1).forEach(builder=>{
        builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 100")
            .inputFluids("gtceu:lubricant 20")
            .chancedInput("gtceu:diamond_drill_head", 1200, -400)
            .circuit(1)
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
            .chancedInput("gtceu:diamond_drill_head", 1200, -400)
            .circuit(2)
            .itemOutputs("48x gtceu:raw_oilsands")
            .itemOutputs("32x minecraft:sand")
            .outputFluids("gtceu:oil 12000")
    })


    data_receive(event, "miner", 1, 1).forEach(builder=>{
        builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 115")
            .inputFluids("gtceu:lubricant 40")
            .chancedInput("gtceu:diamond_drill_head", 1200, -400)
            .circuit(3)
            .itemOutputs("48x gtceu:raw_redstone")
            .itemOutputs("32x gtceu:raw_ruby")
            .itemOutputs("24x gtceu:raw_cinnabar")
    })

    data_receive(event, "miner", 1, 1).forEach(builder=>{
        builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 70")
            .inputFluids("gtceu:lubricant 35")
            .chancedInput("gtceu:diamond_drill_head", 1200, -400)
            .circuit(22)
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
            .chancedInput("gtceu:diamond_drill_head", 1200, -400)
            .circuit(4)
            .itemOutputs("48x gtceu:raw_grossular")
            .itemOutputs("32x gtceu:raw_spessartine")
            .itemOutputs("32x gtceu:raw_pyrolusite")
            .itemOutputs("24x gtceu:raw_tantalite")
    })

    data_receive(event, "miner", 2, 1).forEach(builder=>{
        builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 110")
            .inputFluids("gtceu:lubricant 55")
            .chancedInput("gtceu:diamond_drill_head", 1200, -400)
            .circuit(21)
            .itemOutputs("32x gtceu:raw_nether_quartz")
            .itemOutputs("32x gtceu:raw_certus_quartz")
            .itemOutputs("24x gtceu:raw_fluorspar")
    })

    data_receive(event, "miner", 2, 1).forEach(builder=>{
        builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 120")
            .inputFluids("gtceu:lubricant 45")
            .chancedInput("gtceu:diamond_drill_head", 1200, -400)
            .circuit(5)
            .itemOutputs("64x gtceu:raw_graphite")
            .itemOutputs("32x gtceu:raw_diamond")
            .itemOutputs("24x gtceu:raw_coal")
    })

    data_receive(event, "miner", 2, 1).forEach(builder=>{
        builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 110")
            .inputFluids("gtceu:lubricant 55")
            .chancedInput("gtceu:diamond_drill_head", 1200, -400)
            .circuit(6)
            .itemOutputs("48x gtceu:raw_galena")
            .itemOutputs("32x gtceu:raw_silver")
            .itemOutputs("24x gtceu:raw_lead")
    })

    data_receive(event, "miner", 2, 1).forEach(builder=>{
        builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 115")
            .inputFluids("gtceu:lubricant 45")
            .chancedInput("gtceu:diamond_drill_head", 1200, -400)
            .circuit(7)
            .itemOutputs("48x gtceu:raw_uraninite")
            .itemOutputs("32x gtceu:raw_thorium")
            .itemOutputs("32x gtceu:raw_pitchblende")
            .itemOutputs("24x gtceu:raw_lead")
    })

    data_receive(event, "miner", 2, 1).forEach(builder=>{
        builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 95")
            .inputFluids("gtceu:lubricant 65")
            .chancedInput("gtceu:diamond_drill_head", 1200, -400)
            .circuit(8)
            .itemOutputs("48x gtceu:raw_garnierite")
            .itemOutputs("32x gtceu:raw_nickel")
            .itemOutputs("32x gtceu:raw_cobaltite")
            .itemOutputs("24x gtceu:raw_pentlandite")
    })

    data_receive(event, "miner", 2, 1).forEach(builder=>{
        builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 115")
            .inputFluids("gtceu:lubricant 50")
            .chancedInput("gtceu:diamond_drill_head", 1200, -400)
            .circuit(9)
            .itemOutputs("64x gtceu:raw_chalcopyrite")
            .itemOutputs("32x minecraft:raw_iron")
            .itemOutputs("32x gtceu:raw_pyrite")
            .itemOutputs("32x minecraft:raw_copper")
    })

    data_receive(event, "miner", 2, 1).forEach(builder=>{
        builder
            .dimension("minecraft:overworld")
            .inputFluids("gtceu:drilling_fluid 125")
            .inputFluids("gtceu:lubricant 35")
            .chancedInput("gtceu:diamond_drill_head", 1200, -400)
            .circuit(10)
            .itemOutputs("64x gtceu:raw_chalcopyrite")
            .itemOutputs("32x gtceu:raw_zeolite")
            .itemOutputs("32x gtceu:raw_cassiterite")
            .itemOutputs("24x gtceu:raw_realgar")
    })



})