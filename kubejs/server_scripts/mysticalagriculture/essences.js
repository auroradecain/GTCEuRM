ServerEvents.recipes(event =>{
    
    event.remove(/mysticalagriculture:seed/)

    const element_essences = ["air", "earth", "fire", "water"]
    const tier_inferium = [["inferium", 1], ["prudentium", 2], ["tertium", 4], ["imperium", 8], ["supremium", 16], ["insanium", 32]]

    const basic_essences = [
        // More basic essences
        ["stone", ["fire", "water"]],
        ["dirt", ["stone", "earth"]],
        ["ice", ["stone", "water"]],
        ["deepslate", ["stone", "fire"]],
        ["nature", ["earth", "water"]],
        ["fish", ["cow", "water"]],
        ["squid", ["fish", "water"]],
        ["pig", ["nature", "dirt", "water"]],
        ["chicken", ["nature", "air", "water"]],
        ["cow", ["nature", "ice", "water"]],
        ["sheep", ["nature", "dye", "water"]],
        ["coal", ["earth", "fire"]],
        ["amethyst", ["stone", "deepslate"]],
        ["dye", ["nature", "amethyst"]],
        ["prismarine", ["water", "deepslate"]],
        ["iron", ["coal", "deepslate"]],
        ["copper", ["iron", "earth"]],
        ["redstone", ["coal", "earth"]],
        ["glowstone", ["redstone", "air"]],
        ["obsidian", ["iron", "fire"]],
        ["sulfur", ["glowstone", "earth"]],
        ["rubber", ["nature", "sulfur"]],
        ["saltpeter", ["sulfur", "earth"]],
        ["apatite", ["saltpeter", "earth"]],
        ["tin", ["copper", "earth"]],
        ["zinc", ["tin", "earth"]]
    ]

    event.recipes.gtceu.centrifuge("gtceu:centrifuge_agglomeratio")
        .itemInputs("#forge:dusts/inferium")
        .chancedOutput(`mysticalagriculture:air_agglomeratio`, 2000, 1500)
        .chancedOutput(`mysticalagriculture:fire_agglomeratio`, 2000, 1500)
        .chancedOutput(`mysticalagriculture:earth_agglomeratio`, 2000, 1500)
        .chancedOutput(`mysticalagriculture:water_agglomeratio`, 2000, 1500)
        .duration(240)
        .EUt(30)

    event.recipes.gtceu.agricultural_fabrication("gtceu:essence_seeds/prosperity_base")
        .itemInputs("#forge:seeds", "4x gtceu:prosperity_dust")
        .itemOutputs("mysticalagriculture:prosperity_seed_base")
        .duration(140)
        .EUt(30)

    event.recipes.gtceu.agricultural_fabrication("gtceu:essence_seeds/inferium")
        .itemInputs("8x #forge:dusts/inferium", "mysticalagriculture:prosperity_seed_base")
        .itemOutputs("mysticalagriculture:inferium_seeds")
        .duration(140)
        .EUt(30)

    element_essences.forEach(ele =>{
        event.recipes.gtceu.agricultural_fabrication(`gtceu:essence_seeds/${ele}`)
            .itemInputs(`4x mysticalagriculture:${ele}_agglomeratio`, "mysticalagriculture:prosperity_seed_base")
            .itemOutputs(`mysticalagriculture:${ele}_seeds`)
            .duration(140)
            .EUt(30)
    })

    for (const [target, [in0, in1, in2, in3]] of basic_essences){
        event.recipes.gtceu.agricultural_fabrication(`gtceu:essence/${target}`)
            .itemInputs(`mysticalagriculture:${in0}_essence`, `mysticalagriculture:${in1}_essence`, `mysticalagriculture:${in2}_essence`, `mysticalagriculture:${in3}_essence`)
            .itemOutputs(`mysticalagriculture:${target}_essence`)
            .duration(280)
            .EUt(20)
        for (const [tier, mult] of tier_inferium){
            event.recipes.gtceu.agricultural_fabrication(`gtceu:essence_seeds/${target}_${tier}`)
                .itemInputs(`4x mysticalagriculture:${target}_essence`, "mysticalagriculture:prosperity_seed_base")
                .inputFluids(`gtceu:${tier} 144`)
                .itemOutputs(`${mult}x mysticalagriculture:${target}_seeds`)
                .duration(320)
                .EUt(30)
        }
    }

    event.recipes.gtceu.synthetic_solid('debug')
        .itemInputs('minecraft:sugar')
        .itemOutputs('minecraft:sugar')
        .duration(40)
        .EUt(24)
})