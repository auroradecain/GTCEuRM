ServerEvents.recipes(event =>{
    event.recipes.gtceu.agricultural_fabrication("gtceu:debug/agricultural_fabricator")
        .itemInputs("minecraft:sugar")
        .itemOutputs("minecraft:sugar")
        .duration(10)
        .EUt(GTValues.VH[GTValues.ULV])
})