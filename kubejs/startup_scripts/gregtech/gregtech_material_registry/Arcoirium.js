
GTCEuStartupEvents.registry('gtceu:material', event =>{

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

        
        // Sapatanium
    event.create("sapatanium")
        .ingot().fluid()
        .color(0xffb866).iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_ROD)
        .blastTemp(1650, 'low', 480, 710)
        .components('viadium', '2x nickel', 'manganese')
        .cableProperties(128, 2, 0, true)

    // Sapatanium-Viadium Steel
    event.create("sapatanium_viadium_steel")
        .ingot().fluid()
        .color(0x602043).iconSet('dull')
        .blastTemp(1700, 'low', 480, 430)
        .components('2x sapatanium', 'viadium', 'steel')
    
    event.create("svs_g")
        .ingot().fluid()
        .color(0x883a53).iconSet('metallic')
        .components('3x sapatanium_viadium_steel', '2x chromium', 'gallium', 'silicon')
        .blastTemp(3000, 'mid', 960, 1100)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SPRING)

    event.create("svs_l")
        .ingot().fluid()
        .color(0x603772).iconSet('metallic')
        .components('5x svs_g', '3x molybdenum', 'cobalt')
        .blastTemp(4200, 'high', 960, 1200)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SPRING)

    event.create("svs_s")
        .ingot().fluid()
        .color(0x4e3295).iconSet('metallic')
        .components('5x svs_g', '2x vanadium', 'titanium', 'zirconium')
        .blastTemp(4200, 'high', 960, 1300)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SPRING)

    // Fechantium
    event.create("fechantium")
        .ingot().fluid()
        .color(0x0074cc).iconSet('shiny')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_ROD)
        .blastTemp(2100, 'mid', 480, 960)
        .element(GTElements.get("fechantium"))
        .cableProperties(512, 2, 0, true)

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

    // Avisium
    event.create("avisium")
        .ingot().fluid()
        .color(0xf8ed62).iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FINE_WIRE)
        .blastTemp(6300, 'high', 7680, 830)
        .element(GTElements.get("avisium"))
        .cableProperties(32768, 6, 0, true)
    
    // Queenium
    event.create("queenium")
        .ingot().liquid(1843)
        .color(0xbfbfbf).iconSet(GTMaterialIconSet.BRIGHT)
        .element(GTElements.get("queenium"))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FINE_WIRE)
        // .blastTemp(6300, 'high', 7680, 1340)
        .cableProperties(131072, 6, 0, true)


    // Ores
    
    event.create("vidium")
        .dust().ore()
        .addOreByproducts("iron", "copper", "gallium")
        .washedIn('sodium_persulfate', 100)
        .color(0xd89251)
        .components('2x viadium', '5x oxygen', '2x hydrogen')
    
    event.create("tadanite_earth")
        .dust().ore()
        .addOreByproducts('arsenic', 'rare_earth')
        .color(0x33334d)
        .components('2x fechantium', '2x oxygen', 'barite', '3x clay')
    
    event.create("gabro")
        .dust()
        .color(0x2f332d).iconSet('dull')
        .components('7x basalt', '3x granite', '2x calcite', 'vidium')
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        
    event.create("dionitase")
        .dust().ore()
        // 'fechantium' may crash, remove if needed
        .addOreByproducts('tungstate', 'chromite')
        .color(0xb366ff)
        .components('1x fechantium', '2x oxygen')

    event.create("trevinite")
        .dust().ore()
        .color(0x666600)
        .addOreByproducts('magnetite', 'chromite')

    // Chemicals


})
