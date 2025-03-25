ServerEvents.recipes(event =>{
    /** Removes Mystical Agriculture shenenigans */
    event.remove({ id: "mysticalagriculture:essence/appliedenergistics2/silicon_press"})
    event.remove({ id: "mysticalagriculture:essence/appliedenergistics2/engineering_press"})
    event.remove({ id: "mysticalagriculture:essence/appliedenergistics2/logic_press"})
    event.remove({ id: "mysticalagriculture:essence/appliedenergistics2/calculation_press"})

    /** Laser Engraver Recipies */
    event.recipes.gtceu.laser_engraver('gtceu:ae2_diamond_circuit')
        .itemInputs("gtceu:diamond_plate")
        .notConsumable("ae2:engineering_processor_press")
        .itemOutputs("ae2:printed_engineering_processor")
        .duration(190)
        .EUt(24)

    event.recipes.gtceu.laser_engraver('gtceu:ae2_gold_circuit')
        .itemInputs("gtceu:gold_plate")
        .notConsumable("ae2:logic_processor_press")
        .itemOutputs("ae2:printed_logic_processor")
        .duration(190)
        .EUt(24)

    event.recipes.gtceu.laser_engraver('gtceu:ae2_certus_quartz_circuit')
        .itemInputs("gtceu:certus_quartz_plate")
        .notConsumable("ae2:calculation_processor_press")
        .itemOutputs("ae2:printed_calculation_processor")
        .duration(190)
        .EUt(24)

    event.recipes.gtceu.alloy_smelter('gtceu:ae2_printed_silicon')
        .itemInputs("ae2:silicon")
        .notConsumable("ae2:silicon_press")
        .itemOutputs("ae2:printed_silicon")
        .duration(280)
        .EUt(7)

    /** Circuit Assembler for Soldering Alloy*/
    event.recipes.gtceu.circuit_assembler('gtceu:ae2_engineering_processor_rich')
        .itemInputs("ae2:printed_engineering_processor", "ae2:printed_silicon", "4x gtceu:fine_red_alloy_wire", "4x gtceu:annealed_copper_bolt")
        .inputFluids("gtceu:soldering_alloy 36")
        .itemOutputs("ae2:engineering_processor")
        .duration(135)
        .EUt(GTValues.VH[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('gtceu:ae2_logic_processor_rich')
        .itemInputs("ae2:printed_logic_processor", "ae2:printed_silicon", "4x gtceu:fine_red_alloy_wire", "4x gtceu:annealed_copper_bolt")
        .inputFluids("gtceu:soldering_alloy 36")
        .itemOutputs("ae2:logic_processor")
        .duration(135)
        .EUt(GTValues.VH[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('gtceu:ae2_calculation_processor_rich')
        .itemInputs("ae2:printed_calculation_processor", "ae2:printed_silicon", "4x gtceu:fine_red_alloy_wire", "4x gtceu:annealed_copper_bolt")
        .inputFluids("gtceu:soldering_alloy 36")
        .itemOutputs("ae2:calculation_processor")
        .duration(135)
        .EUt(GTValues.VH[GTValues.LV])

    /** Circuit Assembler for Liquid Tin */

    event.recipes.gtceu.circuit_assembler('gtceu:ae2_engineering_processor')
        .itemInputs("ae2:printed_engineering_processor", "ae2:printed_silicon", "4x gtceu:fine_red_alloy_wire", "4x gtceu:annealed_copper_bolt")
        .inputFluids("gtceu:tin 72")
        .itemOutputs("ae2:engineering_processor")
        .duration(240)
        .EUt(GTValues.VH[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('gtceu:ae2_logic_processor')
        .itemInputs("ae2:printed_logic_processor", "ae2:printed_silicon", "4x gtceu:fine_red_alloy_wire", "4x gtceu:annealed_copper_bolt")
        .inputFluids("gtceu:tin 72")
        .itemOutputs("ae2:logic_processor")
        .duration(240)
        .EUt(GTValues.VH[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('gtceu:ae2_calculation_processor')
        .itemInputs("ae2:printed_calculation_processor", "ae2:printed_silicon", "4x gtceu:fine_red_alloy_wire", "4x gtceu:annealed_copper_bolt")
        .inputFluids("gtceu:tin 72")
        .itemOutputs("ae2:calculation_processor")
        .duration(240)
        .EUt(GTValues.VH[GTValues.LV])
})