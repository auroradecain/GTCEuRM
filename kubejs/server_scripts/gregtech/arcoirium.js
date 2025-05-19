ServerEvents.recipes(event =>{

    // Viadium dust
    event.recipes.gtceu.chemical_reactor('kubejs:viadium_from_copper')
        .itemInputs('2x gtceu:vidium_dust', '3x gtceu:copper_dust')
        .inputFluids('minecraft:water 3000')
        .itemOutputs('1x gtceu:viadium_dust', '6x gtceu:copper_ii_hydroxide_dust')
        .duration(140)
        .EUt(30)

    // Cupric Viadium Semielement dust
    event.recipes.gtceu.mixer('kubejs:cupric_viadium_semielement_dust')
        .itemInputs('#forge:dusts/viadium', '2x #forge:dusts/copper', '#forge:dusts/silicon')
        .inputFluids('gtceu:oxygen 3000')
        .itemOutputs('7x gtceu:cupric_viadium_semielement_dust')
        .duration(230)
        .EUt(GTValues.VA[GTValues.MV])

    // Sapatanium dust
    event.recipes.gtceu.mixer('kubejs:sapatanium_dust')
        .itemInputs("gtceu:viadium_dust", "2x #forge:dusts/nickel", "#forge:dusts/manganese")
        .itemOutputs("4x gtceu:sapatanium_dust")
        .duration(164)
        .EUt(84)
    // SVS
    event.recipes.gtceu.mixer("svs_dust")
        .itemInputs("2x #forge:dusts/sapatanium", "#forge:dusts/viadium", "#forge:dusts/steel")
        .itemOutputs("4x gtceu:sapatanium_viadium_steel_dust")
        .duration(240)
        .EUt(240)

    // SVS Alloys
    event.recipes.gtceu.mixer("svs_g_dust")
        .itemInputs("3x gtceu:sapatanium_viadium_steel_dust", "2x #forge:dusts/chromium", "#forge:dusts/gallium", "#forge:dusts/silicon")
        .itemOutputs("7x gtceu:svs_g_dust")
        .duration(300)
        .EUt(480)
    event.remove({id:'gtceu:vacuum_freezer/cool_hot_svs_g_ingot'})
    event.recipes.gtceu.vacuum_freezer("cool_hot_svs_g_ingot")
        .itemInputs("gtceu:hot_svs_g_ingot")
        .itemOutputs("gtceu:svs_g_ingot")
        .duration(294)
        .EUt(480)

    event.recipes.gtceu.mixer("svs_l_dust")
        .itemInputs("5x gtceu:svs_g_dust", "3x #forge:dusts/molybdenum", "#forge:dusts/cobalt")
        .itemOutputs("9x gtceu:svs_l_dust")
        .duration(300)
        .EUt(480)
    event.remove({id:'gtceu:vacuum_freezer/cool_hot_svs_l_ingot'})
    event.recipes.gtceu.vacuum_freezer("cool_hot_svs_l_ingot")
        .itemInputs("gtceu:hot_svs_l_ingot")
        .itemOutputs("gtceu:svs_l_ingot")
        .duration(243)
        .EUt(240)

    event.recipes.gtceu.mixer("svs_s_dust")
        .itemInputs("5x gtceu:svs_g_dust", "2x #forge:dusts/vanadium", "#forge:dusts/titanium", "#forge:dusts/zirconium")
        .itemOutputs("9x gtceu:svs_s_dust")
        .duration(300)
        .EUt(240)
    event.remove({id:'gtceu:vacuum_freezer/cool_hot_svs_s_ingot'})
    event.recipes.gtceu.vacuum_freezer("cool_hot_svs_s_ingot")
        .itemInputs("gtceu:hot_svs_s_ingot")
        .inputFluids("gtceu:liquid_helium 500")
        .itemOutputs("gtceu:svs_s_ingot")
        .outputFluids("gtceu:helium 250")
        .duration(210)
        .EUt(480)

    // Yottrium dust
    
    event.recipes.gtceu.mixer("gtceu:yottrium_dust")
        .itemInputs("gtceu:fechantium_dust", "gtceu:molybdenum_disulfide_dust", "2x gtceu:platinum_dust")
        .itemOutputs("4x gtceu:yottrium_dust")
        .duration(248)
        .EUt(480)
        .circuit(3)

    // Denisium dust
    event.recipes.gtceu.mixer("kubejs:denisium_dust")
        .itemInputs("gtceu:uranium_dust", "gtceu:yottrium_dust", "gtceu:tungsten_dust")
        .inputFluids("gtceu:oxygen 3000")
        .itemOutputs("6x gtceu:denisium_dust")
        .duration(216)
        .EUt(1920)

    // Avisium line
    event.recipes.gtceu.chemical_bath("trevinitic_acid_from_travinite")
        .itemInputs("7x gtceu:trevinite_dust")
        .inputFluids("gtceu:hydrochloric_acid 2000")
        .itemOutputs("7x gtceu:trevinitic_acid_dust", "4x gtceu:lithium_chloride_dust")
        .duration(210)
        .EUt(960)

    event.recipes.gtceu.electrolyzer("trevinitic_acid_electrolysis")
        .itemInputs("7x gtceu:trevinitic_acid_dust")
        .itemOutputs("gtceu:avisium_dust")
        .outputFluids("gtceu:hydrogen 2000", "gtceu:oxygen 4000")
        .duration(210)
        .EUt(960)

    // Queenium
    event.recipes.gtceu.fusion_reactor("plutonium_241_and_gallium_to_queenium")
        .inputFluids("gtceu:plutonium_241 32", "gtceu:gallium 32")
        .outputFluids("gtceu:queenium 32")
        .duration(64)
        .EUt(61440)
        .fusionStartEU(300000000)

})