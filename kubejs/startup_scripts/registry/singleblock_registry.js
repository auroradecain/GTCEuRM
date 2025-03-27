GTCEuStartupEvents.registry("gtceu:recipe_type", event =>{
    event.create("agricultural_fabrication")
        .category("agricultural")
        .setEUIO("in")
        .setMaxIOSize(6,1,1,0)
        .setSlotOverlay(false, false, GuiTextures.PRESS_OVERLAY_4)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
})

GTCEuStartupEvents.registry("gtceu:machine", event =>{
    event.create("agricultural_fabricator", "simple")
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Agricultural Fabricator`)
                .recipeType("agricultural_fabrication")
                .workableTieredHullRenderer(GTCEu.id("block/machines/agricultural_fabricator"))
        )
})