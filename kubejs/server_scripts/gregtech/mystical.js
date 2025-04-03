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


    event.recipes.gtceu.mixer("enrichment/prudentium")
        .itemInputs("2x #forge:dusts/inferium", "8x mysticalagriculture:air_essence", "8x mysticalagriculture:fire_essence", "8x mysticalagriculture:earth_essence", "8x mysticalagriculture:water_essence")
        .itemOutputs("#forge:dusts/prudentium")
        .duration(200)
        .EUt(120)
    event.recipes.gtceu.mixer("enrichment/tertium")
        .itemInputs("2x #forge:dusts/prudentium", "8x mysticalagriculture:air_essence", "8x mysticalagriculture:fire_essence", "8x mysticalagriculture:earth_essence", "8x mysticalagriculture:water_essence")
        .itemOutputs("#forge:dusts/tertium")
        .duration(200)
        .EUt(480)
    event.recipes.gtceu.mixer("enrichment/imperium")
        .itemInputs("2x #forge:dusts/tertium", "8x mysticalagriculture:air_essence", "8x mysticalagriculture:fire_essence", "8x mysticalagriculture:earth_essence", "8x mysticalagriculture:water_essence")
        .itemOutputs("#forge:dusts/imperium")
        .duration(200)
        .EUt(1920)
    event.recipes.gtceu.mixer("enrichment/supremium")
        .itemInputs("2x #forge:dusts/imperium", "8x mysticalagriculture:air_essence", "8x mysticalagriculture:fire_essence", "8x mysticalagriculture:earth_essence", "8x mysticalagriculture:water_essence")
        .itemOutputs("#forge:dusts/supremium")
        .duration(200)
        .EUt(7680)
    event.recipes.gtceu.mixer("enrichment/insanium")
        .itemInputs("2x #forge:dusts/supremium", "8x mysticalagriculture:air_essence", "8x mysticalagriculture:fire_essence", "8x mysticalagriculture:earth_essence", "8x mysticalagriculture:water_essence")
        .itemOutputs("#forge:dusts/insanium")
        .duration(200)
        .EUt(30720)

    const dusts = ["inferium", "prudentium", "tertium", "imperium", "supremium", "awakened_supremium"]

    dusts.forEach(tier =>{
        event.recipes.gtceu.alloy_smelter(`gemstone/${tier}`)
            .itemInputs(`2x #forge:ingots/${tier}`, "mysticalagriculture:prosperity_gemstone")
            .itemOutputs(`mysticalagriculture:${tier}_gemstone`)
            .duration(310)
            .EUt(7)
    })
    

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
        .EUt(480)
    event.recipes.gtceu.electric_blast_furnace("kubejs:supremium_ingot")
        .itemInputs("gtceu:supremium_dust", "gtceu:prosperity_ingot")
        .itemOutputs("gtceu:supremium_ingot", "gtceu:small_platinum_sludge_residue_dust")
        .blastFurnaceTemp(2987)
        .duration(630)
        .EUt(1920)
    
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

})