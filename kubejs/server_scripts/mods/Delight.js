ServerEvents.recipes(event =>{
    event.recipes.gtceu.macerator("kubejs:delight/straw")
        .itemInputs("minecraft:grass")
        .chancedOutput("farmersdelight:straw", 5000, 1500)
        .duration(80)
        .EUt(GTValues.VH[GTValues.LV])

    event.recipes.gtceu.macerator("kubejs:delight/perfect_straw")
        .itemInputs("minecraft:tall_grass")
        .chancedOutput("2x farmersdelight:straw", 5000, 1500)
        .duration(80)
        .EUt(GTValues.VH[GTValues.LV])
})