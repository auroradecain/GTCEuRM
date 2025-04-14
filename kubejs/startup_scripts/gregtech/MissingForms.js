
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

    // might need to add Builder.of()
    //GTMaterials.get('insanium').setProperty(new $ToolProperty(19.0, 13.0, 4096, 4, [sword, pick, axe, shovel, hoe, mining_hammer, spade, scythe, ev_drill]).enchantability(23).build())
    //GTMaterials.get('awakened_supremium').setProperty(new $ToolProperty(27.0, 18.0, 4608, 5, [sword, pick, axe, shovel, hoe, mining_hammer, spade, scythe, iv_drill]).unbreakable().enchantability(31).build())

})