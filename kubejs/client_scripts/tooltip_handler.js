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
    })

    // Custom materials
    tooltip.add('gtceu:viadium_ingot', Text.of('This time the faggot crushed').color(0xe2bbfd))
    tooltip.add('gtceu:sapatanium_ingot', Text.of('Big shoe crazy, Lord!').color(0xffdfba))
    tooltip.add('gtceu:fechantium_ingot', Text.of('The close...').color(0xbae1ff))
    tooltip.add('gtceu:yottrium_ingot', Text.of('And another').color(0xbaffc9))
    tooltip.add('gtceu:denisium_ingot', Text.of('Nobody called you!').color(0x1b85b8))
})