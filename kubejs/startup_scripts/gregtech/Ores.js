GTCEuStartupEvents.registry('gtceu:material', event=>{
    
    // Arcoirium Ores
    event.create("vidium")
        .dust().ore().addOreByproducts('copper', 'iron')
        .color(0xd89251).secondaryColor(0xc0c0c0)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        .components('2x viadium', '2x oxygen', 'hydrogen')
    
    event.create("travinite")
        .dust().ore().addOreByproducts('magnetite', 'chromite')
        .color(0x666600)

    event.create("zircon")
        .gem()
        .ore().addOreByproducts('silver', 'silicon')
        .flags(GTMaterialFlags.HIGH_SIFTER_OUTPUT)
        .color(0x802000).iconSet(GTMaterialIconSet.DIAMOND)
        .components('zirconium', 'silicon', '4x oxygen')


})