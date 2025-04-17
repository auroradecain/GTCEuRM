
const $PropertyKey = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey");
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty')
const $ToolProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty');

GTCEuStartupEvents.materialModification(event=>{
    
    // All tool types
    const sword = GTToolType.SWORD;
    const pick = GTToolType.PICKAXE;
    const shovel = GTToolType.SHOVEL;
    const axe = GTToolType.AXE;
    const hoe = GTToolType.HOE;
    const mining_hammer = GTToolType.MINING_HAMMER;
    const spade = GTToolType.SPADE;
    const saw = GTToolType.SAW;
    const hammer = GTToolType.HARD_HAMMER;
    const soft = GTToolType.SOFT_MALLET;
    const wrench = GTToolType.WRENCH;
    const file = GTToolType.FILE;
    const crowbar = GTToolType.CROWBAR;
    const screwdriver = GTToolType.SCREWDRIVER;
    const mortar = GTToolType.MORTAR;
    const cutter = GTToolType.WIRE_CUTTER;
    const scythe = GTToolType.SCYTHE;
    const knife = GTToolType.KNIFE;
    const butcher = GTToolType.BUTCHERY_KNIFE;
    const plunger = GTToolType.PLUNGER;
    const lv_drill = GTToolType.DRILL_LV;
    const mv_drill = GTToolType.DRILL_MV;
    const hv_drill = GTToolType.DRILL_HV;
    const ev_drill = GTToolType.DRILL_EV;
    const iv_drill = GTToolType.DRILL_IV;
    const lv_chainsaw = GTToolType.CHAINSAW_LV;
    const lv_wrench = GTToolType.WRENCH_LV;
    const hv_wrench = GTToolType.WRENCH_HV;
    const iv_wrench = GTToolType.WRENCH_IV;
    const buzzsaw = GTToolType.BUZZSAW;
    const lv_screwdriver = GTToolType.SCREWDRIVER_LV;
    const lv_cutter = GTToolType.WIRE_CUTTER_LV;
    const hv_cutter = GTToolType.WIRE_CUTTER_HV;
    const iv_cutter = GTToolType.WIRE_CUTTER_IV;
    
    //GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.AXE, GTToolType.SHOVEL, GTToolType.HOE, GTToolType.MINING_HAMMER,GTToolType.SPADE, GTToolType.SCYTHE, e
 
    const mysticalTools = [
        ["inferium", [3.0, 2.5, 384, 2], [sword, pick, axe, shovel, hoe, mining_hammer, spade, scythe, lv_drill]],
        ["prudentium", [5.0,  3.5,  1024, 2], [sword, pick, axe, shovel, hoe, mining_hammer, spade, scythe, mv_drill]],
        ["tertium", [8.0,  5.5, 1920, 3], [sword, pick, axe, shovel, hoe, mining_hammer, spade, scythe, mv_drill]],
        ["imperium", [10.0,  8.0, 2304, 3], [sword, pick, axe, shovel, hoe, mining_hammer, spade, scythe, hv_drill]],
        ["supremium", [14.0, 10.5, 3072, 4], [sword, pick, axe, shovel, hoe, mining_hammer, spade, scythe, ev_drill]]
    ]

    for(const [id, props, types] of mysticalTools){
        GTMaterials.get(`${id}`).setProperty($PropertyKey.TOOL, new $ToolProperty(props[0], props[1],props[2],props[3], types))
    }

    GTMaterials.Zirconium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Zirconium.setMaterialARGB(0xe8e8e8)
    GTMaterials.Zirconium.addFlags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW)

    // GTMaterials.Glowstone.setComponents('1x tricalcium_phosphate', '1x gold')
    // GTMaterials.Glowstone.setFormula('AuCa3(PO4)2', true)


    // Gears for Thermal Expansion
    GTMaterials.Copper.addFlags(GTMaterialFlags.GENERATE_GEAR)

    // Fixes incorrect formulae

    // GTCEu RM
    GTMaterials.get('copper_ii_hydroxide').setFormula('Cu(OH)2')

    // Arcoirium
    GTMaterials.get('gabro').setFormula('MgFe2Al3(SiO2)(Vd2O3(OH)2)')
    GTMaterials.get('vidium').setFormula('Vd2O3(OH)2')
    GTMaterials.get('dioptase').setFormula('CuSiO2(OH)2')
    GTMaterials.get('torbenite').setFormula('Cu(UO2)2(PO4)2O5H4')
    
    GTMaterials.get('yottrium').setFormula('Mo2FcPt2S')
    GTMaterials.get('denisium').setFormula('U2(Mo2FcPt2S)WO3')
    GTMaterials.get('trevinite').setFormula('Li2(AvO3)O')

    // Enderio Materials
    GTMaterials.get('energetic_alloy').setFormula("Au2(Si(FeS2)5(CrAl2O3)Hg3)(AuCa3(PO4)2)")
    GTMaterials.get('vibrant_alloy').setFormula("Au2(Si(FeS2)5(CrAl2O3)Hg3)(AuCa3(PO4)2)(BeK4N5)")
    GTMaterials.get('end_steel').setFormula("Fe(SiO2)(Au2(Si(FeS2)5(CrAl2O3)Hg3)(AuCa3(PO4)2)(BeK4N5))")
})