GTCEuStartupEvents.registry("gtceu:material", event=>{
    event.create("prosperity")
        .ingot()
        .ore(2, 1)
        .addOreByproducts('magnesium')
        .color(0xddfbfa).iconSet('metallic')
        .components("silicon", "3x oxygen", "magnesium")

    event.create("solium")
        .dust()
        .color(0x5a3a2d)
        .components("copper", "3x hydrogen", "5x sulfur_dioxide")

    event.create("soularium")
        .ingot().fluid()
        .color(0x7f6f55).secondaryColor(0x83715c).iconSet("dull")
        .components("solium", "prosperity")
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)

    event.create("inferium")
        .ingot().fluid()
        .ore(2, 3)
        .color(0x758d01).iconSet("metallic")
        .components("sodium", "aluminium", "silicon", "3x oxygen")
        .toolStats(new ToolProperty(2.5, 2.3, 512, 2, []))
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR)

    function mysticalIngot(i, p, clr, a, b, c, d){
        event.create(`${i}`)
            .ingot().fluid()
            .color(clr).iconSet("metallic")
            .components(`4x ${p}`)
            .toolStats(new ToolProperty(a, b, c, d, []))
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR);
    }

    mysticalIngot('prudentium', 'inferium', 0x008623, 3.2, 3.0, 768, 2);
    mysticalIngot('tertium', 'prudentium', 0xb34b02, 4.0, 3.5, 1024, 3);
    mysticalIngot('imperium', 'tertium', 0x0380da, 4.5, 3.8, 1320, 3);
    mysticalIngot('supremium', 'imperium', 0xcb0000, 5.2, 4.5, 1536, 4);
    
    event.create("awakened_supremium")
        .ingot().fluid()
        .color(0xff3333).iconSet("radioactive")
        .components("supremium")
        .toolStats(new ToolProperty(6.1, 5.6, 2048, 4, []))
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("insanium")
        .dust().fluid()
        .color(0x560484).iconSet("metallic")
        .components("4x supremium")
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
})

GTCEuStartupEvents.materialModification(event =>{
    GTMaterials.get('prosperity').setFormula('Mg(SiO3)')
    GTMaterials.get('inferium').setFormula('NaAl(SiO3)')
    GTMaterials.get('prudentium').setFormula('(NaAl(SiO3))4')
    GTMaterials.get('tertium').setFormula('(NaAl(SiO3))16')
    GTMaterials.get('imperium').setFormula('(NaAl(SiO3))64')
    GTMaterials.get('supremium').setFormula('(NaAl(SiO3))256')
    GTMaterials.get('awakened_supremium').setFormula('(NaAl(SiO3))256?')
    GTMaterials.get('insanium').setFormula('(NaAl(SiO3))1024')
    GTMaterials.get('solium').setFormula('Cu(SO2)5H3')
    GTMaterials.get('soularium').setFormula('CuMg(SO2)5(SiO3)H3')
})