ServerEvents.recipes(event=>{

    function grow(id, ins, outs, boost){
        if(boost == true){
            event.recipes.gtceu.greenhouse(`grow/boosted/${id}`)
                .chancedInput(InputItem.of(ins), 8000, 0)
                .inputFluids('minecraft:water 200')
                .itemOutputs(outs)
                .duration(760)
                .EUt(96)
            event.recipes.gtceu.seed_growth(`grow/boosted/${id}`)
                .itemInputs(InputItem.of(ins))
                .inputFluids('minecraft:water 200')
                .itemOutputs(outs)
                .duration(760)
                .EUt(96)
        }else{
            event.recipes.gtceu.greenhouse(`grow/${id}`)
                .itemInputs(InputItem.of(ins))
                .itemOutputs(outs)
                .duration(310)
                .EUt(7)
                .circuit(1)
            event.recipes.gtceu.seed_growth(`grow/${id}`)
                .itemInputs(InputItem.of(ins))
                .itemOutputs(outs)
                .duration(310)
                .EUt(7)
                .circuit(1)
        }
        
    }

    // Oak
    grow('oak', "minecraft:oak_sapling", ['8x minecraft:oak_log', 'minecraft:oak_sapling'])
    // Birch
    grow('birch', 'minecraft:birch_sapling', ['8x minecraft:birch_log', 'minecraft:birch_sapling'])
    // Spruce
    grow('spruce', 'minecraft:spruce_sapling', ['8x minecraft:spruce_log', 'minecraft:spruce_sapling'])
    // Acacia
    grow('acacia', 'minecraft:acacia_sapling', ['8x minecraft:acacia_log', 'minecraft:acacia_sapling'])
    // Jungle
    grow('jungle', 'minecraft:jungle_sapling', ['8x minecraft:jungle_log', 'minecraft:jungle_sapling'])
    // Mangrove
    grow('mangrove', 'minecraft:mangrove_propagule', ['8x minecraft:mangrove_log', 'minecraft:mangrove_propagule'])
    // Dark Oak
    grow('dark_oak', 'minecraft:dark_oak_sapling', ['8x minecraft:dark_oak_log', 'minecraft:dark_oak_sapling'])
    // Cherry
    grow('cherry', 'minecraft:cherry_sapling', ['8x minecraft:cherry_log', 'minecraft:cherry_sapling'])
    // Rubber logs + Sticky Resin
    grow('resin', 'gtceu:rubber_sapling', ['8x gtceu:rubber_log', 'gtceu:rubber_sapling', '3x gtceu:sticky_resin'])


    // Basic Mystical Agriculture

    // Inferium
    grow('inferium', 'mysticalagriculture:inferium_seeds', ['8x gtceu:inferium_dust'],true)
    // Air
    grow('air', 'mysticalagriculture:air_seeds', ['8x mysticalagriculture:air_essence'],true)
    // Fire
    grow('fire', 'mysticalagriculture:fire_seeds', ['8x mysticalagriculture:fire_essence'],true)
    // Earth
    grow('earth', 'mysticalagriculture:earth_seeds', ['8x mysticalagriculture:earth_essence'],true)
    // Water
    grow('water', 'mysticalagriculture:water_seeds', ['8x mysticalagriculture:water_essence'],true)
    // Stone
    grow('stone', 'mysticalagriculture:stone_seeds', ['8x mysticalagriculture:stone_essence'],true)
    // Dirt
    grow('dirt', 'mysticalagriculture:dirt_seeds', ['8x mysticalagriculture:dirt_essence'],true)
    // Ice
    grow('ice', 'mysticalagriculture:ice_seeds', ['8x mysticalagriculture:ice_essence'],true)
    // Deepslate
    grow('deepslate', 'mysticalagriculture:deepslate_seeds', ['8x mysticalagriculture:deepslate_essence'],true)
    // Nature
    grow('nature', 'mysticalagriculture:nature_seeds', ['8x mysticalagriculture:nature_essence'],true)
    // Dye
    grow('dye', 'mysticalagriculture:dye_seeds', ['8x mysticalagriculture:dye_essence'],true)
    // Coal
    grow('coal', 'mysticalagriculture:coal_seeds', ['8x mysticalagriculture:coal_essence'],true)
    // Amethyst
    grow('amethyst', 'mysticalagriculture:amethyst_seeds', ['8x mysticalagriculture:amethyst_essence'],true)
    // Prismarine
    grow('prismarine', 'mysticalagriculture:prismarine_seeds', ['8x mysticalagriculture:prismarine_essence'],true)
    // Pig
    grow('pig', 'mysticalagriculture:pig_seeds', ['8x mysticalagriculture:pig_essence'],true)
    // Chicken
    grow('chicken', 'mysticalagriculture:chicken_seeds', ['8x mysticalagriculture:chicken_essence'],true)
    // Cow
    grow('cow', 'mysticalagriculture:cow_seeds', ['8x mysticalagriculture:cow_essence'],true)
    // Sheep
    grow('sheep', 'mysticalagriculture:sheep_seeds', ['8x mysticalagriculture:sheep_essence'],true)
    // Squid
    grow('squid', 'mysticalagriculture:squid_seeds', ['8x mysticalagriculture:squid_essence'],true)
    // Fish
    grow('fish', 'mysticalagriculture:fish_seeds', ['8x mysticalagriculture:fish_essence'],true)
    // Iron
    grow('iron', 'mysticalagriculture:iron_seeds', ['8x mysticalagriculture:iron_essence'],true)
    // Copper
    grow('copper', 'mysticalagriculture:copper_seeds', ['8x mysticalagriculture:copper_essence'],true)
    // Redstone
    grow('redstone', 'mysticalagriculture:redstone_seeds', ['8x mysticalagriculture:redstone_essence'],true)
    // Glowstone
    grow('glowstone', 'mysticalagriculture:glowstone_seeds', ['8x mysticalagriculture:glowstone_essence'],true)
    // Obsidian
    grow('obsidian', 'mysticalagriculture:obsidian_seeds', ['8x mysticalagriculture:obsidian_essence'],true)
    // Rubber
    grow('rubber', 'mysticalagriculture:rubber_seeds', ['8x mysticalagriculture:rubber_essence'],true)
    // Sulfur
    grow('sulfur', 'mysticalagriculture:sulfur_seeds', ['8x mysticalagriculture:sulfur_essence'],true)
    // Saltpeter
    grow('saltpeter', 'mysticalagriculture:saltpeter_seeds', ['8x mysticalagriculture:saltpeter_essence'],true)
    // Apatite
    grow('apatite', 'mysticalagriculture:apatite_seeds', ['8x mysticalagriculture:apatite_essence'],true)
    // Tin
    grow('tin', 'mysticalagriculture:tin_seeds', ['8x mysticalagriculture:tin_essence'],true)
    // Zinc
    grow('zinc', 'mysticalagriculture:zinc_seeds', ['8x mysticalagriculture:zinc_essence'],true)
    // Fluix
    grow('fluix', 'mysticalagriculture:fluix_seeds', ['8x mysticalagriculture:fluix_essence'],true)
    // Nether
    grow('nether', 'mysticalagriculture:nether_seeds', ['8x mysticalagriculture:nether_essence'],true)
    // Certus Quartz
    grow('certus_quartz', 'mysticalagriculture:certus_quartz_seeds', ['8x mysticalagriculture:certus_quartz_essence'],true)
    // End
    grow('end', 'mysticalagriculture:end_seeds', ['8x mysticalagriculture:end_essence'],true)
    // Experience
    grow('experience', 'mysticalagriculture:experience_seeds', ['8x mysticalagriculture:experience_essence'],true)
    // Slime
    grow('slime', 'mysticalagriculture:slime_seeds', ['8x mysticalagriculture:slime_essence'],true)
    // Zombie
    grow('zombie', 'mysticalagriculture:zombie_seeds', ['8x mysticalagriculture:zombie_essence'],true)
    // Skeleton
    grow('skeleton', 'mysticalagriculture:skeleton_seeds', ['8x mysticalagriculture:skeleton_essence'],true)
    // Creeper
    grow('creeper', 'mysticalagriculture:creeper_seeds', ['8x mysticalagriculture:creeper_essence'],true)
    // Spider
    grow('spider', 'mysticalagriculture:spider_seeds', ['8x mysticalagriculture:spider_essence'],true)
    // Blaze
    grow('blaze', 'mysticalagriculture:blaze_seeds', ['8x mysticalagriculture:blaze_essence'],true)
    // Ghast
    grow('ghast', 'mysticalagriculture:ghast_seeds', ['8x mysticalagriculture:ghast_essence'],true)
    // Enderman
    grow('enderman', 'mysticalagriculture:enderman_seeds', ['8x mysticalagriculture:enderman_essence'],true)
    // Wither Skeleton
    grow('wither_skeleton', 'mysticalagriculture:wither_skeleton_seeds', ['8x mysticalagriculture:wither_skeleton_essence'],true)
    // Gold
    grow('gold', 'mysticalagriculture:gold_seeds', ['8x mysticalagriculture:gold_essence'],true)
    // Lapis
    grow('lapis_lazuli', 'mysticalagriculture:lapis_lazuli_seeds', ['8x mysticalagriculture:lapis_lazuli_essence'],true)
    // Diamond
    grow('diamond', 'mysticalagriculture:diamond_seeds', ['8x mysticalagriculture:diamond_essence'],true)
    // Emerald
    grow('emerald', 'mysticalagriculture:emerald_seeds', ['8x mysticalagriculture:emerald_essence'],true)
    // Netherite
    grow('netherite', 'mysticalagriculture:netherite_seeds', ['8x mysticalagriculture:netherite_essence'],true)
    // Aluminum
    grow('aluminum', 'mysticalagriculture:aluminum_seeds', ['8x mysticalagriculture:aluminum_essence'],true)
    // Silver
    grow('silver', 'mysticalagriculture:silver_seeds', ['8x mysticalagriculture:silver_essence'],true)
    // Lead
    grow('lead', 'mysticalagriculture:lead_seeds', ['8x mysticalagriculture:lead_essence'],true)
    // Graphite
    grow('graphite', 'mysticalagriculture:graphite_seeds', ['8x mysticalagriculture:graphite_essence'],true)
    // Nickel
    grow('nickel', 'mysticalagriculture:nickel_seeds', ['8x mysticalagriculture:nickel_essence'],true)
    // Tungsten
    grow('tungsten', 'mysticalagriculture:tungsten_seeds', ['8x mysticalagriculture:tungsten_essence'],true)
    // Titanium
    grow('titanium', 'mysticalagriculture:titanium_seeds', ['8x mysticalagriculture:titanium_essence'],true)
    // Uranium
    grow('uranium', 'mysticalagriculture:uranium_seeds', ['8x mysticalagriculture:uranium_essence'],true)
    // Chrome
    grow('chrome', 'mysticalagriculture:chrome_seeds', ['8x mysticalagriculture:chrome_essence'],true)
    // Ruby
    grow('ruby', 'mysticalagriculture:ruby_seeds', ['8x mysticalagriculture:ruby_essence'],true)
    // Sapphire
    grow('sapphire', 'mysticalagriculture:sapphire_seeds', ['8x mysticalagriculture:sapphire_essence'],true)
    // Platinum
    grow('platinum', 'mysticalagriculture:platinum_seeds', ['8x mysticalagriculture:platinum_essence'],true)

})