GTCEuStartupEvents.registry('gtceu:material', event =>{
    event.create("ballistic_steel")
        .ingot()
        .color(0x8080ff).secondaryColor(0x303030).iconSet('metallic')
        .components('2x bronze', 'nickel', '2x chromium', '3x steel')
        .flags(GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_SPRING_SMALL, GTMaterialFlags.GENERATE_ROUND)


})