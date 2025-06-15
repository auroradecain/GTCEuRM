const $SimpleGeneratorMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.SimpleGeneratorMachine")

GTCEuStartupEvents.registry("gtceu:recipe_type", event =>{
    event.create("agricultural_fabrication")
        .category("agricultural")
        .setEUIO("in")
        .setMaxIOSize(6, 1, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)

    event.create("seed_growth")
        .category("agricultural")
        .setEUIO("in")
        .setMaxIOSize(2, 6, 1, 0)
        .setSlotOverlay(false, false, false, GuiTextures.INT_CIRCUIT_OVERLAY)
        .setSlotOverlay(false, false, true, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_RECYCLER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)

    event.create("geothermal_energy")
        .category("generator")
        .setEUIO("out")
        .setMaxIOSize(0, 0, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMBUSTION)

})

GTCEuStartupEvents.registry("gtceu:machine", event =>{
    event.create("agricultural_fabricator", "simple")
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Agricultural Fabricator`)
                .recipeType("agricultural_fabrication")
                .workableTieredHullRenderer("gtceu:block/machines/agricultural_fabricator")
        )

    event.create("hydroponic_unit", "simple")
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Hydroponic Unit`)
                .recipeType("seed_growth")
                .workableTieredHullRenderer("gtceu:block/machines/hydroponic_unit")
        )
    
    event.create("geothermal_generator", "generator")
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Geothermal Generator ${GTValues.VLVT[tier]}`)
                .recipeType("geothermal_energy")
                .recipeModifier(MachineModifiers.SIMPLE_GENERATOR)
                .simpleGeneratorMachineRenderer('gtceu:block/generators/combustion')
        )
})