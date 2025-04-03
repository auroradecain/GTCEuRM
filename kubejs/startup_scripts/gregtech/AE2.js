GTCEuStartupEvents.registry('gtceu:material', event=>{
    event.create('charged_certus_quartz')
        .gem()
        .color(0x9fd5e8)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.PHOSPHORESCENT)
        .components("certus_quartz")
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall, TagPrefix.gemExquisite, TagPrefix.gemFlawless, TagPrefix.gemFlawed, TagPrefix.block])

    event.create('fluix')
        .gem()
        .color(0x7f5bb3)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.PHOSPHORESCENT)
        .components("charged_certus_quartz", "redstone", "nether_quartz")
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.gemExquisite, TagPrefix.gemFlawless, TagPrefix.gemFlawed, TagPrefix.block])

    event.create('sky_steel')
        .ingot()
        .color(0x060613)
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE)
        .toolStats(new ToolProperty(4.0, 3.5, 768, 2, [
            GTToolType.AXE, 
            GTToolType.PICKAXE, 
            GTToolType.SHOVEL,
            GTToolType.MINING_HAMMER,
            GTToolType.SPADE,
        ]))
        .components('steel')
        .ignoredTagPrefixes([TagPrefix.dustTiny])
})