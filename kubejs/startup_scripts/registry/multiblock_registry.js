GTCEuStartupEvents.registry('gtceu:recipe_type', event=>{
    event.create('synthetic_fluid')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 1, 4)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)

    event.create('synthetic_solid')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(1, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
})

GTCEuStartupEvents.registry('gtceu:machine', event=>{
    event.create('synthetic_fluid_rig', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('synthetic_fluid')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAA", "#A#", "#A#", "###", "###")
            .aisle("AAA", "A A", "A A", "#A#", "#A#")
            .aisle("A@A", "#A#", "#A#", "###", "###")
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            // .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
            .where('A', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()).setMinGlobalLimited(3)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setMaxGlobalLimited(1)))
            .where(" ", Predicates.air())
            .where("#", Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel", "gtceu:block/multiblock/implosion_compressor", false)

    event.create('synthetic_solid_rig', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('synthetic_solid')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', '#B#', "#B#", "###", "###")
            .aisle("BBB", "B B", "B B", "#B#", "#B#")
            .aisle("B$B", "#B#", "#B#", "###", "###")
            .where('$', Predicates.controller(Predicates.blocks(definition.get())))
            // .where('D', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
            .where('B', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()).setMinGlobalLimited(4)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setMaxGlobalLimited(1)))
            .where(" ", Predicates.air())
            .where("#", Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel", "gtceu:block/multiblock/large_chemical_reactor", false)

})