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
    event.create('acidic_uranium_matter')
        .gas(new GTFluidBuilder().attribute(GTFluidAttributes.ACID).temperature(317))
        .color(0x264d00)
    event.create('acidic_naquadah_matter')
        .gas(new GTFluidBuilder().attribute(GTFluidAttributes.ACID).temperature(323))
        .color(0x334d00)
    event.create('diluted_uranium_waste')
        .gas()
        .color(0x008000)
    event.create('diluted_naquadah_waste')
        .gas()
        .color(0x00802b)
    
        
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

})

GTCEuStartupEvents.registry('gtceu:material', event =>{
    //
    // GTCEu RM
    //

    event.create('crude_netherite')
        .dust()
        .color(0x261a0d).iconSet(GTMaterialIconSet.ROUGH)
    event.create('acidic_netherite_solution')
        .liquid(new GTFluidBuilder().attribute(GTFluidAttributes.ACID))
        .color(0xcc2900)
        .components('crude_netherite', '3x hydrogen', 'phosphorus', '4x oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create('enriched_netherite')
        .dust()
        .color(0x661a00).iconSet(GTMaterialIconSet.METALLIC)

    event.create('molybdenum_disulfide')
        .dust()
        .color(0x3d3d29).iconSet(GTMaterialIconSet.METALLIC)
        .components('molybdenum', '2x sulfur')
    
    event.create("copper_ii_hydroxide")
        .dust(284)
        .color(0x86bc9d).iconSet(GTMaterialIconSet.SAND)
        .components("1x cupric_oxide", "water")

    event.create("chlorine_dioxide")
        .gas(298)
        .color(0xbea902)
        .components("chlorine", "2x oxygen")

    event.create("iron_iii_phosphate")
        .dust()
        .color(0xcca300).iconSet(GTMaterialIconSet.SAND)
        .components("iron", "phosphate")

    event.create("silver_nitrate")
        .dust()
        .color(0xf2f2ff).iconSet(GTMaterialIconSet.SAND)
        .components("silver", "nitrogen_dioxide", "oxygen")
    event.create("silver_nitrate_solution")
        .liquid()
        .color(0xc8e7ff)
        .components("silver_nitrate", "water")
    event.create("silver_chloride")
        .dust()
        .color(0xf0f3f5)
        .components("silver", "chlorine")
    event.create("silver_phosphate")
        .dust()
        .color(0xffff1a).iconSet(GTMaterialIconSet.SAND)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("3x silver", "phosphate")

    event.create("aluminium_hydroxide")
        .dust()
        .color(0xe6e6ff).iconSet(GTMaterialIconSet.SAND)
    event.create("alumina")
        .dust()
        .color(0xe6ffff).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("2x aluminium", "3x oxygen")

    event.create("iron_ii_tungstate_trisphosphate")
        .dust()
        .color(0x381e03).iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("iron", "tungsten", "4x oxygen", "3x phosphate")
    event.create("iron_ii_tungstate_bisphosphate")
        .dust()
        .color(0x3d2205).iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("iron", "tungsten", "4x oxygen", "2x phosphate")
    event.create("iron_ii_tungstate_phosphate")
        .dust()
        .color(0x422508).iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("iron", "tungsten", "4x oxygen", "phosphate")


})