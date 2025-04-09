ServerEvents.recipes(event =>{

    // Hydroponic Unit Line
    event.shaped('gtceu:lv_hydroponic_unit',[
        "GPG",
        "DRD",
        "CMC"
    ],{
        G: "#forge:glass",
        P: "gtceu:lv_electric_pump",
        D: "gtceu:steel_gear",
        R: "farmersdelight:rich_soil",
        C: "#gtceu:circuits/lv",
        M: "gtceu:lv_machine_hull"
    }).id('gtceu:shaped/lv_hydroponic_unit')

    event.shaped('gtceu:mv_hydroponic_unit',[
        "GPG",
        "DRD",
        "CMC"
    ],{
        G: "#forge:glass",
        P: "gtceu:mv_electric_pump",
        D: "gtceu:inferium_gear",
        R: "farmersdelight:rich_soil",
        C: "#gtceu:circuits/mv",
        M: "gtceu:mv_machine_hull"
    }).id('gtceu:shaped/mv_hydroponic_unit')

    event.shaped('gtceu:hv_hydroponic_unit',[
        "GPG",
        "DRD",
        "CMC"
    ],{
        G: "gtceu:tempered_glass",
        P: "gtceu:hv_electric_pump",
        D: "gtceu:prudentium_gear",
        R: "farmersdelight:rich_soil",
        C: "#gtceu:circuits/hv",
        M: "gtceu:hv_machine_hull"
    }).id('gtceu:shaped/hv_hydroponic_unit')

    event.shaped('gtceu:ev_hydroponic_unit',[
        "GPG",
        "DRD",
        "CMC"
    ],{
        G: "gtceu:tempered_glass",
        P: "gtceu:ev_electric_pump",
        D: "gtceu:tertium_gear",
        R: "farmersdelight:rich_soil",
        C: "#gtceu:circuits/ev",
        M: "gtceu:ev_machine_hull"
    }).id('gtceu:shaped/ev_hydroponic_unit')

    event.shaped('gtceu:iv_hydroponic_unit',[
        "GPG",
        "DRD",
        "CMC"
    ],{
        G: "gtceu:laminated_glass",
        P: "gtceu:iv_electric_pump",
        D: "gtceu:imperium_gear",
        R: "farmersdelight:rich_soil",
        C: "#gtceu:circuits/iv",
        M: "gtceu:iv_machine_hull"
    }).id('gtceu:shaped/iv_hydroponic_unit')

    event.shaped('gtceu:luv_hydroponic_unit',[
        "GPG",
        "DRD",
        "CMC"
    ],{
        G: "gtceu:laminated_glass",
        P: "gtceu:luv_electric_pump",
        D: "gtceu:supremium_gear",
        R: "farmersdelight:rich_soil",
        C: "#gtceu:circuits/luv",
        M: "gtceu:luv_machine_hull"
    }).id('gtceu:shaped/luv_hydroponic_unit')

    event.shaped('gtceu:zpm_hydroponic_unit',[
        "GPG",
        "DRD",
        "CMC"
    ],{
        G: "gtceu:fusion_glass",
        P: "gtceu:zpm_electric_pump",
        D: "gtceu:insanium_gear",
        R: "farmersdelight:rich_soil",
        C: "#gtceu:circuits/zpm",
        M: "gtceu:zpm_machine_hull"
    }).id('gtceu:shaped/zpm_hydroponic_unit')

    // Agricultural Fabricator
    event.shaped('gtceu:lv_agricultural_fabricator',[
        "MGM",
        "PCP",
        "BAB"
    ],{
        M: "gtceu:lv_electric_motor",
        G: "#forge:glass",
        P: "gtceu:lv_electric_pump",
        C: "gtceu:lv_machine_hull",
        B: "#gtceu:circuits/lv",
        A: "gtceu:tin_single_cable"
    }).id('gtceu:shaped/lv_agricultural_fabricator')

    event.shaped('gtceu:mv_agricultural_fabricator',[
        "MGM",
        "PCP",
        "BAB"
    ],{
        M: "gtceu:mv_electric_motor",
        G: "#forge:glass",
        P: "gtceu:mv_electric_pump",
        C: "gtceu:mv_machine_hull",
        B: "#gtceu:circuits/mv",
        A: "gtceu:copper_double_cable"
    }).id('gtceu:shaped/mv_agricultural_fabricator')

    event.shaped('gtceu:hv_agricultural_fabricator',[
        "MGM",
        "PCP",
        "BAB"
    ],{
        M: "gtceu:hv_electric_motor",
        G: "gtceu:tempered_glass",
        P: "gtceu:hv_electric_pump",
        C: "gtceu:hv_machine_hull",
        B: "#gtceu:circuits/hv",
        A: "gtceu:silver_double_cable"
    }).id('gtceu:shaped/hv_agricultural_fabricator')

    event.shaped('gtceu:ev_agricultural_fabricator',[
        "MGM",
        "PCP",
        "BAB"
    ],{
        M: "gtceu:ev_electric_motor",
        G: "gtceu:tempered_glass",
        P: "gtceu:ev_electric_pump",
        C: "gtceu:ev_machine_hull",
        B: "#gtceu:circuits/ev",
        A: "gtceu:aluminium_double_cable"
    }).id('gtceu:shaped/ev_agricultural_fabricator')

    event.shaped('gtceu:iv_agricultural_fabricator',[
        "MGM",
        "PCP",
        "BAB"
    ],{
        M: "gtceu:iv_electric_motor",
        G: "gtceu:laminated_glass",
        P: "gtceu:iv_electric_pump",
        C: "gtceu:iv_machine_hull",
        B: "#gtceu:circuits/iv",
        A: "gtceu:platinum_quadruple_cable"
    }).id('gtceu:shaped/iv_agricultural_fabricator')

    event.shaped('gtceu:luv_agricultural_fabricator',[
        "MGM",
        "PCP",
        "BAB"
    ],{
        M: "gtceu:luv_electric_motor",
        G: "gtceu:laminated_glass",
        P: "gtceu:luv_electric_pump",
        C: "gtceu:luv_machine_hull",
        B: "#gtceu:circuits/luv",
        A: "gtceu:niobium_titanium_quadruple_cable"
    }).id('gtceu:shaped/luv_agricultural_fabricator')

    event.shaped('gtceu:zpm_agricultural_fabricator',[
        "MGM",
        "PCP",
        "BAB"
    ],{
        M: "gtceu:zpm_electric_motor",
        G: "gtceu:fusion_glass",
        P: "gtceu:zpm_electric_pump",
        C: "gtceu:zpm_machine_hull",
        B: "#gtceu:circuits/zpm",
        A: "gtceu:vanadium_gallium_quadruple_cable"
    }).id('gtceu:shaped/zpm_agricultural_fabricator')

    event.shaped('gtceu:synthetic_fluid_rig', [
        "PPP",
        "CMC",
        "RFE"
    ],{
        M: "gtceu:mv_pump",
        P: "gtceu:mv_electric_pump",
        C: "#gtceu:circuits/mv",
        R: "gtceu:mv_robot_arm",
        F: "gtceu:mv_field_generator",
        E: "gtceu:mv_emitter"
    }).id('gtceu:shaped/synthetic_fluid_rig')

    event.shaped('gtceu:synthetic_solid_rig', [
        "SCS",
        "RMR",
        "QQQ"
    ],{
        S: "gtceu:mv_sensor",
        C: "#gtceu:circuits/mv",
        R: "gtceu:mv_robot_arm",
        M: "gtceu:mv_miner",
        Q: "gtceu:annealed_copper_quadruple_cable"
    }).id('gtceu:shaped/synthetic_solid_rig')

    event.shaped('gtceu:synthetic_lifeform_simulator', [
        "SCE",
        "THT",
        "EFS"
    ],{
        H: "gtceu:mv_machine_hull",
        S: "gtceu:mv_sensor",
        C: "#gtceu:circuits/mv",
        E: "gtceu:lv_emitter",
        T: "gtceu:tempered_glass",
        F: "gtceu:lv_field_generator"
    }).id('gtceu:shaped/synthetic_lifeform_simulator')

    event.shaped('gtceu:greenhouse', [
        "TST",
        "PMP",
        "EDE"
    ],{
        T: "gtceu:tempered_glass",
        S: "gtceu:mv_sensor",
        P: "gtceu:viadium_plate",
        M: "gtceu:mv_hydroponic_unit",
        E: "gtceu:mv_electric_pump",
        D: "gtceu:aluminium_drum"
    }).id('gtceu:shaped/greenhouse')

    event.shaped('gtceu:elemental_turbine', [
        "ABA",
        "BDB",
        "CBC"
    ], {
        A: "#gtceu:circuits/ev",
        B: "gtceu:supremium_gear",
        C: "gtceu:stainless_steel_large_fluid_pipe",
        D: "gtceu:ev_machine_hull"
    }).id('gtceu:shaped/elemental_turbine')

    event.shaped('gtceu:critical_point_crystal_matrix', [
        "AEA",
        "FDF",
        "CBC"
    ], {
        A: "gtceu:iv_electric_pump",
        B: "gtceu:tungsten_steel_drum",
        C: "#gtceu:circuits/iv",
        D: "gtceu:iv_autoclave",
        E: "gtceu:laminated_glass",
        F: "gtceu:supremium_plate"
    })


    // Supremium Casing
    event.recipes.gtceu.assembler('supremium_casing')
        .itemInputs('6x gtceu:supremium_plate', 'gtceu:prosperity_frame')
        .itemOutputs('2x kubejs:supremium_casing')
        .duration(240)
        .EUt(30)

    event.recipes.gtceu.assembler('draconitium_casing')
        .itemInputs('6x gtceu:draconitium_plate', 'gtceu:draconitium_frame')
        .itemOutputs('2x kubejs:draconitium_casing')
        .duration(240)
        .EUt(30)

    // Master Infusion Crystal
    event.recipes.gtceu.agricultural_fabrication('mystical_crystal')
        .itemInputs('mysticalagriculture:prosperity_gemstone', '64x gtceu:air_elementia_gem', '64x gtceu:fire_elementia_gem', '64x gtceu:earth_elementia_gem', '64x gtceu:water_elementia_gem')
        .itemOutputs('mysticalagriculture:master_infusion_crystal')
        .duration(600)
        .EUt(480)

    // Enrichment 
    event.recipes.gtceu.mixer("enrichment/prudentium")
        .itemInputs("2x gtceu:inferium_dust", "8x mysticalagriculture:air_essence", "8x mysticalagriculture:fire_essence", "8x mysticalagriculture:earth_essence", "8x mysticalagriculture:water_essence")
        .itemOutputs("gtceu:prudentium_dust")
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.mixer("enrichment/tertium")
        .itemInputs("2x gtceu:prudentium_dust", "8x mysticalagriculture:air_essence", "8x mysticalagriculture:fire_essence", "8x mysticalagriculture:earth_essence", "8x mysticalagriculture:water_essence")
        .itemOutputs("gtceu:tertium_dust")
        .duration(200)
        .EUt(120)
    event.recipes.gtceu.mixer("enrichment/imperium")
        .itemInputs("2x gtceu:tertium_dust", "8x mysticalagriculture:air_essence", "8x mysticalagriculture:fire_essence", "8x mysticalagriculture:earth_essence", "8x mysticalagriculture:water_essence")
        .itemOutputs("gtceu:imperium_dust")
        .duration(200)
        .EUt(480)
    event.recipes.gtceu.mixer("enrichment/supremium")
        .itemInputs("2x gtceu:imperium_dust", "8x mysticalagriculture:air_essence", "8x mysticalagriculture:fire_essence", "8x mysticalagriculture:earth_essence", "8x mysticalagriculture:water_essence")
        .itemOutputs("gtceu:supremium_dust")
        .duration(200)
        .EUt(1920)
    event.recipes.gtceu.mixer("enrichment/insanium")
        .itemInputs("2x gtceu:supremium_dust", "8x mysticalagriculture:air_essence", "8x mysticalagriculture:fire_essence", "8x mysticalagriculture:earth_essence", "8x mysticalagriculture:water_essence")
        .itemOutputs("gtceu:insanium_dust")
        .duration(200)
        .EUt(7680)

    event.recipes.gtceu.agricultural_fabrication("enrichment/prudentium")
        .itemInputs("gtceu:inferium_dust", "16x gtceu:air_elementia_gem", "16x gtceu:fire_elementia_gem", "16x gtceu:earth_elementia_gem", "16x gtceu:water_elementia_gem")
        .itemOutputs("gtceu:prudentium_dust")
        .duration(200)
        .EUt(120)
    event.recipes.gtceu.agricultural_fabrication("enrichment/tertium")
        .itemInputs("gtceu:prudentium_dust", "16x gtceu:air_elementia_gem", "16x gtceu:fire_elementia_gem", "16x gtceu:earth_elementia_gem", "16x gtceu:water_elementia_gem")
        .itemOutputs("gtceu:tertium_dust")
        .duration(200)
        .EUt(480)
    event.recipes.gtceu.agricultural_fabrication("enrichment/imperium")
        .itemInputs("gtceu:tertium_dust", "16x gtceu:air_elementia_gem", "16x gtceu:fire_elementia_gem", "16x gtceu:earth_elementia_gem", "16x gtceu:water_elementia_gem")
        .itemOutputs("gtceu:imperium_dust")
        .duration(200)
        .EUt(1920)
    event.recipes.gtceu.agricultural_fabrication("enrichment/supremium")
        .itemInputs("gtceu:imperium_dust", "16x gtceu:air_elementia_gem", "16x gtceu:fire_elementia_gem", "16x gtceu:earth_elementia_gem", "16x gtceu:water_elementia_gem")
        .itemOutputs("gtceu:supremium_dust")
        .duration(200)
        .EUt(7680)
    event.recipes.gtceu.agricultural_fabrication("enrichment/insanium")
        .itemInputs("gtceu:supremium_dust", "16x gtceu:air_elementia_gem", "16x gtceu:fire_elementia_gem", "16x gtceu:earth_elementia_gem", "16x gtceu:water_elementia_gem")
        .itemOutputs("gtceu:insanium_dust")
        .duration(200)
        .EUt(30720)

    // Gemstone crafting
    const dusts = ["inferium", "prudentium", "tertium", "imperium", "supremium", "awakened_supremium"]

    dusts.forEach(tier =>{
        event.recipes.gtceu.alloy_smelter(`gemstone/${tier}`)
            .itemInputs(`2x #forge:ingots/${tier}`, "mysticalagriculture:prosperity_gemstone")
            .itemOutputs(`mysticalagriculture:${tier}_gemstone`)
            .duration(310)
            .EUt(7)
        })


    // EBF
    event.recipes.gtceu.electric_blast_furnace("kubejs:prudentium_ingot")
        .itemInputs("gtceu:prudentium_dust", "gtceu:prosperity_ingot")
        .itemOutputs("gtceu:prudentium_ingot", "gtceu:small_rare_earth_dust")
        .blastFurnaceTemp(1700)
        .duration(570)
        .EUt(120)
    event.recipes.gtceu.electric_blast_furnace("kubejs:tertium_ingot")
        .itemInputs("gtceu:tertium_dust", "gtceu:prosperity_ingot")
        .itemOutputs("gtceu:tertium_ingot", "gtceu:rare_earth_dust")
        .blastFurnaceTemp(1700)
        .duration(740)
        .EUt(480)
    event.recipes.gtceu.electric_blast_furnace("kubejs:imperium_ingot")
        .itemInputs("gtceu:imperium_dust", "gtceu:prosperity_ingot")
        .itemOutputs("gtceu:imperium_ingot", "gtceu:rare_earth_dust")
        .blastFurnaceTemp(1847)
        .duration(912)
        .EUt(1920)
    event.recipes.gtceu.electric_blast_furnace("kubejs:supremium_ingot")
        .itemInputs("gtceu:supremium_dust", "gtceu:prosperity_ingot")
        .itemOutputs("gtceu:supremium_ingot", "gtceu:small_platinum_sludge_residue_dust")
        .blastFurnaceTemp(2987)
        .duration(630)
        .EUt(7680)
    event.recipes.gtceu.electric_blast_furnace("kubejs:insanium_ingot")
        .itemInputs("gtceu:insanium_dust", "gtceu:prosperity_ingot")
        .itemOutputs("gtceu:instanium_ingot", "gtceuu:platinum_sludge_residue_dust")
        .blastFurnaceTemp(4500)
        .duration(745)
        .EUt(30720)
    
    // Awk. Supremium
    event.recipes.gtceu.fusion_reactor("kubejs:awakened_supremium_ingot")
        .inputFluids("gtceu:insanium 16", "gtceu:supremium 16")
        .outputFluids("gtceu:awakened_supremium 16")
        .duration(64)
        .fusionStartEU(80)
        .EUt(GTValues.VH[GTValues.LuV])

    // Agglomeratios
    event.recipes.gtceu.centrifuge("centrifuge_agglomeratio")
        .itemInputs("#forge:dusts/inferium")
        .chancedOutput(`mysticalagriculture:air_agglomeratio`, 2000, 0)
        .chancedOutput(`mysticalagriculture:fire_agglomeratio`, 2000, 0)
        .chancedOutput(`mysticalagriculture:earth_agglomeratio`, 2000, 0)
        .chancedOutput(`mysticalagriculture:water_agglomeratio`, 2000, 0)
        .duration(240)
        .EUt(30)

    // Basic components
    event.recipes.gtceu.agricultural_fabrication("essence_seeds/prosperity_base")
        .itemInputs("#forge:seeds", "4x gtceu:prosperity_dust")
        .itemOutputs("mysticalagriculture:prosperity_seed_base")
        .duration(140)
        .EUt(30)
    event.recipes.gtceu.agricultural_fabrication("essence_seeds/inferium")
        .itemInputs("4x #forge:dusts/inferium", "mysticalagriculture:prosperity_seed_base")
        .itemOutputs("mysticalagriculture:inferium_seeds")
        .duration(140)
        .EUt(30)

    event.recipes.gtceu.autoclave('poor_prosperity_gem')
        .itemInputs('gtceu:prosperity_dust')
        .inputFluids('water 250')
        .itemOutputs('mysticalagriculture:prosperity_gemstone')
        .duration(600)
        .EUt(24)
    event.recipes.gtceu.autoclave('prosperity_gem')
        .itemInputs('gtceu:prosperity_dust')
        .inputFluids('gtceu:distilled_water 250')
        .itemOutputs('mysticalagriculture:prosperity_gemstone')
        .duration(300)
        .EUt(24)
    
    // Elementia
    const elementia = ['air', 'fire', 'earth', 'water']
    
    elementia.forEach(elem => {

        // Elementia crafting
        event.recipes.gtceu.chemical_reactor(`${elem}`)
            .itemInputs(`4x mysticalagriculture:${elem}_essence`, 'gtceu:carbon_dust')
            .inputFluids('gtceu:hydrochloric_acid 100')
            .itemOutputs(`2x gtceu:${elem}_elementia_gem`)
            .duration(216)
            .EUt(120)
        event.recipes.gtceu.large_chemical_reactor(`${elem}`)
            .notConsumable(`gtceu:${elem}_elementia_gem`)
            .itemInputs(`16x mysticalagriculture:${elem}_essence`, 'gtceu:fertilizer')
            .inputFluids('gtceu:inferium 36')
            .itemOutputs(`4x gtceu:${elem}_elementia_gem`)
            .duration(248)
            .EUt(1920)
        event.recipes.gtceu.crystal_matrix(`${elem}`)
            .notConsumable(`gtceu:${elem}_elementia_gem`)
            .inputFluids(`gtceu:${elem}_elemental_solution 120`)
            .itemOutputs(`gtceu:${elem}_elementia_gem`)
            .outputFluids(`gtceu:${elem}_elemental_slurry 120`)
            .duration(132)
            .EUt(30720)
        // Solution
        event.recipes.gtceu.chemical_reactor(`${elem}_solution`)
            .itemInputs(`gtceu:${elem}_elementia_gem`, 'gtceu:prosperity_dust')
            .inputFluids('minecraft:water 500')
            .outputFluids(`gtceu:${elem}_elemental_solution 200`)
            .duration(186)
            .EUt(30)
        // Recycle slurry
        event.recipes.gtceu.distillery(`${elem}_solution_recycle`)
            .inputFluids(`gtceu:${elem}_elemental_slurry 90`)
            .itemOutputs(`gtceu:small_prosperity_dust`)
            .outputFluids(`gtceu:${elem}_elemental_solution 60`)
            .duration(200)
            .EUt(7)
        // Plasma
        event.recipes.gtceu.fusion_reactor(`${elem}_plasma`)
            .inputFluids(`gtceu:${elem}_elemental_solution 125`, 'gtceu:supremium 16')
            .outputFluids(`gtceu:${elem}_elemental_solution_plasma 125`)
            .duration(16)
            .EUt(GTValues.VH[GTValues.IV])
            .fusionStartEU(60)
        // Plasma turbine
        event.recipes.gtceu.plasma_generator(`${elem}_plasma`)
            .inputFluids(`gtceu:${elem}_elemental_solution_plasma 1`)
            .outputFluids(`gtceu:${elem}_elemental_solution 1`)
            .duration(32)
            .EUt(-1 * GTValues.V[GTValues.EV])
        // Elemental Turbine
        event.recipes.gtceu.elemental_generator(`${elem}_energy`)
            .inputFluids(`gtceu:${elem}_elemental_solution 1`)
            .outputFluids(`gtceu:${elem}_elemental_slurry 1`)
            .duration(54)
            .EUt(-1 * GTValues.VH[GTValues.EV])

    })

    // Superelemental Line
    event.recipes.gtceu.large_chemical_reactor(`superelemental/fire_air`)
        .notConsumable('mysticalagriculture:master_infusion_crystal')
        .inputFluids('gtceu:fire_elemental_solution 1000', 'gtceu:air_elemental_solution 1000')
        .outputFluids('gtceu:prometheus_ouranos_superelemental_solution 2000')
        .duration(600)
        .EUt(480)
    event.recipes.gtceu.large_chemical_reactor(`superelemental/earth_water`)
        .notConsumable('mysticalagriculture:master_infusion_crystal')
        .inputFluids('gtceu:earth_elemental_solution 1000', 'gtceu:water_elemental_solution 1000')
        .outputFluids('gtceu:gaia_oceanus_superelemental_solution 2000')
        .duration(600)
        .EUt(480)
    event.recipes.gtceu.distillation_tower('superelemental/fire_air')
        .inputFluids('gtceu:prometheus_ouranos_superelemental_solution 20000')
        .outputFluids('gtceu:coal_gas 12000','gtceu:hydrogen_sulfide 10500','gtceu:deuterium 7000', 'gtceu:argon 3000', 'gtceu:tritium 2000', 'gtceu:radon 500')
        .duration(2000)
        .EUt(1920)
    event.recipes.gtceu.distillation_tower('superelemental/earth_water')
        .inputFluids('gtceu:gaia_oceanus_superelemental_solution 30000')
        .outputFluids('gtceu:oil 24000', 'gtceu:oil_heavy 19000', 'gtceu:oil_light 15000', 'gtceu:charcoal_byproducts 13000')
        .duration(2000)
        .EUt(1920)
    
    // Hyperconcentrate
    event.recipes.gtceu.large_chemical_reactor('mystical_hyperconcentrate')
        .notConsumable('mysticalagriculture:master_infusion_crystal')
        .itemInputs('gtceu:small_netherite_dust')
        .inputFluids('gtceu:air_elemental_solution 1000', 'gtceu:fire_elemental_solution 1000', 'gtceu:earth_elemental_solution 1000', 'gtceu:water_elemental_solution 1000')
        .outputFluids('gtceu:mystical_hyperconcentrate 2000')
        .duration(416)
        .EUt(7680)

    // Draconitium Reactor
    event.recipes.gtceu.draconitium_energy(`draconic`)
        .inputFluids("gtceu:draconic_matter 16", "gtceu:insanium 8")
        .outputFluids("gtceu:strange_matter 32")
        .duration(64)
        .outputEnergy(64 * GTValues.V[GTValues.LuV])
        .fusionStartEU(80)

    
})