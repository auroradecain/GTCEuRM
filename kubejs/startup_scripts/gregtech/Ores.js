GTCEuStartupEvents.registry('gtceu:material', event=>{
    
    // Arcoirium Ores
    event.create("vidium")
        .dust().ore()
        .addOreByproducts('copper', 'iron')
        .color(0xd89251)
        .components('2x viadium', '5x oxygen', '2x hydrogen')

    event.create("fluorspar")
        .gem().ore()
        .addOreByproducts('calcium', GTMaterials.Yttrium)
        .color(0x99ffd6).iconSet(GTMaterialIconSet.LIGNITE)
        .components("calcium", "2x fluorine")

    event.create("tadanite_earth")
        .dust().ore()
        .addOreByproducts('fechantium', 'barite', 'fechantium')
        .color(0x33334d)
        .components('5x lithium', '2x fechantium', 'barite', '2x oxygen', '3x clay')
        
    event.create("dionitase")
        .dust().ore()
        .addOreByproducts('fechantium' , 'chromite', 'fechantium')
        .color(0xb366ff)
        .components('fechantium', '2x oxygen')
        .oreSmeltInto('fechantium')

    event.create("trevinite")
        .dust().ore()
        .color(0x666600)
        .addOreByproducts('magnetite', 'chromite')

    // GTCEu RM
    event.create("zircon")
        .gem().ore()
        .addOreByproducts('lead', 'silicon')
        .flags(GTMaterialFlags.HIGH_SIFTER_OUTPUT)
        .color(0x802000).iconSet(GTMaterialIconSet.EMERALD)
        .components('zirconium', 'silicon', '4x oxygen')

    event.create("argentite")
        .dust().ore()
        .addOreByproducts('sulfur', 'silver', 'niobium')
        .color(0x666699)
        .components('2x silver', 'sulfur')
        .oreSmeltInto('silver')

    event.create("dioptase")
        .gem().ore()
        .addOreByproducts('rare_earth', 'silicon')
        .color().iconSet(GTMaterialIconSet.GLASS)
        .components('copper', 'silicon', '4x oxygen', '2x hydrogen')

    event.create("torbenite")
        .dust().ore()
        .addOreByproducts('uranitite', 'copper', 'tricalcium_phosphate')
        .color(0x196666)
        .components('copper', '2x uranitite', '2x phosphate', '5x oxygen', '4x hydrogen')

})