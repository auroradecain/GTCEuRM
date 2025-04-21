ServerEvents.recipes(event =>{

    /** Balistic Steel */
    event.recipes.gtceu.mixer("gtceu:ballistic_steel_dust")
        .itemInputs("3x #forge:dusts/steel", "2x #forge:dusts/bronze", "#forge:dusts/nickel", "2x #forge:dusts/chromium")
        .itemOutputs("8x gtceu:ballistic_steel_dust")
        .circuit(2)
        .duration(56)
        .EUt(GTValues.VH[GTValues.LV]) 

})