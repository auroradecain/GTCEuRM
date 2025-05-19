let UtilsJS = Java.loadClass("dev.latvian.mods.kubejs.util.UtilsJS")

GTCEuStartupEvents.registry('gtceu:tag_prefix', event =>{
    
    event.create('chalk', 'ore')
        .stateSupplier(() => Block.getBlock('regions_unexplored:chalk').defaultBlockState())
        .baseModelLocation('regions_unexplored:block/chalk')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag('forge:mineable/pickaxe')

})