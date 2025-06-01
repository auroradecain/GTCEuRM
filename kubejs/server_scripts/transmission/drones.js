ServerEvents.recipes(event=>{
    // Components
    ["bronze", "steel", "aluminium", "stainless_steel"].forEach(mat=>{
        event.shaped(`kubejs:${mat}_propeller_blades`,[
            ' a ', ' b ', ' c '
        ],{
            a: "#forge:tools/hammers",
            b: `#forge:rotors/${mat}`,
            c: "#forge:tools/files"
        }).damageIngredient(["#forge:tools/hammers", "#forge:tools/files"]).id(`kubejs:hand_made_${mat}_propeller_blades`)
        
        event.recipes.gtceu.lathe(`kubejs:${mat}_propeller_blades`)
            .itemInputs(`#forge:rotors/${mat}`)
            .itemOutputs(`kubejs:${mat}_propeller_blades`)
            .duration(360)
            .EUt(GTValues.VHA[GTValues.MV])
    })

    // T1 - T4
    event.recipes.gtceu.assembler("kubejs:tier1_drone")
        .itemInputs(["#forge:double_plates/cupronickel", "2x #forge:double_plates/steel", "2x gtceu:lv_sensor", "4x gtceu:lv_electric_motor", "4x kubejs:bronze_propeller_blades", "#gtceu:batteries/lv", "#gtceu:circuits/mv"])
        .itemOutputs("kubejs:drone_t1")
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler("kubejs:tier2_drone")
        .itemInputs(["#forge:double_plates/electrum", "2x #forge:double_plates/aluminium", "2x gtceu:mv_sensor", "4x gtceu:mv_electric_motor", "4x kubejs:steel_propeller_blades", "#gtceu:batteries/lv", "#gtceu:circuits/hv"])
        .itemOutputs("kubejs:drone_t2")
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
    
    event.recipes.gtceu.assembler("kubejs:tier3_drone")
        .itemInputs(["#forge:double_plates/vanadium_steel", "2x #forge:double_plates/stainless_steel", "2x gtceu:hv_sensor", "4x gtceu:hv_electric_motor", "4x kubejs:aluminium_propeller_blades", "#gtceu:batteries/mv", "#gtceu:circuits/ev"])
        .itemOutputs("kubejs:drone_t3")
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV])
    
    event.recipes.gtceu.assembler("kubejs:tier4_drone")
        .itemInputs(["#forge:double_plates/platinum", "2x #forge:double_plates/titanium", "2x gtceu:ev_sensor", "4x gtceu:ev_electric_motor", "4x kubejs:stainless_steel_propeller_blades", "#gtceu:batteries/mv", "#gtceu:circuits/iv"])
        .itemOutputs("kubejs:drone_t4")
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV])
})