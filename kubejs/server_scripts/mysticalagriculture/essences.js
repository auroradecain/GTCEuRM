ServerEvents.recipes(event =>{
    
    const element_essences = ["air", "earth", "fire", "water"]
    const tier_inferium = [["inferium", 1], ["prudentium", 2], ["tertium", 4], ["imperium", 8], ["supremium", 16], ["insanium", 32]]

    
    const allEssences = [
        
        // Basicas = Ar, Terra, Agua, Fogo, Pedra, Terra, Gelo, Deepslate, Nature, Dye, Coal, Honey, Amethyst, Prismarino, Porco, Galinha, Vaca, Ovelha, Squid, Peixe, Ferro, Cobre, Redstone, Glowstone, Obsidian, Borracha, Sulfur, Saltpeter, Apatite, Tin, Zinc.
        ["stone", ["fire", "water"], [2, 2], 7],
        ["dirt", ["stone", "earth"], [2, 1], 7],
        ["ice", ["stone", "water"], [1, 2], 7],
        ["deepslate", ["stone", "fire"], [4, 4], 24],
        ["nature", ["earth", "water"], [3, 4], 7],
        ["fish", ["cow", "water"], [3, 4], 24],
        ["squid", ["fish", "water"], [2, 3], 24],
        ["pig", ["nature", "dirt", "water"], [3, 4, 2], 24],
        ["chicken", ["nature", "air", "water"], [3, 4, 2], 24],
        ["cow", ["nature", "ice", "water"], [3, 4, 2], 24],
        ["sheep", ["nature", "dye", "water"], [3, 4, 2], 24],
        ["coal", ["earth", "fire"], [3, 4], 24],
        ["amethyst", ["stone", "deepslate"], [4, 3], 24],
        ["dye", ["nature", "amethyst"], [3, 2], 7],
        ["prismarine", ["water", "deepslate"], [4, 3], 24],
        ["iron", ["coal", "stone"], [3, 2], 24],
        ["copper", ["iron", "earth"], [2, 4], 24],
        ["redstone", ["coal", "earth"], [1, 3], 7],
        ["glowstone", ["redstone", "air"], [3, 2], 7],
        ["obsidian", ["iron", "fire"], [3, 2], 24],
        ["sulfur", ["glowstone", "earth"], [1, 3], 24],
        ["rubber", ["nature", "sulfur"], [2, 2], 24],
        ["saltpeter", ["sulfur", "earth"], [2, 1], 24],
        ["apatite", ["saltpeter", "earth"], [2, 4], 24],
        ["tin", ["copper", "earth"], [2, 3], 24],
        ["zinc", ["tin", "earth"], [4, 3], 24],

        
        // Avançadas = Nether, End, Experiencia, Slime, Zumbi, Esqueleto, Creeper, Aranha, Blaze, Ghast, Enderman, Wither Skeleton, Ouro, Lapis, Diamante, Esmeralda, Netherite, Aluminum, Silver, Lead, Graphite, Nickel, Tungsten, Titanium, Uranium, Chrome, Ruby, Sapphire, Solium, Platinum
        ["nether", ["redstone", "glowstone", "obsidian"], [4, 4, 4], 120],
        ["end", ["nether", "enderman"], [4, 8], 480],
        ["experience", ["zombie", "creeper", "skeleton", "spider"], [16, 16, 16, 16], 480],
        ["slime", ["experience", "rubber"], [4, 8], 120],
        ["zombie", ["stone", "dirt", "iron", "nature"], [8, 8, 4, 4], 120],
        ["skeleton", ["tin", "zombie"], [2, 3], 120],
        ["creeper", ["zombie", "sulfur", "saltpeter"], [3, 2, 2], 120],
        ["spider", ["stone", "copper", "nature"], [3, 2, 2], 120],
        ["blaze", ["nature", "fire", "nether"], [2, 3, 6], 480],
        ["ghast", ["nether", "air", "creeper"], [3, 4, 2], 120],
        ["enderman", ["experience", "diamond"], [8, 8], 480],
        ["wither_skeleton", ["nether", "skeleton", "coal", "experience"], [4, 2, 3, 4], 480],
        ["gold", ["stone", "iron", "glowstone"], [3, 2, 2], 120],
        ["lapis_lazuli", ["deepslate", "copper", "experience"], [3, 3, 4], 120],
        ["diamond", ["deepslate", "obsidian", "gold", "experience"], [16, 8, 4, 4], 480],
        ["emerald", ["deepslate", "diamond"], [4, 4], 480],
        ["netherite", ["nether", "diamond", "emerald", "gold"], [16, 16, 16, 16], 1920],
        ["aluminum", ["stone", "iron", "water"], [4, 4, 3], 120],
        ["silver", ["aluminum", "gold"], [3, 2], 120],
        ["lead", ["deepslate", "iron"], [3, 2], 120],
        ["graphite", ["deepslate", "coal"], [3, 2], 120],
        ["nickel", ["iron", "aluminum"], [2, 2], 120], 
        ["tungsten", ["end", "iron", "chrome"], [8, 4, 3], 1920],
        ["titanium", ["end", "aluminum", "sapphire"], [8, 4, 3], 1920],
        ["uranium", ["nether", "end", "coal", "lead"], [8, 8, 4, 4], 480],
        ["chrome", ["end", "ruby"], [3, 4], 480],
        ["ruby", ["deepslate", "redstone", "aluminum"], [4, 3, 3], 120],
        ["sapphire", ["deepslate", "lapis_lazuli", "aluminum"], [3, 2, 3], 120],
        ["soulium", ["stone", "nether", "earth"], [3, 4, 3], 120],
        ["platinum", ["end", "tin"], [8, 8], 480],
        ["certus_quartz", ["iron", "dirt", "air"], [3, 2, 4], 120],
        ["nether_quartz", ["nether", "certus_quartz"], [3, 2], 120],
        ["fluix", ["certus_quartz", "nether_quartz", "redstone"], [2, 2, 1], 120]
    ]

    element_essences.forEach(ele =>{
        event.recipes.gtceu.agricultural_fabrication(`elemental_seeds/${ele}`)
            .itemInputs(`2x mysticalagriculture:${ele}_agglomeratio`, "mysticalagriculture:prosperity_seed_base")
            .itemOutputs(`mysticalagriculture:${ele}_seeds`)
            .duration(140)
            .EUt(30)
        for (const [tier, mult] of tier_inferium){
            event.recipes.gtceu.agricultural_fabrication(`essence_seeds/${ele}_${tier}`)
                .itemInputs(`4x mysticalagriculture:${ele}_essence`, 'mysticalagriculture:prosperity_seed_base')
                .inputFluids(`gtceu:${tier} 144`)
                .itemOutputs(`${mult}x mysticalagriculture:${ele}_seeds`)
                .duration(320)
                .EUt(30)
        }
    })

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
        for (const [tier, mult] of tier_inferium){
            event.recipes.gtceu.agricultural_fabrication(`essence_seeds/${target}_at_${tier}`)
                .itemInputs(`4x mysticalagriculture:${target}_essence`, "mysticalagriculture:prosperity_seed_base")
                .inputFluids(`gtceu:${tier} 144`)
                .itemOutputs(`${mult}x mysticalagriculture:${target}_seeds`)
                .duration(320)
                .EUt(30)
        }
    }

})