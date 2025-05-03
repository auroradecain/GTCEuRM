ServerEvents.recipes(event =>{
    
    const seedMake = (type) =>{    

        const tier_inferium = [["inferium", 1], ["prudentium", 2], ["tertium", 4], ["imperium", 8], ["supremium", 16], ["insanium", 32]]

        for (const [tier, mult] of tier_inferium){
            event.recipes.gtceu.agricultural_fabrication(`essence_seeds/${type}_at_${tier}`)
                .itemInputs(`4x mysticalagriculture:${type}_essence`, "mysticalagriculture:prosperity_seed_base")
                .inputFluids(`gtceu:${tier} 144`)
                .itemOutputs(`${mult}x mysticalagriculture:${type}_seeds`)
                .duration(320)
                .EUt(30)
        }

    }

    // const element_essences = ["air", "earth", "fire", "water"]
    
    // element_essences.forEach(ele =>{
    //     event.recipes.gtceu.agricultural_fabrication(`elemental_seeds/${ele}`)
    //         .itemInputs(`2x mysticalagriculture:${ele}_agglomeratio`, "mysticalagriculture:prosperity_seed_base")
    //         .itemOutputs(`mysticalagriculture:${ele}_seeds`)
    //         .duration(140)
    //         .EUt(30)
    //     seedMake(ele)
    // })

    ["air", "earth", "fire", "water"].forEach(ele =>{
        event.recipes.gtceu.agricultural_fabrication(`elemental_seeds/${ele}`)
            .itemInputs(`2x mysticalagriculture:${ele}_agglomeratio`, "mysticalagriculture:prosperity_seed_base")
            .itemOutputs(`mysticalagriculture:${ele}_seeds`)
            .duration(140)
            .EUt(30)
        seedMake(ele)
    })

    // Life seed
    event.recipes.gtceu.agricultural_fabrication('essence/life')
        .circuit(1)
        .itemInputs('8x mysticalagriculture:air_essence', '8x mysticalagriculture:earth_essence', '8x mysticalagriculture:water_essence', '8x mysticalagriculture:fire_essence')
        .itemOutputs('mysticalagriculture:life_essence')
        .duration(380)
        .EUt(7)
    seedMake('life')

    const allEssences = [
        
        // LV
        ["nature", ["life", "earth", "water", "air"], [3, 2, 2, 2], 7],
        ["stone", ["nature", "fire", "water", "earth"], [1, 2, 2, 2], 7],
        ["dirt", ["nature", "stone", "earth", "water"], [1, 2, 2, 1], 7],
        ["ice", ["nature", "stone", "water", "air"], [1, 1, 2, 1], 7],
        ["deepslate", ["stone", "fire"], [4, 4], 24],
        ["sky_stone", ["stone", "obsidian"], [4, 4], 24],
        ["fish", ["life", "cow", "water"], [3, 2, 4], 24],
        ["squid", ["life", "fish", "water"], [2, 2, 3], 24],
        ["pig", ["life", "nature", "dirt", "water"], [2, 3, 4, 2], 24],
        ["chicken", ["life", "nature", "air", "water"], [1, 3, 4, 2], 24],
        ["cow", ["life", "nature", "ice", "water"], [2, 3, 4, 2], 24],
        ["sheep", ["life", "nature", "dye", "water"], [2, 3, 4, 2], 24],
        ["coal", ["nature", "earth", "fire"], [1, 3, 4], 24],
        ["amethyst", ["stone", "deepslate", "earth"], [4, 3, 2], 24],
        ["dye", ["nature", "amethyst"], [3, 2], 7],
        ["prismarine", ["nature", "water", "glowstone", "deepslate"], [4, 3, 2, 3], 24],
        ["iron", ["coal", "stone"], [3, 2], 24],
        ["copper", ["iron", "earth"], [2, 4], 24],
        ["redstone", ["iron", "coal", "earth"], [1, 2, 2], 24],
        ["glowstone", ["redstone", "air"], [3, 2], 24],
        ["obsidian", ["iron", "fire"], [3, 2], 24],
        ["sulfur", ["glowstone", "earth"], [1, 3], 24],
        ["rubber", ["nature", "sulfur"], [2, 2], 24],
        ["saltpeter", ["sulfur", "earth"], [2, 1], 24],
        ["apatite", ["saltpeter", "earth"], [2, 4], 24],
        ["tin", ["copper", "iron", "earth"], [2, 1, 3], 24],
        ["zinc", ["tin", "earth"], [4, 3], 24],
        
        // MV to EV
        ["nether", ["redstone", "glowstone", "obsidian"], [4, 4, 4], 120],
        ["end", ["nether", "enderman"], [4, 8], 480],
        ["experience", ["zombie", "creeper", "skeleton", "spider"], [16, 16, 16, 16], 120],
        ["slime", ["life", "experience", "rubber"], [3, 4, 8], 120],
        ["zombie", ["life", "dirt", "iron", "nature"], [8, 8, 4, 4], 120],
        ["skeleton", ["tin", "zombie"], [2, 3], 120],
        ["creeper", ["zombie", "sulfur", "saltpeter"], [3, 2, 2], 120],
        ["spider", ["life", "stone", "copper", "nature"], [2, 3, 2, 2], 120],
        ["blaze", ["life", "nature", "fire", "nether"], [2, 2, 3, 6], 480],
        ["ghast", ["nether", "air", "creeper"], [3, 4, 2], 120],
        ["enderman", ["life", "experience", "diamond"], [4, 8, 8], 480],
        ["wither_skeleton", ["nether", "skeleton", "coal", "experience"], [4, 2, 3, 4], 480],
        ["oilsands", ["dirt", "coal", "earth", "water"], [8, 2, 3, 2], 120],
        ["gold", ["stone", "iron", "glowstone"], [3, 2, 2], 120],
        ["lapis_lazuli", ["deepslate", "copper", "experience"], [3, 3, 4], 120],
        ["topaz", ["amethyst", "earth", "fire"], [2, 4, 4], 120],
        ["antimony", ["stone", "lead", "copper"], [8, 4, 3], 120],
        ["molybdenum", ["antimony", "earth", "water"], [3, 4, 4], 120],
        ["tantalum", ["molybdenum", "dirt", "earth"], [2, 4, 3], 120],
        ["salts", ["dirt", "nature", "water", "air"], [2, 3, 4, 2], 120],
        ["barium", ["dirt", "salts", "lead"], [3, 3, 4], 120],
        ["niobium", ["lead", "zinc", "earth"], [3, 3, 4], 480],
        ["manganese", ["molybdenum", "niobium", "earth"], [2, 3, 4], 480],
        ["garnet", ["stone", "aluminum", "earth", "air"], [3, 3, 4, 4], 120],
        ["naquadah", ["end", "uranium", "lead", "earth"], [8, 3, 2, 4], 480],
        ["diamond", ["deepslate", "obsidian", "gold", "experience"], [16, 8, 4, 4], 120],
        ["emerald", ["deepslate", "diamond"], [4, 4], 480],
        ["netherite", ["nether", "diamond", "emerald", "gold"], [16, 16, 16, 16], 1920],
        ["aluminum", ["stone", "iron", "water"], [4, 4, 3], 120],
        ["vidium", ["stone", "copper", "earth"], [4, 3, 4], 120],
        ["silver", ["aluminum", "gold"], [3, 2], 120],
        ["lead", ["deepslate", "iron"], [3, 2], 120],
        ["graphite", ["deepslate", "coal"], [3, 2], 120],
        ["nickel", ["iron", "aluminum"], [2, 2], 120], 
        ["tungsten", ["end", "iron", "chrome"], [8, 4, 3], 1920],
        ["titanium", ["end", "aluminum", "sapphire"], [8, 4, 3], 1920],
        ["uranium", ["nether", "end", "coal", "lead"], [8, 8, 4, 4], 480],
        ["chrome", ["end", "ruby"], [3, 4], 480],
        ["avisium", ["end", "chrome", "vidium"], [8, 4, 3], 480],
        ["ruby", ["deepslate", "redstone", "aluminum"], [4, 3, 3], 120],
        ["sapphire", ["deepslate", "lapis_lazuli", "aluminum"], [3, 2, 3], 120],
        ["soulium", ["stone", "nether", "earth"], [3, 4, 3], 120],
        ["platinum", ["end", "tin"], [8, 8], 480],
        ["certus_quartz", ["iron", "dirt", "air"], [3, 2, 4], 120],
        ["nether_quartz", ["nether", "certus_quartz"], [3, 2], 120],
        ["fluix", ["certus_quartz", "nether_quartz", "redstone"], [2, 2, 1], 120]
    ]

    for (const [target, inputs, amntInputs, cost] of allEssences){
        event.recipes.gtceu.agricultural_fabrication(`essence/${target}`)
            .itemInputs(
                `${amntInputs[0]}x mysticalagriculture:${inputs[0]}_essence`, 
                `${amntInputs[1]}x mysticalagriculture:${inputs[1]}_essence`, 
                `${amntInputs[2]}x mysticalagriculture:${inputs[2]}_essence`, 
                `${amntInputs[3]}x mysticalagriculture:${inputs[3]}_essence`,
                `${amntInputs[4]}x mysticalagriculture:${inputs[4]}_essence`,
                `${amntInputs[5]}x mysticalagriculture:${inputs[5]}_essence`
            )
            .itemOutputs(`mysticalagriculture:${target}_essence`)
            .duration(380)
            .EUt(cost) 
        seedMake(target)
    }



})