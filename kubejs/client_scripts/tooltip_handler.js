ItemEvents.tooltip(tooltip => {
	// Custom conduits	
	tooltip.add('enderio:viadium_conduit', Text.translatable('item.enderio.viadium_conduit.desc'))
	tooltip.add('enderio:sapatanium_conduit', Text.translatable('item.enderio.sapatanium_conduit.desc'))
    tooltip.add('enderio:fechantium_conduit', Text.translatable('item.enderio.fechantium_conduit.desc'))
    tooltip.add('enderio:yottrium_conduit', Text.translatable('item.enderio.yottrium_conduit.desc'))
    tooltip.add('enderio:denisium_conduit', Text.translatable('item.enderio.denisium_conduit.desc'))
    tooltip.add('enderio:avisium_conduit', Text.translatable('item.enderio.avisium_conduit.desc'))

    tooltip.add('enderio:conductive_conduit', Text.translatable('item.enderio.conductive_conduit.desc'))
    tooltip.add('enderio:energetic_conduit', Text.translatable('item.enderio.energetic_conduit.desc'))
    tooltip.add('enderio:vibrant_conduit', Text.translatable('item.enderio.vibrant_conduit.desc'))
    tooltip.add('enderio:endsteel_conduit', Text.translatable('item.enderio.endsteel_conduit.desc'))

    tooltip.addAdvanced('gtceu:elemental_turbine', (item, adv, text)=>{
        text.add(1, Text.translatable('block.gtceu.elemental_turbine.desc1'))
        text.add(2, Text.translatable('block.gtceu.elemental_turbine.desc2'))
        text.add(3, Text.translatable('block.gtceu.elemental_turbine.desc3'))
    })

    tooltip.addAdvanced('gtceu:large_pyrolyse_oven', (item, adv, text)=>{
        text.add(1, Text.translatable('block.gtceu.large_pyrolyse_oven.desc1'))
        text.add(2, Text.translatable('block.gtceu.large_pyrolyse_oven.desc2'))
        text.add(3, Text.translatable('block.gtceu.large_pyrolyse_oven.desc3'))
    })

    tooltip.addAdvanced('gtceu:greenhouse', (item, adv, text)=>{
        text.add(1, Text.translatable('block.gtceu.greenhouse.desc1'))
        text.add(2, Text.translatable('block.gtceu.greenhouse.desc2'))
    })

    tooltip.addAdvanced('gtceu:basic_antenna_controller', (item, adv, text)=>{
        text.add(1, Text.translatable('block.gtceu.basic_antenna_controller.desc1'))
        text.add(2, Text.translatable('block.gtceu.basic_antenna_controller.desc2'))
    })

    tooltip.addAdvanced('gtceu:basic_simulation_unit', (item, adv, text)=>{
        text.add(1, Text.translatable('block.gtceu.basic_simulation_unit.desc1'))
        text.add(2, Text.translatable('block.gtceu.basic_simulation_unit.desc2'))
    })

    tooltip.addAdvanced('gtceu:critical_point_crystal_matrix', (item, adv, text)=>{
        text.add(1, Text.translatable('block.gtceu.critical_point_crystal_matrix.desc1'))
    })

    tooltip.addAdvanced('gtceu:synthetic_lifeform_simulator', (item, adv, text)=>{
        text.add(1, Text.translatable('block.gtceu.synthetic_lifeform_simulator.desc1'))
    })

    tooltip.addAdvanced('gtceu:synthetic_fluid_rig', (item, adv, text)=>{
        text.add(1, Text.translatable('block.gtceu.synthetic_fluid_rig.desc1'))
    })

    tooltip.addAdvanced('gtceu:synthetic_solid_rig', (item, adv, text)=>{
        text.add(1, Text.translatable('block.gtceu.synthetic_solid_rig.desc1'))
    })

    // Custom materials
    tooltip.add('gtceu:viadium_ingot', Text.of('This time the faggot crushed').color(0xe2bbfd))
    tooltip.add('gtceu:sapatanium_ingot', Text.of('Big shoe crazy, Lord!').color(0xffdfba))
    tooltip.add('gtceu:fechantium_ingot', Text.of('The close...').color(0xbae1ff))
    tooltip.add('gtceu:yottrium_ingot', Text.of('And another').color(0xbaffc9))
    tooltip.add('gtceu:denisium_ingot', Text.of('Nobody called you!').color(0x1b85b8))
})