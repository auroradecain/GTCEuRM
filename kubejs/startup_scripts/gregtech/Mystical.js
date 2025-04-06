const $ToolProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty');


GTCEuStartupEvents.registry("gtceu:material", event=>{

    
    event.create("prosperity")
        .ingot()
        .ore(2, 1)
        .addOreByproducts('magnesium', 'aluminium', 'phosphate')
        .color(0xddfbfa).iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_PLATE)
    event.create("soulium")
        .dust()
        .ore(1, 3, true)
        .addOreByproducts('nether_quartz', 'copper', 'sulfur')
        .color(0x5a3a2d)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])
    event.create("soularium")
        .ingot()
        .color(0x7f6f55).secondaryColor(0x83715c).iconSet("dull")
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
    event.create("inferium")
        .ingot().fluid()
        .ore(2, 3, true) 
        .color(0x758d01).iconSet("metallic")
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

    function mysticalIngot(i, clr, a, b, c, d, e){
        event.create(`${i}`)
            .ingot().fluid()
            .color(clr).iconSet("metallic")
            .toolStats(new ToolProperty(a, b, c, d, [
                GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.AXE, GTToolType.SHOVEL, GTToolType.HOE, GTToolType.MINING_HAMMER,GTToolType.SPADE, GTToolType.SCYTHE, e
            ]))
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_GEAR)
    }
    
    mysticalIngot('prudentium', 0x008623,  5.0,  3.5,  1024, 2, GTToolType.DRILL_MV)
    mysticalIngot('tertium',  0xb34b02,  8.0,  5.5, 1920, 3, GTToolType.DRILL_MV)
    mysticalIngot('imperium',    0x0380da, 10.0,  8.0, 2304, 3, GTToolType.DRILL_HV)
    mysticalIngot('supremium',  0xcb0000, 14.0, 10.5, 3072, 4, GTToolType.DRILL_EV)

    event.create("insanium")
        .ingot().fluid()
        .color(0x560484).iconSet('metallic')
        .toolStats($ToolProperty.Builder.of(19.0, 13.0, 4096, 4).types([
            GTToolType.SWORD,
            GTToolType.PICKAXE,
            GTToolType.AXE,
            GTToolType.SHOVEL,
            GTToolType.HOE,
            GTToolType.MINING_HAMMER,
            GTToolType.SPADE,
            GTToolType.SCYTHE,
            GTToolType.DRILL_EV
        ]).enchantability(23).build())
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD)

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

    event.create("draconitium")
        .ingot()
        .fluid()
        .color(0x5c00e6).secondaryColor(0x0a001a).iconSet('radioactive')
        .flags(GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD)
        
 
    // Mystical Agriculture elementia [WIP]
    event.create('air_elementia')
        .gem(2, 6000)
        .color(0xffff1a).secondaryColor(0xffffb3).iconSet(GTMaterialIconSet.QUARTZ)
        .element(GTElements.C)
        .ignoredTagPrefixes([TagPrefix.dustTiny])
    event.create('fire_elementia')
        .gem(2, 6000)
        .color(0xff751a).secondaryColor(0xffd1b3).iconSet(GTMaterialIconSet.QUARTZ)
        .element(GTElements.C)
        .ignoredTagPrefixes([TagPrefix.dustTiny])
    event.create('earth_elementia')
        .gem(2, 6000)
        .color(0x1aff1a).secondaryColor(0xccffcc).iconSet(GTMaterialIconSet.QUARTZ)
        .element(GTElements.C)
        .ignoredTagPrefixes([TagPrefix.dustTiny])
    event.create('water_elementia')
        .gem(2, 6000)
        .color(0x3385ff).secondaryColor(0xb3d1ff).iconSet(GTMaterialIconSet.QUARTZ)
        .element(GTElements.C)
        .ignoredTagPrefixes([TagPrefix.dustTiny])

})

GTCEuStartupEvents.materialModification(event =>{
    // GTMaterials.get('prosperity').setFormula('Mg(AlPO4)2(SiO2)')
    // GTMaterials.get('inferium').setFormula('NaAl(SiO2)')
    // GTMaterials.get('prudentium').setFormula('(NaAl(AlPO4)2(SiO2)2)4')
    // GTMaterials.get('tertium').setFormula('(NaAl(AlPO4)2(SiO2)2)16')
    // GTMaterials.get('imperium').setFormula('(NaAl(AlPO4)2(SiO2)2)64')
    // GTMaterials.get('supremium').setFormula('(NaAl(AlPO4)2(SiO2)2)256')
    // GTMaterials.get('insanium').setFormula('(NaAl(AlPO4)2(SiO2)2)1024')
    GTMaterials.get('soularium').setFormula('FeAu?')
    })