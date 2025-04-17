GTCEuStartupEvents.registry('gtceu:material', event=>{

    
    event.create("zircon")
        .gem().ore()
        .addOreByproducts('lead', 'silicon')
        .flags(GTMaterialFlags.HIGH_SIFTER_OUTPUT)
        .color(0x802000).iconSet(GTMaterialIconSet.OPAL)
        .components('zirconium', 'silicon', '4x oxygen')

    
    event.create("fluorspar")
        .gem().ore(2, 1, true)
        .addOreByproducts('calcium', 'yttrium')
        .flags(GTMaterialFlags.HIGH_SIFTER_OUTPUT)
        .color(0x99ffd6).iconSet(GTMaterialIconSet.LIGNITE)
        .components("calcium", "2x fluorine")

    event.create("argentite")
        .dust().ore()
        .addOreByproducts('sulfur', 'silver', 'niobium')
        .color(0x666699)
        .components('2x silver', 'sulfur')
        .oreSmeltInto('silver')

    event.create("dioptase")
        .gem().ore()
        .addOreByproducts('rare_earth', 'silicon')
        .color(0x003322).iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .components('copper', 'silicon', '4x oxygen', '2x hydrogen')

    event.create("torbenite")
        .dust().ore(2, 1)
        .addOreByproducts('copper', 'uraninite','tricalcium_phosphate')
        .color(0x196666)
        .components('copper', '2x uraninite', '2x phosphate', '5x oxygen', '4x hydrogen')

})