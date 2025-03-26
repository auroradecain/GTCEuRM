 /**
  * Block Registry - defines ID, name,
  * block properties, and block tags of custom blocks.
*/  
StartupEvents.registry("block", event =>{
    event.create('gabro')
        .displayName("Gabro")
        .soundType('stone')
        .resistance(2).hardness(2)
        .tagBlock("mineable/pickaxe").requiresTool(true)
        .tagBlock("forge:stone")
        .tagBlock("minecraft:stone_ore_replaceables")
})


