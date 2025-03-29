ServerEvents.recipes(event =>{
    event.recipes.gtceu.synthetic_fluid('oxygen')
        .itemInputs("mysticalagriculture:air_essence")
        .outputFluids("gtceu:oxygen 1000")
        .duration(80)
        .EUt(24)
        .circuit(1)
})