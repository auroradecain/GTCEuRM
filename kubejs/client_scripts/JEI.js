JEIEvents.hideItems(event =>{
    
    // Enderio Clenup
    event.hide(/enderio:copper_alloy.*/)
    event.hide(/enderio:clear_glass_.*_.*/)
    event.hide(/enderio:fused_quartz_.*_.*/)
    event.hide('enderio:energy_conduit')
    // GTCEu Bucket Clenaup
    event.hide(/gtceu:.*_bucket/)
    // AE2 Cleanup
    event.hide(/ae2:facade/)

    // Mystical Agriculture Cleanup
    event.hide(/mysticalagriculture:soulium_spawner/)
    event.hide(/mysticalagriculture:.*_augment/)
    event.hide(/mysticalagriculture:.*_.*_ore/)
    event.hide(/mysticalagriculture:.*_ore/)
    event.hide(/mysticalagriculture:witherproof_.*/)
    event.hide(["mysticalagriculture:enchanter", "mysticalagriculture:tinkering_table"])
    event.hide(["mysticalagriculture:nether_agglomeratio", "mysticalagriculture:end_agglomeratio", "mysticalagriculture:nature_agglomeratio", "mysticalagriculture:dye_agglomeratio", "mysticalagriculture:coral_agglomeratio","mysticalagriculture:honey_agglomeratio", "mysticalagriculture:prismarine_agglomeratio"])
    event.hide(["mysticalagriculture:soul_jar", "mysticalagriculture:experience_capsule", "mysticalagriculture:soulium_spawner", "mysticalagriculture:harvester", "mysticalagriculture:soul_extractor", "mysticalagriculture:seed_reprocessor", "mysticalagriculture:machine_frame", "mysticalagriculture:infusion_pedestal", "mysticalagriculture:infusion_altar", "mysticalagriculture:awakening_pedestal", "mysticalagriculture:awakening_altar", "mysticalagriculture:essence_vessel"])
    event.hide(["mysticalagriculture:soulium_seed_base"])
    event.hide(["mysticalagriculture:infusion_crystal", "mysticalagriculture:upgrade_base", "mysticalagriculture:prosperity_shard", "mysticalagriculture:prosperity_ingot", "mysticalagriculture:prosperity_nugget", "mysticalagriculture:soulium_ingot", "mysticalagriculture:soulium_nugget", "mysticalagriculture:soulium_dust"])

    const depreciateEssences = ["wood", "coral", "honey", "turtle", "silicon", "grains_of_infinity", "rabbit", "bronze", "brass", "amethyst_bronze", "slimesteel", "pig_iron", "copper_alloy", "redstone_alloy", "conductive_alloy", "steel", "constantan", "electrum", "invar", "mithril", "peridot", "soulium", "rose_gold", "soularium", "dark_steel", "pulsating_alloy", "energetic_alloy", "iridum", "manyullyn", "queens_slime", "hepatizon", "vibrant_alloy", "end_steel"]

    depreciateEssences.forEach(essence =>{
        event.hide([
            `mysticalagriculture:${essence}_essence`,
            `mysticalagriculture:${essence}_seeds`
        ])
    })

    const infTiers = ["inferium", "prudentium", "tertium", "imperium", "supremium", "awakened_supremium"]

    infTiers.forEach(tier =>{
        event.hide([
            `mysticalagriculture:${tier}_ingot`,
            `mysticalagriculture:${tier}_nugget`,
            `mysticalagriculture:${tier}_ingot_block`,
            `mysticalagriculture:${tier}_essence`,
            `mysticalagriculture:${tier}_block`,

            `mysticalagriculture:${tier}_sword`,
            `mysticalagriculture:${tier}_pickaxe`,
            `mysticalagriculture:${tier}_axe`,
            `mysticalagriculture:${tier}_shovel`,
            `mysticalagriculture:${tier}_hoe`,
            `mysticalagriculture:${tier}_bow`,
            `mysticalagriculture:${tier}_crossbow`,
            `mysticalagriculture:${tier}_fishing_rod`,
            `mysticalagriculture:${tier}_sickle`,
            `mysticalagriculture:${tier}_scythe`,
            
            // Disabled until working properly [W.I.P]
            `mysticalagriculture:${tier}_boots`,
            `mysticalagriculture:${tier}_leggings`,
            `mysticalagriculture:${tier}_chestplate`,
            `mysticalagriculture:${tier}_helmet`,

            `mysticalagriculture:${tier}_growth_accelerator`,
            `mysticalagriculture:${tier}_furnace`,
            `mysticalagriculture:${tier}_upgrade`,
            `mysticalagriculture:${tier}_farmland`
        ])
    })

    // GT tagPrefix ores cleanup
    GTMaterialRegistry.getRegisteredMaterials().forEach(id => {
        event.hide([
            `gtceu:granite_${id.name}_ore`,
            `gtceu:diorite_${id.name}_ore`,
            `gtceu:andesite_${id.name}_ore`,
            `gtceu:red_granite_${id.name}_ore`,
            `gtceu:marble_${id.name}_ore`,
            `gtceu:deepslate_${id.name}_ore`,
            `gtceu:tuff_${id.name}_ore`,
            `gtceu:sand_${id.name}_ore`,
            `gtceu:red_sand_${id.name}_ore`,
            `gtceu:gravel_${id.name}_ore`,
            `gtceu:basalt_${id.name}_ore`,
            `gtceu:blackstone_${id.name}_ore`,
            `gtceu:gabro_${id.name}_ore`
        ])
    })
})

JEIEvents.addItems(event =>{
    event.add(Item.of("ae2:facade", {item: "minecraft:stone"}))
})