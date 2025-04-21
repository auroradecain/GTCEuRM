ServerEvents.recipes(event=>{

    // Disable EnderIO machinery
    event.remove({ id: "enderio:primitive_alloy_smelter" })
    event.remove({ id: "enderio:alloy_smelter" })
    event.remove({ id: "enderio:sag_mill" })
    event.remove({ id: "enderio:stirling_generator" })

    // Capacitors
    event.remove({ output: "enderio:basic_capacitor" })

    const capacitorCores = [
        ["#gtceu:circuits/ulv", 1],
        ["gtceu:capacitor", 2],
        ["gtceu:smd_capacitor", 3],
        ["gtceu:advanced_smd_capacitor", 3 * 4],
    ]

    capacitorCores.forEach(core => {
        event.shaped(`${core[1]}x enderio:basic_capacitor`, [
            " N ",
            "NCN",
            "W W"
        ], {
            N: "#forge:ingots/electrical_steel",
            C: core[0],
            W: "gtceu:tin_single_wire"
        }).id(`kubejs:basic_capacitor_${Item.of(core[0]).idLocation.path}`)
    })
    

    // Fused Quartz
    event.recipes.gtceu.alloy_smelter("kubejs:fused_quartz")
        .itemInputs("3x minecraft:quartz")
        .notConsumable("gtceu:block_casting_mold")
        .itemOutputs("enderio:fused_quartz")
        .duration(80)
        .EUt(16)

    // Clear Glass
    event.recipes.gtceu.alloy_smelter("kubejs:clear_glass_soda_ash")
        .itemInputs("minecraft:glass", "gtceu:tiny_soda_ash_dust")
        .itemOutputs("enderio:clear_glass")
        .duration(80)
        .EUt(16)
    event.recipes.gtceu.alloy_smelter("kubejs:clear_glass_quicklime")
        .itemInputs("minecraft:glass", "gtceu:tiny_quicklime_dust")
        .itemOutputs("enderio:clear_glass")
        .duration(80)
        .EUt(16)

    // Enlightened fused quartz
    event.recipes.gtceu.alloy_smelter("kubejs:enlightened_fused_quartz")
        .itemInputs("#enderio:fused_quartz", "minecraft:glowstone")
        .itemOutputs("enderio:fused_quartz_e")
        .duration(160)
        .EUt(16)

    // dark fused quartz
    event.recipes.gtceu.alloy_smelter("kubejs:dark_fused_quartz")
        .itemInputs("#enderio:fused_quartz", "gtceu:black_quartz_gem")
        .itemOutputs("enderio:fused_quartz_d")
        .duration(200)
        .EUt(30)

    // Enlightened clear glass
    event.recipes.gtceu.alloy_smelter("kubejs:enlightened_clear_glass")
        .itemInputs("#enderio:clear_glass", "minecraft:glowstone")
        .itemOutputs("enderio:clear_glass_e")
        .duration(160)
        .EUt(16)

    // dark clear glass
    event.recipes.gtceu.alloy_smelter("kubejs:dark_clear_glass")
        .itemInputs("#enderio:clear_glass", "gtceu:black_quartz_gem")
        .itemOutputs("enderio:clear_glass_d")
        .duration(200)
        .EUt(30)

    // Glider Wing
    event.replaceInput({ id: "enderio:glider_wing" }, "#forge:ingots/dark_steel", "#forge:nuggets/dark_steel")

    // Staff of Traveling
    event.replaceInput({ id: "enderio:staff_of_travelling" }, "#forge:ingots/dark_steel", "#forge:rods/dark_steel")
    event.replaceInput({ id: "enderio:staff_of_travelling" }, "enderio:ender_crystal", "enderio:pulsating_crystal")

    // Travel Anchor
    event.replaceInput({ id: "enderio:travel_anchor" }, "enderio:conduit_binder", "#forge:plates/vibrant_alloy")
    event.replaceInput({ id: "enderio:travel_anchor" }, "iron_ingot", "#forge:plates/dark_steel")
    
    // Clear tanks
    event.shapeless("enderio:fluid_tank", ["enderio:fluid_tank"])
    event.shapeless("enderio:pressurized_fluid_tank", ["enderio:pressurized_fluid_tank"])

    // Material section

    // Material remove & replace
    event.remove({id:/enderio:copper_alloy.*/})
    event.replaceInput({mod: 'enderio'}, 'enderio:copper_alloy_ingot', 'gtceu:pulsating_iron_ingot')
    event.replaceInput({mod: 'enderio'}, 'enderio:redstone_alloy_ingot', 'gtceu:red_alloy_ingot')
    
    // Electrical Steel
    event.remove({id:'enderio:grindingball/copper_alloy_grinding_ball'})
    event.remove({id:'enderio:alloy_smelting/copper_alloy_ingot'})
    event.recipes.gtceu.alloy_smelter('electrical_steel_from_dust')
        .itemInputs('#forge:dusts/steel', 'gtceu:silicon_dust')
        .itemOutputs('2x gtceu:electrical_steel_ingot')
        .duration(140)
        .EUt(7)
    event.recipes.gtceu.alloy_smelter('electrical_steel_from_ingot')
        .itemInputs('#forge:ingots/steel', 'gtceu:silicon_dust')
        .itemOutputs('2x gtceu:electrical_steel_ingot')
        .duration(140)
        .EUt(7)
    // Pulsating Alloy
    event.remove({id:'enderio:alloy_smelting/pulsating_alloy_ingot'})
    event.recipes.gtceu.alloy_smelter('pulsating_alloy_from_dust')
        .itemInputs('#forge:dusts/iron', 'minecraft:ender_pearl')
        .itemOutputs('gtceu:pulsating_alloy_ingot')
        .duration(140)
        .EUt(7)
    event.recipes.gtceu.alloy_smelter('pulsating_alloy_from_ingot')
        .itemInputs('minecraft:iron_ingot', 'minecraft:ender_pearl')
        .itemOutputs('gtceu:pulsating_alloy_ingot')
        .duration(140)
        .EUt(7)
    // Dark Steel
    event.remove({id:'enderio:alloy_smelting/dark_steel_ingot'})
    event.recipes.gtceu.alloy_smelter('dark_steel_from_dust')
        .itemInputs('#forge:dusts/iron', '#forge:obsidian')
        .itemOutputs('2x gtceu:dark_steel_ingot')
        .duration(240)
        .EUt(7)
    event.recipes.gtceu.alloy_smelter('dark_steel_from_ingot')
        .itemInputs('minecraft:iron_ingot', '#forge:obsidian')
        .itemOutputs('2x gtceu:dark_steel_ingot')
        .duration(240)
        .EUt(7)
    // Soularium
    event.remove({id:'enderio:alloy_smelting/soularium_ingot'})
    event.recipes.gtceu.alloy_smelter('soularium_from_dust')
        .itemInputs('#minecraft:soul_fire_base_blocks', '#forge:dusts/gold')
        .itemOutputs('gtceu:soularium_ingot')
        .duration(210)
        .EUt(24)
    event.recipes.gtceu.alloy_smelter('soularium_from_ingot')
        .itemInputs('#minecraft:soul_fire_base_blocks', 'minecraft:gold_ingot')
        .itemOutputs('gtceu:soularium_ingot')
        .duration(210)
        .EUt(24)
    // Conductive Alloy
    event.remove({id:'enderio:alloy_smelting/conductive_alloy_ingot'})
    event.recipes.gtceu.alloy_smelter('conductive_alloy_from_dust')
        .itemInputs('minecraft:iron_ingot', '#forge:dusts/redstone')
        .itemOutputs('gtceu:conductive_alloy_ingot')
        .duration(170)
        .EUt(7)
    event.recipes.gtceu.alloy_smelter('conductive_alloy_from_ingot')
        .itemInputs('minecraft:iron_ingot', '#forge:dusts/redstone')
        .itemOutputs('gtceu:conductive_alloy_ingot')
        .duration(170)
        .EUt(7)

    // Energetic Alloy
    event.remove({id:'enderio:alloy_smelting/energetic_alloy_ingot'})
    event.recipes.gtceu.mixer('energetic_alloy_dust')
        .itemInputs('2x #forge:dusts/gold', '#forge:dusts/redstone', '#forge:dusts/glowstone')
        .itemOutputs('4x gtceu:energetic_alloy_dust')
        .duration(264)
        .EUt(120)
        .circuit(3)
    // Vibrant Alloy
    event.remove({id:'enderio:alloy_smelting/vibrant_alloy_ingot'})
    event.recipes.gtceu.mixer('vibrant_alloy_dust')
        .itemInputs('gtceu:energetic_alloy_dust', '#forge:dusts/ender_pearl')
        .itemOutputs('2x gtceu:vibrant_alloy_dust')
        .duration(234)
        .EUt(120)
        .circuit(1)
    // End Steel
    event.remove({id:'enderio:alloy_smelting/end_steel_ingot'})
    event.recipes.gtceu.mixer('end_steel_dust')
        .itemInputs('#forge:dusts/dark_steel', '#forge:dusts/endstone', '#forge:dusts/vibrant_alloy')
        .itemOutputs('3x gtceu:end_steel_dust')
        .duration(216)
        .EUt(480)
        .circuit(1)
})