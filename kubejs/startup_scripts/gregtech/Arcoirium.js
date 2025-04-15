
GTCEuStartupEvents.registry('gtceu:material', event =>{
    event.create("gabro")
        .dust()
        .color(0x2f332d).iconSet('dull')
        .components('2x iron', '1x silicon_dioxide', 'magnesium', '3x aluminium')
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
    
    event.create("vidium")
        .dust()
        .color(0xd89251).secondaryColor(0xc0c0c0)
        .element(GTElements.get("vidium"))

    // Viadium + Viadium superconduit + Viadium Special Steel
    event.create("viadium")
        .ingot().fluid()
        .color(0xc983fb).secondaryColor(0xb1b1b1).iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_ROD)
        .blastTemp(1250, 'low', 120, 380)
        .element(GTElements.get("viadium"))
        .cableProperties(32, 2, 0, true)

    event.create("cupric_viadium_semielement")
        .ingot().fluid()
        .color(0xef8b5d).secondaryColor(0xe59aae).iconSet('metallic')
        .blastTemp(1350,'low', 120, 430)
        .components("viadium", "2x copper", "silicon", "3x oxygen")

    event.create("vss_blue")
        .ingot()
        .color(0x3f2aa7).iconSet('metallic')
        .components('viadium', '3x molybdenum', 'cobalt', '2x steel')

    event.create("vss_green")
        .ingot()
        .color(0x3f844d).iconSet('metallic')
        .components('viadium', '3x manganese', 'beryllium', '2x steel')

    event.create("vss_red")
        .ingot()
        .color(0x982a4d).iconSet('metallic')
        .components('viadium', '3x chromium', 'gallium', '2x steel')

    // Sapatanium
    event.create("sapatanium")
        .ingot().fluid()
        .color(0xffb866).iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_ROD)
        .blastTemp(1650, 'low', 480, 710)
        .components('viadium', '2x chromium', 'manganese')
        .cableProperties(128, 2, 0, true)

    // Sapatanium-Viadium Steel
    event.create("sapatanium_viadium_steel")
        .ingot().fluid()
        .color(0x602043).iconSet('dull')
        .blastTemp(1700, 'low', 480, 430)
        .components('sapatanium', 'viadium', 'steel')

    // Fechantium
    event.create("fechantium")
        .ingot().fluid()
        .color(0x0074cc).iconSet('shiny')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_ROD)
        .blastTemp(2100, 'mid', 480, 960)
        .element(GTElements.get("fechantium"))
        .cableProperties(512, 2, 0, true)

    event.create("altered_fechantium")
        .ingot().fluid()
        .color(0xbce3f5).iconSet('metallic')
        .blastTemp(2200, 'mid', 1920, 635)
        .components('2x fechantium', 'gallium', 'boron')

    // Yottrium
    event.create("yottrium")
        .ingot().fluid()
        .color(0xbaffc9).iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_ROD)
        .blastTemp(3100, 'mid', 1920, 705)
        .components('2x molybdenum', 'fechantium', '2x platinum','sulfur')
        .cableProperties(2048, 3, 0, true)

    // Denisium
    event.create("denisium")
        .ingot().fluid()
        .color(0x1b85b8).secondaryColor(0xf7b685).iconSet('radioactive')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_ROD)
        .blastTemp(4400, 'mid', 1920, 960)
        .components('2x uranium', 'yottrium', 'tungsten', '3x oxygen')
        .cableProperties(8192, 4, 0, true)

    // Avisium + ?
    event.create("avisium")
        .ingot().fluid()
        .color(0xf8ed62).iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_ROD)
        .blastTemp(6300, 'high', 7680, 830)
        .element(GTElements.get("avisium"))
        .cableProperties(32768, 6, 0, true)
    
    // Queenium
    event.create("queenium")
        .ingot().fluid()
        .color(0x4d004d).iconSet('shiny')
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .blastTemp(6300, 'high', 7680, 1340)
        .cableProperties(GTValues.VLVH[GTValues.ZPM], 6, 0, true)



    // Ores
    event.create("travinite")
        .ore().addOreByproducts('magnetite', 'chromite', 'lithium')
        .color(0x666600)

})

GTCEuStartupEvents.materialModification(event =>{
    GTMaterials.get('gabro').setFormula('MgFe2Al3(SiO2)?')
    //GTMaterials.get('sapatanium_viadium_steel').setFormula('*Vi*2Cr2MnFe')
    GTMaterials.get('gabro').setFormula('MgFe2Al3(SiO2)?')
    
    GTMaterials.get('yottrium').setFormula('Mo2FcPt2S')
    GTMaterials.get('denisium').setFormula('U2(Mo2FcPt2S)WO3')
    GTMaterials.get('travinite').setFormula('Li2(AvO3)O')
})