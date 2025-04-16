GTCEuStartupEvents.registry('gtceu:material', event=>{
    
    //
    // Mystical Chemicals
    //

    // Superelemental line
    event.create('gaia_oceanus_superelemental_solution')
        .liquid(184)
        .color(0xb5e8ab).secondaryColor(0xdcfff0)
    event.create('prometheus_ouranos_superelemental_solution')
        .liquid(2386)
        .color(0xffb8a1).secondaryColor(0xffe6ac)

    // Elemental solutions
    event.create('air_elemental_solution')
        .liquid(1433).plasma()
        .color(0xffffb3)
    event.create('fire_elemental_solution')
        .liquid(1647).plasma()
        .color(0xff9999)
    event.create('earth_elemental_solution')
        .liquid(1277).plasma()
        .color(0xe6ffe6)
    event.create('water_elemental_solution')
        .liquid(1099).plasma()
        .color(0xb3ffff)

    // Elemental Slurry
    event.create('air_elemental_slurry')
        .fluid()
        .color(0xb2995a)
    event.create('fire_elemental_slurry')
        .fluid()
        .color(0xb2664c)
    event.create('earth_elemental_slurry')
        .fluid()
        .color(0xaca37f)
    event.create('water_elemental_slurry')
        .fluid()
        .color(0x90a38c)

    // Hyperconcentrate line
    event.create('mystical_hyperconcentrate')
        .liquid(300)
        .color(0x944dff).secondaryColor(0x1f004d)
    event.create('inert_elemental_mixture')
        .dust()
        .color(0x332600)

    // Draconic Matter line
    event.create('amniotic_fluid')
        .liquid()
        .color(0xffcccc)
    event.create('replicated_living_dragon_fluid')
        .liquid()
        .color(0x260033)
    event.create('altered_life_source')
        .liquid(297)
        .color(0x6e5d89)
    event.create('unstable_draconic_matter')
        .liquid(2189)
        .color(0x12002f).secondaryColor(0xaaaaaa)
    event.create('draconic_matter')
        .liquid(3364)
        .color(0x140033).secondaryColor(0x000000)
    event.create('strange_matter')
        .liquid(81)
        .color(0xf2e6ff).secondaryColor(0xffffff)
    event.create('strange_uranium_matter')
        .gas(144)
        .color(0x004d1a)
    event.create('strange_naquadah_matter')
        .gas(153)
        .color(0x1a3300)
    
    // Misc output
    event.create('elemental_sludge')
        .dust()
        .color(0xe6ccff).secondaryColor(0x806000)
    
})

GTCEuStartupEvents.registry('gtceu:material', event =>{
    //
    // Arcoirium Chemicals
    //

    event.create("trevinitic_acid")
        .dust()
        .color(0xffff1a)
        .components("2x hydrogen", "avisium", "4x oxygen")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('igneous_mixture')
        .dust()
        .color(0x331400)

    event.create('molybdenum_disulfide')
        .dust()
        .color(0x3d3d29)
        .components('molybdenum', '2x sulfur')
})

GTCEuStartupEvents.registry('gtceu:material', event =>{
    //
    // GTCEu RM
    //

})