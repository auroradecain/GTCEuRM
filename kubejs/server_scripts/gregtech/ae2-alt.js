ServerEvents.recipes(event =>{

    /** Laser Engraver Recipies */
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
    
    })

})