ServerEvents.recipes(event=>{
    const fieldTiers = [
        ["lv", ["gtceu:viadium_quadruple_wire", "#forge:plates/steel",  "minecraft:ender_pearl"]],
        ["mv", ["gtceu:sapatanium_octal_wire", "#forge:plates/aluminium",  "minecraft:ender_eye"]],
        ["hv", ["gtceu:fechantium_octal_wire", "#forge:plates/stainless_steel",  "gtceu:quantum_eye"]],
        ["ev", ["gtceu:yottrium_octal_wire", "#forge:double_plates/titanium",  "minecraft:nether_star"]],
        ["iv", ["gtceu:denisium_octal_wire", "#forge:double_plates/tungsten_steel",  "gtceu:quantum_star"]]
    ]

    for(const [tier, recipeInputs] of fieldTiers){
        event.shaped(`gtceu:${tier}_field_generator`, [
            'ABA',
            'DCD',
            'ABA'
        ], {
            A: recipeInputs[0],
            B: recipeInputs[1],
            C: recipeInputs[2],
            D: `#gtceu:circuits/${tier}`
        }).id(`kubejs:shaped/field_generator_${tier}`)

        event.recipes.gtceu.assembler(`kubejs:field_generator_${tier}`)
            .itemInputs([
                Ingredient.of(recipeInputs[2], 1), 
                Ingredient.of(recipeInputs[1], 2), 
                `2x #gtceu:circuits/${tier}`, 
                Ingredient.of(recipeInputs[0], 4)
            ])
            .itemOutputs(`gtceu:${tier}_field_generator`)
            .duration(100)
            .EUt(30)
    }
})