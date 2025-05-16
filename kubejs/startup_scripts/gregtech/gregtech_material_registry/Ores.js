GTCEuStartupEvents.registry('gtceu:material', event=>{

    
    event.create("zircon")
        .gem().ore()
        .addOreByproducts('lead', 'zirconium')
        .flags(GTMaterialFlags.HIGH_SIFTER_OUTPUT)
        .color(0xb32d00).secondaryColor(0x804000).iconSet(GTMaterialIconSet.FINE)
        .components('zirconium', 'silicon', '4x oxygen')

    
    event.create("fluorspar")
        .gem().ore(2, 1, true)
        .addOreByproducts('calcium', 'yttrium')
        .flags(GTMaterialFlags.HIGH_SIFTER_OUTPUT)
        .color(0x99ffd6).secondaryColor(0x009973).iconSet(GTMaterialIconSet.LIGNITE)
        .components("calcium", "2x fluorine")

    event.create("argentite")
        .dust().ore()
        .addOreByproducts('sulfur', 'silver', 'niobium')
        .washedIn('mercury', 100)
        .color(0x9494b8).secondaryColor(0x453d5c)
        .components('2x silver', 'sulfur')
        .oreSmeltInto('silver')

    event.create("dioptase")
        .gem().ore()
        .addOreByproducts('rare_earth', 'silicon')
        .color(0x00b377).secondaryColor(0x00664d).iconSet(GTMaterialIconSet.LIGNITE)
        .components('copper', 'silicon', '4x oxygen', '2x hydrogen')
        .oreSmeltInto('copper')

    event.create("torbenite")
        .dust().ore(2, 3)
        .addOreByproducts('copper', 'uraninite', 'tricalcium_phosphate')
        .color(0x2db9b9).secondaryColor(0x195367)
        .components('copper', '2x uraninite', '2x phosphate', '5x oxygen', '4x hydrogen')

    event.create("terraemantine")
        .dust().ore()
        .addOreByproducts('tungsten', 'iron')
        .color(0xcc6900).secondaryColor(0x806000).iconSet(GTMaterialIconSet.METALLIC)
        .components('iron', 'tungsten', '4x oxygen', '4x phosphate')

})