 /**
  * Block Registry - defines ID, name,
  * block properties, and block tags of custom blocks.
*/  
StartupEvents.registry("block", event =>{

    event.create("dust", "falling")
      .soundType("sand")
      .resistance(0.4).hardness(0.4)
      .tag("mineable/shovel").displayName("Dust Block")
      .property(BlockProperties.FALLING);

    const casings = [
      "supremium",
      "draconitium",
      "draconitium_fusion",
      "astronomical",
      "aluminium_antenna"
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


