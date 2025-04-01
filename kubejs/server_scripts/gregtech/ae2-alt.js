ServerEvents.recipes(event =>{

    // Materials
    
    event.remove({ id: "ae2:charger/charged_certus_quartz_crystal" })
    event.remove({ id: "ae2:transform/certus_quartz_crystals" })
    event.custom({
        "type": "ae2:charger",
        "ingredient": {
            "item": "gtceu:certus_quartz_gem"
        },
        "result": {
            "item": "gtceu:charged_certus_quartz_gem"
        }
    }).id("kubejs:ae2/charged_certus_quartz_gem")
    
    event.recipes.gtceu.autoclave("charged_autoclave")
        .itemInputs("gtceu:certus_quartz_dust")
        .inputFluids("gtceu:distilled_water 100")
        .itemOutputs("gtceu:charged_certus_quartz_gem")
        .duration(20)
        .EUt(480)
    event.recipes.gtceu.polarizer('gems/charged_certus_quartz')
        .itemInputs('gtceu:certus_quartz_gem')
        .itemOutputs('gtceu:charged_certus_quartz_gem')
        .duration(70)
        .EUt(7)
    
    event.recipes.gtceu.mixer('fluix_gem')
        .itemInputs('#forge:gems/charged_certus_quartz', 'minecraft:redstone', '#forge:gems/nether_quartz')
        .itemOutputs('2x gtceu:fluix_gem')
        .duration(80)
        .EUt(7)
     event.recipes.gtceu.alloy_smelter('sky_steel')
        .itemInputs('#forge:ingots/steel', 'ae2:sky_dust')
        .itemOutputs('gtceu:sky_steel_ingot')
        .duration(120)
        .EUt(7)
    event.recipes.gtceu.alloy_smelter('quartz_glass')
        .itemInputs('2x #forge:dusts/certus_quartz', '#forge:glass')
        .itemOutputs('2x ae2:quartz_glass')
        .duration(90)
        .EUt(7)

    event.recipes.gtceu.cutter('water_fluix_plate')
        .itemInputs('ae2:fluix_block')
        .inputFluids('minecraft:water 6')
        .itemOutputs('4x gtceu:fluix_plate')
        .duration(48)
        .EUt(30)
    event.recipes.gtceu.cutter('dist_fluix_plate')
        .itemInputs('ae2:fluix_block')
        .inputFluids('gtceu:distilled_water 5')
        .itemOutputs('4x gtceu:fluix_plate')
        .duration(36)
        .EUt(30)
    event.recipes.gtceu.cutter('lub_fluix_plate')
        .itemInputs('ae2:fluix_block')
        .inputFluids('gtceu:lubricant 1')
        .itemOutputs('4x gtceu:fluix_plate')
        .duration(24)
        .EUt(30)

    // Circuits
    event.recipes.gtceu.alloy_smelter('gtceu:ae2_diamond_circuit')
        .itemInputs("gtceu:diamond_plate")
        .notConsumable("ae2:engineering_processor_press")
        .itemOutputs("ae2:printed_engineering_processor")
        .duration(170)
        .EUt(24)

    event.recipes.gtceu.alloy_smelter('gtceu:ae2_gold_circuit')
        .itemInputs("gtceu:gold_plate")
        .notConsumable("ae2:logic_processor_press")
        .itemOutputs("ae2:printed_logic_processor")
        .duration(170)
        .EUt(24)

    event.recipes.gtceu.alloy_smelter('gtceu:ae2_certus_quartz_circuit')
        .itemInputs("gtceu:certus_quartz_plate")
        .notConsumable("ae2:calculation_processor_press")
        .itemOutputs("ae2:printed_calculation_processor")
        .duration(170)
        .EUt(24)

    event.recipes.gtceu.alloy_smelter('gtceu:ae2_printed_silicon')
        .itemInputs("ae2:silicon")
        .notConsumable("ae2:silicon_press")
        .itemOutputs("ae2:printed_silicon")
        .duration(130)
        .EUt(7)

    // Circuit Assembler for Soldering Alloy
    const ae2Circuits = [
        "logic_processor",
        "engineering_processor",
        "calculation_processor"
    ]

    ae2Circuits.forEach(circuit =>{
        
        event.recipes.gtceu.circuit_assembler(`ae2/poor/${circuit}`)
            .itemInputs(`ae2:printed_${circuit}`, "ae2:printed_silicon", "4x gtceu:fine_red_alloy_wire", "4x gtceu:annealed_copper_bolt")
            .inputFluids("gtceu:tin 72")
            .itemOutputs(`ae2:${circuit}`)
            .duration(240)
            .EUt(GTValues.VH[GTValues.LV])
        event.recipes.gtceu.circuit_assembler(`ae2/rich/${circuit}`)
            .itemInputs(`ae2:printed_${circuit}`, "ae2:printed_silicon", "4x gtceu:fine_red_alloy_wire", "4x gtceu:annealed_copper_bolt")
            .inputFluids("gtceu:soldering_alloy 36")
            .itemOutputs(`ae2:${circuit}`)
            .duration(135)
            .EUt(GTValues.VH[GTValues.LV])
    })

    // AE2 Network Components

    // ME Controller
    event.remove('ae2:network/blocks/controller')
    event.shaped('ae2:controller', [
        'PCP',
        'EHE',
        'PCP'
    ], {
        P : "gtceu:sky_steel_plate",
        C : "#ae2:glass_cable",
        E : "ae2:engineering_processor",
        H : "gtceu:lv_machine_hull" 
    }).id('kubejs:ae2/controller')
    
    // Energy Acceptor
    event.remove("ae2:network/blocks/energy_energy_acceptor")
    event.shaped(Item.of("ae2:energy_acceptor"), [
        "SFS",
        "FHF",
        "SFS"
    ], {
        S : "gtceu:steel_plate",
        F : "gtceu:fluix_plate",
        H : "gtceu:lv_machine_hull"
    }).id("kubejs:ae2/energy_acceptor")

    // ME Chest
    event.remove({ id: "ae2:network/blocks/storage_chest" })
    event.shaped(Item.of("ae2:chest"), [
        "ABA",
        "CDE",
        "FGF"
    ], {
        A : "ae2:quartz_glass",
        B : "#ae2:illuminated_panel",
        C : "gtceu:certus_quartz_plate",
        D : "gtceu:steel_crate",
        E : "gtceu:fluix_plate",
        F : "gtceu:sky_steel_block",
        G : "gtceu:nether_quartz_plate"
      }).id("kubejs:ae2/chest")

    // Charger
    event.remove({ id: "ae2:network/blocks/crystal_processing_charger" })
    event.shaped(Item.of("ae2:charger"), [
        "PQP",
        "P  ",
        "PQP"
    ], {
        P : "gtceu:steel_plate",
        Q : "gtceu:certus_quartz_plate"
    }).id("kubejs:ae2/charger")

    // Inscriber
    event.remove({ id: "ae2:network/blocks/inscribers" })
    event.shaped(Item.of("ae2:inscriber"), [
        "SPS",
        "FHS",
        "SPS"
    ], {
        S : "gtceu:sky_steel_plate",
        P : "gtceu:lv_electric_piston",
        F : "gtceu:fluix_gem",
        H : "gtceu:mv_machine_hull"
    }).id("kubejs:ae2/inscriber")

    // Patterns
    event.remove({ id: "ae2:network/crafting/patterns_blank" })
    event.shaped(Item.of("ae2:blank_pattern", 8), [
        "WWW",
        "FCF",
        "RRR"
    ], {
        W : "gtceu:fine_silver_wire",
        F : "gtceu:fluix_plate",
        C : "#gtceu:circuits/mv",
        R : "gtceu:rubber_plate",
    }).id("kubejs:ae2/blank_pattern")

    // Pattern Provider
    event.remove({ id: "ae2:network/blocks/pattern_providers_interface" })
    event.shaped("ae2:pattern_provider", [
        "ABA",
        "CDE",
        "AAA"
    ], {
        A: "gtceu:sky_steel_plate",
        B: "gtceu:lv_robot_arm",
        C: "ae2:annihilation_core",
        D: "gtceu:lv_machine_hull",
        E: "ae2:formation_core"
    }).id("kubejs:ae2/pattern_provider")

    // Molecular Assembler
    event.remove({ id: "ae2:network/crafting/molecular_assembler" })
    event.shaped(Item.of("ae2:molecular_assembler"), [
        "ABA",
        "CDE",
        "ABA"
    ], {
        A: "gtceu:sky_steel_plate",
        B: "ae2:quartz_glass",
        C: "ae2:annihilation_core",
        D: "minecraft:crafting_table",
        E: "ae2:formation_core"
    }).id("kubejs:ae2/molecular_assembler")

    // Quantum Ring
    event.remove({ id: "ae2:network/blocks/quantum_ring" })
    event.shaped(Item.of("ae2:quantum_ring"), [
        "SCS",
        "EQE",
        "SCS"
    ], {
        S: "gtceu:stainless_steel_plate",
        C: "ae2:calculation_processor",
        Q: "gtceu:quantum_star",
        E: "ae2:engineering_processor"
    }).id("kubejs:ae2/quantum_ring")

    // Quantum Link Chamber
    event.remove({ id: "ae2:network/blocks/quantum_link" })
    event.shaped(Item.of("ae2:quantum_link"), [
        "GPG",
        "PCP",
        "GPG"
    ], {
        G: "ae2:quartz_glass",
        P: "ae2:fluix_pearl",
        C: "gtceu:certus_quartz_plate"
    }).id("kubejs:ae2/quantum_link")

    // ME Drive
    event.remove('ae2:network/blocks/storage_drive')
    event.shaped('ae2:drive', [
        'KEK',
        'LHL',
        'KEK'
    ],{
        K : "gtceu:sky_steel_plate",
        E : "ae2:engineering_processor",
        L : "ae2:logic_processor",
        H : "gtceu:lv_machine_hull", 
    }).id('kubejs:ae/storage_drive')

    // Interface
    event.remove('ae2:network/blocks/interfaces_interface')
    event.shaped('ae2:interface', [
        'ABA',
        'CDE',
        'AAA'
    ], {
        A : "gtceu:sky_steel_plate",
        B : "gtceu:lv_robot_arm",
        C : "ae2:logic_processor",
        D : "gtceu:lv_machine_hull",
        E : "ae2:engineering_processor"
    }).id('kubejs:ae2/interface')

    // Import Bus
    event.remove('ae2:network/parts/import_bus')
    event.shaped('ae2:import_bus', [
        ' LF',
        ' CF',
        ' LF'
    ],{
        L : "ae2:logic_processor",
        F : "gtceu:fluix_plate",
        C : "ae2:annihilation_core"
    }).id('kubejs:ae2/import_bus')

    // Export Bus
    event.remove('ae2:network/parts/export_bus')
    event.shaped('ae2:export_bus', [
        'FL ',
        'FC ',
        'FL '
    ],{
        F : "gtceu:fluix_plate",
        L : "ae2:logic_processor",
        C : "ae2:formation_core"
    }).id('kubejs:ae2/export_bus')

    // Storage Bus
    event.remove('ae2:network/parts/storage_bus')
    event.shaped('ae2:storage_bus',[
        'ABA',
        'CDE',
        'ABA'
    ],{
        A : "gtceu:sky_steel_plate",
        B : "ae2:quartz_glass",
        C : "ae2:import_bus",
        D : "ae2:interface",
        E : "ae2:export_bus",
    }).id('kubejs:ae2/storage_bus')

    // Requester
    event.remove("merequester:requester")
    event.shaped("merequester:requester", [
        "ABA",
        "CDC",
        "AAA"
    ], {
        A: "gtceu:aluminium_plate",
        B: "gtceu:mv_robot_arm",
        C: "#gtceu:circuits/mv",
        D: "gtceu:mv_machine_hull"
    }).id("kubejs:ae2/requster")




    // Cables
    event.recipes.gtceu.wiremill("kubejs:ae2/quartz_fiber")
        .itemInputs("gtceu:certus_quartz_gem")
        .itemOutputs("ae2:quartz_fiber")
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter("kubejs:ae2/fluix_cable")
        .itemInputs(["gtceu:fluix_dust", "ae2:quartz_fiber"])
        .itemOutputs("2x ae2:fluix_glass_cable")
        .duration(50)
        .EUt(16)

    // Skystone
    event.recipes.gtceu.macerator("sky_stone_dust")
        .itemInputs("ae2:sky_stone_block")
        .itemOutputs("ae2:sky_dust")
        .duration(120)
        .EUt(GTValues.VA[GTValues.ULV])

    // Cable Recipes
    event.remove({ id: "ae2:network/cables/covered_fluix" })
    event.shapeless("ae2:fluix_smart_cable", [
        "ae2:fluix_covered_cable", "#forge:small_dusts/redstone", "#forge:small_dusts/glowstone"
    ]).id("ae2:network/cables/smart_fluix")

    event.recipes.gtceu.assembler("kubejs:ae2/fluix_covered_cable_rubber")
        .itemInputs("#ae2:glass_cable")
        .inputFluids("gtceu:rubber 144")
        .itemOutputs("ae2:fluix_covered_cable")
        .duration(100)
        .EUt(7)
    event.recipes.gtceu.assembler("kubejs:ae2/fluix_covered_cable_silicone")
        .itemInputs("#ae2:glass_cable")
        .inputFluids("gtceu:silicone_rubber 72")
        .itemOutputs("ae2:fluix_covered_cable")
        .duration(100)
        .EUt(7)
    event.recipes.gtceu.assembler("kubejs:ae2/fluix_covered_cable_styrene_butadiene")
        .itemInputs("#ae2:glass_cable")
        .inputFluids("gtceu:styrene_butadiene_rubber 36")
        .itemOutputs("ae2:fluix_covered_cable")
        .duration(100)
        .EUt(7)

    event.recipes.gtceu.chemical_bath("kubejs:ae2/clean_covered_cable")
        .itemInputs("#ae2:covered_cable")
        .inputFluids("gtceu:chlorine 20")
        .itemOutputs("ae2:fluix_covered_cable")
        .duration(200)
        .EUt(2)
    event.recipes.gtceu.chemical_bath("kubejs:ae2/clean_smart_cable")
        .itemInputs("#ae2:smart_cable")
        .inputFluids("gtceu:chlorine 20")
        .itemOutputs("ae2:fluix_smart_cable")
        .duration(200)
        .EUt(2)

    const colors = ["red", "pink", "black", "white", "light_gray", "gray", "brown", "green", "lime", "cyan", "blue", "light_blue", "yellow", "orange", "magenta", "purple"]

    colors.forEach(color =>{
        event.recipes.gtceu.chemical_bath(`kubejs:ae2/${color}_covered_cable`)
            .itemInputs("ae2:fluix_covered_cable")
            .inputFluids(`gtceu:${color}_dye 18`)
            .itemOutputs(`ae2:${color}_covered_cable`)
            .duration(20)
            .EUt(7)
        event.recipes.gtceu.chemical_bath(`kubejs:ae2/${color}_covered_dense_cable`)
            .itemInputs("ae2:fluix_covered_dense_cable")
            .inputFluids(`gtceu:${color}_dye 18`)
            .itemOutputs(`ae2:${color}_covered_dense_cable`)
            .duration(20)
            .EUt(7)
        event.recipes.gtceu.chemical_bath(`kubejs:ae2/${color}_smart_cable`)
            .itemInputs("ae2:fluix_smart_cable")
            .inputFluids(`gtceu:${color}_dye 18`)
            .itemOutputs(`ae2:${color}_smart_cable`)
            .duration(20)
            .EUt(7)
        event.recipes.gtceu.chemical_bath(`kubejs:ae2/${color}_smart_dense_cable`)
            .itemInputs("ae2:fluix_smart_dense_cable")
            .inputFluids(`gtceu:${color}_dye 18`)
            .itemOutputs(`ae2:${color}_smart_dense_cable`)
            .duration(20)
            .EUt(7)
        event.recipes.gtceu.chemical_bath(`kubejs:ae2/${color}_glass_cable`)
            .itemInputs("ae2:fluix_glass_cable")
            .inputFluids(`gtceu:${color}_dye 18`)
            .itemOutputs(`ae2:${color}_glass_cable`)
            .duration(20)
            .EUt(7)
    
    })

})