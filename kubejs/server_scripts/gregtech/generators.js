/**
 * 
 * Section dedicated for future custom generators
 * 
 */

ServerEvents.recipes(event =>{
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

})

