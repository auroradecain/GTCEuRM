ItemEvents.tooltip(tooltip => {
	// Custom conduits	
	tooltip.add('enderio:viadium_conduit', Text.translatable('Transfer rate: 512 RF/t'))
	tooltip.add('enderio:sapatanium_conduit', Text.translatable('Transfer rate: 2048 RF/t'))
    tooltip.add('enderio:fechantium_conduit', Text.translatable('Transfer rate: 8192 RF/t'))
    tooltip.add('enderio:yottrium_conduit', Text.translatable('Transfer rate: 32768 RF/t'))
    tooltip.add('enderio:denisium_conduit', Text.translatable('Transfer rate: 131072 RF/t'))

    // Custom materials
    tooltip.add('gtceu:viadium_ingot', Text.of('This time the faggot crushed').color(0xe2bbfd))
    tooltip.add('gtceu:sapatanium_ingot', Text.of('Big shoe crazy, Lord!').color(0xffdfba))
    tooltip.add('gtceu:fechantium_ingot', Text.of('The close...').color(0xbae1ff))
    tooltip.add('gtceu:yottrium_ingot', Text.of('And another').color(0xbaffc9))
    tooltip.add('gtceu:denisium_ingot', Text.of('Nobody called you!').color(0x1b85b8))
})