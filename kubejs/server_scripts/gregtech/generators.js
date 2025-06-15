
ServerEvents.recipes(event =>{
    // Geothermal Generators
    event.shaped("gtceu:lv_geothermal_generator", [
        'EFE',
        'DAD',
        'BCB'
    ], {
        A: "gtceu:lv_machine_hull",
        B: "#forge:gears/steel",
        C: "#gtceu:circuits/lv",
        D: "gtceu:copper_octal_wire",
        E: "gtceu:lv_electric_piston",
        F: "#forge:glass"
    }).id("kubejs:shaped/geothermal_generator_lv_on_shaped")

    event.shaped("gtceu:mv_geothermal_generator", [
        'EFE',
        'DAD',
        'BCB'
    ], {
        A: "gtceu:mv_machine_hull",
        B: "#forge:gears/aluminium",
        C: "#gtceu:circuits/mv",
        D: "gtceu:cupronickel_octal_wire",
        E: "gtceu:mv_electric_piston",
        F: "#forge:glass"
    }).id("kubejs:shaped/geothermal_generator_mv_on_shaped")

    event.shaped("gtceu:hv_geothermal_generator", [
        'EFE',
        'DAD',
        'BCB'
    ], {
        A: "gtceu:hv_machine_hull",
        B: "#forge:gears/stainless_steel",
        C: "#gtceu:circuits/hv",
        D: "gtceu:kanthal_octal_wire",
        E: "gtceu:hv_electric_piston",
        F: "gtceu:tempered_glass"
    }).id("kubejs:shaped/geothermal_generator_hv_on_shaped")


    // Changes to Bio-Diesel Production
    event.remove({id:'gtceu:chemical_reactor/glycerol_from_seed_oil_ethanol'})
    event.remove({id:'gtceu:chemical_reactor/glycerol_from_seed_oil_methanol'})
    event.recipes.gtceu.chemical_reactor("kubejs:bio_diesel_from_seed_oil_ethanol")
        .itemInputs("#forge:tiny_dusts/sodium_hydroxide")
        .inputFluids("gtceu:seed_oil 4000", "gtceu:ethanol 1000")
        .outputFluids("gtceu:glycerol 1000", "gtceu:bio_diesel 6000")
        .duration(600)
        .EUt(30)
    event.recipes.gtceu.chemical_reactor("kubejs:bio_diesel_from_seed_oil_methanol")
        .itemInputs("#forge:tiny_dusts/sodium_hydroxide")
        .inputFluids("gtceu:seed_oil 4000", "gtceu:methanol 1000")
        .outputFluids("gtceu:glycerol 1000", "gtceu:bio_diesel 6000")
        .duration(600)
        .EUt(30)

    event.recipes.gtceu.geothermal_energy("kubejs:lava_to_energy")
        .inputFluids("minecraft:lava 8")
        .duration(10)
        .EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.fusion_reactor('draconic_matter')
        .inputFluids('gtceu:unstable_draconic_matter 125', 'gtceu:deuterium 375')
        .outputFluids('gtceu:draconic_matter 125')
        .duration(16)
        .EUt(7680)
        .fusionStartEU(300000000)


})

