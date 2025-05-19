ServerEvents.recipes(event =>{

    // Fluid

    function synthMat(type, id, ess, amntIn, out, amntOut, tick, volt, c){
        switch(type){
            case "fluid":
                event.recipes.gtceu.synthetic_fluid(`essence/${id}`)
                    .itemInputs(`${amntIn}x mysticalagriculture:${ess}_essence`)
                    .outputFluids(`${out} ${amntOut}`)
                    .duration(tick)
                    .EUt(GTValues.VH[volt])
                    .circuit(c)
                break;
            case "solid":
                event.recipes.gtceu.synthetic_solid(`essence/${id}`)
                    .itemInputs(`${amntIn}x mysticalagriculture:${ess}_essence`)
                    .itemOutputs(Item.of(out, amntOut))
                    .duration(tick)
                    .EUt(GTValues.VH[volt])
                    .circuit(c)
                break;
            case "lifeform":
                event.recipes.gtceu.synthetic_lifeform(`essence/${id}`)
                    .itemInputs(`${amntIn}x mysticalagriculture:${ess}_essence`)
                    .itemOutputs(Item.of(out, amntOut))
                    .duration(tick)
                    .EUt(GTValues.VH[volt])
                    .circuit(c)
                break;
        }
    }

    // FLUIDS
    const fluidEssence = [   
        // Air
        ["fluid", "air/oxygen", "air", 1, "gtceu:oxygen", 4000, 110, GTValues.LV, 1],
        ["fluid", "air/carbon_dioxide", "air", 1, "gtceu:carbon_dioxide", 1000,  90, GTValues.LV, 2],
        ["fluid", "air/nitrogen", "air", 1, "gtceu:nitrogen", 3000, 110, GTValues.LV, 3],
        // Water
        ["fluid", "water/water", "water", 1, "minecraft:water", 4000, 90, GTValues.LV, 1],
        ["fluid", "water/salt_water", "water", 1, "gtceu:salt_water", 2000, 110, GTValues.LV, 2],
        // Fire
        ["fluid", "fire/lava", "fire", 1, "minecraft:lava", 2000, 70, GTValues.LV, 1],
        // Nether
        ["fluid", "nether/hydrogen_sulfide", "nether", 1, "gtceu:hydrogen_sulfide", 3000, 90, GTValues.MV, 1],
        ["fluid", "nether/carbon_monoxide", "nether", 1, "gtceu:carbon_monoxide", 8000, 90, GTValues.MV, 2],
        ["fluid", "nether/sulfur_dioxide", "nether", 1, "gtceu:sulfur_dioxide", 3000, 70, GTValues.MV, 3],
        ["fluid", "nether/coal_gas", "nether", 1, "gtceu:coal_gas", 2000, 90, GTValues.MV, 4],
        // End
        ["fluid", "end/nitrogen_dioxide", "end", 1, "gtceu:nitrogen_dioxide", 7000, 70, GTValues.MV, 1],
        ["fluid", "end/deuterium", "end", 1, "gtceu:deuterium", 2400, 90, GTValues.MV, 2],
        ["fluid", "end/helium", "end", 1, "gtceu:helium", 3600, 90, GTValues.MV, 3],
        ["fluid", "end/tritium", "end", 1, "gtceu:tritium", 500, 160, GTValues.EV, 4],
        // Experience
        ["fluid", "experience/xp_juice", "experience", 1, "enderio:xp_juice", 2000, 160, GTValues.HV, 1]
    ]

    for(const [type, id, inputEssence, amountRecipe, output, amountOutput, duration, voltage, circuit] of fluidEssence){
        synthMat(type, id, inputEssence, amountRecipe, output, amountOutput, duration, voltage, circuit)
    }
    
    // SOLIDS

    const solidEssence = [
        // Earth category
        ["solid", "earth/gravel", "earth", 4, "minecraft:gravel", 48, 90, GTValues.MV, 1],
        ["solid", "earth/fullers", "earth", 8, "gtceu:raw_fullers_earth", 6, 70, GTValues.MV, 2],
        ["solid", "earth/lithium", "earth", 8, "gtceu:raw_lithium", 4, 90, GTValues.EV, 3],
        ["solid", "earth/asbestos", "earth", 8, "gtceu:raw_asbestos", 4, 90, GTValues.HV, 4],
        ["solid", "earth/magnesite", "earth", 8, "gtceu:raw_magnesite", 4, 110, GTValues.HV, 5],
        ["solid", "earth/calcite", "earth", 8, "gtceu:raw_calcite", 6, 110, GTValues.MV, 6],
        ["solid", "earth/tadanite_earth", "earth", 8, "gtceu:raw_tadanite_earth", 6, 130, GTValues.HV, 7],
        // Stone category
        ["solid", "stone/stone", "stone", 1, "minecraft:stone", 48, 40, GTValues.LV, 1],
        ["solid", "stone/granite", "stone", 1, "minecraft:granite", 16, 120, GTValues.HV, 2],
        ["solid", "stone/diorite", "stone", 1, "minecraft:diorite", 16, 120, GTValues.HV, 3],
        ["solid", "stone/andesite", "stone", 1, "minecraft:andesite", 16, 120, GTValues.HV, 4],
        ["solid", "stone/shale", "stone", 1, "quark:shale", 16, 120, GTValues.HV, 5],
        ["solid", "stone/jasper", "stone", 1, "quark:jasper", 16, 120, GTValues.HV, 6],
        ["solid", "stone/limestone", "stone", 1, "quark:limestone", 16, 120, GTValues.HV, 7],
        ["solid", "stone/marble", "stone", 1, "gtceu:marble", 16, 120, GTValues.HV, 8],
        ["solid", "stone/red_granite", "stone", 1, "gtceu:red_granite", 16, 120, GTValues.EV, 9],
        // Sky stone
        ["solid", "sky_stone/sky_stone", "sky_stone", 1, "ae2:sky_stone_block", 8, 144, GTValues.MV, 1],
        // Dirt category
        ["solid", "dirt/dirt", "dirt", 4, "minecraft:dirt", 48, 80, GTValues.MV, 1],
        ["solid", "dirt/clay", "dirt", 4, "minecraft:clay", 16, 80, GTValues.MV, 2],
        ["solid", "dirt/sand", "dirt", 4, "minecraft:sand", 24, 80, GTValues.MV, 3],
        ["solid", "dirt/podzel", "dirt", 4, "minecraft:podzel", 24, 80, GTValues.MV, 4],
        ["solid", "dirt/mycelium", "dirt", 4, "minecraft:mycelium", 24, 80, GTValues.MV, 5],
        // Ice category
        ["solid", "ice/ice", "ice", 4, "minecraft:ice", 24, 80, GTValues.MV, 1],
        ["solid", "ice/snow", "ice", 4, "minecraft:snow", 32, 80, GTValues.MV, 2],
        ["solid", "ice/packed_ice", "ice", 8, "minecraft:packed_ice", 16, 80, GTValues.MV, 3],
        // Deepslate category
        ["solid", "deepslate/deepslate", "deepslate", 4, "minecraft:deepslate", 16, 80, GTValues.HV, 1],
        ["solid", "deepslate/basalt", "deepslate", 4, "minecraft:basalt", 16, 80, GTValues.HV, 2],
        ["solid", "deepslate/blackstone", "deepslate", 4, "minecraft:blackstone", 16, 80, GTValues.HV, 3],
        // Nature category
        ["solid", "nature/oak_sapling", "nature", 4, "minecraft:oak_sapling", 8, 80, GTValues.MV, 1],
        ["solid", "nature/birch_sapling", "nature", 4, "minecraft:birch_sapling", 8, 80, GTValues.MV, 2],
        ["solid", "nature/jungle_sapling", "nature", 4, "minecraft:jungle_sapling", 8, 80, GTValues.MV, 3],
        ["solid", "nature/acacia_sapling", "nature", 4, "minecraft:acacia_sapling", 8, 80, GTValues.MV, 4],
        ["solid", "nature/dark_oak_sapling", "nature", 4, "minecraft:dark_oak_sapling", 8, 80, GTValues.MV, 5],
        ["solid", "nature/cherry_sapling", "nature", 4, "minecraft:cherry_sapling", 8, 80, GTValues.MV, 6],
        ["solid", "nature/cactus", "nature", 4, "minecraft:cactus", 16, 80, GTValues.MV, 7],
        ["solid", "nature/bamboo", "nature", 4, "minecraft:bamboo", 12, 80, GTValues.MV, 8],
        ["solid", "nature/lily_pad", "nature", 4, "minecraft:lily_pad", 6, 80, GTValues.MV, 9],
        // Dye category
        ["solid", "dye/white", "dye", 3, "gtceu:chemical_white_dye", 8, 80, GTValues.MV, 1],
        ["solid", "dye/black", "dye", 3, "gtceu:chemical_black_dye", 8, 80, GTValues.MV, 2],
        ["solid", "dye/red", "dye", 3, "gtceu:chemical_red_dye", 8, 80, GTValues.MV, 3],
        ["solid", "dye/pink", "dye", 3, "gtceu:chemical_pink_dye", 8, 80, GTValues.MV, 4],
        ["solid", "dye/yellow", "dye", 3, "gtceu:chemical_yellow_dye", 8, 80, GTValues.MV, 5],
        ["solid", "dye/orange", "dye", 3, "gtceu:chemical_orange_dye", 8, 80, GTValues.MV, 6],
        ["solid", "dye/green", "dye", 3, "gtceu:chemical_green_dye", 8, 80, GTValues.MV, 7],
        ["solid", "dye/lime", "dye", 3, "gtceu:chemical_lime_dye", 8, 80, GTValues.MV, 8],
        ["solid", "dye/magenta", "dye", 3, "gtceu:chemical_magenta_dye", 8, 80, GTValues.MV, 9],
        ["solid", "dye/purple", "dye", 3, "gtceu:chemical_purple_dye", 8, 80, GTValues.MV, 10],
        ["solid", "dye/brown", "dye", 3, "gtceu:chemical_brown_dye", 8, 80, GTValues.MV, 11],
        ["solid", "dye/blue", "dye", 3, "gtceu:chemical_blue_dye", 8, 80, GTValues.MV, 12],
        ["solid", "dye/light_blue", "dye", 3, "gtceu:chemical_light_blue_dye", 8, 80, GTValues.MV, 13],
        ["solid", "dye/cyan", "dye", 3, "gtceu:chemical_cyan_dye", 8, 80, GTValues.MV, 14],
        ["solid", "dye/gray", "dye", 3, "gtceu:chemical_gray_dye", 8, 80, GTValues.MV, 15],
        ["solid", "dye/light_gray", "dye", 3, "gtceu:chemical_light_gray_dye", 8, 80, GTValues.MV, 16],
        // Miscellaneous solids
        ["solid", "rubber", "rubber", 4, "gtceu:sticky_resin", 6, 80, GTValues.MV, 1],
        ["solid", "glowstone", "glowstone", 8, "minecraft:glowstone_dust", 24, 80, GTValues.MV, 1],
        ["solid", "obsidian", "obsidian", 8, "minecraft:obsidian", 12, 80, GTValues.MV, 1],
        ["solid", "fluix", "fluix", 4, "gtceu:fluix_gem", 8, 80, GTValues.MV, 1],
        // Basic materials
        ["solid", "coal", "coal", 8, "gtceu:raw_coal", 6, 80, GTValues.MV, 1],
        ["solid", "amethyst", "amethyst", 8, "gtceu:raw_amethyst", 4, 80, GTValues.MV, 1],
        ["solid", "sulfur", "sulfur", 8, "gtceu:raw_sulfur", 6, 80, GTValues.MV, 1],
        ["solid", "aluminium", "aluminum", 8, "gtceu:raw_bauxite", 4, 80, GTValues.MV, 1],
        ["solid", "saltpeter", "saltpeter", 8, "gtceu:raw_saltpeter", 6, 80, GTValues.MV, 1],
        ["solid", "apatite", "apatite", 8, "gtceu:raw_apatite", 4, 80, GTValues.MV, 1],
        // Iron variants
        ["solid", "iron/iron", "iron", 8, "minecraft:raw_iron", 4, 80, GTValues.MV, 1],
        ["solid", "iron/goethite", "iron", 8, "gtceu:raw_goethite", 6, 80, GTValues.MV, 2],
        ["solid", "iron/magnetite", "iron", 8, "gtceu:raw_magnetite", 6, 80, GTValues.MV, 3],
        ["solid", "iron/pyrite", "iron", 8, "gtceu:raw_pyrite", 6, 80, GTValues.MV, 4],
        // Copper variants
        ["solid", "copper/copper", "copper", 8, "minecraft:raw_copper", 4, 80, GTValues.MV, 1],
        ["solid", "copper/tetrahedrite", "copper", 8, "gtceu:raw_tetrahedrite", 6, 80, GTValues.MV, 2],
        ["solid", "copper/malachite", "copper", 8, "gtceu:raw_malachite", 6, 80, GTValues.MV, 3],
        ["solid", "copper/chalcopyrite", "copper", 8, "gtceu:raw_chalcopyrite", 6, 80, GTValues.MV, 4],
        // Quartz
        ["solid", "nether_quartz", "nether_quartz", 8, "gtceu:raw_nether_quartz", 6, 80, GTValues.MV, 1],
        // Tin variants
        ["solid", "tin/tin", "tin", 8, "gtceu:raw_tin", 4, 80, GTValues.MV, 1],
        ["solid", "tin/cassiterite", "tin", 8, "gtceu:raw_cassiterite", 6, 80, GTValues.MV, 2],
        ["solid", "tin/cassiterite_sand", "tin", 8, "gtceu:raw_cassiterite_sand", 6, 80, GTValues.MV, 3],
        // Other metals
        ["solid", "zinc", "zinc", 8, "gtceu:raw_sphalerite", 4, 80, GTValues.MV, 1],
        ["solid", "silver", "silver", 8, "gtceu:raw_silver", 4, 80, GTValues.MV, 1],
        ["solid", "barium", "barium", 8, "gtceu:raw_barite", 4, 80, GTValues.MV, 1],
        ["solid", "tantalum", "tantalum", 8, "gtceu:raw_tantalite", 4, 80, GTValues.MV, 1],
        ["solid", "manganese", "manganese", 4, "gtceu:raw_pyrolusite", 8, 80, GTValues.MV, 1],
        ["solid", "niobium", "niobium", 4, "gtceu:raw_pyrochlore", 8, 80, GTValues.MV, 1],
        ["solid", "antimony", "antimony", 4, "gtceu:raw_stibnite", 8, 80, GTValues.MV, 1],
        ["solid", "vidium", "vidium", 8, "gtceu:raw_vidium", 4, 80, GTValues.MV, 1],
        // Topaz
        ["solid", "topaz/topaz", "topaz", 8, "gtceu:raw_topaz", 4, 80, GTValues.MV, 1],
        ["solid", "topaz/blue_topaz", "topaz", 8, "gtceu:raw_blue_topaz", 4, 80, GTValues.MV, 2],
        // Garnet
        ["solid", "garnet/sand", "garnet", 8, "gtceu:raw_garnet_sand", 6, 80, GTValues.MV, 1],
        ["solid", "garnet/red", "garnet", 8, "gtceu:raw_red_garnet", 6, 80, GTValues.MV, 2],
        ["solid", "garnet/yellow", "garnet", 8, "gtceu:raw_yellow_garnet", 6, 80, GTValues.MV, 3],
        // Lead variants
        ["solid", "lead/lead", "lead", 8, "gtceu:raw_lead", 4, 80, GTValues.MV, 1],
        ["solid", "lead/galena", "lead", 8, "gtceu:raw_galena", 6, 80, GTValues.MV, 2],
        // Molybdenum
        ["solid", "molybdenum/molybdenum", "molybdenum", 8, "gtceu:raw_molybdenum", 4, 80, GTValues.MV, 1],
        ["solid", "molybdenum/molybdenite", "molybdenum", 8, "gtceu:raw_molybdenite", 6, 80, GTValues.MV, 2],
        // Salts
        ["solid", "salt/salt", "salts", 8, "gtceu:raw_salt", 6, 80, GTValues.MV, 1],
        ["solid", "salt/rock_salt", "salts", 8, "gtceu:raw_rock_salt", 6, 80, GTValues.MV, 2],
        ["solid", "salt/lepidolite", "salts", 8, "gtceu:raw_lepidolite", 6, 80, GTValues.MV, 3],
        // Special materials
        ["solid", "oilsands", "oilsands", 8, "gtceu:raw_oilsands", 4, 80, GTValues.MV, 1],
        ["solid", "graphite", "graphite", 8, "gtceu:raw_graphite", 4, 80, GTValues.MV, 1],
        ["solid", "certus_quartz", "certus_quartz", 8, "gtceu:raw_certus_quartz", 6, 80, GTValues.MV, 1],
        ["solid", "gold", "gold", 8, "minecraft:raw_gold", 4, 80, GTValues.MV, 1],
        ["solid", "redstone", "redstone", 8, "gtceu:raw_redstone", 6, 80, GTValues.MV, 1],
        ["solid", "ruby", "ruby", 8, "gtceu:raw_ruby", 4, 80, GTValues.MV, 1],
        // Lapis variants
        ["solid", "lapis_lazuli/lapis", "lapis_lazuli", 8, "gtceu:raw_lapis", 6, 80, GTValues.MV, 1],
        ["solid", "lapis_lazuli/lazurite", "lapis_lazuli", 8, "gtceu:raw_lazurite", 6, 80, GTValues.MV, 2],
        ["solid", "lapis_lazuli/sodalite", "lapis_lazuli", 8, "gtceu:raw_sodalite", 6, 80, GTValues.MV, 3],
        // Nickel variants
        ["solid", "nickel/nickel", "nickel", 8, "gtceu:raw_nickel", 4, 80, GTValues.MV, 1],
        ["solid", "nickel/garnierite", "nickel", 8, "gtceu:raw_garnierite", 6, 80, GTValues.MV, 2],
        ["solid", "nickel/pentlandite", "nickel", 8, "gtceu:raw_pentlandite", 6, 80, GTValues.MV, 3],
        // Tungsten variants (EV tier)
        ["solid", "tungsten/tungstate", "tungsten", 8, "gtceu:raw_tungstate", 4, 80, GTValues.EV, 1],
        ["solid", "tungsten/scheelite", "tungsten", 8, "gtceu:raw_scheelite", 4, 80, GTValues.EV, 2],
        // Advanced materials (EV tier)
        ["solid", "titanium", "titanium", 8, "gtceu:raw_ilmenite", 4, 80, GTValues.EV, 1],
        ["solid", "uranium", "uranium", 8, "gtceu:raw_uraninite", 4, 80, GTValues.EV, 1],
        ["solid", "chrome", "chrome", 8, "gtceu:raw_chromite", 4, 80, GTValues.EV, 1],
        // Sapphire variants
        ["solid", "sapphire/sapphire", "sapphire", 8, "gtceu:raw_sapphire", 6, 80, GTValues.MV, 1],
        ["solid", "sapphire/green_sapphire", "sapphire", 8, "gtceu:raw_green_sapphire", 6, 80, GTValues.MV, 2],
        // High-tier materials
        ["solid", "diamond", "diamond", 16, "gtceu:raw_diamond", 4, 80, GTValues.HV, 1],
        ["solid", "emerald", "emerald", 16, "gtceu:raw_emerald", 4, 80, GTValues.HV, 1],
        ["solid", "platinum", "platinum", 8, "gtceu:raw_platinum", 4, 80, GTValues.EV, 1],
        ["solid", "netherite", "netherite", 32, "gtceu:small_netherite_dust", 2, 310, GTValues.EV, 1],
        ["solid", "naquadah", "naquadah", 16, "gtceu:raw_naquadah", 4, 290, GTValues.EV, 1],
        ["solid", "avisium", "avisium", 8, "gtceu:raw_trevinite", 4, 290, GTValues.EV, 1]
    ]

    for(const [type, id, inputEssence, amountRecipe, output, amountOutput, duration, voltage, circuit] of solidEssence){
        synthMat(type, id, inputEssence, amountRecipe, output, amountOutput, duration, voltage, circuit)
    }

    //LIFEFORM
    const lifeformEssence = [    
        ["lifeform", "chicken/chicken", "chicken", 4, "minecraft:chicken", 8, 80, GTValues.MV, 1],
        ["lifeform", "chicken/feather", "chicken", 8, "minecraft:feather", 12, 80, GTValues.MV, 2],

        ["lifeform", "pig", "pig", 4, "minecraft:porkchop", 6, 80, GTValues.MV, 1],
    
        ["lifeform", "cow/beef", "cow", 4, "minecraft:beef", 6, 80, GTValues.MV, 1],
        ["lifeform", "cow/leather", "cow", 8, "minecraft:leather", 12, 80, GTValues.MV, 2],

        ["lifeform", "sheep/mutton", "sheep", 4, "minecraft:mutton", 6, 80, GTValues.MV, 1],
        ["lifeform", "sheep/white_wool", "sheep", 8, "minecraft:white_wool", 12, 80, GTValues.MV, 2],

        ["lifeform", "squid", "squid", 8, "minecraft:ink_sac", 6, 80, GTValues.MV, 1],

        ["lifeform", "fish/salmon", "fish", 3, "minecraft:salmon", 6, 80, GTValues.MV, 1],
        ["lifeform", "fish/cod", "fish", 3, "minecraft:cod", 6, 80, GTValues.MV, 2],
        ["lifeform", "fish/pufferfish", "fish", 3, "minecraft:pufferfish", 4, 80, GTValues.MV, 3],
        ["lifeform", "fish/tropical_fish", "fish", 3, "minecraft:tropical_fish", 6, 80, GTValues.MV, 4],

        ["lifeform", "slime", "slime", 4, "minecraft:slime_ball", 16, 80, GTValues.MV, 1],
        ["lifeform", "zombie", "zombie", 4, "minecraft:rotten_flesh", 24, 80, GTValues.MV, 1],
    
        ["lifeform", "skeleton/bone", "skeleton", 6, "minecraft:bone", 8, 80, GTValues.MV, 1],
        ["lifeform", "skeleton/arrow", "skeleton", 4, "minecraft:arrow", 12, 80, GTValues.MV, 2],

        ["lifeform", "creeper", "creeper", 4, "minecraft:gunpowder", 12, 80, GTValues.MV, 1],

        ["lifeform", "spider/string", "spider", 4, "minecraft:string", 24, 80, GTValues.MV, 1],
        ["lifeform", "spider/spider_eye", "spider", 4, "minecraft:spider_eye", 6, 80, GTValues.MV, 2],

        ["lifeform", "prismarine/shard", "prismarine", 4, "minecraft:prismarine_shard", 8, 80, GTValues.MV, 1],
        ["lifeform", "prismarine/crystals", "prismarine", 4, "minecraft:prismarine_crystals", 6, 80, GTValues.MV, 2],

        ["lifeform", "blaze", "blaze", 6, "minecraft:blaze_rod", 4, 80, GTValues.HV, 1],
        ["lifeform", "ghast", "ghast", 8, "minecraft:ghast_tear", 3, 80, GTValues.MV, 1],
        ["lifeform", "enderman", "enderman", 8, "minecraft:ender_pearl", 6, 80, GTValues.MV, 1],
        ["lifeform", "wither_skeleton", "wither_skeleton", 32, "minecraft:wither_skeleton_skull", 1, 80, GTValues.HV, 1]
    ]

    for(const [type, id, inputEssence, amountRecipe, output, amountOutput, duration, voltage, circuit] of lifeformEssence){
        synthMat(type, id, inputEssence, amountRecipe, output, amountOutput, duration, voltage, circuit)
    }
})