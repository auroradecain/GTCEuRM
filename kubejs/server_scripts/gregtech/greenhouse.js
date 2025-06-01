ServerEvents.recipes(event=>{

    event.shaped('gtceu:greenhouse', [
        "BFE",
        "ADA",
        "CAC"
    ],{
        A: "#gtceu:circuits/mv",
        B: "gtceu:mv_robot_arm",
        C: "gtceu:copper_double_cable",
        D: "gtceu:mv_machine_hull",
        E: "gtceu:mv_electric_pump",
        F: "gtceu:aluminium_drum"
    }).id('gtceu:shaped/greenhouse')


    // Boost function
    function boost(input, factor) {
        let boosted = [];
        input.forEach(element => {
            let item = Item.of(element);
            let curCount = item.getCount() * factor;
            let type = item.getId();
            while (curCount > item.maxStackSize) {
                boosted.push(Item.of(type, item.maxStackSize));
                curCount -= item.maxStackSize;
            }
            if (curCount > 0) boosted.push(Item.of(type, curCount));
        })
        return boosted;
    }

    /**
     * @param {string} mod Input item mod name
     * @param {string} input Input item identifier
     * @param {string[]} output Base recipe output
     * @param {string} fluidType 
     * @param {number} duration Recipe duration
     * @param {number} inputFeedbackAmount How many input items to add to output
     */
    function Greenhouse(mod, input, output, fluidType, duration, inputFeedbackAmount){

                // Create new boosted output item array
                let boostedOutputs = boost(output, 2)

                // Push sapling/seed inputs (unboosted) onto output arrays
                if (inputFeedbackAmount > 0) {
                    output.push(Item.of(`${mod}:${input}`, inputFeedbackAmount));
                    boostedOutputs.push(Item.of(`${mod}:${input}`, inputFeedbackAmount));
                }
        
                event.recipes.gtceu.greenhouse(`kubejs:${input}`)
                    .circuit(1)
                    .notConsumable(InputItem.of(Item.of(`${mod}:${input}`)))
                    .inputFluids(Fluid.of(fluidType, 12000))
                    .itemOutputs(output)
                    .duration(duration)
                    .EUt(54)
                event.recipes.gtceu.greenhouse(`kubejs:${input}_boosted`)
                    .circuit(2)
                    .notConsumable(InputItem.of(Item.of(`${mod}:${input}`)))
                    .itemInputs("1x gtceu:fertilizer")
                    .inputFluids(Fluid.of(fluidType, 8000))
                    .itemOutputs(boostedOutputs)
                    .duration(3*duration/4)
                    .EUt(54)
    }

    /**
     * @param {string} input Input item identifier
     * @param {string[]} output Base recipe output
     * @param {number} duration Recipe duration
     */
    function GrowMystical(input, output, duration){
        
        let specialOut = Item.of(Item.of(output[0]).getId(), 4)
        let fluidType =  'gtceu:mystical_hyperconcentrate'

        let boostedOutputs = boost(output, 3)

        Greenhouse('mysticalagriculture', input, output, 'minecraft:water', duration, 0)
        event.recipes.gtceu.greenhouse(`kubejs:${input}_special`)
            .circuit(3)
            .notConsumable(Item.of(`mysticalagriculture:${input}`))
            .inputFluids(Fluid.of(fluidType, 80))
            .itemOutputs(boostedOutputs)
            .chancedOutput(specialOut, 1500, 300)
            .chancedOutput(Item.of(`mysticalagriculture:${input}`), 1200, 250)
            .chancedOutput(Item.of('mysticalagriculture:fertilized_essence'), 750, 150)
            .duration(duration/2)
            .EUt(960)
        event.recipes.gtceu.seed_growth(`kubejs:${input}`)
            .circuit(1)
            .chancedInput(Item.of(`mysticalagriculture:${input}`), 8500, -500)
            .inputFluids(Fluid.of('minecraft:water', 6000))
            .itemOutputs(output)
            .duration(3*duration/2)
            .EUt(20)
    }
    
    /**
     * @param {string} modID Input item identifier
     * @param {string} inputBase Base recipe input
     * @param {string[]} outputBase Base recipe output
     */
    function GrowVanilla(modID, inputBase, outputBase){

        let mult = 4
        let tickAmount = 1000
        let water = 'minecraft:water'
        let curOutput = Item.of(outputBase[0])
        let curItem = `${modID}:${inputBase}`

        if(curItem == curOutput.getId()){
            mult = 0
        }
        
        Greenhouse(modID, inputBase, outputBase, water, tickAmount, mult)
        event.recipes.gtceu.seed_growth(`${modID}_${inputBase}`)
            .circuit(1)
            .itemInputs(`${modID}:${inputBase}`)
            .itemOutputs(outputBase)
            .inputFluids(Fluid.of(water, 6000))
            .duration(3*tickAmount/2)
            .EUt(20)

    }

    // Vanilla or vanilla-like flowers only
    /**
     * @param {string} modID Input item identifier
     * @param {string} inputBase Base recipe input
     * @param {string[]} outputBase Base recipe output
     */
    function GrowFlower(modID, inputBase, outputBase){

        Greenhouse(modID, inputBase, outputBase, 'minecraft:water', 640, 0)
        event.recipes.gtceu.seed_growth(`${modID}_${inputBase}`)
            .circuit(1)
            .itemInputs(`${modID}:${inputBase}`)
            .itemOutputs(outputBase)
            .inputFluids(Fluid.of('minecraft:water', 6000))
            .duration(3*640/2)
            .EUt(20)
    }

    function AtmoGrowth(input, output, tier){
        const tierList = {
            1: GTValues.VHA[GTValues.HV],
            2: GTValues.VHA[GTValues.EV],
            3: GTValues.VHA[GTValues.IV]
        }

        event.recipes.gtceu.greenhouse(`kubejs:atmoseed_growth_${input}`)
            .notConsumable([`kubejs:${input}_atmoseeds`])
            .inputFluids("minecraft:water 4000")
            .outputFluids(output)
            .duration(2240)
            .EUt(tierList[tier])
    }
    
    // Greenhouse common recipes
    const growNormal = [

        ['gtceu', 'rubber_sapling', ['32x gtceu:rubber_log', '3x gtceu:sticky_resin']],

        ['minecraft', 'oak_sapling', ['32x minecraft:oak_log', '8x regions_unexplored:oak_branch','minecraft:apple']],
        ['minecraft', 'birch_sapling', ['32x minecraft:birch_log', '8x regions_unexplored:birch_branch']],
        ['minecraft', 'spruce_sapling', ['32x minecraft:spruce_log', '8x regions_unexplored:spruce_branch']],
        ['minecraft', 'acacia_sapling', ['32x minecraft:acacia_log', '8x regions_unexplored:acacia_branch']],
        ['minecraft', 'jungle_sapling', ['32x minecraft:jungle_log', '8x regions_unexplored:jungle_branch']],
        ['minecraft', 'mangrove_propagule', ['32x minecraft:mangrove_log', '8x regions_unexplored:mangrove_branch']],
        ['minecraft', 'dark_oak_sapling', ['32x minecraft:dark_oak_log', '8x regions_unexplored:dark_oak_branch', 'minecraft:apple']],
        ['minecraft', 'cherry_sapling', ['32x minecraft:cherry_log', '8x regions_unexplored:cherry_branch']],
        
        ['minecraft', 'potato', ['32x minecraft:potato']],
        ['minecraft', 'carrot', ['32x minecraft:carrot']],
        ['minecraft', 'beetroot_seeds', ['32x minecraft:beetroot']],
        ['minecraft', 'sweet_berries', ['32x minecraft:sweet_berries']],
        ['minecraft', 'sugar_cane', ['32x minecraft:sugar_cane']],
        ['minecraft', 'cactus', ['32x minecraft:cactus']],
        ['minecraft', 'wheat_seeds', ['32x minecraft:wheat']],
        ['minecraft', 'pumpkin_seeds', ['24x minecraft:pumpkin']],
        ['minecraft', 'melon_seeds', ['24x minecraft:melon']],

        ['regions_unexplored', 'alpha_sapling', ['32x regions_unexplored:alpha_log', 'minecraft:apple']],
        ['regions_unexplored', 'apple_oak_sapling', ['32x minecraft:oak_log', '8x minecraft:apple']],
        ['regions_unexplored', 'ashen_sapling', ['32x regions_unexplored:ashen_log']],
        ['regions_unexplored', 'bamboo_sapling', ['32x regions_unexplored:bamboo_log']],
        ['regions_unexplored', 'baobab_sapling', ['32x regions_unexplored:baobab_log', , '8x regions_unexplored:baobab_branch']],
        ['regions_unexplored', 'blackwood_sapling', ['32x regions_unexplored:blackwood_log', '8x regions_unexplored:blackwood_branch']],
        ['regions_unexplored', 'brimwood_sapling', ['32x regions_unexplored:brimwood_log']],
        ['regions_unexplored', 'cobalt_sapling', ['32x regions_unexplored:cobalt_log']],
        ['regions_unexplored', 'cypress_sapling', ['64x regions_unexplored:cypress_log', '16x regions_unexplored:cypress_branch']],
        ['regions_unexplored', 'dead_pine_sapling', ['32x regions_unexplored:pine_log', '8x regions_unexplored:pine_branch']],
        ['regions_unexplored', 'dead_sapling', ['32x regions_unexplored:dead_log', '8x regions_unexplored:dead_branch']],
        ['regions_unexplored', 'eucalyptus_sapling', ['32x regions_unexplored:eucalyptus_log', '8x regions_unexplored:eucalyptus_branch']],
        ['regions_unexplored', 'joshua_sapling', ['32x regions_unexplored:joshua_log']],
        ['regions_unexplored', 'kapok_sapling', ['32x regions_unexplored:kapok_log', '8x regions_unexplored:kapok_branch']],
        ['regions_unexplored', 'larch_sapling', ['32x regions_unexplored:larch_log', '8x regions_unexplored:larch_branch']],
        ['regions_unexplored', 'golden_larch_sapling', ['32x regions_unexplored:larch_log']],
        ['regions_unexplored', 'magnolia_sapling', ['32x regions_unexplored:magnolia_log', '8x regions_unexplored:magnolia_branch']],
        ['regions_unexplored', 'blue_magnolia_sapling', ['32x regions_unexplored:magnolia_log', '8x regions_unexplored:magnolia_branch']],
        ['regions_unexplored', 'pink_magnolia_sapling', ['32x regions_unexplored:magnolia_log', '8x regions_unexplored:magnolia_branch']],
        ['regions_unexplored', 'white_magnolia_sapling', ['32x regions_unexplored:magnolia_log', '8x regions_unexplored:magnolia_branch']],
        ['regions_unexplored', 'maple_sapling', ['32x regions_unexplored:maple_log', '8x regions_unexplored:maple_branch']],
        ['regions_unexplored', 'orange_maple_sapling', ['32x regions_unexplored:maple_log', '8x regions_unexplored:maple_branch']],
        ['regions_unexplored', 'red_maple_sapling', ['32x regions_unexplored:maple_log', '8x regions_unexplored:maple_branch']],
        ['regions_unexplored', 'mauve_sapling', ['32x regions_unexplored:mauve_log', '8x regions_unexplored:mauve_branch']],
        ['regions_unexplored', 'palm_sapling', ['32x regions_unexplored:palm_log', '8x regions_unexplored:palm_beard']],
        ['regions_unexplored', 'pine_sapling', ['32x regions_unexplored:pine_log', '8x regions_unexplored:pine_branch']],
        ['regions_unexplored', 'redwood_sapling', ['64x regions_unexplored:redwood_log', '16x regions_unexplored:redwood_branch']],
        ['regions_unexplored', 'silver_birch_sapling', ['32x regions_unexplored:silver_birch_log', '8x regions_unexplored:silver_birch_branch']],
        ['regions_unexplored', 'enchanted_birch_sapling', ['32x regions_unexplored:silver_birch_log', '8x regions_unexplored:silver_birch_branch']],
        ['regions_unexplored', 'small_oak_sapling', ['32x regions_unexplored:small_oak_log']],
        ['regions_unexplored', 'socotra_sapling', ['32x regions_unexplored:socotra_log', '8x regions_unexplored:socotra_branch']],
        ['regions_unexplored', 'willow_sapling', ['32x regions_unexplored:willow_log', '8x regions_unexplored:willow_branch']]

    ]

    for (const [mod, ins, outs] of growNormal){
        GrowVanilla(mod, ins, outs)
    }

    // Mystical agriculture seed processing
    const growMystical = [

        // Inferium
        ['inferium_seeds', ['8x mysticalagriculture:inferium_essence']],

        // Elements
        ['air_seeds', ['8x mysticalagriculture:air_essence']],
        ['fire_seeds', ['8x mysticalagriculture:fire_essence']],
        ['earth_seeds', ['8x mysticalagriculture:earth_essence']],
        ['water_seeds', ['8x mysticalagriculture:water_essence']],

        // Blocks
        ['stone_seeds', ['8x mysticalagriculture:stone_essence']],
        ['dirt_seeds', ['8x mysticalagriculture:dirt_essence']],
        ['ice_seeds', ['8x mysticalagriculture:ice_essence']],
        ['deepslate_seeds', ['8x mysticalagriculture:deepslate_essence']],
        ['nature_seeds', ['8x mysticalagriculture:nature_essence']],
        ['sky_stone_seeds', ['8x mysticalagriculture:sky_stone_essence']],

        // Dyes & Ores
        ['dye_seeds', ['8x mysticalagriculture:dye_essence']],
        ['coal_seeds', ['8x mysticalagriculture:coal_essence']],
        ['amethyst_seeds', ['8x mysticalagriculture:amethyst_essence']],
        ['prismarine_seeds', ['8x mysticalagriculture:prismarine_essence']],

        // Animals
        ['pig_seeds', ['8x mysticalagriculture:pig_essence']],
        ['chicken_seeds', ['8x mysticalagriculture:chicken_essence']],
        ['cow_seeds', ['8x mysticalagriculture:cow_essence']],
        ['sheep_seeds', ['8x mysticalagriculture:sheep_essence']],
        ['squid_seeds', ['8x mysticalagriculture:squid_essence']],
        ['fish_seeds', ['8x mysticalagriculture:fish_essence']],

        // Metals & Minerals
        ['iron_seeds', ['8x mysticalagriculture:iron_essence']],
        ['copper_seeds', ['8x mysticalagriculture:copper_essence']],
        ['redstone_seeds', ['8x mysticalagriculture:redstone_essence']],
        ['glowstone_seeds', ['8x mysticalagriculture:glowstone_essence']],
        ['obsidian_seeds', ['8x mysticalagriculture:obsidian_essence']],
        ['rubber_seeds', ['8x mysticalagriculture:rubber_essence']],
        ['sulfur_seeds', ['8x mysticalagriculture:sulfur_essence']],
        ['saltpeter_seeds', ['8x mysticalagriculture:saltpeter_essence']],
        ['apatite_seeds', ['8x mysticalagriculture:apatite_essence']],
        ['tin_seeds', ['8x mysticalagriculture:tin_essence']],
        ['zinc_seeds', ['8x mysticalagriculture:zinc_essence']],
        ['fluix_seeds', ['8x mysticalagriculture:fluix_essence']],
        ['nether_seeds', ['8x mysticalagriculture:nether_essence']],
        ['nether_quartz_seeds', ['8x mysticalagriculture:nether_quartz_essence']],
        ['certus_quartz_seeds', ['8x mysticalagriculture:certus_quartz_essence']],
        ['end_seeds', ['8x mysticalagriculture:end_essence']],
        ['oilsands_seeds', ['8x mysticalagriculture:oilsands_essence']],

        // Mobs & Special
        ['experience_seeds', ['8x mysticalagriculture:experience_essence']],
        ['slime_seeds', ['8x mysticalagriculture:slime_essence']],
        ['zombie_seeds', ['8x mysticalagriculture:zombie_essence']],
        ['skeleton_seeds', ['8x mysticalagriculture:skeleton_essence']],
        ['creeper_seeds', ['8x mysticalagriculture:creeper_essence']],
        ['spider_seeds', ['8x mysticalagriculture:spider_essence']],
        ['blaze_seeds', ['8x mysticalagriculture:blaze_essence']],
        ['ghast_seeds', ['8x mysticalagriculture:ghast_essence']],
        ['enderman_seeds', ['8x mysticalagriculture:enderman_essence']],
        ['wither_skeleton_seeds', ['8x mysticalagriculture:wither_skeleton_essence']],
        
        // Precious Metals & Gems
        ['gold_seeds', ['8x mysticalagriculture:gold_essence']],
        ['lapis_lazuli_seeds', ['8x mysticalagriculture:lapis_lazuli_essence']],
        ['diamond_seeds', ['8x mysticalagriculture:diamond_essence']],
        ['emerald_seeds', ['8x mysticalagriculture:emerald_essence']],
        ['netherite_seeds', ['8x mysticalagriculture:netherite_essence']],
        
        // Advanced Metals
        ['aluminum_seeds', ['8x mysticalagriculture:aluminum_essence']],
        ['silver_seeds', ['8x mysticalagriculture:silver_essence']],
        ['lead_seeds', ['8x mysticalagriculture:lead_essence']],
        ['graphite_seeds', ['8x mysticalagriculture:graphite_essence']],
        ['nickel_seeds', ['8x mysticalagriculture:nickel_essence']],
        ['tungsten_seeds', ['8x mysticalagriculture:tungsten_essence']],
        ['titanium_seeds', ['8x mysticalagriculture:titanium_essence']],
        ['uranium_seeds', ['8x mysticalagriculture:uranium_essence']],
        ['chrome_seeds', ['8x mysticalagriculture:chrome_essence']],
        ['ruby_seeds', ['8x mysticalagriculture:ruby_essence']],
        ['sapphire_seeds', ['8x mysticalagriculture:sapphire_essence']],
        ['platinum_seeds', ['8x mysticalagriculture:platinum_essence']],
        ['barium_seeds', ['8x mysticalagriculture:barium_essence']],
        ['topaz_seeds', ['8x mysticalagriculture:topaz_essence']],
        ['naquadah_seeds', ['8x mysticalagriculture:naquadah_essence']],
        ['tantalum_seeds', ['8x mysticalagriculture:tantalum_essence']],
        ['garnet_seeds', ['8x mysticalagriculture:garnet_essence']],
        ['molybdenum_seeds', ['8x mysticalagriculture:molybdenum_essence']],
        ['manganese_seeds', ['8x mysticalagriculture:manganese_essence']],
        ['salts_seeds', ['8x mysticalagriculture:salts_essence']],
        ['life_seeds', ['8x mysticalagriculture:life_essence']],
        ['niobium_seeds', ['8x mysticalagriculture:niobium_essence']],
        ['antimony_seeds', ['8x mysticalagriculture:antimony_essence']],
        ['avisium_seeds', ['8x mysticalagriculture:avisium_essence']],
        ['vidium_seeds', ['8x mysticalagriculture:vidium_essence']]

    ]

    for(const [input, output] of growMystical){
        GrowMystical(input, output, 1640)
    }

    GrowFlower('minecraft', 'sunflower', ['32x minecraft:sunflower'])

    AtmoGrowth("hydrogen", "gtceu:hydrogen 24000", 1)
    AtmoGrowth("nitrogen", "gtceu:nitrogen 16000", 1)
    AtmoGrowth("argon", "gtceu:argon 8000", 2)

    AtmoGrowth("sulfur", "gtceu:hydrogen_sulfide 10000", 1)
    AtmoGrowth("helium", "gtceu:helium 8000", 1)
    AtmoGrowth("neon", "gtceu:neon 6000", 2)

    AtmoGrowth("deuterium", "gtceu:deuterium 10000", 2)
    AtmoGrowth("tritium", "gtceu:tritium 8000", 2)
    AtmoGrowth("krypton", "gtceu:krypton 4000", 3)
    AtmoGrowth("xeon", "gtceu:xeon 4000", 3)
    AtmoGrowth("radon", "gtceu:radon 4000", 3)


})