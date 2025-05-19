ServerEvents.recipes(event=>{
    event.recipes.gtceu.laser_engraver("deep_dark_data_collection")
        .itemInputs("kubejs:overworld_data_collection")
        .notConsumable("#forge:lenses/gray")
        .itemOutputs("kubejs:deep_dark_data_collection")
        .duration(800)
        .EUt(1920)
})