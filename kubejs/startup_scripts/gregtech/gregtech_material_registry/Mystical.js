GTCEuStartupEvents.registry("gtceu:material", event=>{

    
    event.create("prosperity")
        .ingot()
        .ore(2, 1)
        .color(0xddfbfa).iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_PLATE)
    event.create("soulium")
        .dust()
        .ore(1, 3, true)
        .addOreByproducts('copper', 'sulfur')
        .color(0x664233).secondaryColor(0x444422)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])
    event.create("inferium")
        .ingot().fluid()
        .ore(2, 3, true) 
        .color(0x758d01).secondaryColor(0x4c6501).iconSet("metallic")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)

    
    event.create(`prudentium`)
        .ingot().fluid()
        .color(0x008623).iconSet("metallic")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_GEAR)
    event.create(`tertium`)
        .ingot().fluid()
        .color(0xb34b02).iconSet("metallic")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_GEAR)
    event.create(`imperium`)
        .ingot().fluid()
        .color(0x0380da).iconSet("metallic")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_GEAR)
    event.create(`supremium`)
        .ingot().fluid()
        .color(0xcb0000).iconSet("metallic")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_GEAR)
    
    event.create("insanium")
        .ingot().fluid()
        .color(0x560484).iconSet('metallic')
        .toolStats(new $ToolProperty.Builder.of(19.0, 13.0, 4096, 4).types([
            GTToolType.SWORD,
            GTToolType.PICKAXE,
            GTToolType.AXE,
            GTToolType.SHOVEL,
            GTToolType.HOE,
            GTToolType.MINING_HAMMER,
            GTToolType.SPADE,
            GTToolType.SCYTHE,
            GTToolType.DRILL_LV,
            GTToolType.DRILL_MV,
            GTToolType.DRILL_HV,
            GTToolType.DRILL_EV
        ]).enchantability(23).build())
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD)

    event.create("awakened_supremium") 
        .ingot().fluid()
        .color(0xff3333).iconSet('radioactive')
        .element(GTElements.get('awakened_supremium'))
        .toolStats(new $ToolProperty.Builder.of(27.0, 18.0, 4608, 5).types([
            GTToolType.SWORD,
            GTToolType.PICKAXE,
            GTToolType.AXE,
            GTToolType.SHOVEL,
            GTToolType.HOE,
            GTToolType.MINING_HAMMER,
            GTToolType.SPADE,
            GTToolType.SCYTHE,
            GTToolType.DRILL_LV,
            GTToolType.DRILL_MV,
            GTToolType.DRILL_HV,
            GTToolType.DRILL_EV,
            GTToolType.DRILL_IV
        ]).unbreakable().enchantability(31).magnetic().build())
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_GEAR)

    event.create("draconitium")
        .ingot()
        .fluid()
        .color(0x5c00e6).secondaryColor(0x0a001a).iconSet('radioactive')
        .flags(GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD)
        
 
    // Mystical Agriculture elementia [WIP]
    event.create('air_elementia')
        .gem(2, 4000)
        .color(0xffff1a).secondaryColor(0xffffb3).iconSet(GTMaterialIconSet.QUARTZ)
        .element(GTElements.C)
        .flags(GTMaterialFlags.CRYSTALLIZABLE)
        .ignoredTagPrefixes([TagPrefix.dustTiny])
    event.create('fire_elementia')
        .gem(2, 4000)
        .color(0xff751a).secondaryColor(0xffd1b3).iconSet(GTMaterialIconSet.QUARTZ)
        .element(GTElements.C)
        .flags(GTMaterialFlags.CRYSTALLIZABLE)
        .ignoredTagPrefixes([TagPrefix.dustTiny])
    event.create('earth_elementia')
        .gem(2, 4000)
        .color(0x1aff1a).secondaryColor(0xccffcc).iconSet(GTMaterialIconSet.QUARTZ)
        .element(GTElements.C)
        .flags(GTMaterialFlags.CRYSTALLIZABLE)
        .ignoredTagPrefixes([TagPrefix.dustTiny])
    event.create('water_elementia')
        .gem(2, 4000)
        .color(0x3385ff).secondaryColor(0xb3d1ff).iconSet(GTMaterialIconSet.QUARTZ)
        .element(GTElements.C)
        .flags(GTMaterialFlags.CRYSTALLIZABLE)
        .ignoredTagPrefixes([TagPrefix.dustTiny])

})
