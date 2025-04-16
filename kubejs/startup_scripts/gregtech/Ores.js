GTCEuStartupEvents.registry('gtceu:material', event=>{
    
    // Arcoirium Ores
    event.create("vidium")
        .dust().ore()
        .addOreByproducts('copper', 'iron')
        .color(0xd89251)
    
    event.create("travinite")
        .dust().ore()
        .color(0x666600)
        .addOreByproducts('magnetite', 'chromite')

    event.create("zircon")
        .gem()
        .ore().addOreByproducts('silver', 'silicon')
        .flags(GTMaterialFlags.HIGH_SIFTER_OUTPUT)
        .color(0x802000).iconSet(GTMaterialIconSet.DIAMOND)
        .components('zirconium', 'silicon', '4x oxygen')


})