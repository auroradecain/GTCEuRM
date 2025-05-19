ServerEvents.recipes(event=>{
    
    const arrayTiers = {
        1: GTValues.VA[GTValues.MV],
        2: GTValues.VHA[GTValues.EV],
        3: GTValues.VA[GTValues.EV],
        4: GTValues.VA[GTValues.LuV]
    }

    const arrayDuration = {
        1: 15,
        2: 30,
        3: 40
    }

    function arrayMake(type, tier, v, duration){
        
        let builder = [];
        
        if(v == undefined) v = arrayTiers[tier]
        if(duration == undefined) duration = arrayDuration[tier]

        if(tier < 3){
            builder[0] = event.recipes.gtceu.circuit_assembler(`kubejs:${type}_processing_array_from_bad_solder`)
                .inputFluids("gtceu:tin 144")
                .itemInputs("kubejs:processing_array_housing")
                .itemOutputs(`kubejs:${type}_processing_array`)
                .duration(Math.round(duration)*20)
                .EUt(v)
            builder[1] = event.recipes.gtceu.circuit_assembler(`kubejs:${type}_processing_array_from_good_solder`)
                .inputFluids("gtceu:soldering_alloy 72")
                .itemInputs("kubejs:processing_array_housing")
                .itemOutputs(`kubejs:${type}_processing_array`)
                .duration(Math.round(duration)*20)
                .EUt(v)
        }else{
            builder[0] = event.recipes.gtceu.assembly_line(`kubejs:${type}_processing_array`)
                .itemOutputs(`kubejs:${type}_processing_array`)
                .duration(Math.round(duration)*20)
                .EUt(v)
        }

        return builder;
    }

    arrayMake("logical", 1).forEach(array=>{
        array
            .itemInputs("3x gtceu:ilc_chip")
            .itemInputs("2x #gtceu:circuits/mv")
            .itemInputs("12x gtceu:fine_annealed_copper_wire")
    })
    arrayMake("resourceful", 1).forEach(array=>{
        array
            .itemInputs("4x gtceu:ram_chip")
            .itemInputs("2x #gtceu:circuits/mv")
            .itemInputs("8x gtceu:fine_gold_wire")
    })
    arrayMake("precise", 2).forEach(array=>{
        array
            .itemInputs("4x gtceu:cpu_chip")
            .itemInputs("4x gtceu:ram_chip")
            .itemInputs("2x #gtceu:circuits/ev")
            .itemInputs("32x gtceu:fine_tantalum_wire")
    })

    event.shaped("kubejs:processing_array_housing", [
        'ABA',
        'B B',
        'CBC'
    ], {
        A: 'gtceu:tempered_glass',
        B: '#forge:plates/steel',
        C: '#gtceu:diodes'
    }).id("kubejs:processing_array_housing_from_silicon_wafer")

})