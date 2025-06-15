ServerEvents.recipes(event =>{

    function synthMat(type, ess, amntIn, out, tick, volt){
        switch(type){
            case "fluid":
                event.recipes.gtceu.centrifuge(`essence/${type}_${ess}`)
                    .itemInputs(`${amntIn}x mysticalagriculture:${ess}_essence`)
                    .outputFluids(out)
                    .duration(tick)
                    .EUt(GTValues.VA[volt])
                break;
            case "solid":
                event.recipes.gtceu.centrifuge(`essence/${type}_${ess}`)
                    .itemInputs(`${amntIn}x mysticalagriculture:${ess}_essence`)
                    .itemOutputs(out)
                    .duration(tick)
                    .EUt(GTValues.VA[volt])
                break;
            case "lifeform":
                event.recipes.gtceu.centrifuge(`essence/${type}_${ess}`)
                    .itemInputs(`${amntIn}x mysticalagriculture:${ess}_essence`)
                    .itemOutputs(out)
                    .duration(tick)
                    .EUt(GTValues.VA[volt])
                break;
        }
    }

    // FLUIDS
    const fluidEssence = [   
        // Air
        ["fluid", "air", 2, ["gtceu:nitrogen 7100", "gtceu:oxygen 3900", "gtceu:carbon_dioxide 1000"] , 110, GTValues.LV],
        // Water
        ["fluid", "water", 2, ["minecraft:water 4000", "gtceu:salt_water 2000"] , 50, GTValues.LV],
        // Fire
        ["fluid", "fire", 2, ["minecraft:lava 4000"], 80, GTValues.LV],
        // Nether
        ["fluid", "nether", 8, ["gtceu:carbon_monoxide 8100", "gtceu:hydrogen_sulfide 2900", "gtceu:sulfur_dioxide 2200", "gtceu:coal_gas 1800"], 420, GTValues.MV],
        // End
        ["fluid", "end", 8, ["gtceu:nitrogen_dioxide 7100", "gtceu:deuterium 3900", "gtceu:helium 1900","gtceu:tritium 1000"], 540, GTValues.HV],
        // Experience
        ["fluid", "experience", 1, "enderio:xp_juice 2000", 160, GTValues.HV]
    ]

    for(const [type, inputEssence, amountRecipe, output, duration, voltage] of fluidEssence){
        synthMat(type, inputEssence, amountRecipe, output, duration, voltage)
    }
    
    // SOLIDS

    const solidEssence = [
        // Earth category
        ["solid", "earth", 16, ["6x gtceu:raw_calcite", "4x gtceu:raw_fullers_earth", "4x gtceu:raw_asbestos", "4x gtceu:raw_magnesite"], 90, GTValues.MV],
        // Stone category
        ["solid", "stone", 2, ["32x minecraft:stone"], 60, GTValues.LV],
        // Sky stone
        ["solid", "sky_stone", 4, "16x ae2:sky_stone_block", 144, GTValues.MV],
        // Dirt category
        ["solid", "dirt", 4, ["48x minecraft:dirt"], 120, GTValues.LV],
        // Ice category
        ["solid", "ice", 2, ["24x minecraft:ice"], 110, GTValues.LV],
        // Deepslate category
        ["solid", "deepslate", 4, ["24x minecraft:deepslate"], 150, GTValues.MV],
        // Nature category
        ["solid", "nature", 32, ["24x minecraft:sugar_cane", "16x minecraft:cactus", "12x minecraft:bamboo", "6x minecraft:lily_pad"], 210, GTValues.LV],
        // Dye category
        ["solid", "dye", 16, ["3x gtceu:chemical_red_dye", "3x gtceu:chemical_green_dye", "3x gtceu:chemical_blue_dye", "3x gtceu:chemical_cyan_dye", "3x gtceu:chemical_magenta_dye", "3x gtceu:chemical_yellow_dye"], 170, GTValues.LV],
        // Miscellaneous solids
        ["solid", "rubber", 4, "6x gtceu:sticky_resin", 72, GTValues.LV],
        ["solid", "glowstone", 4, "24x minecraft:glowstone_dust", 96, GTValues.LV],
        ["solid", "obsidian", 4, "12x minecraft:obsidian", 64, GTValues.MV],
        ["solid", "fluix", 4, "8x gtceu:fluix_gem", 120, GTValues.MV],
        // Basic materials
        ["solid", "coal", 4, "6x gtceu:raw_coal", 96, GTValues.LV],
        ["solid", "amethyst", 4, "6x gtceu:raw_amethyst", 128, GTValues.MV],
        ["solid", "sulfur", 4, "6x gtceu:raw_sulfur", 128, GTValues.LV],
        ["solid", "aluminum", 4, "6x gtceu:raw_bauxite", 128, GTValues.HV],
        ["solid", "saltpeter", 4, "6x gtceu:raw_saltpeter", 128, GTValues.MV],
        ["solid", "apatite", 4, "12x gtceu:raw_apatite", 128, GTValues.LV],
        // Iron variants
        ["solid", "iron", 24, ["6x gtceu:raw_pyrite", "6x gtceu:raw_yellow_limonite", "6x gtceu:raw_hematite", "4x minecraft:raw_iron"], 80, GTValues.MV],
        // Copper variants
        ["solid", "copper", 24, ["6x gtceu:raw_chalcopyrite", "6x gtceu:raw_tetrahedrite", "6x gtceu:raw_malachite", "4x minecraft:raw_copper"], 80, GTValues.MV],
        // Quartz
        ["solid", "nether_quartz", 8, "6x gtceu:raw_nether_quartz", 80, GTValues.LV],
        // Tin variants
        ["solid", "tin", 8, ["6x gtceu:raw_cassiterite", "4x gtceu:raw_tin"], 80, GTValues.MV],
        // Other metals
        ["solid", "zinc", 4, "6x gtceu:raw_sphalerite", 80, GTValues.MV],
        ["solid", "barium", 4, "6x gtceu:raw_barite", 80, GTValues.MV],
        ["solid", "tantalum", 8, "4x gtceu:raw_tantalite", 80, GTValues.MV],
        ["solid", "manganese", 4, "8x gtceu:raw_pyrolusite", 80, GTValues.MV],
        ["solid", "niobium", 4, "8x gtceu:raw_pyrochlore", 80, GTValues.MV],
        ["solid", "antimony", 4, "8x gtceu:raw_stibnite", 80, GTValues.MV],
        ["solid", "vidium", 8, "4x gtceu:raw_vidium", 80, GTValues.MV],
        // Topaz
        ["solid", "topaz", 8, ["4x gtceu:raw_topaz", "4x gtceu:raw_blue_topaz"], 80, GTValues.MV],
        // Garnet
        ["solid", "garnet", 12, ["6x gtceu:raw_red_garnet", "6x gtceu:raw_garnet_sand", "6x gtceu:raw_yellow_garnet"], 80, GTValues.MV],
        // Lead variants
        ["solid", "lead", 8, ["6x gtceu:raw_galena", "4x gtceu:raw_lead"], 80, GTValues.MV],
        // Molybdenum
        ["solid", "molybdenum", 8, ["6x gtceu:raw_molybdenite", "4x gtceu:raw_molybdenum"], 80, GTValues.MV],
        // Salts
        ["solid", "salts", 12, ["8x gtceu:raw_salt", "6x gtceu:raw_rock_salt", "4x gtceu:raw_lepidolite"], 80, GTValues.MV],
        // Special materials
        ["solid", "oilsands", 3, "16x gtceu:raw_oilsands", 80, GTValues.MV],
        ["solid", "graphite", 3, "4x gtceu:raw_graphite", 80, GTValues.LV],
        ["solid", "certus_quartz", 4, "6x gtceu:raw_certus_quartz", 80, GTValues.MV],
        ["solid", "gold", 16, "4x minecraft:raw_gold", 80, GTValues.MV],
        ["solid", "redstone", 4, "6x gtceu:raw_redstone", 80, GTValues.LV],
        ["solid", "ruby", 6, "4x gtceu:raw_ruby", 80, GTValues.MV],
        // Silver
        ["solid", "silver", 12, ["6x gtceu:raw_argentite", "4x gtceu:raw_silver"], 132, GTValues.MV],
        // Lapis variants
        ["solid", "lapis_lazuli", 12, ["6x gtceu:raw_sodalite", "6x gtceu:raw_lazurite", "4x gtceu:raw_sodalite"], 80, GTValues.MV],
        // Nickel variants
        ["solid", "nickel", 16, ["6x gtceu:raw_garnierite", "6x gtceu:raw_pentlandite", "4x gtceu:raw_nickel"], 80, GTValues.MV],
        // Tungsten
        ["solid", "tungsten", 12, ["4x gtceu:raw_tungstate", "4x gtceu:raw_scheelite"], 80, GTValues.HV],
        // Advanced materials 
        ["solid", "titanium", 8, "4x gtceu:raw_ilmenite", 80, GTValues.HV],
        ["solid", "uranium", 8, "6x gtceu:raw_uraninite", 80, GTValues.HV],
        ["solid", "chrome", 8, "4x gtceu:raw_chromite", 80, GTValues.HV],
        // Sapphire variants
        ["solid", "sapphire", 12, ["6x gtceu:raw_sapphire", "6x gtceu:raw_green_sapphire"], 80, GTValues.MV],
        // High-tier materials
        ["solid", "diamond", 8, "6x gtceu:raw_diamond", 80, GTValues.HV],
        ["solid", "emerald", 8, "4x gtceu:raw_emerald", 80, GTValues.HV],
        ["solid", "netherite", 24, "4x gtceu:raw_terraemantine", 230, GTValues.HV],
        ["solid", "platinum", 8, "4x gtceu:raw_cooperite", 140, GTValues.HV],
        ["solid", "avisium", 8, "4x gtceu:raw_trevinite", 290, GTValues.HV],
        ["solid", "naquadah", 16, "4x gtceu:raw_naquadah", 290, GTValues.EV]
    ]

    for(const [type, inputEssence, amountRecipe, output, duration, voltage] of solidEssence){
        synthMat(type, inputEssence, amountRecipe, output, duration, voltage)
    }

    //LIFEFORM
    const lifeformEssence = [    
        ["lifeform", "chicken", 8, ["12x minecraft:feather", "8x minecraft:chicken"], 80, GTValues.LV],

        ["lifeform", "pig", 4, "6x minecraft:porkchop", 80, GTValues.LV],
    
        ["lifeform", "cow", 8, ["12x minecraft:leather", "8x minecraft:beef"], 80, GTValues.LV],

        ["lifeform", "sheep", 8, ["8x minecraft:white_wool", "6x minecraft:mutton"], 80, GTValues.LV],

        ["lifeform", "squid", 4, "6x minecraft:ink_sac", 80, GTValues.LV],

        ["lifeform", "fish", 8, ["6x minecraft:salmon", "6x minecraft:cod", "4x minecraft:tropical_fish", "4x minecraft:pufferfish"], 80, GTValues.LV],

        ["lifeform", "slime", 4, "16x minecraft:slime_ball", 80, GTValues.MV],
        ["lifeform", "zombie", 4, "24x minecraft:rotten_flesh", 80, GTValues.MV],
    
        ["lifeform", "skeleton", 10, ["12x minecraft:arrow", "8x minecraft:bone"], 80, GTValues.MV],

        ["lifeform", "creeper", 6, "12x minecraft:gunpowder", 80, GTValues.MV],

        ["lifeform", "spider", 4, ["24x minecraft:string", "6x minecraft:spider_eye"], 80, GTValues.MV],

        ["lifeform", "prismarine", 8, ["8x minecraft:prismarine_shard", "6x minecraft:prismarine_crystals"], 80, GTValues.MV],

        ["lifeform", "blaze", 6, "4x minecraft:blaze_rod", 80, GTValues.HV],
        ["lifeform", "ghast", 8, "3x minecraft:ghast_tear", 80, GTValues.MV],
        ["lifeform", "enderman", 8, "6x minecraft:ender_pearl", 80, GTValues.MV],
        ["lifeform", "wither_skeleton", 32, "1x minecraft:wither_skeleton_skull", 80, GTValues.HV]
    ]

    for(const [type, inputEssence, amountRecipe, output, duration, voltage] of lifeformEssence){
        synthMat(type, inputEssence, amountRecipe, output, duration, voltage)
    }

    // Essence Mixing Recipes
    event.recipes.gtceu.mixer("kubejs:clay_from_essence_mixing")
        .itemInputs(["2x mysticalagriculture:dirt_essence", "mysticalagriculture:water_essence"])
        .itemOutputs("16x minecraft:clay")
        .duration(80)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.mixer("kubejs:sand_from_essence_mixing")
        .itemInputs(["2x mysticalagriculture:dirt_essence", "mysticalagriculture:fire_essence"])
        .itemOutputs("24x minecraft:sand")
        .duration(80)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.mixer("kubejs:basalt_from_essence_mixing")
        .itemInputs(["2x mysticalagriculture:deepslate_essence", "mysticalagriculture:fire_essence"])
        .itemOutputs("16x minecraft:basalt")
        .duration(110)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.mixer("kubejs:blackstone_from_essence_mixing")
        .itemInputs(["2x mysticalagriculture:deepslate_essence", "mysticalagriculture:stone_essence"])
        .itemOutputs("16x minecraft:blackstone")
        .duration(110)
        .EUt(GTValues.VA[GTValues.LV])


})