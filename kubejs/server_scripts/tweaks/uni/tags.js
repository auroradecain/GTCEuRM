ServerEvents.tags("item", event => {

    // AE2
    event.add("ae2:all_fluix", "gtceu:fluix_gem")
    event.add("ae2:all_certus_quartz", "gtceu:charged_certus_quartz_gem")
    event.add("forge:gems/certus_quartz", "gtceu:charged_certus_quartz_gem")
    event.add("forge:dusts/quartz", "gtceu:nether_quartz_dust")
    event.removeAllTagsFrom("ae2:certus_quartz_crystal")
    event.removeAllTagsFrom("ae2:charged_certus_quartz_crystal")
    event.removeAllTagsFrom("ae2:fluix_crystal")
    event.removeAllTagsFrom("ae2:fluix_dust")
    // NC
    event.remove("forge:ingots/aluminum", "nuclearcraft:aluminum_ingot")
    event.add("forge:ingots/aluminium", "nuclearcraft:aluminum_ingot")
    // RU (wtf)
    event.add("regions_unexplored:magnolia_logs", "#regions_unexplored:magnolia_logs_item")
})