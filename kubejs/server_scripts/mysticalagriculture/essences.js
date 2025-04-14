ServerEvents.recipes(event =>{
    
    const element_essences = ["air", "earth", "fire", "water"]
    const tier_inferium = [["inferium", 1], ["prudentium", 2], ["tertium", 4], ["imperium", 8], ["supremium", 16], ["insanium", 32]]

    
    const allEssences = [
        
        // Basicas = Ar, Terra, Agua, Fogo, Pedra, Terra, Gelo, Deepslate, Nature, Dye, Coal, Honey, Amethyst, Prismarino, Porco, Galinha, Vaca, Ovelha, Squid, Peixe, Ferro, Cobre, Redstone, Glowstone, Obsidian, Borracha, Sulfur, Saltpeter, Apatite, Tin, Zinc.
        ["stone", ["fire", "water"], 7],
        ["dirt", ["stone", "earth"], 7],
        ["ice", ["stone", "water"], 7],
        ["deepslate", ["stone", "fire"], 24],
        ["nature", ["earth", "water"], 7],
        ["fish", ["cow", "water"], 24],
        ["squid", ["fish", "water"], 24],
        ["pig", ["nature", "dirt", "water"], 24],
        ["chicken", ["nature", "air", "water"], 24],
        ["cow", ["nature", "ice", "water"], 24],
        ["sheep", ["nature", "dye", "water"], 24],
        ["coal", ["earth", "fire"], 24],
        ["amethyst", ["stone", "deepslate"], 24],
        ["dye", ["nature", "amethyst"], 7],
        ["prismarine", ["water", "deepslate"], 24],
        ["iron", ["coal", "stone"], 24],
        ["copper", ["iron", "earth"], 24],
        ["redstone", ["coal", "earth"], 7],
        ["glowstone", ["redstone", "air"], 7],
        ["obsidian", ["iron", "fire"], 24],
        ["sulfur", ["glowstone", "earth"], 24],
        ["rubber", ["nature", "sulfur"], 24],
        ["saltpeter", ["sulfur", "earth"], 24],
        ["apatite", ["saltpeter", "earth"], 24],
        ["tin", ["copper", "earth"], 24],
        ["zinc", ["tin", "earth"], 24],

        
        // Avançadas = Nether, End, Experiencia, Slime, Zumbi, Esqueleto, Creeper, Aranha, Blaze, Ghast, Enderman, Wither Skeleton, Ouro, Lapis, Diamante, Esmeralda, Netherite, Aluminum, Silver, Lead, Graphite, Nickel, Tungsten, Titanium, Uranium, Chrome, Ruby, Sapphire, Solium, Platinum
        ["nether", ["redstone", "glowstone", "obsidian"], 120],
        ["end", ["nether", "enderman"], 480],
        ["experience", ["zombie", "creeper", "skeleton", "spider"], 480],
        ["slime", ["experience", "rubber"], 120],
        ["zombie", ["stone", "dirt", "iron", "nature"], 120],
        ["skeleton", ["tin", "zombie"], 120],
        ["creeper", ["zombie", "sulfur", "saltpeter"], 120],
        ["spider", ["stone", "copper", "nature"], 120],
        ["blaze", ["nature", "fire", "nether"], 480],
        ["ghast", ["nether", "air", "creeper"], 120],
        ["enderman", ["experience", "diamond"], 480],
        ["wither_skeleton", ["nether", "skeleton", "coal", "experience"], 480],
        ["gold", ["stone", "iron", "glowstone"], 120],
        ["lapis_lazuli", ["deepslate", "copper", "experience"], 120],
        ["diamond", ["deepslate", "obsidian", "gold", "experience"], 480],
        ["emerald", ["deepslate", "diamond"], 480],
        ["netherite", ["nether", "diamond", "emerald", "gold"], 1920],
        ["aluminum", ["stone", "iron", "water"], 120],
        ["silver", ["aluminum", "gold"], 120],
        ["lead", ["deepslate", "iron"], 120],
        ["graphite", ["deepslate", "coal"], 120],
        ["nickel", ["iron", "aluminum"], 120], 
        ["tungsten", ["end", "iron", "chrome"], 1920],
        ["titanium", ["end", "aluminum", "sapphire"], 1920],
        ["uranium", ["nether", "end", "coal", "blaze", "lead", "fire"], 480],
        ["chrome", ["end", "ruby"], 480],
        ["ruby", ["deepslate", "redstone", "aluminum"], 120],
        ["sapphire", ["deepslate", "lapis_lazuli", "aluminum"], 120],
        ["soulium", ["stone", "nether", "earth"], 120],
        ["platinum", ["end", "tin"], 480],
        ["certus_quartz", ["iron", "dirt", "air"], 120],
        ["nether_quartz", ["nether", "certus_quartz"], 120],
        ["fluix", ["certus_quartz", "nether_quartz", "redstone"], 120]
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

    for (const [target, inputs, cost] of allEssences){
        event.recipes.gtceu.agricultural_fabrication(`essence/${target}`)
            .itemInputs(
                `mysticalagriculture:${inputs[0]}_essence`, 
                `mysticalagriculture:${inputs[1]}_essence`, 
                `mysticalagriculture:${inputs[2]}_essence`, 
                `mysticalagriculture:${inputs[3]}_essence`,
                `mysticalagriculture:${inputs[4]}_essence`,
                `mysticalagriculture:${inputs[5]}_essence`
            )
            .itemOutputs(`mysticalagriculture:${target}_essence`)
            .duration(380)
            .EUt(cost) 
        for (const [tier, mult] of tier_inferium){
            event.recipes.gtceu.agricultural_fabrication(`essence_seeds/${target}_${tier}`)
                .itemInputs(`4x mysticalagriculture:${target}_essence`, "mysticalagriculture:prosperity_seed_base")
                .inputFluids(`gtceu:${tier} 144`)
                .itemOutputs(`${mult}x mysticalagriculture:${target}_seeds`)
                .duration(320)
                .EUt(30)
        }
    }

})