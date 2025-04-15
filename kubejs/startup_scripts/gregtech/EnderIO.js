/**
 * 
 * OP from Nomifactory repo on Github, changed to; still couldn't figure out how to make tools work without loadClass
 * 
 */

GTCEuStartupEvents.registry("gtceu:material", event => {

    // Dark Steel
    event.create("dark_steel")
        .ingot().fluid()
        .color(0x414751).iconSet("dull")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("iron", "obsidian")

    // Conductive Iron
    event.create("conductive_alloy")
        .ingot().fluid()
        .color(0xf7b29b).iconSet("metallic")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .components("iron", "redstone")
        .cableProperties(32, 1, 0, true)

    // Energetic Alloy
    event.create("energetic_alloy")
        .ingot().fluid()
        .color(0xffb545).iconSet("shiny")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .blastTemp(1250, "low", 120, 400)
        .components("2x gold", "redstone", "glowstone")
        .cableProperties(128, 1, 0, true)

    // Vibrant Alloy
    event.create("vibrant_alloy")
        .ingot().fluid()
        .color(0xa4ff70).iconSet("shiny")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW)
        .blastTemp(1350, "low", 120, 400)
        .components("energetic_alloy", "ender_pearl")
        .cableProperties(512, 1, 0, true)

    // Pulsating Alloy
    event.create("pulsating_alloy")
        .ingot().fluid()
        .color(0x2AB38F).iconSet("shiny")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .components("iron", "ender_pearl")
        .cableProperties(8, 1, 0, true)

    // Electrical Steel
    event.create("electrical_steel")
        .ingot().fluid()
        .color(0xb2c0c1).iconSet("metallic")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .components("steel", "silicon")

    // Soularium
    event.create("soularium")
        .ingot().fluid()
        .color(0x7c674d).iconSet("metallic")
        .components("gold")
        .flags(GTMaterialFlags.GENERATE_PLATE)

    // End Steel
    event.create("end_steel")
        .ingot().fluid()
        .color(0xd6d980).iconSet("metallic")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .blastTemp(3600, "mid", 480, 900)
        .toolStats(new ToolProperty(4.0, 3.5, 1024, 3, [
            GTToolType.SWORD,
            GTToolType.PICKAXE,
            GTToolType.SHOVEL,
            GTToolType.AXE,
            GTToolType.HOE,
            GTToolType.MINING_HAMMER,
            GTToolType.SPADE,
            GTToolType.SAW,
            GTToolType.HARD_HAMMER,
            GTToolType.WRENCH,
            GTToolType.FILE,
            GTToolType.CROWBAR,
            GTToolType.SCREWDRIVER,
            GTToolType.WIRE_CUTTER,
            GTToolType.SCYTHE,
            GTToolType.KNIFE,
            GTToolType.BUTCHERY_KNIFE,
            GTToolType.DRILL_EV,
            GTToolType.CHAINSAW_LV,
            GTToolType.WRENCH_HV,
            GTToolType.BUZZSAW,
            GTToolType.SCREWDRIVER_LV,
            GTToolType.WIRE_CUTTER_LV
        ]))
        .cableProperties(2048, 1, 0, true)
        .components("dark_steel", "endstone", "vibrant_alloy")

    // Dark Soularium
    event.create("dark_soularium")
        .ingot()
        .color(0x7c674d).iconSet("metallic")
        .components("soularium", "dark_steel", "tritium")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.DISABLE_DECOMPOSITION)
})

// Formulae fix moved to "MissingForms.js"