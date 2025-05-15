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

    // event.create("weapon_factory")
        // .category("ballistic")
        // .setEUIO("in")
        // .setMaxIOSize(12, 1, 0, 0)
        // .setSlotOverlay(false, false, GuiTextures.PRESS_OVERLAY_4)
        // .setProgressBar(GuiTextures.PROGRESS_BAR_BENDING, FillDirection.LEFT_TO_RIGHT)
        // .setSound(GTSoundEntries.ASSEMBLER)
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

    // event.create("ballistic_assembler", "simple")
        // .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM)
        // .definition((tier, builder) =>
            // builder
                // .langValue(`${GTValues.VLVH[tier]} Ballistic Assembler`)
                // .recipeType("weapon_factory")
                // .workableTieredHullRenderer("gtceu:block/machines/assembler")
        // )
})