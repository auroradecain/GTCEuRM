
GTCEuStartupEvents.registry('gtceu:material', event =>{
    event.create("gabro")
        .dust()
        .color(0x2f332d).iconSet('dull')
        .components('2x iron', '3x silicon_dioxide', 'magnesium')
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
    
    event.create("vidium")
        .dust()
        .color(0xd89251).secondaryColor(0xc0c0c0).iconSet('dull')
        .element(GTElements.get("vidium"))

    event.create("viadium")
        .ingot(3).fluid()
        .color(0xe2bbfd).secondaryColor(0xb1b1b1).iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .element(GTElements.get("viadium")) 
        .cableProperties(32, 1, 0, true)

    event.create("sapatanium")
        .ingot().fluid()
        .color(0xffdfba).iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .blastTemp(1650, 'low', 480, 710)
        .components('viadium', 'nickel', 'gold')
        .cableProperties(128, 1, 0, true)
    
    event.create("fechantium")
        .ingot().fluid()
        .color(0xbae1ff).iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .blastTemp(2200, 'low', 480, 960)
        .element(GTElements.get("fechantium"))
        .cableProperties(512, 2, 0, true)

    event.create("yottrium")
        .ingot().fluid()
        .color(0xbaffc9).iconSet('bright')
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .blastTemp(3300, 'mid', 1920, 705)
        .components('fechantium', 'viadium', 'molybdenum')
        .cableProperties(2048, 2, 0, true)

    event.create("denisium")
        .ingot().fluid()
        .color(0x1b85b8).secondaryColor(0xf7b685).iconSet('radioactive')
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .blastTemp(4400, 'mid', 1920, 960)
        .components('2x platinum', 'yottrium', '3x oxygen')
        .cableProperties(8192, 3, 0, true)

    event.create("avisium")
        .ingot(4).fluid()
        .ore().addOreByproducts('magnetite', 'chromite', 'tin')
        .color(0xf8ed62).iconSet('mettalic')
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .blastTemp(6300, 'mid', GTValues.VH[GTValues.IV], 830)
        .element(GTElements.get("avisium"))
        .cableProperties(32768, 3, 0, true)
})

GTCEuStartupEvents.materialModification(event =>{
    GTMaterials.get('gabro').setFormula('Fe2(SiO3)Mg')
})