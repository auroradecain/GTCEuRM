ServerEvents.recipes(event =>{

    // Fluid

    function synthMat(type, id, ess, amnt, out, tick, volt, c){
        switch(type){
            case "fluid":
                event.recipes.gtceu.synthetic_fluid(`essence/${id}`)
                    .itemInputs(`${amnt}x mysticalagriculture:${ess}_essence`)
                    .outputFluids(out)
                    .duration(tick)
                    .EUt(GTValues.VH[volt])
                    .circuit(c)
                break;
            case "solid":
                event.recipes.gtceu.synthetic_solid(`essence/${id}`)
                    .itemInputs(`${amnt}x mysticalagriculture:${ess}_essence`)
                    .itemOutputs(out)
                    .duration(tick)
                    .EUt(GTValues.VH[volt])
                    .circuit(c)
                break;
            case "lifeform":
                event.recipes.gtceu.synthetic_lifeform(`essence/${id}`)
                    .itemInputs(`${amnt}x mysticalagriculture:${ess}_essence`)
                    .itemOutputs(out)
                    .duration(tick)
                    .EUt(GTValues.VH[volt])
                    .circuit(c)
                break;
        }
    }

    // FLUIDS
    synthMat("fluid", "air/oxygen", "air", 1, "gtceu:oxygen 4000", 80, GTValues.LV, 1)
    synthMat("fluid", "air/carbon_dioxide", "air", 1, "gtceu:carbon_dioxide 1000", 80, GTValues.LV, 2)
    synthMat("fluid", "air/nitrogen", "air", 1, "gtceu:nitrogen 3000", 80, GTValues.LV, 3)
    
    synthMat("fluid", "water/water", "water", 1, "minecraft:water 4000", 80, GTValues.LV, 1)
    synthMat("fluid", "water/salt_water", "water", 1, "gtceu:salt_water 2000", 80, GTValues.LV, 2)

    synthMat("fluid", "fire/lava", "fire", 1, "minecraft:lava 2000", 80, GTValues.LV, 1)

    synthMat("fluid", "nether/hydrogen_sulfide", "nether", 1, "gtceu:hydrogen_sulfide 3000", 80, GTValues.MV, 1)
    synthMat("fluid", "nether/carbon_monoxide", "nether", 1, "gtceu:carbon_monoxide 8000", 80, GTValues.MV, 2)
    synthMat("fluid", "nether/sulfur_dioxide", "nether", 1, "gtceu:sulfur_dioxide 3000", 80, GTValues.MV, 3)
    synthMat("fluid", "nether/coal_gas", "nether", 1, "gtceu:coal_gas 2000", 80, GTValues.MV, 4)


    synthMat("fluid", "end/nitrogen_dioxide", "end", 1, "gtceu:nitrogen_dioxide 9000", 80, GTValues.MV, 1)
    synthMat("fluid", "end/deuterium", "end", 1, "gtceu:deuterium 2000", 80, GTValues.MV, 2)
    synthMat("fluid", "end/helium", "end", 1, "gtceu:helium 4000", 80, GTValues.MV, 3)
    synthMat("fluid", "end/tritium", "end", 1, "gtceu:tritium 500", 80, GTValues.EV, 4)
    
    // SOLIDS
    synthMat("solid", "earth/gravel", "earth", 4, "48x minecraft:gravel", 80, GTValues.LV, 1)
    synthMat("solid", "earth/potassium", "earth", 8, "6x gtceu:potassium_dust", 80, GTValues.LV, 2)
    synthMat("solid", "earth/lithium", "earth", 8, "4x gtceu:lithium_dust", 80, GTValues.LV, 3)
    synthMat("solid", "earth/magnesium", "earth", 8, "2x gtceu:magnesium_dust", 80, GTValues.MV, 4)
    synthMat("solid", "earth/silicon", "earth", 8, "6x gtceu:silicon_dust", 80, GTValues.LV, 5)
    synthMat("solid", "earth/rare_earth", "earth", 16, "8x gtceu:rare_earth_dust", 80, GTValues.MV, 5)

    synthMat("solid", "stone/stone", "stone", 4, "48x minecraft:stone", 80, GTValues.LV, 1)
    synthMat("solid", "stone/granite", "stone", 4, "16x minecraft:granite", 80, GTValues.LV, 2)
    synthMat("solid", "stone/diorite", "stone", 4, "16x minecraft:diorite", 80, GTValues.LV, 3)
    synthMat("solid", "stone/andesite", "stone", 4, "16x minecraft:andesite", 80, GTValues.LV, 4)
    synthMat("solid", "stone/gabro", "stone", 4, "16x kubejs:gabro", 80, GTValues.MV, 5)
    synthMat("solid", "stone/marble", "stone", 4, "16x gtceu:marble", 80, GTValues.HV, 6)
    synthMat("solid", "stone/red_granite", "stone", 4, "16x gtceu:red_granite", 80, GTValues.HV, 7)
    
    
    synthMat("solid", "dirt/dirt", "dirt", 4, "48x minecraft:dirt", 80, GTValues.LV, 1)
    synthMat("solid", "dirt/clay", "dirt", 4, "16x minecraft:clay", 80, GTValues.LV, 2)
    synthMat("solid", "dirt/sand", "dirt", 4, "24x minecraft:sand", 80, GTValues.LV, 3)
    synthMat("solid", "dirt/podzel", "dirt", 4, "24x minecraft:podzel", 80, GTValues.LV, 4)
    synthMat("solid", "dirt/mycelium", "dirt", 4, "24x minecraft:mycelium", 80, GTValues.LV, 5)
    


    synthMat("solid", "ice/ice", "ice", 4, "24x minecraft:ice", 80, GTValues.LV, 1)
    synthMat("solid", "ice/snow", "ice", 4, "32x minecraft:snow", 80, GTValues.LV, 2)
    synthMat("solid", "ice/packed_ice", "ice", 8, "16x minecraft:packed_ice", 80, GTValues.LV, 3)

    synthMat("solid","deepslate/deepslate", "deepslate", 4, "16x minecraft:deepslate", 80, GTValues.MV, 1)
    synthMat("solid","deepslate/basalt", "deepslate", 4, "16x minecraft:deepslate", 80, GTValues.MV, 1)
    synthMat("solid","deepslate/blackstone", "deepslate", 4, "16x minecraft:blackstone", 80, GTValues.MV, 1)

    synthMat("solid", "nature/oak_sapling", "nature", 4, "8x minecraft:oak_sapling", 80, GTValues.LV, 1)
    synthMat("solid", "nature/birch_sapling", "nature", 4, "8x minecraft:birch_sapling", 80, GTValues.LV, 2)
    synthMat("solid", "nature/jungle_sapling", "nature", 4, "8x minecraft:jungle_sapling", 80, GTValues.LV, 3)
    synthMat("solid", "nature/acacia_sapling", "nature", 4, "8x minecraft:acacia_sapling", 80, GTValues.LV, 4)
    synthMat("solid", "nature/dark_oak_sapling", "nature", 4, "8x minecraft:dark_oak_sapling", 80, GTValues.LV, 5)
    synthMat("solid", "nature/cherry_sapling", "nature", 4, "8x minecraft:cherry_sapling", 80, GTValues.LV, 6)
    synthMat("solid", "nature/cactus", "nature", 4, "16x minecraft:cactus", 80, GTValues.LV, 7)
    synthMat("solid", "nature/bamboo", "nature", 4, "12x minecraft:bamboo", 80, GTValues.LV, 8)
    synthMat("solid", "nature/lily_pad", "nature", 4, "6x minecraft:lily_pad", 80, GTValues.LV, 9)

    synthMat("solid", "dye/white", "dye", 3, "8x gtceu:chemical_white_dye", 80, GTValues.LV, 1)
    synthMat("solid", "dye/black", "dye", 3, "8x gtceu:chemical_black_dye", 80, GTValues.LV, 2)
    synthMat("solid", "dye/red", "dye", 3, "8x gtceu:chemical_red_dye", 80, GTValues.LV, 3)
    synthMat("solid", "dye/pink", "dye", 3, "8x gtceu:chemical_pink_dye", 80, GTValues.LV, 4)
    synthMat("solid", "dye/yellow", "dye", 3, "8x gtceu:chemical_yellow_dye", 80, GTValues.LV, 5)
    synthMat("solid", "dye/orange", "dye", 3, "8x gtceu:chemical_orange_dye", 80, GTValues.LV, 6)
    synthMat("solid", "dye/green", "dye", 3, "8x gtceu:chemical_green_dye", 80, GTValues.LV, 7)
    synthMat("solid", "dye/lime", "dye", 3, "8x gtceu:chemical_lime_dye", 80, GTValues.LV, 8)
    synthMat("solid", "dye/magenta", "dye", 3, "8x gtceu:chemical_magenta_dye", 80, GTValues.LV, 9)
    synthMat("solid", "dye/purple", "dye", 3, "8x gtceu:chemical_purple_dye", 80, GTValues.LV, 10)
    synthMat("solid", "dye/brown", "dye", 3, "8x gtceu:chemical_brown_dye", 80, GTValues.LV, 11)
    synthMat("solid", "dye/blue", "dye", 3, "8x gtceu:chemical_blue_dye", 80, GTValues.LV, 12)
    synthMat("solid", "dye/light_blue", "dye", 3, "8x gtceu:chemical_light_blue_dye", 80, GTValues.LV, 13)
    synthMat("solid", "dye/cyan", "dye", 3, "8x gtceu:chemical_cyan_dye", 80, GTValues.LV, 14)
    synthMat("solid", "dye/gray", "dye", 3, "8x gtceu:chemical_gray_dye", 80, GTValues.LV, 15)
    synthMat("solid", "dye/light_gray", "dye", 3, "8x gtceu:chemical_light_gray_dye", 80, GTValues.LV, 16)

    synthMat("solid", "rubber", "rubber", 4, "6x gtceu:sticky_resin", 80, GTValues.LV, 1)
    synthMat("solid", "glowstone", "glowstone", 8, "24x minecraft:glowstone_dust", 80, GTValues.LV, 1)
    synthMat("solid", "obsidian", "obsidian", 8, "12x minecraft:obsidian", 80, GTValues.LV, 1)

    synthMat("solid", "prismarine/shard", "prismarine", 4, "8x minecraft:prismarine_shard", 80, GTValues.LV, 1)
    synthMat("solid", "prismarine/crystals", "prismarine", 4, "6x minecraft:prismarine_crystals", 80, GTValues.LV, 1)

    synthMat("solid", "fluix", "fluix", 4, "6x ae2:fluix_crystal", 80, GTValues.LV, 1)

    // Ores
    synthMat("solid", "coal", "coal", 8, "6x gtceu:raw_coal", 80, GTValues.LV, 1)
    synthMat("solid", "amethyst", "amethyst", 8, "4x gtceu:raw_amethyst", 80, GTValues.LV, 1)
    synthMat("solid", "sulfur", "sulfur", 8, "6x gtceu:raw_sulfur", 80, GTValues.LV, 1)
    synthMat("solid", "aluminium", "aluminum", 8, "4x gtceu:raw_bauxite", 80, GTValues.LV, 1)
    synthMat("solid", "saltpeter", "saltpeter", 8, "6x gtceu:raw_saltpeter", 80, GTValues.LV, 1)
    synthMat("solid", "apatite", "apatite", 8, "4x gtceu:raw_apatite", 80, GTValues.LV, 1)

    synthMat("solid", "iron/iron", "iron", 8, "6x minecraft:raw_iron", 80, GTValues.LV, 1)
    synthMat("solid", "iron/goethite", "iron", 8, "4x gtceu:raw_goethite", 80, GTValues.LV, 2)
    synthMat("solid", "iron/magnetite", "iron", 8, "4x gtceu:raw_magnetite", 80, GTValues.LV, 3)
    synthMat("solid", "iron/pyrite", "iron", 8, "4x gtceu:raw_pyrite", 80, GTValues.LV, 4)
    
    synthMat("solid", "copper/copper", "copper", 8, "6x minecraft:raw_copper", 80, GTValues.LV, 1)
    synthMat("solid", "copper/tetrahedrite", "copper", 8, "4x gtceu:raw_tetrahedrite", 80, GTValues.LV, 2)
    synthMat("solid", "copper/malachite", "copper", 8, "4x gtceu:raw_malachite", 80, GTValues.LV, 3)
    synthMat("solid", "copper/chalcopyrite", "copper", 8, "4x gtceu:raw_chalcopyrite", 80, GTValues.LV, 4)

    synthMat("solid", "nether_quartz", "nether_quartz", 8, "6x gtceu:raw_nether_quartz", 80, GTValues.LV, 1)

    synthMat("solid", "tin/tin", "tin", 8, "6x gtceu:raw_tin", 80, GTValues.LV, 1)
    synthMat("solid", "tin/cassiterite", "tin", 8, "4x gtceu:raw_cassiterite", 80, GTValues.LV, 2)
    synthMat("solid", "tin/cassiterite_sand", "tin", 8, "4x gtceu:raw_cassiterite_sand", 80, GTValues.LV, 3)
    
    synthMat("solid", "zinc", "zinc", 8, "4x gtceu:raw_sphalerite", 80, GTValues.LV, 1)
    synthMat("solid", "silver", "silver", 8, "4x gtceu:raw_silver", 80, GTValues.LV, 1)

    synthMat("solid", "lead/lead", "lead", 8, "6x gtceu:raw_lead", 80, GTValues.LV, 1)
    synthMat("solid", "lead/galena", "lead", 8, "4x gtceu:raw_galena", 80, GTValues.LV, 2)

    synthMat("solid", "graphite", "graphite", 8, "4x gtceu:raw_graphite", 80, GTValues.LV, 1)
    synthMat("solid", "certus_quartz", "certus_quartz", 8, "6x gtceu:raw_certus_quartz", 80, GTValues.LV, 1)
    synthMat("solid", "gold", "gold", 8, "4x minecraft:raw_gold", 80, GTValues.LV, 1)
    synthMat("solid", "redstone", "redstone", 8, "6x gtceu:raw_redstone", 80, GTValues.LV, 1)

    synthMat("solid", "lapis_lazuli/lapis", "lapis_lazuli", 8, "6x gtceu:raw_lapis", 80, GTValues.LV, 1)
    synthMat("solid", "lapis_lazuli/lazurite", "lapis_lazuli", 8, "4x gtceu:raw_lazurite", 80, GTValues.LV, 1)
    synthMat("solid", "lapis_lazuli/sodalite", "lapis_lazuli", 8, "4x gtceu:raw_sodalite", 80, GTValues.LV, 1)

    synthMat("solid", "nickel/nickel", "nickel", 8, "6x gtceu:raw_nickel", 80, GTValues.LV, 1)
    synthMat("solid", "nickel/garnierite", "nickel", 8, "4x gtceu:raw_garnierite", 80, GTValues.LV, 2)
    synthMat("solid", "nickel/pentlandite", "nickel", 8, "4x gtceu:raw_pentlandite", 80, GTValues.LV, 3)
    
    synthMat("solid", "tungsten/tungstate", "tungsten", 8, "4x gtceu:raw_tungstate", 80, GTValues.HV, 1)
    synthMat("solid", "tungsten/scheelite", "tungsten", 8, "4x gtceu:raw_scheelite", 80, GTValues.HV, 2)

    synthMat("solid", "titanium", "titanium", 8, "3x gtceu:rutile_dust", 80, GTValues.HV, 1)
    synthMat("solid", "uranium", "uranium", 8, "4x gtceu:raw_uraninite", 80, GTValues.HV, 1)
    synthMat("solid", "chrome", "chrome", 8, "4x gtceu:raw_chromite", 80, GTValues.HV, 1)
    synthMat("solid", "ruby", "ruby", 8, "4x gtceu:raw_ruby", 80, GTValues.LV, 1)

    synthMat("solid", "sapphire/sapphire", "sapphire", 8, "6x gtceu:raw_sapphire", 80, GTValues.LV, 1)
    synthMat("solid", "sapphire/green_sapphire", "sapphire", 8, "6x gtceu:raw_green_sapphire", 80, GTValues.LV, 1)

    synthMat("solid", "diamond", "diamond", 16, "4x gtceu:raw_diamond", 80, GTValues.MV, 1)
    synthMat("solid", "emerald", "emerald", 16, "4x gtceu:raw_emerald", 80, GTValues.MV, 1)
    synthMat("solid", "platinum", "platinum", 8, "4x gtceu:raw_platinum", 80, GTValues.HV, 1)
    synthMat("solid", "netherite", "netherite", 32, "minecraft:netherite_ingot", 80, GTValues.HV, 1)

    //LIFEFORM
    synthMat("lifeform", "chicken/chicken", "chicken", 4, "8x minecraft:chicken", 80, GTValues.LV, 1)
    synthMat("lifeform", "chicken/feather", "chicken", 8, "12x minecraft:feather", 80, GTValues.LV, 2)

    synthMat("lifeform", "pig", "pig", 4, "6x minecraft:porkchop", 80, GTValues.LV, 1)
    
    synthMat("lifeform", "cow/beef", "cow", 4, "6x minecraft:beef", 80, GTValues.LV, 1)
    synthMat("lifeform", "cow/leather", "cow", 8, "12x minecraft:leather", 80, GTValues.LV, 2)

    synthMat("lifeform", "sheep/mutton", "sheep", 4, "6x minecraft:mutton", 80, GTValues.LV, 1)
    synthMat("lifeform", "sheep/white_wool", "sheep", 8, "12x minecraft:white_wool", 80, GTValues.LV, 2)

    synthMat("lifeform", "squid", "squid", 8, "6x minecraft:ink_sac", 80, GTValues.LV, 1)

    synthMat("lifeform", "fish/salmon", "fish", 3, "6x minecraft:salmon", 80, GTValues.LV, 1)
    synthMat("lifeform", "fish/cod", "fish", 3, "6x minecraft:cod", 80, GTValues.LV, 2)
    synthMat("lifeform", "fish/pufferfish", "fish", 3, "4x minecraft:pufferfish", 80, GTValues.LV, 3)
    synthMat("lifeform", "fish/tropical_fish", "fish", 3, "6x minecraft:tropical_fish", 80, GTValues.LV, 4)

    synthMat("lifeform", "slime", "slime", 4, "16x minecraft:slime_ball", 80, GTValues.LV, 1)
    synthMat("lifeform", "zombie", "zombie", 4, "24x minecraft:rotten_flesh", 80, GTValues.LV, 1)
    
    synthMat("lifeform", "skeleton/bone", "skeleton", 6, "8x minecraft:bone", 80, GTValues.LV, 1)
    synthMat("lifeform", "skeleton/arrow", "skeleton", 4, "12x minecraft:arrow", 80, GTValues.LV, 2)

    synthMat("lifeform", "creeper", "creeper", 4, "12x minecraft:gunpowder", 80, GTValues.LV, 1)

    synthMat("lifeform", "spider/string", "spider", 4, "24x minecraft:string", 80, GTValues.LV, 1)
    synthMat("lifeform", "spider/spider_eye", "spider", 4, "6x minecraft:spider_eye", 80, GTValues.LV, 2)

    synthMat("lifeform", "blaze", "blaze", 6, "4x minecraft:blaze_rod", 80, GTValues.MV, 1)
    synthMat("lifeform", "ghast", "ghast", 8, "3x minecraft:ghast_tear", 80, GTValues.LV, 1)
    synthMat("lifeform", "enderman", "enderman", 8, "6x minecraft:ender_pearl", 80, GTValues.LV, 1)
    synthMat("lifeform", "wither_skeleton", "wither_skeleton", 32, "minecraft:wither_skeleton_skull", 80, GTValues.MV, 1)



})