ServerEvents.recipes(event =>{
    
    // Tier 0
    event.remove({id: 'solarflux:mirror'})
    event.shaped('3x solarflux:mirror', [
        'AAA',
        'BBB',
        '   '
    ], {
        A: '#forge:glass',
        B: '#forge:plates/iron'
    }).id('kubejs:solar/components/1')
    
    event.recipes.gtceu.assembler('kubejs:solar/components/1_fine_assembling')
        .itemInputs('gtceu:wrought_iron_plate', '#forge:glass')
        .itemOutputs('2x solarflux:mirror')
        .duration(80)
        .EUt(2)
    
    // Tier 1
    event.recipes.gtceu.autoclave('kubejs:solar/components/2')
        .itemInputs('3x gtceu:lapis_plate', '3x solarflux:mirror')
        .inputFluids('gtceu:glass 72')
        .itemOutputs('3x solarflux:photovoltaic_cell_1')
        .duration(80)
        .EUt(24)

    event.shaped('2x solarflux:sp_1',[
        'AAA',
        'CCC',
        'BBB'
    ],{
        A: 'solarflux:mirror',
        B: 'gtceu:wood_plate',
        C: 'gtceu:red_alloy_single_cable'
    })

    event.recipes.gtceu.assembler('kubejs:solar_panel/sp_1_fine_assembling')
        .itemInputs('3x solarflux:mirror', '8x gtceu:fine_red_alloy_wire', '2x gtceu:wood_plate')
        .inputFluids('gtceu:tin 36')
        .itemOutputs('2x solarflux:sp_1')
        .duration(36)
        .EUt(7)

    // T2-T6

    let solarCrafting = [
        ["gtceu:tin_single_cable", "minecraft:redstone_block", "gtceu:cupronickel_plate", "gtceu:small_steel_gear"],
        ["gtceu:electrical_steel_plate", "gtceu:conductive_alloy_block", "gtceu:electrical_steel_gear", "gtceu:conductive_alloy_gear"],
        ["gtceu:dark_steel_plate", "gtceu:vibrant_alloy_block", "gtceu:dark_steel_gear", "gtceu:vibrant_alloy_gear"],
        ["gtceu:stainless_steel_plate", "gtceu:end_steel_block", "gtceu:small_stainless_steel_gear", "gtceu:end_steel_gear"],
        ["gtceu:titanium_ingot", "gtceu:fechantium_block", "gtceu:small_titanium_gear", "gtceu:fechantium_gear"]
    ]

    solarCrafting.forEach((ingredients, index) => {
        // Account for the first recipe, which doesn't use a photovoltaic cell
        let photovoltaic = index == 0 ?
            "gtceu:tempered_glass"
            : `solarflux:photovoltaic_cell_${index}`
        event.shaped(`2x solarflux:sp_${index + 2}`, [
            "SCS",
            "WBW",
            "PEP"
        ], {
            S: `solarflux:sp_${index + 1}`,
            C: photovoltaic,
            W: ingredients[0],
            B: ingredients[1],
            P: ingredients[2],
            E: ingredients[3]
        })
        // Account for when the same ingredients are used twice
        let assemblerInputs;
        if (ingredients[0] == ingredients[2]) {
            assemblerInputs = [
                `2x solarflux:sp_${index + 1}`,
                Item.of(photovoltaic, 1),
                Item.of(ingredients[0], 4),
                Item.of(ingredients[1], 1),
                Item.of(ingredients[3], 1)
            ]
        } else {
            assemblerInputs = [
                `2x solarflux:sp_${index + 1}`,
                Item.of(photovoltaic, 1),
                Item.of(ingredients[0], 2),
                Item.of(ingredients[1], 1),
                Item.of(ingredients[2], 2),
                Item.of(ingredients[3], 1)
            ]
        }
        event.recipes.gtceu.assembler(`sp_${index + 2}`)
            .itemInputs(assemblerInputs)
            .itemOutputs(`2x solarflux:sp_${index + 2}`)
            .duration(600)
            .EUt(7)

            // .EUt(GTValues.VA[index])
    })

    // T7
    event.recipes.gtceu.assembler("sp_7")
        .itemInputs("2x solarflux:sp_6", "3x solarflux:photovoltaic_cell_5", "2x gtceu:osmium_plate", "gtceu:hv_field_generator")
        .inputFluids("gtceu:supremium 1296")
        .itemOutputs("2x solarflux:sp_7")
        .duration(2400)
        .EUt(GTValues.VA[GTValues.IV])

    // T8
    event.recipes.gtceu.assembly_line("sp_8")
        .itemInputs("2x solarflux:sp_7", "3x solarflux:photovoltaic_cell_6", "2x gtceu:osmiridium_plate", "gtceu:ev_field_generator")
        .inputFluids("gtceu:insanium 1296")
        .itemOutputs("2x solarflux:sp_8")
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack("solarflux:sp_7").EUt(480).duration(1200))
        .duration(4800)
        .EUt(30720)


    let cellCrafting = [
        [2, "enderio:photovoltaic_plate", "gtceu:battery_alloy_plate"],
        [3, "minecraft:ender_pearl", "gtceu:annealed_copper_plate"],
        [4, "gtceu:light_blue_glass_lens", "gtceu:energetic_alloy_plate"],
        [5, "gtceu:lime_glass_lens", "gtceu:vibrant_alloy_plate"],
        [6, "gtceu:green_glass_lens", "gtceu:end_steel_plate"]
    ]

    cellCrafting.forEach(cell => {
        event.shaped(`6x solarflux:photovoltaic_cell_${cell[0]}`, [
            "TTT",
            "PPP",
            "BBB"
        ], {
            T: cell[1],
            P: `solarflux:photovoltaic_cell_${cell[0] - 1}`,
            B: cell[2]
        })
    })
        
})