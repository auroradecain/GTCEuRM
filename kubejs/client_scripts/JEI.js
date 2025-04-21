JEIEvents.hideItems(event =>{
    
    // Enderio Clenup
    event.hide(/enderio:copper_alloy.*/)
    event.hide(/enderio:clear_glass_.*_.*/)
    event.hide(/enderio:fused_quartz_.*_.*/)
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
    event.hide(["mysticalagriculture:soulium_seed_base", "mysticalagriculture:wood_seeds", "mysticalagriculture:coral_seeds", "mysticalagriculture:honey_seeds", "mysticalagriculture:turtle_seeds", "mysticalagriculture:silicon_seeds", "mysticalagriculture:grains_of_infinity_seeds", "mysticalagriculture:rabbit_seeds", "mysticalagriculture:bronze_seeds", "mysticalagriculture:brass_seeds", "mysticalagriculture:amethyst_bronze_seeds", "mysticalagriculture:slimesteel_seeds", "mysticalagriculture:pig_iron_seeds", "mysticalagriculture:copper_alloy_seeds", "mysticalagriculture:redstone_alloy_seeds", "mysticalagriculture:conductive_alloy_seeds", "mysticalagriculture:steel_seeds", "mysticalagriculture:constantan_seeds", "mysticalagriculture:electrum_seeds", "mysticalagriculture:invar_seeds", "mysticalagriculture:mithril_seeds", "mysticalagriculture:peridot_seeds", "mysticalagriculture:soulium_seeds", "mysticalagriculture:rose_gold_seeds", "mysticalagriculture:soularium_seeds", "mysticalagriculture:dark_steel_seeds", "mysticalagriculture:pulsating_alloy_seeds", "mysticalagriculture:energetic_alloy_seeds", "mysticalagriculture:iridium_seeds", "mysticalagriculture:manyullyn_seeds", "mysticalagriculture:_seeds", "mysticalagriculture:queens_slime_seeds", "mysticalagriculture:hepatizon_seeds", "mysticalagriculture:vibrant_alloy_seeds", "mysticalagriculture:end_steel_seeds"])
    event.hide(["mysticalagriculture:wood_essence", "mysticalagriculture:coral_essence", "mysticalagriculture:honey_essence", "mysticalagriculture:turtle_essence", "mysticalagriculture:silicon_essence", "mysticalagriculture:grains_of_infinity_essence", "mysticalagriculture:rabbit_essence", "mysticalagriculture:bronze_essence", "mysticalagriculture:brass_essence", "mysticalagriculture:amethyst_bronze_essence", "mysticalagriculture:slimesteel_essence", "mysticalagriculture:pig_iron_essence", "mysticalagriculture:copper_alloy_essence", "mysticalagriculture:redstone_alloy_essence", "mysticalagriculture:conductive_alloy_essence", "mysticalagriculture:steel_essence", "mysticalagriculture:constantan_essence", "mysticalagriculture:electrum_essence", "mysticalagriculture:invar_essence", "mysticalagriculture:mithril_essence", "mysticalagriculture:peridot_essence", "mysticalagriculture:soulium_essence", "mysticalagriculture:rose_gold_essence", "mysticalagriculture:soularium_essence", "mysticalagriculture:dark_steel_essence", "mysticalagriculture:pulsating_alloy_essence", "mysticalagriculture:energetic_alloy_essence", "mysticalagriculture:iridium_essence", "mysticalagriculture:manyullyn_essence", "mysticalagriculture:_essence", "mysticalagriculture:queens_slime_essence", "mysticalagriculture:hepatizon_essence", "mysticalagriculture:vibrant_alloy_essence", "mysticalagriculture:end_steel_essence"])
    event.hide(["mysticalagriculture:infusion_crystal", "mysticalagriculture:upgrade_base", "mysticalagriculture:prosperity_shard", "mysticalagriculture:prosperity_ingot", "mysticalagriculture:prosperity_nugget", "mysticalagriculture:soulium_ingot", "mysticalagriculture:soulium_nugget", "mysticalagriculture:soulium_dust"])

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