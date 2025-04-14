ServerEvents.recipes(event=>{

    event.shaped('gtceu:greenhouse', [
        "TST",
        "PMP",
        "EDE"
    ],{
        T: "gtceu:tempered_glass",
        S: "gtceu:mv_sensor",
        P: "gtceu:viadium_plate",
        M: "gtceu:mv_hydroponic_unit",
        E: "gtceu:mv_electric_pump",
        D: "gtceu:aluminium_drum"
    }).id('gtceu:shaped/greenhouse')

    
    function grow(recipeID, recipeInput, recipeOutput, fluidInput){

        let fluid = fluidInput;

        if (fluid = " "){
            fluid = 'minecraft:water 2000'
        }

        event.recipes.gtceu.greenhouse(`grow/${recipeID}`)
            .chancedInput(InputItem.of(recipeInput), 9000, -750)
            .itemOutputs(recipeOutput)
            .inputFluids(fluid)
            .duration(468)
            .EUt(54)
            .circuit(1)
        event.recipes.gtceu.seed_growth(`grow/${recipeID}`)
            .itemInputs(InputItem.of(recipeInput))
            .itemOutputs(recipeOutput)
            .inputFluids(fluid)
            .duration(468)
            .EUt(30)
            .circuit(1)

    }
    
    // Greenhouse common recipes
    const growNormal = [

        ['oak','minecraft:oak_sapling',['8x minecraft:oak_log', 'minecraft:oak_sapling']],
        ['birch','minecraft:birch_sapling',['8x minecraft:birch_log', 'minecraft:birch_sapling']],
        ['spruce','minecraft:spruce_sapling',['8x minecraft:spruce_log', 'minecraft:spruce_sapling']],
        ['acacia','minecraft:acacia_sapling',['8x minecraft:acacia_log', 'minecraft:acacia_sapling']],
        ['jungle','minecraft:jungle_sapling',['8x minecraft:jungle_log', 'minecraft:jungle_sapling']],
        ['mangrove','minecraft:mangrove_propagule',['8x minecraft:mangrove_log', 'minecraft:mangrove_propagule']],
        ['dark_oak','minecraft:dark_oak_sapling',['8x minecraft:dark_oak_log', 'minecraft:dark_oak_sapling']],
        ['cherry','minecraft:cherry_sapling',['8x minecraft:cherry_log', 'minecraft:cherry_sapling']],
        ['resin','gtceu:rubber_sapling',['8x gtceu:rubber_log', 'gtceu:rubber_sapling', '3x gtceu:sticky_resin']],
        
        ['potato','minecraft:potato',['32x minecraft:potato']],
        ['carrot','minecraft:carrot',['32x minecraft:carrot']],
        ['beetroot','minecraft:beetroot_seeds',['32x minecraft:beetroot']],
        ['sweet_berries','minecraft:sweet_berries',['32x minecraft:sweet_berries']],
        ['sugar_cane','minecraft:sugar_cane',['32x minecraft:sugar_cane']],
        ['cactus','minecraft:cactus',['32x minecraft:cactus']],
        ['bamboo','minecraft:bamboo',['32x minecraft:bamboo']]

    ]

    for (const [id, ins, outs] of growNormal){
        grow(id, ins, outs)
    }

    const growMystical = [

        // Inferium
        ['inferium', 'mysticalagriculture:inferium_seeds', ['8x gtceu:inferium_dust']],

        // Elements
        ['air', 'mysticalagriculture:air_seeds', ['8x mysticalagriculture:air_essence']],
        ['fire', 'mysticalagriculture:fire_seeds', ['8x mysticalagriculture:fire_essence']],
        ['earth', 'mysticalagriculture:earth_seeds', ['8x mysticalagriculture:earth_essence']],
        ['water', 'mysticalagriculture:water_seeds', ['8x mysticalagriculture:water_essence']],

        // Blocks
        ['stone', 'mysticalagriculture:stone_seeds', ['8x mysticalagriculture:stone_essence']],
        ['dirt', 'mysticalagriculture:dirt_seeds', ['8x mysticalagriculture:dirt_essence']],
        ['ice', 'mysticalagriculture:ice_seeds', ['8x mysticalagriculture:ice_essence']],
        ['deepslate', 'mysticalagriculture:deepslate_seeds', ['8x mysticalagriculture:deepslate_essence']],
        ['nature', 'mysticalagriculture:nature_seeds', ['8x mysticalagriculture:nature_essence']],

        // Dyes & Ores
        ['dye', 'mysticalagriculture:dye_seeds', ['8x mysticalagriculture:dye_essence']],
        ['coal', 'mysticalagriculture:coal_seeds', ['8x mysticalagriculture:coal_essence']],
        ['amethyst', 'mysticalagriculture:amethyst_seeds', ['8x mysticalagriculture:amethyst_essence']],
        ['prismarine', 'mysticalagriculture:prismarine_seeds', ['8x mysticalagriculture:prismarine_essence']],

        // Animals
        ['pig', 'mysticalagriculture:pig_seeds', ['8x mysticalagriculture:pig_essence']],
        ['chicken', 'mysticalagriculture:chicken_seeds', ['8x mysticalagriculture:chicken_essence']],
        ['cow', 'mysticalagriculture:cow_seeds', ['8x mysticalagriculture:cow_essence']],
        ['sheep', 'mysticalagriculture:sheep_seeds', ['8x mysticalagriculture:sheep_essence']],
        ['squid', 'mysticalagriculture:squid_seeds', ['8x mysticalagriculture:squid_essence']],
        ['fish', 'mysticalagriculture:fish_seeds', ['8x mysticalagriculture:fish_essence']],

        // Metals & Minerals
        ['iron', 'mysticalagriculture:iron_seeds', ['8x mysticalagriculture:iron_essence']],
        ['copper', 'mysticalagriculture:copper_seeds', ['8x mysticalagriculture:copper_essence']],
        ['redstone', 'mysticalagriculture:redstone_seeds', ['8x mysticalagriculture:redstone_essence']],
        ['glowstone', 'mysticalagriculture:glowstone_seeds', ['8x mysticalagriculture:glowstone_essence']],
        ['obsidian', 'mysticalagriculture:obsidian_seeds', ['8x mysticalagriculture:obsidian_essence']],
        ['rubber', 'mysticalagriculture:rubber_seeds', ['8x mysticalagriculture:rubber_essence']],
        ['sulfur', 'mysticalagriculture:sulfur_seeds', ['8x mysticalagriculture:sulfur_essence']],
        ['saltpeter', 'mysticalagriculture:saltpeter_seeds', ['8x mysticalagriculture:saltpeter_essence']],
        ['apatite', 'mysticalagriculture:apatite_seeds', ['8x mysticalagriculture:apatite_essence']],
        ['tin', 'mysticalagriculture:tin_seeds', ['8x mysticalagriculture:tin_essence']],
        ['zinc', 'mysticalagriculture:zinc_seeds', ['8x mysticalagriculture:zinc_essence']],
        ['fluix', 'mysticalagriculture:fluix_seeds', ['8x mysticalagriculture:fluix_essence']],
        ['nether', 'mysticalagriculture:nether_seeds', ['8x mysticalagriculture:nether_essence']],
        ['certus_quartz', 'mysticalagriculture:certus_quartz_seeds', ['8x mysticalagriculture:certus_quartz_essence']],
        ['end', 'mysticalagriculture:end_seeds', ['8x mysticalagriculture:end_essence']],

        // Mobs & Special
        ['experience', 'mysticalagriculture:experience_seeds', ['8x mysticalagriculture:experience_essence']],
        ['slime', 'mysticalagriculture:slime_seeds', ['8x mysticalagriculture:slime_essence']],
        ['zombie', 'mysticalagriculture:zombie_seeds', ['8x mysticalagriculture:zombie_essence']],
        ['skeleton', 'mysticalagriculture:skeleton_seeds', ['8x mysticalagriculture:skeleton_essence']],
        ['creeper', 'mysticalagriculture:creeper_seeds', ['8x mysticalagriculture:creeper_essence']],
        ['spider', 'mysticalagriculture:spider_seeds', ['8x mysticalagriculture:spider_essence']],
        ['blaze', 'mysticalagriculture:blaze_seeds', ['8x mysticalagriculture:blaze_essence']],
        ['ghast', 'mysticalagriculture:ghast_seeds', ['8x mysticalagriculture:ghast_essence']],
        ['enderman', 'mysticalagriculture:enderman_seeds', ['8x mysticalagriculture:enderman_essence']],
        ['wither_skeleton', 'mysticalagriculture:wither_skeleton_seeds', ['8x mysticalagriculture:wither_skeleton_essence']],
        
        // Precious Metals & Gems
        ['gold', 'mysticalagriculture:gold_seeds', ['8x mysticalagriculture:gold_essence']],
        ['lapis_lazuli', 'mysticalagriculture:lapis_lazuli_seeds', ['8x mysticalagriculture:lapis_lazuli_essence']],
        ['diamond', 'mysticalagriculture:diamond_seeds', ['8x mysticalagriculture:diamond_essence']],
        ['emerald', 'mysticalagriculture:emerald_seeds', ['8x mysticalagriculture:emerald_essence']],
        ['netherite', 'mysticalagriculture:netherite_seeds', ['8x mysticalagriculture:netherite_essence']],
        
        // Advanced Metals
        ['aluminum', 'mysticalagriculture:aluminum_seeds', ['8x mysticalagriculture:aluminum_essence']],
        ['silver', 'mysticalagriculture:silver_seeds', ['8x mysticalagriculture:silver_essence']],
        ['lead', 'mysticalagriculture:lead_seeds', ['8x mysticalagriculture:lead_essence']],
        ['graphite', 'mysticalagriculture:graphite_seeds', ['8x mysticalagriculture:graphite_essence']],
        ['nickel', 'mysticalagriculture:nickel_seeds', ['8x mysticalagriculture:nickel_essence']],
        ['tungsten', 'mysticalagriculture:tungsten_seeds', ['8x mysticalagriculture:tungsten_essence']],
        ['titanium', 'mysticalagriculture:titanium_seeds', ['8x mysticalagriculture:titanium_essence']],
        ['uranium', 'mysticalagriculture:uranium_seeds', ['8x mysticalagriculture:uranium_essence']],
        ['chrome', 'mysticalagriculture:chrome_seeds', ['8x mysticalagriculture:chrome_essence']],
        ['ruby', 'mysticalagriculture:ruby_seeds', ['8x mysticalagriculture:ruby_essence']],
        ['sapphire', 'mysticalagriculture:sapphire_seeds', ['8x mysticalagriculture:sapphire_essence']],
        ['platinum', 'mysticalagriculture:platinum_seeds', ['8x mysticalagriculture:platinum_essence']]

    ]

    for (const [id, ins, outs] of growMystical){
        grow(id, ins, outs)
    }

})