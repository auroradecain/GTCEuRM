const $ToolProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty');


GTCEuStartupEvents.registry("gtceu:material", event=>{

    
    event.create("prosperity")
        .ingot()
        .ore(2, 1)
        .addOreByproducts('magnesium', 'aluminium', 'phosphate')
        .color(0xddfbfa).iconSet('metallic')
        .components("magnesium","2x aluminium", "silicon", "2x phosphate", "2x oxygen")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("soulium")
        .dust()
        .ore(1, 3, true)
        .addOreByproducts('nether_quartz', 'copper', 'sulfur')
        .color(0x5a3a2d)
        .components("copper", "3x hydrogen", "5x sulfur_dioxide")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])
    event.create("soularium")
        .ingot()
        .color(0x7f6f55).secondaryColor(0x83715c).iconSet("dull")
        .components("soulium", "prosperity")
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
    event.create("inferium")
        .ingot().fluid()
        .ore(2, 3, true) 
        .color(0x758d01).iconSet("metallic")
        .components("sodium", "aluminium", "silicon", "3x oxygen")
        .toolStats($ToolProperty.Builder.of(3.0, 2.5, 384, 2).types([
            GTToolType.SWORD,
            GTToolType.PICKAXE,
            GTToolType.AXE,
            GTToolType.SHOVEL,
            GTToolType.HOE,
            GTToolType.MINING_HAMMER,
            GTToolType.SPADE,
            GTToolType.SCYTHE,
            GTToolType.DRILL_LV
        ]).build())
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_GEAR)

    function mysticalIngot(i, p, clr, a, b, c, d, e){
        event.create(`${i}`)
            .ingot().fluid()
            .color(clr).iconSet("metallic")
            .components(`4x ${p}`)
            .toolStats(new ToolProperty(a, b, c, d, [
                GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.AXE, GTToolType.SHOVEL, GTToolType.HOE, GTToolType.MINING_HAMMER,GTToolType.SPADE, GTToolType.SCYTHE, e
            ]))
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_GEAR)
            .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])
    }
    
    mysticalIngot('prudentium', 'inferium', 0x008623,  5.0,  3.5,  768, 2, GTToolType.DRILL_MV)
    mysticalIngot('tertium', 'prudentium',  0xb34b02,  8.0,  5.5, 1536, 3, GTToolType.DRILL_MV)
    mysticalIngot('imperium', 'tertium',    0x0380da, 10.0,  8.0, 1920, 3, GTToolType.DRILL_HV)
    mysticalIngot('supremium', 'imperium',  0xcb0000, 14.0, 10.5, 2304, 4, GTToolType.DRILL_EV)

    event.create("insanium")
        .ingot().fluid()
        .color(0x560484).iconSet('metallic')
        .components('4x supremium')
        .toolStats($ToolProperty.Builder.of(19.0, 13.0, 3072, 4).types([
            GTToolType.SWORD,
            GTToolType.PICKAXE,
            GTToolType.AXE,
            GTToolType.SHOVEL,
            GTToolType.HOE,
            GTToolType.MINING_HAMMER,
            GTToolType.SPADE,
            GTToolType.SCYTHE,
            GTToolType.DRILL_EV
        ]).unbreakable().enchantability(23).build())
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])

    event.create("awakened_supremium") 
        .ingot().fluid()
        .color(0xff3333).iconSet('radioactive')
        .element(GTElements.get('awakened_supremium'))
        .toolStats($ToolProperty.Builder.of(27.0, 18.0, 4608, 5).types([
            GTToolType.SWORD,
            GTToolType.PICKAXE,
            GTToolType.AXE,
            GTToolType.SHOVEL,
            GTToolType.HOE,
            GTToolType.MINING_HAMMER,
            GTToolType.SPADE,
            GTToolType.SCYTHE,
            GTToolType.DRILL_IV
        ]).unbreakable().enchantability(31).magnetic().build())
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])
        
 
    // Mystical Agriculture exclusive chemicals [WIP]
    /*
    event.create('air_elemental_solution')
        .fluid()
        .color()
        .components()
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create('fire_elemental_solution')
        .fluid()
        .color()
        .components()
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create('earth_elemental_solution')
        .fluid()
        .color()
        .components()
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create('water_elemental_solution')
        .fluid()
        .color()
        .components()
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create('earth_water_superelemental_solution')
        .fluid()
        .color()
        .components()
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create('air_fire_superelemental_solution')
        .fluid()
        .color()
        .components()
        .flags()
    event.create('mystical_hyperconcetrate')
        .fluid()
        .color()
        .components()

    event.create('elemental_sludge')
        .dust()
        .color()
        .components("")
    */
    
})

GTCEuStartupEvents.materialModification(event =>{
    GTMaterials.get('prosperity').setFormula('Mg(AlPO4)2(SiO2)')
    GTMaterials.get('inferium').setFormula('NaAl(SiO2)')
    GTMaterials.get('prudentium').setFormula('(NaAl(AlPO4)2(SiO2)2)4')
    GTMaterials.get('tertium').setFormula('(NaAl(AlPO4)2(SiO2)2)16')
    GTMaterials.get('imperium').setFormula('(NaAl(AlPO4)2(SiO2)2)64')
    GTMaterials.get('supremium').setFormula('(NaAl(AlPO4)2(SiO2)2)256')
    GTMaterials.get('insanium').setFormula('(NaAl(AlPO4)2(SiO2)2)1024')
    GTMaterials.get('soulium').setFormula('Cu(SO2)5H3?')
    GTMaterials.get('soularium').setFormula('CuMg(SO2)5(SiO3)H3?')
    })