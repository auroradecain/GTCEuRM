ServerEvents.recipes(event =>{
    // Mystical Agriculture

    // Previous changes are enought to remove all recipes without breaking, testing... 
    event.remove({mod: 'mysticalagriculture'})
    event.remove({mod: 'mysticalagradditions'})
    //event.remove(/mysticalagriculture:*_seeds/)
    //event.remove(/mysticalagriculture:*_essence/)
    //event.remove(/mysticalagriculture:essence/)
    //event.remove(/mysticalagriculture:soulium_spawner/)
    
    // event.remove(["mysticalagriculture:inferium_ingot", "mysticalagriculture:prudentium_ingot", "mysticalagriculture:tertium_ingot", "mysticalagriculture:imperium_ingot", "mysticalagriculture:supremium_ingot", "mysticalagriculture:insanium_ingot"])
    // event.remove(["mysticalagriculture:air_agglomeratio", "mysticalagriculture:fire_agglomeratio", "mysticalagriculture:earth_agglomeratio", "mysticalagriculture:water_agglomeratio", "mysticalagriculture:nether_agglomeratio", "mysticalagriculture:end_agglomeratio", "mysticalagriculture:nature_agglomeratio", "mysticalagriculture:dye_agglomeratio", "mysticalagriculture:coral_agglomeratio","mysticalagriculture:honey_agglomeratio", "mysticalagriculture:prismarine_agglomeratio"])
    // event.remove(["mysticalagriculture:watering_can", "mysticalagriculture:gear/inferium_watering_can", "mysticalagriculture:gear/prudentium_watering_can", "mysticalagriculture:gear/tertium_watering_can", "mysticalagriculture:gear/imperium_watering_can", "mysticalagriculture:gear/supremium_watering_can", "mysticalagriculture:gear/awakened_supremium_watering_can"])
    // event.remove(["mysticalagriculture:inferium_growth_accelerator", "mysticalagriculture:prudentium_growth_accelerator", "mysticalagriculture:tertium_growth_accelerator", "mysticalagriculture:imperium_growth_accelerator", "mysticalagriculture:supremium_growth_accelerator"])
    // event.remove(["mysticalagriculture:soul_jar", "mysticalagriculture:soulium_spawner", "mysticalagriculture:harvester", "mysticalagriculture:soul_extractor", "mysticalagriculture:seed_reprocessor", "mysticalagriculture:machine_frame", "mysticalagriculture:infusion_pedestal", "mysticalagriculture:infusion_altar", "mysticalagriculture:awakening_pedestal", "mysticalagriculture:awakening_altar", "mysticalagriculture:essence_vessel"])
    // event.remove("mysticalagriculture:prosperity_seed_base")
    // event.remove("mysticalagriculture:soulium_seed_base")
    // event.remove("mysticalagriculture:prosperity_gemstone")
    
    event.remove(["gtceu:extractor/extract_prudentium_dust", "gtceu:extractor/extract_tertium_dust", "gtceu:extractor/extract_imperium_dust", "gtceu:extractor/extract_supremium_dust"])
    
    // event.replaceInput({ mod: 'mysticalagriculture' }, 'mysticalagriculture:prosperity_shard', 'gtceu:prosperity_dust')
    //event.replaceInput({ mod: 'mysticalagriculture' }, 'mysticalagriculture:prosperity_ingot', 'gtceu:prosperity_ingot')

    //event.replaceInput({ mod: 'mysticalagraddition'}, 'mysticalagradditions:insanium_essence', 'gtceu:insanium_dust')
    //event.replaceOutput({ mod: 'mysticalagraddition'}, 'mysticalagradditions:insanium_essence', 'gtceu:insanium_dust')

    const replace_tier = ["inferium", "prudentium", "tertium", "imperium", "supremium", "awakened_supremium"]

    replace_tier.forEach(tier =>{
        event.replaceInput({ mod: 'mysticalagriculture' }, `mysticalagriculture:${tier}_essence`, `gtceu:${tier}_dust`)
        event.replaceInput({ mod: 'mysticalagriculture' }, `mysticalagriculture:${tier}_ingot`, `gtceu:${tier}_ingot`)
        event.replaceInput({ mod: 'mysticalagriculture' }, `mysticalagriculture:${tier}_nugget`, `gtceu:${tier}_nugget`)
        event.replaceOutput({ mod: 'mysticalagriculture' }, `mysticalagriculture:${tier}_essence`, `gtceu:${tier}_dust`)
        event.replaceOutput({ mod: 'mysticalagriculture' }, `mysticalagriculture:${tier}_ingot`, `gtceu:${tier}_ingot`)
        event.replaceOutput({ mod: 'mysticalagriculture' }, `mysticalagriculture:${tier}_nugget`, `gtceu:${tier}_nugget`)
    })

    // AE2

    event.replaceInput({ mod: 'ae2'}, 'ae2:certus_quartz_crystal', 'gtceu:certus_quartz_gem')
    event.replaceInput({ mod: 'ae2'}, 'ae2:charged_certus_quartz_crystal', 'gtceu:charged_certus_quartz_gem')
    event.replaceInput({ mod: 'ae2'}, 'ae2:fluix_crystal', 'gtceu:fluix_gem')

    event.remove(['ae2:network/blocks/inscriber', 'ae2:network/blocks/charger'])
    event.remove(['expatternprovider:ex_inscriber', 'expatternprovider:ex_charger'])
    event.remove(/expatternprovider:cutter/)
    event.remove(/ae2:inscriber/)

    // GT
})