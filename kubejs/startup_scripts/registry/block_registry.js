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
      .tagBlock("forge:stone/gabro")
      .tagBlock("minecraft:stone_ore_replaceables")
      .tagBlock("gtceu:gabro_stone")

    event.create("dust", "falling")
      .soundType("sand")
      .resistance(0.4).hardness(0.4)
      .tag("mineable/shovel").displayName("Dust Block")
      .property(BlockProperties.FALLING);

    const casings = [
      "supremium",
      "draconitium",
      "draconitium_fusion",
      "astronomical"
    ]

    casings.forEach(casing =>{
      event.create(`${casing}_casing`)
          .displayName(`${casing} Casing`)
          .soundType("metal")
          .resistance(6).hardness(5)
          .tagBlock("mineable/pickaxe")
          .tagBlock("forge:mineable/wrench")
          .requiresTool(true);
    })
})


