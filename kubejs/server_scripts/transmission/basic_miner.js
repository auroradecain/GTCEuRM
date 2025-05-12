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
            .itemOutputs("32x minecraft:gravel")
            .itemOutputs("32x minecraft:sand")
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
})