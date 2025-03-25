ServerEvents.recipes(event =>{
    
    // ONLY ENABLE WHEN READY [W.I.P.]
    // event.remove({id:'mysticalagriculture:essence/'})

    event.recipes.gtceu.compressor('coal_ore')
        .itemInputs("8x mysticalagriculture:coal_essence")
        .itemOutputs("2x gtceu:raw_coal")
        .duration(200)
        .EUt(GTValues.VH[GTValues.LV])
    
    event.recipes.gtceu.compressor('iron_ore')
        .itemInputs("8x mysticalagriculture:iron_essence")
        .itemOutputs("2x minecraft:raw_iron")
        .duration(200)
        .EUt(GTValues.VH[GTValues.LV])
    
    event.recipes.gtceu.compressor('gold_ore')
        .itemInputs("8x mysticalagriculture:gold_essence")
        .itemOutputs("2x minecraft:raw_gold")
        .duration(200)
        .EUt(GTValues.VH[GTValues.LV])
    
    event.recipes.gtceu.compressor('lapis_ore')
        .itemInputs("8x mysticalagriculture:lapis_lazuli_essence")
        .itemOutputs("2x gtceu:raw_lapis")
        .duration(200)
        .EUt(GTValues.VH[GTValues.LV])
        
    event.recipes.gtceu.compressor('redstone_ore')
        .itemInputs("8x mysticalagriculture:redstone_essence")
        .itemOutputs("2x gtceu:raw_redstone")
        .duration(200)
        .EUt(GTValues.VH[GTValues.LV])
})