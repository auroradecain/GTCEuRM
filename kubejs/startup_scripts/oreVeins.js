GTCEuStartupEvents.registry('gtceu:tag_prefix', event =>{
    event.create('gabro', 'ore')
        .stateSupplier(() => Block.getBlock('kubejs:gabro').defaultBlockState())
        .baseModelLocation('kubejs:block/gabro')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag('forge:mineable/pickaxe')
})